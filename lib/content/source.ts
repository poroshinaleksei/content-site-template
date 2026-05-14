import type { Article } from "./schemas";
import type { Locale } from "@/config/types";

export type ContentSource = {
  getArticles: (options: {
    locale: Locale;
    includeDrafts?: boolean;
  }) => Promise<Article[]>;
  getArticleBySlug: (
    slug: string,
    options: { locale: Locale; includeDrafts?: boolean },
  ) => Promise<Article | null>;
};
