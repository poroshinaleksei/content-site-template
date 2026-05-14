import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { MdxContent } from "@/components/mdx/mdx-content";
import { JsonLd } from "@/components/seo/json-ld";
import { getMessages } from "@/config/messages";
import type { Locale } from "@/config/types";
import { getArticleBySlug } from "@/lib/content/articles";
import { localizedPath } from "@/lib/i18n";
import { articleJsonLd } from "@/lib/seo/json-ld";

type ArticleRouteProps = {
  locale: Locale;
  slug: string;
};

export async function ArticleRoute({ locale, slug }: ArticleRouteProps) {
  const article = await getArticleBySlug(slug, { locale });
  const messages = getMessages(locale);
  const path = `/articles/${slug}`;

  if (!article) {
    notFound();
  }

  return (
    <SiteShell locale={locale} path={path}>
      <main>
        <Container size="narrow" className="py-[var(--section-spacing-y)]">
          <article>
            <JsonLd data={articleJsonLd(article, locale)} />
            <Link
              href={localizedPath("/articles", locale)}
              className="text-sm font-semibold text-primary underline decoration-primary/30"
            >
              {messages.backToArticles}
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {messages.article}
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-foreground md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 text-xl leading-8 text-muted-foreground">
              {article.description}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              {new Intl.DateTimeFormat(locale, {
                dateStyle: "long",
              }).format(new Date(article.publishedAt))}
            </p>
            <div className="mt-12 border-t border-border pt-10">
              <MdxContent source={article.body} />
            </div>
          </article>
        </Container>
      </main>
    </SiteShell>
  );
}
