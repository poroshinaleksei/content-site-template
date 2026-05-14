import type { Article } from "./schemas";

export type ContentSource = {
  getArticles: (options?: { includeDrafts?: boolean }) => Promise<Article[]>;
  getArticleBySlug: (
    slug: string,
    options?: { includeDrafts?: boolean },
  ) => Promise<Article | null>;
};
