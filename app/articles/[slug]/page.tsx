import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MdxContent } from "@/components/mdx/mdx-content";
import { siteConfig } from "@/config/site";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const title = article.seo?.title ?? article.title;
  const description = article.seo?.description ?? article.description;
  const image = article.seo?.image ?? article.coverImage ?? siteConfig.defaultSeo.image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "article",
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <article>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Article
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-foreground">
          {article.title}
        </h1>
        <p className="mt-5 text-xl leading-8 text-muted-foreground">
          {article.description}
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          {new Intl.DateTimeFormat("en", {
            dateStyle: "long",
          }).format(new Date(article.publishedAt))}
        </p>
        <div className="mt-12">
          <MdxContent source={article.body} />
        </div>
      </article>
    </main>
  );
}
