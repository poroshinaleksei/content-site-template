import type { Metadata } from "next";

import { PageSections } from "@/components/sections/page-sections";
import { aboutPageConfig } from "@/config/pages";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(aboutPageConfig);

export default function AboutPage() {
  return (
    <main>
      <PageSections sections={aboutPageConfig.sections} />
    </main>
  );
}
