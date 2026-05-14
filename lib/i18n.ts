import { i18nConfig, nonDefaultLocales } from "@/config/i18n";
import type { Locale } from "@/config/types";

export function isLocale(value: string | undefined): value is Locale {
  return i18nConfig.locales.includes(value as Locale);
}

export function isNonDefaultLocale(value: string | undefined): value is Locale {
  return isLocale(value) && value !== i18nConfig.defaultLocale;
}

export function getLocalePrefix(locale: Locale) {
  return i18nConfig.localePrefix[locale];
}

export function localizedPath(path: string, locale: Locale) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const prefix = getLocalePrefix(locale);

  if (normalizedPath === "/") {
    return prefix || "/";
  }

  return `${prefix}${normalizedPath}`;
}

export function getLanguageAlternates(path: string) {
  return Object.fromEntries(
    i18nConfig.locales.map((locale) => [locale, localizedPath(path, locale)]),
  ) as Record<Locale, string>;
}

export function getNonDefaultStaticParams() {
  return nonDefaultLocales.map((locale) => ({ locale }));
}

export { nonDefaultLocales };
