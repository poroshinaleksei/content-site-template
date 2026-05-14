import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleRoute } from "@/components/routes/article-route";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/types";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content/articles";
import { isNonDefaultLocale, localizedPath, nonDefaultLocales } from "@/lib/i18n";
import { absoluteUrl, createMetadata } from "@/lib/seo/metadata";

type LocalizedArticlePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();

  return nonDefaultLocales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: LocalizedArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isNonDefaultLocale(locale)) {
    return {};
  }

  const article = await getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const title = article.seo?.title ?? article.title;
  const description = article.seo?.description ?? article.description;
  const image =
    article.seo?.image ?? article.coverImage ?? siteConfig.defaultSeo[locale].image;

  return {
    ...createMetadata({
      title,
      description,
      path: `/articles/${article.slug}`,
      locale,
      seo: {
        image,
      },
    }),
    openGraph: {
      title,
      description,
      url: absoluteUrl(localizedPath(`/articles/${article.slug}`, locale)),
      siteName: siteConfig.name,
      images: [image],
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function LocalizedArticlePage({
  params,
}: LocalizedArticlePageProps) {
  const { locale, slug } = await params;

  if (!isNonDefaultLocale(locale)) {
    notFound();
  }

  return <ArticleRoute locale={locale as Locale} slug={slug} />;
}
