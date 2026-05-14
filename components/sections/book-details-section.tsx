import type { BookDetailsSection as BookDetailsSectionConfig } from "@/config/types";

import { SectionShell } from "./section-shell";

type BookDetailsSectionProps = {
  section: BookDetailsSectionConfig;
};

export function BookDetailsSection({ section }: BookDetailsSectionProps) {
  return (
    <SectionShell>
      {section.title ? (
        <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
          {section.title}
        </h2>
      ) : null}
      <dl className="mt-8 grid gap-4 md:grid-cols-3">
        {section.details.map((detail) => (
          <div
            key={detail.label}
            className="rounded-md border border-border bg-surface p-5"
          >
            <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {detail.label}
            </dt>
            <dd className="mt-3 font-serif text-2xl text-foreground">{detail.value}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
