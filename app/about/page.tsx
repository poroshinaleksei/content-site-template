import { PageSections } from "@/components/sections/page-sections";
import { aboutPageConfig } from "@/config/pages";

export default function AboutPage() {
  return (
    <main>
      <PageSections sections={aboutPageConfig.sections} />
    </main>
  );
}
