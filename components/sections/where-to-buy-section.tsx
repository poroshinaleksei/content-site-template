import { ShoppingBag } from "lucide-react";

import type { WhereToBuySection as WhereToBuySectionConfig } from "@/config/types";

import { SectionShell } from "./section-shell";

type WhereToBuySectionProps = {
  section: WhereToBuySectionConfig;
};

export function WhereToBuySection({ section }: WhereToBuySectionProps) {
  return (
    <SectionShell>
      <div id={section.id} className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          {section.title ? (
            <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
              {section.title}
            </h2>
          ) : null}
          {section.body ? (
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{section.body}</p>
          ) : null}
        </div>
        <div className="grid gap-3">
          {section.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-md border border-border bg-surface p-5 transition-colors hover:border-primary/50 hover:bg-muted"
            >
              <ShoppingBag aria-hidden="true" className="mt-1 size-5 text-primary" />
              <span>
                <span className="block font-serif text-2xl leading-tight text-foreground">
                  {link.label}
                </span>
                {link.description ? (
                  <span className="mt-2 block text-base leading-7 text-muted-foreground">
                    {link.description}
                  </span>
                ) : null}
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
