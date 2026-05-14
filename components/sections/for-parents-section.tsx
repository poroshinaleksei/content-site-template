import type { ForParentsSection as ForParentsSectionConfig } from "@/config/types";

import { SectionShell } from "./section-shell";

type ForParentsSectionProps = {
  section: ForParentsSectionConfig;
};

export function ForParentsSection({ section }: ForParentsSectionProps) {
  return (
    <SectionShell className="border-y border-border bg-foreground text-background">
      {section.title ? (
        <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          {section.title}
        </h2>
      ) : null}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {section.points.map((point) => (
          <article key={point.title} className="border-t border-background/20 pt-5">
            <h3 className="font-serif text-2xl leading-tight">{point.title}</h3>
            <p className="mt-3 text-base leading-7 text-background/70">
              {point.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
