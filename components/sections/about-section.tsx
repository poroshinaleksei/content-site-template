import type { AboutSection as AboutSectionConfig } from "@/config/types";

import { SectionShell } from "./section-shell";

type AboutSectionProps = {
  section: AboutSectionConfig;
};

export function AboutSection({ section }: AboutSectionProps) {
  return (
    <SectionShell className="border-y border-border bg-muted/55">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {section.eyebrow}
            </p>
          ) : null}
          {section.title ? (
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              {section.title}
            </h2>
          ) : null}
        </div>
        <div>
          {section.body ? (
            <p className="text-xl leading-9 text-muted-foreground">{section.body}</p>
          ) : null}
          {section.items?.length ? (
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </SectionShell>
  );
}
