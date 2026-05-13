import Link from "next/link";

import { articlesPageConfig } from "@/config/pages";
import { getAllArticles } from "@/lib/content/articles";

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
        {articlesPageConfig.sections[0]?.eyebrow}
      </p>
      <h1 className="mt-4 font-serif text-5xl leading-tight text-foreground">
        {articlesPageConfig.title}
      </h1>
      <p className="mt-5 max-w-2xl text-xl leading-8 text-muted-foreground">
        {articlesPageConfig.description}
      </p>

      <div className="mt-12 grid gap-5">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="border-t border-border py-6 first:border-t-0"
          >
            <p className="text-sm text-muted-foreground">
              {new Intl.DateTimeFormat("en", {
                dateStyle: "medium",
              }).format(new Date(article.publishedAt))}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-muted-foreground">
              {article.excerpt}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
