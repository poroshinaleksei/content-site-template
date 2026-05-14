import { SiteShell } from "@/components/layout/site-shell";
import { PageSections } from "@/components/sections/page-sections";
import { getPageConfig } from "@/config/pages";
import type { Locale } from "@/config/types";

type HomeRouteProps = {
  locale: Locale;
};

export function HomeRoute({ locale }: HomeRouteProps) {
  const page = getPageConfig("home", locale);

  return (
    <SiteShell locale={locale} path={page.slug}>
      <main>
        <PageSections sections={page.sections} locale={locale} />
      </main>
    </SiteShell>
  );
}
