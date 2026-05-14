import type { Locale, Localized, NavigationItem } from "./types";

export const headerNavigation = {
  nb: [
    { label: "Hjem", href: "/" },
    { label: "Om", href: "/about" },
    { label: "Artikler", href: "/articles" },
    { label: "Kontakt", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Contact", href: "/contact" },
  ],
} satisfies Localized<NavigationItem[]>;

export const footerNavigation = {
  nb: [
    { label: "Om", href: "/about" },
    { label: "Artikler", href: "/articles" },
    { label: "Kontakt", href: "/contact" },
  ],
  en: [
    { label: "About", href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Contact", href: "/contact" },
  ],
} satisfies Localized<NavigationItem[]>;

export function getHeaderNavigation(locale: Locale) {
  return headerNavigation[locale];
}

export function getFooterNavigation(locale: Locale) {
  return footerNavigation[locale];
}
