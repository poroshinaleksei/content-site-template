import type { PageConfig } from "../types";

export const homePageConfig = {
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
} satisfies PageConfig;
