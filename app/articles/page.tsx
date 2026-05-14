import type { Metadata } from "next";

import { ArticlesRoute } from "@/components/routes/articles-route";
import { getPageConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";

const locale = siteConfig.defaultLocale;

export const metadata: Metadata = createPageMetadata(
  getPageConfig("articles", locale),
  locale,
);

export default async function ArticlesPage() {
  return <ArticlesRoute locale={locale} />;
}
