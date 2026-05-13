import type { MetadataRoute } from "next";

import {
  aboutPageConfig,
  articlesPageConfig,
  contactPageConfig,
  homePageConfig,
} from "@/config/pages";
import { getAllArticles } from "@/lib/content/articles";
import { absoluteUrl } from "@/lib/seo/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [homePageConfig, aboutPageConfig, articlesPageConfig, contactPageConfig];
  const articles = await getAllArticles();

  return [
    ...pages.map((page) => ({
      url: absoluteUrl(page.slug),
      lastModified: new Date(),
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/articles/${article.slug}`),
      lastModified: new Date(article.publishedAt),
    })),
  ];
}
