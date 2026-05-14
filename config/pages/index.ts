export { aboutPageConfig } from "./about";
export { articlesPageConfig } from "./articles";
export { contactPageConfig } from "./contact";
export { homePageConfig } from "./home";

import { aboutPageConfig } from "./about";
import { articlesPageConfig } from "./articles";
import { contactPageConfig } from "./contact";
import { homePageConfig } from "./home";
import type { Locale } from "../types";

export type PageKey = "home" | "about" | "articles" | "contact";

export const pageConfigs = {
  home: homePageConfig,
  about: aboutPageConfig,
  articles: articlesPageConfig,
  contact: contactPageConfig,
};

export function getPageConfig(page: PageKey, locale: Locale) {
  return pageConfigs[page][locale];
}
