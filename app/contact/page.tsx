import type { Metadata } from "next";

import { ContactRoute } from "@/components/routes/contact-route";
import { getPageConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";

const locale = siteConfig.defaultLocale;

export const metadata: Metadata = createPageMetadata(
  getPageConfig("contact", locale),
  locale,
);

export default function ContactPage() {
  return <ContactRoute locale={locale} />;
}
