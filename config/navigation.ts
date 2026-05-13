import type { NavigationItem } from "./types";

export const headerNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
] satisfies NavigationItem[];

export const footerNavigation = [
  { label: "About", href: "/about" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
] satisfies NavigationItem[];
