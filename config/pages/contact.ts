import type { Localized, PageConfig } from "../types";

export const contactPageConfig = {
  nb: {
    title: "Kontakt",
    slug: "/contact",
    description: "En kontaktside med strukturerte mål og skjemakontrakt.",
    sections: [
      {
        id: "contact-hero",
        type: "hero",
        eyebrow: "Kontakt",
        title: "Gjør det enkelt å kontakte eieren av nettsiden.",
        body: "Kontaktmål og sosiale profiler kommer fra config, mens skjemaet beholder en leverandørnøytral adapterkontrakt.",
      },
      {
        id: "contact-form",
        type: "contact-form",
        title: "Send en melding",
        body: "Skjemaet er klart for en fremtidig leveringsadapter. Det sender ikke produksjons e-post som standard.",
      },
    ],
  },
  en: {
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
  },
} satisfies Localized<PageConfig>;
