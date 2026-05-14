import type { Metadata } from "next";

import { HomeRoute } from "@/components/routes/home-route";
import { getPageConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";

const locale = siteConfig.defaultLocale;

export const metadata: Metadata = createPageMetadata(
  getPageConfig("home", locale),
  locale,
);

export default async function HomePage() {
  return <HomeRoute locale={locale} />;
}
