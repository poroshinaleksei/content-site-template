import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { getPageConfig } from "@/config/pages";
import type { Locale } from "@/config/types";
import { getAllArticles } from "@/lib/content/articles";
import { localizedPath } from "@/lib/i18n";

type ArticlesRouteProps = {
  locale: Locale;
};

export async function ArticlesRoute({ locale }: ArticlesRouteProps) {
  const page = getPageConfig("articles", locale);
  const articles = await getAllArticles();

  return (
    <SiteShell locale={locale} path={page.slug}>
      <main>
        <section className="py-[var(--section-spacing-y)]">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {page.sections[0]?.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-foreground md:text-6xl">
              {page.sections[0]?.title ?? page.title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-muted-foreground">
              {page.sections[0]?.body ?? page.description}
            </p>

            <div className="mt-12 grid gap-4">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="grid gap-4 border-t border-border py-7 md:grid-cols-[0.3fr_1fr]"
                >
                  <p className="text-sm text-muted-foreground">
                    {new Intl.DateTimeFormat(locale, {
                      dateStyle: "medium",
                    }).format(new Date(article.publishedAt))}
                  </p>
                  <div>
                    <h2 className="font-serif text-3xl leading-tight text-foreground">
                      <Link href={localizedPath(`/articles/${article.slug}`, locale)}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-3 max-w-2xl text-lg leading-8 text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </SiteShell>
  );
}
