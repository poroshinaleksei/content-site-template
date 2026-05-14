import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";

import { Analytics } from "@/components/analytics/google-analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { isLocale } from "@/lib/i18n";
import { createMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import { getThemeAttributes, getThemeStyle } from "@/lib/theme";

import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createMetadata({
    title: siteConfig.defaultSeo[siteConfig.defaultLocale].title,
    description: siteConfig.defaultSeo[siteConfig.defaultLocale].description,
    path: "/",
    locale: siteConfig.defaultLocale,
  }),
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const resolvedParams = await params;
  const locale = isLocale(resolvedParams.locale)
    ? resolvedParams.locale
    : siteConfig.defaultLocale;

  return (
    <html lang={locale} className={`${sans.variable} ${serif.variable}`}>
      <body style={getThemeStyle()} {...getThemeAttributes()}>
        <JsonLd data={websiteJsonLd(locale)} />
        <JsonLd data={organizationJsonLd(locale)} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
