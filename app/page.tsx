import { PageSections } from "@/components/sections/page-sections";
import { homePageConfig } from "@/config/pages";

export default async function HomePage() {
  return (
    <main>
      <PageSections sections={homePageConfig.sections} />
    </main>
  );
}
