import type { BookIntroSection as BookIntroSectionConfig } from "@/config/types";

import { SectionShell } from "./section-shell";

type BookIntroSectionProps = {
  section: BookIntroSectionConfig;
};

export function BookIntroSection({ section }: BookIntroSectionProps) {
  return (
    <SectionShell className="border-y border-border bg-muted/55">
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
        <div>
          {section.title ? (
            <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
              {section.title}
            </h2>
          ) : null}
          {section.body ? (
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{section.body}</p>
          ) : null}
        </div>
        {section.quote ? (
          <blockquote className="border-l-4 border-accent pl-6 font-serif text-3xl leading-tight text-foreground">
            {section.quote}
          </blockquote>
        ) : null}
      </div>
    </SectionShell>
  );
}
