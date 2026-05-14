import type { ExternalLink } from "./types";

export const contactLinks = [
  {
    id: "email",
    label: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: "mail",
    description: "Primary contact email",
  },
] satisfies ExternalLink[];

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: "linkedin",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: "instagram",
  },
] satisfies ExternalLink[];

export const externalLinks = [
  {
    id: "booking",
    label: "Booking link",
    href: "https://example.com/booking",
    icon: "calendar",
    description: "Optional external booking destination",
  },
] satisfies ExternalLink[];
