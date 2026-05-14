import Link from "next/link";

import type { AuthorBioSection as AuthorBioSectionConfig, Locale } from "@/config/types";
import { localizedPath } from "@/lib/i18n";

import { SectionShell } from "./section-shell";

type AuthorBioSectionProps = {
  section: AuthorBioSectionConfig;
  locale: Locale;
};

export function AuthorBioSection({ section, locale }: AuthorBioSectionProps) {
  return (
    <SectionShell>
      <div
        id={section.id}
        className="grid gap-6 border-y border-border py-10 md:grid-cols-[1fr_auto] md:items-center"
      >
        <div>
          {section.title ? (
            <h2 className="font-serif text-4xl leading-tight text-foreground">
              {section.title}
            </h2>
          ) : null}
          {section.body ? (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              {section.body}
            </p>
          ) : null}
        </div>
        {section.links?.length ? (
          <div className="flex flex-wrap gap-3">
            {section.links.map((link) => (
              <Link
                key={link.href}
                className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                href={localizedPath(link.href, locale)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}
