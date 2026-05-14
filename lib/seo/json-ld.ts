import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/types";
import type { Article } from "@/lib/content/schemas";

import { absoluteUrl } from "./metadata";

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description[locale],
    inLanguage: locale,
  };
}

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.owner,
    url: siteConfig.url,
    inLanguage: locale,
  };
}

export function articleJsonLd(article: Article, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    url: absoluteUrl(`/articles/${article.slug}`),
    image: article.coverImage ? absoluteUrl(article.coverImage) : undefined,
    inLanguage: locale,
  };
}
