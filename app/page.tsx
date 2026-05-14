import type { Metadata } from "next";

import { PageSections } from "@/components/sections/page-sections";
import { homePageConfig } from "@/config/pages";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata(homePageConfig);

export default async function HomePage() {
  return (
    <main>
      <PageSections sections={homePageConfig.sections} />
    </main>
  );
}
