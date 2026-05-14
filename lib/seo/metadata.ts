import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { PageConfig, SeoConfig } from "@/config/types";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  seo?: SeoConfig;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description,
  path,
  seo,
}: MetadataInput): Metadata {
  const metadataTitle = seo?.title ?? title;
  const metadataDescription = seo?.description ?? description;
  const image = seo?.image ?? siteConfig.defaultSeo.image;

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      images: [image],
      locale: siteConfig.locale,
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

export function createPageMetadata(page: PageConfig) {
  return createMetadata({
    title: page.seo?.title ?? page.title,
    description: page.seo?.description ?? page.description,
    path: page.slug,
    seo: page.seo,
  });
}
