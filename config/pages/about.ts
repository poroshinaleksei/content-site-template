import type { PageConfig } from "../types";

export const aboutPageConfig = {
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
} satisfies PageConfig;
