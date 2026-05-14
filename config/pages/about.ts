import type { Localized, PageConfig } from "../types";

export const aboutPageConfig = {
  nb: {
    title: "Om",
    slug: "/about",
    description: "En gjenbrukbar om side for små innholdsbaserte nettsider.",
    sections: [
      {
        id: "about-hero",
        type: "hero",
        eyebrow: "Om",
        title: "En generisk om side som er klar for kundespesifikt innhold.",
        body: "Bytt ut denne teksten gjennom sideconfig eller MDX når malen tilpasses en reell nettside.",
      },
      {
        id: "about-main",
        type: "about",
        title: "Hold historien lett å redigere.",
        body: "Om siden unngår nisjeantakelser. Den gir prosjekter et rent sted for posisjonering, erfaring, bakgrunn eller biografi.",
        items: ["Domenenøytral", "Strukturert", "Enkel å skrive om fra brief"],
      },
    ],
  },
  en: {
    title: "About",
    slug: "/about",
    description: "A reusable about page for small informational websites.",
    sections: [
      {
        id: "about-hero",
        type: "hero",
        eyebrow: "About",
        title: "A generic about page that is ready for client specific content.",
        body: "Replace this copy through page config or MDX content when adapting the template for a real site.",
      },
      {
        id: "about-main",
        type: "about",
        title: "Keep the story editable.",
        body: "The about page avoids niche assumptions. It gives downstream projects a clean place for positioning, credentials, background, or an editorial biography.",
        items: ["Domain neutral", "Structured", "Easy to rewrite from a brief"],
      },
    ],
  },
} satisfies Localized<PageConfig>;
