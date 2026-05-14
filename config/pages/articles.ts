import type { Localized, PageConfig } from "../types";

export const articlesPageConfig = {
  nb: {
    title: "Artikler",
    slug: "/articles",
    description: "En oversiktsside for lokale MDX artikler.",
    sections: [
      {
        id: "articles-hero",
        type: "hero",
        eyebrow: "Artikler",
        title: "Tekster, oppdateringer og gjenbrukbart innhold.",
        body: "Artikler skrives i MDX og valideres gjennom den delte innholdslasteren.",
      },
    ],
  },
  en: {
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
  },
} satisfies Localized<PageConfig>;
