import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeRoute } from "@/components/routes/home-route";
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

  return createPageMetadata(getPageConfig("home", locale), locale);
}

export default async function LocalizedHomePage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isNonDefaultLocale(locale)) {
    notFound();
  }

  return <HomeRoute locale={locale as Locale} />;
}
