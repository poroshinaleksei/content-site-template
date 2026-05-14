import type { PageSection } from "@/config/types";
import type { Locale } from "@/config/types";

import { AboutSection } from "./about-section";
import { ArticlesSection } from "./articles-section";
import { ContactFormSection } from "./contact-form-section";
import { CtaSection } from "./cta-section";
import { HeroSection } from "./hero-section";
import { ServicesSection } from "./services-section";

type PageSectionsProps = {
  sections: PageSection[];
  locale: Locale;
};

async function renderSection(section: PageSection, locale: Locale) {
  if (section.enabled === false) {
    return null;
  }

  switch (section.type) {
    case "hero":
      return <HeroSection key={section.id} section={section} locale={locale} />;
    case "about":
      return <AboutSection key={section.id} section={section} />;
    case "services":
      return <ServicesSection key={section.id} section={section} />;
    case "articles":
      return <ArticlesSection key={section.id} section={section} locale={locale} />;
    case "cta":
      return <CtaSection key={section.id} section={section} locale={locale} />;
    case "contact-form":
      return <ContactFormSection key={section.id} section={section} locale={locale} />;
    case "testimonials":
    case "faq":
      return null;
  }
}

export async function PageSections({ sections, locale }: PageSectionsProps) {
  return (
    <>{await Promise.all(sections.map((section) => renderSection(section, locale)))}</>
  );
}
