import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AboutRoute } from "@/components/routes/about-route";
import { getPageConfig } from "@/config/pages";
import type { Locale } from "@/config/types";
import { getNonDefaultStaticParams, isNonDefaultLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo/metadata";

type LocalizedPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return getNonDefaultStaticParams();
}

export async function generateMetadata({
  params,
}: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isNonDefaultLocale(locale)) {
    return {};
  }

  return createPageMetadata(getPageConfig("about", locale), locale);
}

export default async function LocalizedAboutPage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isNonDefaultLocale(locale)) {
    notFound();
  }

  return <AboutRoute locale={locale as Locale} />;
}
