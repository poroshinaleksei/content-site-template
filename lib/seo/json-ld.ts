import { siteConfig } from "@/config/site";
import type { Article } from "@/lib/content/schemas";

import { absoluteUrl } from "./metadata";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.owner,
    url: siteConfig.url,
  };
}

export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    url: absoluteUrl(`/articles/${article.slug}`),
    image: article.coverImage ? absoluteUrl(article.coverImage) : undefined,
  };
}
