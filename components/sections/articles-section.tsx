import Link from "next/link";

import type { ArticlesSection as ArticlesSectionConfig } from "@/config/types";
import { getAllArticles } from "@/lib/content/articles";

import { SectionShell } from "./section-shell";

type ArticlesSectionProps = {
  section: ArticlesSectionConfig;
};

export async function ArticlesSection({ section }: ArticlesSectionProps) {
  const articles = (await getAllArticles()).slice(0, section.limit ?? 3);

  return (
    <SectionShell className="border-y border-border bg-foreground text-background">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-background/55">
              {section.eyebrow}
            </p>
          ) : null}
          {section.title ? (
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {section.title}
            </h2>
          ) : null}
          {section.body ? (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-background/70">
              {section.body}
            </p>
          ) : null}
        </div>
        <Link
          href="/articles"
          className="text-sm font-semibold text-background underline decoration-background/30"
        >
          View all articles
        </Link>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="rounded-md border border-background/15 p-5 transition-colors hover:bg-background/10"
          >
            <p className="text-sm text-background/55">
              {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
                new Date(article.publishedAt),
              )}
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-tight">{article.title}</h3>
            <p className="mt-4 text-base leading-7 text-background/70">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
