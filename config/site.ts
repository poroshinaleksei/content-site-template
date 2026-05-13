import type { SiteConfig } from "./types";

export const siteConfig = {
  name: "Website template",
  owner: "Site owner",
  description: "A starter template for small informational websites.",
  url: "https://example.com",
  locale: "en",
  defaultSeo: {
    title: "Website template",
    description: "A starter template for small informational websites.",
    image: "/images/og-default.jpg",
  },
} satisfies SiteConfig;
