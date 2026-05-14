import type { Metadata } from "next";

import { PageSections } from "@/components/sections/page-sections";
import { contactPageConfig } from "@/config/pages";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(contactPageConfig);

export default function ContactPage() {
  return (
    <main>
      <PageSections sections={contactPageConfig.sections} />
    </main>
  );
}
