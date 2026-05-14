import type { ServicesSection as ServicesSectionConfig } from "@/config/types";

import { SectionShell } from "./section-shell";

type ServicesSectionProps = {
  section: ServicesSectionConfig;
};

export function ServicesSection({ section }: ServicesSectionProps) {
  return (
    <SectionShell>
      <div className="max-w-3xl">
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
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {section.services.map((service) => (
          <article
            key={service.title}
            className="rounded-md border border-border bg-surface p-6"
          >
            <h3 className="font-serif text-2xl leading-tight">{service.title}</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
