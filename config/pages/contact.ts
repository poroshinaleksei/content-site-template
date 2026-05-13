import type { PageConfig } from "../types";

export const contactPageConfig = {
  title: "Contact",
  slug: "/contact",
  description: "A contact page with structured destinations and a form boundary.",
  sections: [
    {
      id: "contact-hero",
      type: "hero",
      eyebrow: "Contact",
      title: "Make it easy to reach the site owner.",
      body: "Contact destinations and social profiles come from config, while the form keeps a provider neutral adapter contract.",
    },
    {
      id: "contact-form",
      type: "contact-form",
      title: "Send a message",
      body: "This form is ready for a future delivery adapter. It does not send production email by default.",
    },
  ],
} satisfies PageConfig;
