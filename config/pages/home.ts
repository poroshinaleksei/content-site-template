import type { Localized, PageConfig } from "../types";

export const homePageConfig = {
  nb: {
    title: "Hjem",
    slug: "/",
    description: "En fleksibel startmal for små innholdsbaserte nettsider.",
    sections: [
      {
        id: "home-hero",
        type: "hero",
        eyebrow: "AI first nettsidemal",
        title: "Et rolig og redigerbart utgangspunkt for kundesider.",
        body: "Bruk strukturert config, lokalt innhold og gjenbrukbare seksjoner for å gå fra brief til nettside uten å skrive om hele malen.",
        primaryAction: { label: "Se artikler", href: "/articles" },
        secondaryAction: { label: "Kontakt", href: "/contact" },
        highlights: ["Config styrt", "Typet innhold", "Hosting nøytral"],
      },
      {
        id: "home-about",
        type: "about",
        eyebrow: "Hvorfor den finnes",
        title: "Laget for rask tilpasning uten spredte kundedata.",
        body: "De fleste kundeendringer hører hjemme i config og innholdsfiler. Komponentene forblir generiske, seksjonene kan gjenbrukes og rutene er forutsigbare.",
        items: ["Tydelige flater", "Enkle seksjonskontrakter", "Tilgjengelige defaults"],
      },
      {
        id: "home-services",
        type: "services",
        eyebrow: "Startblokker",
        title: "Gjenbrukbare seksjoner dekker en vanlig innholdsside.",
        services: [
          {
            title: "Sider",
            description: "Hjem, om, artikler, artikkeldetalj og kontakt.",
          },
          {
            title: "Innhold",
            description: "Typet lokal MDX med fremtidig CMS-støtte i tankene.",
          },
          {
            title: "Lenker",
            description: "Eksterne mål og sosiale profiler ligger i ett config lag.",
          },
        ],
      },
      {
        id: "home-articles",
        type: "articles",
        eyebrow: "Siste tekster",
        title: "Nye artikler",
        body: "Artikkellisten leser fra det typede innholdslaget.",
        limit: 3,
      },
      {
        id: "home-cta",
        type: "cta",
        title: "Start med briefen, og juster config og innhold.",
        body: "Malen er laget slik at en AI agent kan tilpasse de tydelige filene først og unngå ruteomskriving ved vanlige endringer.",
        action: { label: "Gå til kontakt", href: "/contact" },
      },
    ],
  },
  en: {
    title: "Home",
    slug: "/",
    description: "A flexible starter for small informational websites.",
    sections: [
      {
        id: "home-hero",
        type: "hero",
        eyebrow: "AI first website starter",
        title: "A calm, editable foundation for client websites.",
        body: "Use structured config, local content, and reusable sections to move from brief to live informational site without rewriting the scaffold.",
        primaryAction: { label: "Explore articles", href: "/articles" },
        secondaryAction: { label: "Contact", href: "/contact" },
        highlights: ["Config driven", "Typed content", "Hosting neutral"],
      },
      {
        id: "home-about",
        type: "about",
        eyebrow: "Why this exists",
        title: "Built for quick adaptation without scattering client details.",
        body: "Most client changes belong in config and content files. Components stay generic, sections stay reusable, and routes stay predictable.",
        items: [
          "Clear customization surfaces",
          "Simple section contracts",
          "Accessible defaults",
        ],
      },
      {
        id: "home-services",
        type: "services",
        eyebrow: "Starter blocks",
        title: "Reusable sections cover the common shape of a content site.",
        services: [
          {
            title: "Pages",
            description: "Home, about, articles, article detail, and contact routes.",
          },
          {
            title: "Content",
            description: "Typed local MDX with future CMS compatibility in mind.",
          },
          {
            title: "Links",
            description:
              "External destinations and social profiles live in one config layer.",
          },
        ],
      },
      {
        id: "home-articles",
        type: "articles",
        eyebrow: "Latest writing",
        title: "Recent articles",
        body: "The article list reads from the typed content layer.",
        limit: 3,
      },
      {
        id: "home-cta",
        type: "cta",
        title: "Start with the brief, then adjust config and content.",
        body: "The scaffold is designed so an AI agent can customize the obvious files first and avoid route rewrites for common changes.",
        action: { label: "View contact page", href: "/contact" },
      },
    ],
  },
} satisfies Localized<PageConfig>;
