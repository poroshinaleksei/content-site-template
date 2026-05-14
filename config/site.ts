import type { SiteConfig } from "./types";

export const siteConfig = {
  name: "Website template",
  owner: "Site owner",
  url: "https://example.com",
  defaultLocale: "nb",
  locales: ["nb", "en"],
  localeLabels: {
    nb: "Norsk",
    en: "English",
  },
  description: {
    nb: "En startmal for små innholdsbaserte nettsider.",
    en: "A starter template for small informational websites.",
  },
  defaultSeo: {
    nb: {
      title: "Website template",
      description: "En startmal for små innholdsbaserte nettsider.",
      image: "/images/og-default.jpg",
    },
    en: {
      title: "Website template",
      description: "A starter template for small informational websites.",
      image: "/images/og-default.jpg",
    },
  },
} satisfies SiteConfig;
