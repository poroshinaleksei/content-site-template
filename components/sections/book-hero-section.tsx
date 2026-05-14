import Image from "next/image";
import Link from "next/link";

import type { BookHeroSection as BookHeroSectionConfig, Locale } from "@/config/types";
import { buttonVariants } from "@/components/ui/button";
import { localizedPath } from "@/lib/i18n";

import { SectionShell } from "./section-shell";

type BookHeroSectionProps = {
  section: BookHeroSectionConfig;
  locale: Locale;
};

function sectionHref(href: string, locale: Locale) {
  return href.startsWith("#") ? href : localizedPath(href, locale);
}

export function BookHeroSection({ section, locale }: BookHeroSectionProps) {
  return (
    <SectionShell className="overflow-hidden py-12 sm:py-16" size="wide">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm rotate-[-2deg] overflow-hidden rounded-lg border border-border bg-surface shadow-[18px_18px_0_color-mix(in_srgb,var(--accent)_28%,transparent)]">
          {section.coverImage ? (
            <Image
              src={section.coverImage}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 380px, 80vw"
            />
          ) : null}
        </div>

        <div>
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {section.eyebrow}
            </p>
          ) : null}
          {section.badge ? (
            <p className="mt-4 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm font-semibold text-foreground">
              {section.badge}
            </p>
          ) : null}
          {section.title ? (
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {section.title}
            </h1>
          ) : null}
          {section.body ? (
            <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
              {section.body}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {section.primaryAction ? (
              <Link
                className={buttonVariants()}
                href={sectionHref(section.primaryAction.href, locale)}
              >
                {section.primaryAction.label}
              </Link>
            ) : null}
            {section.secondaryAction ? (
              <Link
                className={buttonVariants({ variant: "secondary" })}
                href={sectionHref(section.secondaryAction.href, locale)}
              >
                {section.secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
