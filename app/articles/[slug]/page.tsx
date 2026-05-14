import type { Metadata } from "next";

import { ArticleRoute } from "@/components/routes/article-route";
import { siteConfig } from "@/config/site";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content/articles";
import { localizedPath } from "@/lib/i18n";
import { absoluteUrl, createMetadata } from "@/lib/seo/metadata";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const locale = siteConfig.defaultLocale;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs(locale);

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug, { locale });

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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  return <ArticleRoute locale={locale} slug={slug} />;
}
