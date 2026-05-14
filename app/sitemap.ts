import type { MetadataRoute } from "next";

import {
  aboutPageConfig,
  articlesPageConfig,
  contactPageConfig,
  homePageConfig,
} from "@/config/pages";
import { i18nConfig } from "@/config/i18n";
import { getAllArticles } from "@/lib/content/articles";
import { localizedPath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [homePageConfig, aboutPageConfig, articlesPageConfig, contactPageConfig];
  const articles = await getAllArticles();

  return [
    ...i18nConfig.locales.flatMap((locale) =>
      pages.map((page) => ({
        url: absoluteUrl(localizedPath(page[locale].slug, locale)),
        lastModified: new Date(),
      })),
    ),
    ...i18nConfig.locales.flatMap((locale) =>
      articles.map((article) => ({
        url: absoluteUrl(localizedPath(`/articles/${article.slug}`, locale)),
        lastModified: new Date(article.publishedAt),
      })),
    ),
  ];
}
