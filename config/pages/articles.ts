import type { PageConfig } from "../types";

export const articlesPageConfig = {
  title: "Articles",
  slug: "/articles",
  description: "A listing page for local MDX articles.",
  sections: [
    {
      id: "articles-hero",
      type: "hero",
      eyebrow: "Articles",
      title: "Writing, updates, and reusable content.",
      body: "Articles are authored in MDX and validated through the shared content loader.",
    },
  ],
} satisfies PageConfig;
