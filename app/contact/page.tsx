import { PageSections } from "@/components/sections/page-sections";
import { contactPageConfig } from "@/config/pages";

export default function ContactPage() {
  return (
    <main>
      <PageSections sections={contactPageConfig.sections} />
    </main>
  );
}
