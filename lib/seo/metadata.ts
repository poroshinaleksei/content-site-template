import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { Locale, PageConfig, SeoConfig } from "@/config/types";
import { getLanguageAlternates, localizedPath } from "@/lib/i18n";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  seo?: SeoConfig;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description,
  path,
  locale,
  seo,
}: MetadataInput): Metadata {
  const metadataTitle = seo?.title ?? title;
  const metadataDescription = seo?.description ?? description;
  const image = seo?.image ?? siteConfig.defaultSeo[locale].image;
  const localizedCanonicalPath = localizedPath(path, locale);
  const languageAlternates = getLanguageAlternates(path);

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: absoluteUrl(localizedCanonicalPath),
      languages: Object.fromEntries(
        Object.entries(languageAlternates).map(([key, value]) => [
          key,
          absoluteUrl(value),
        ]),
      ),
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: absoluteUrl(localizedCanonicalPath),
      siteName: siteConfig.name,
      images: [image],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: [image],
    },
    robots: seo?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export function createPageMetadata(page: PageConfig, locale: Locale) {
  return createMetadata({
    title: page.seo?.title ?? page.title,
    description: page.seo?.description ?? page.description,
    path: page.slug,
    locale,
    seo: page.seo,
  });
}
