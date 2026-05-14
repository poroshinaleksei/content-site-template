import type { PageSection } from "@/config/types";
import type { Locale } from "@/config/types";

import { AboutSection } from "./about-section";
import { AuthorBioSection } from "./author-bio-section";
import { ArticlesSection } from "./articles-section";
import { BookDetailsSection } from "./book-details-section";
import { BookHeroSection } from "./book-hero-section";
import { BookIntroSection } from "./book-intro-section";
import { ContactFormSection } from "./contact-form-section";
import { CtaSection } from "./cta-section";
import { ForParentsSection } from "./for-parents-section";
import { HeroSection } from "./hero-section";
import { IllustrationGallerySection } from "./illustration-gallery-section";
import { ServicesSection } from "./services-section";
import { WhereToBuySection } from "./where-to-buy-section";

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
    case "book-hero":
      return <BookHeroSection key={section.id} section={section} locale={locale} />;
    case "book-intro":
      return <BookIntroSection key={section.id} section={section} />;
    case "book-details":
      return <BookDetailsSection key={section.id} section={section} />;
    case "illustration-gallery":
      return <IllustrationGallerySection key={section.id} section={section} />;
    case "where-to-buy":
      return <WhereToBuySection key={section.id} section={section} />;
    case "for-parents":
      return <ForParentsSection key={section.id} section={section} />;
    case "author-bio":
      return <AuthorBioSection key={section.id} section={section} locale={locale} />;
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
