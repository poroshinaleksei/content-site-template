export type SeoConfig = {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
};

export type Locale = "nb" | "en";

export type Localized<T> = Record<Locale, T>;

export type SiteConfig = {
  name: string;
  owner: string;
  url: string;
  defaultLocale: Locale;
  locales: Locale[];
  localeLabels: Localized<string>;
  description: Localized<string>;
  defaultSeo: Localized<
    Required<Pick<SeoConfig, "title" | "description">> & {
      image: string;
    }
  >;
};

export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type LinkIcon =
  | "arrow-up-right"
  | "book-open"
  | "calendar"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "mail"
  | "map-pin"
  | "phone"
  | "shopping-bag"
  | "x"
  | "youtube";

export type ExternalLink = {
  id: string;
  label: string;
  href: string;
  icon: LinkIcon;
  description?: string;
};

export type ThemePreset = "nordic-warm" | "minimal" | "playful" | "editorial";

export type ThemeConfig = {
  themePreset: ThemePreset;
};

export type ThemePresetConfig = {
  label: string;
  radius: "sm" | "md" | "lg";
  palette: {
    background: string;
    foreground: string;
    primary: string;
    accent: string;
    muted: string;
    border: string;
    surface: string;
    surfaceContrast: string;
  };
  typography: {
    heading: string;
    body: string;
  };
  backgroundStyle: "grid" | "plain" | "paper" | "blocks";
  spacingDensity: "compact" | "comfortable" | "spacious";
  buttonStyle: "solid" | "outline" | "soft" | "ink";
};

export type FeatureConfig = {
  analytics: {
    provider: "ga4" | "none";
  };
  content: {
    source: "local-mdx";
  };
  contactForm: {
    adapter: "disabled" | "server-action";
  };
};

export type SectionBase<TType extends string> = {
  id: string;
  type: TType;
  eyebrow?: string;
  title?: string;
  body?: string;
  enabled?: boolean;
};

export type HeroSection = SectionBase<"hero"> & {
  primaryAction?: NavigationItem;
  secondaryAction?: NavigationItem;
  highlights?: string[];
};

export type AboutSection = SectionBase<"about"> & {
  image?: string;
  items?: string[];
};

export type ServicesSection = SectionBase<"services"> & {
  services: Array<{
    title: string;
    description: string;
  }>;
};

export type ArticlesSection = SectionBase<"articles"> & {
  limit?: number;
};

export type TestimonialsSection = SectionBase<"testimonials"> & {
  testimonials: Array<{
    quote: string;
    name: string;
    role?: string;
  }>;
};

export type FaqSection = SectionBase<"faq"> & {
  questions: Array<{
    question: string;
    answer: string;
  }>;
};

export type CtaSection = SectionBase<"cta"> & {
  action?: NavigationItem;
};

export type ContactFormSection = SectionBase<"contact-form">;

export type PageSection =
  | HeroSection
  | AboutSection
  | ServicesSection
  | ArticlesSection
  | TestimonialsSection
  | FaqSection
  | CtaSection
  | ContactFormSection;

export type PageConfig = {
  title: string;
  description: string;
  slug: string;
  seo?: SeoConfig;
  sections: PageSection[];
};
