import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MdxContent } from "@/components/mdx/mdx-content";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content/articles";
import { articleJsonLd } from "@/lib/seo/json-ld";
import { absoluteUrl } from "@/lib/seo/metadata";

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
    alternates: {
      canonical: absoluteUrl(`/articles/${article.slug}`),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/articles/${article.slug}`),
      siteName: siteConfig.name,
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
    <main>
      <Container size="narrow" className="py-16 sm:py-20">
        <article>
          <JsonLd data={articleJsonLd(article)} />
          <Link
            href="/articles"
            className="text-sm font-semibold text-primary underline decoration-primary/30"
          >
            Back to articles
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Article
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-foreground md:text-6xl">
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
          <div className="mt-12 border-t border-border pt-10">
            <MdxContent source={article.body} />
          </div>
        </article>
      </Container>
    </main>
  );
}
