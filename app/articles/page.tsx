import Link from "next/link";

import { Container } from "@/components/layout/container";
import { articlesPageConfig } from "@/config/pages";
import { getAllArticles } from "@/lib/content/articles";

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <main>
      <section className="py-16 sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {articlesPageConfig.sections[0]?.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-foreground md:text-6xl">
            {articlesPageConfig.sections[0]?.title ?? articlesPageConfig.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-muted-foreground">
            {articlesPageConfig.sections[0]?.body ?? articlesPageConfig.description}
          </p>

          <div className="mt-12 grid gap-4">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="grid gap-4 border-t border-border py-7 md:grid-cols-[0.3fr_1fr]"
              >
                <p className="text-sm text-muted-foreground">
                  {new Intl.DateTimeFormat("en", {
                    dateStyle: "medium",
                  }).format(new Date(article.publishedAt))}
                </p>
                <div>
                  <h2 className="font-serif text-3xl leading-tight text-foreground">
                    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
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
  );
}
