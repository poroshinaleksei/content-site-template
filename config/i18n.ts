import { siteConfig } from "./site";
import type { Locale } from "./types";

export const i18nConfig = {
  defaultLocale: siteConfig.defaultLocale,
  locales: siteConfig.locales,
  localeLabels: siteConfig.localeLabels,
  localePrefix: {
    nb: "",
    en: "/en",
  },
} satisfies {
  defaultLocale: Locale;
  locales: Locale[];
  localeLabels: Record<Locale, string>;
  localePrefix: Record<Locale, string>;
};

export const nonDefaultLocales = i18nConfig.locales.filter(
  (locale) => locale !== i18nConfig.defaultLocale,
);
