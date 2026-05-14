import type { Locale, Localized } from "./types";

export type UiMessages = {
  article: string;
  backToArticles: string;
  builtAround: string;
  connect: string;
  contact: string;
  contactSection: string;
  footerNavigation: string;
  mainNavigation: string;
  mobileNavigation: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  sendingDisabled: string;
  social: string;
  viewAllArticles: string;
  formDisabledNote: string;
  copyright: string;
  languageSwitcher: string;
};

export const uiMessages = {
  nb: {
    article: "Artikkel",
    backToArticles: "Tilbake til artikler",
    builtAround: "Bygget rundt",
    connect: "Kontakt",
    contact: "Kontakt",
    contactSection: "Kontakt",
    footerNavigation: "Sider",
    mainNavigation: "Hovednavigasjon",
    mobileNavigation: "Mobilnavigasjon",
    name: "Navn",
    email: "E-post",
    phone: "Telefon",
    message: "Melding",
    sendingDisabled: "Sending er deaktivert",
    social: "Sosialt",
    viewAllArticles: "Se alle artikler",
    formDisabledNote:
      "Denne malen sender ikke meldinger for en skjemaintegrasjon er konfigurert.",
    copyright: "Alle rettigheter reservert.",
    languageSwitcher: "Velg språk",
  },
  en: {
    article: "Article",
    backToArticles: "Back to articles",
    builtAround: "Built around",
    connect: "Connect",
    contact: "Contact",
    contactSection: "Contact",
    footerNavigation: "Pages",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    sendingDisabled: "Sending disabled",
    social: "Social",
    viewAllArticles: "View all articles",
    formDisabledNote:
      "This starter does not send messages until a form adapter is configured.",
    copyright: "All rights reserved.",
    languageSwitcher: "Choose language",
  },
} satisfies Localized<UiMessages>;

export function getMessages(locale: Locale) {
  return uiMessages[locale];
}
