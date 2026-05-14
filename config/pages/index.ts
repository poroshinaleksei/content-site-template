export { aboutPageConfig } from "./about";
export { articlesPageConfig } from "./articles";
export { contactPageConfig } from "./contact";
export { homePageConfig } from "./home";

import { aboutPageConfig } from "./about";
import { articlesPageConfig } from "./articles";
import { contactPageConfig } from "./contact";
import { homePageConfig } from "./home";
import { presetRegistry } from "../presets";
import { siteConfig } from "../site";
import type { Locale, PageKey } from "../types";

export const pageConfigs = {
  home: homePageConfig,
  about: aboutPageConfig,
  articles: articlesPageConfig,
  contact: contactPageConfig,
};

export function getPageConfig(page: PageKey, locale: Locale) {
  return (
    presetRegistry[siteConfig.siteType].pageOverrides?.[page]?.[locale] ??
    pageConfigs[page][locale]
  );
}
