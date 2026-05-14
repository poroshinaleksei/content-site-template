import type { Metadata } from "next";

import { AboutRoute } from "@/components/routes/about-route";
import { getPageConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";

const locale = siteConfig.defaultLocale;

export const metadata: Metadata = createPageMetadata(
  getPageConfig("about", locale),
  locale,
);

export default function AboutPage() {
  return <AboutRoute locale={locale} />;
}
