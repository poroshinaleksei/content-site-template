import Link from "next/link";

import type { CtaSection as CtaSectionConfig } from "@/config/types";
import { buttonVariants } from "@/components/ui/button";

import { SectionShell } from "./section-shell";

type CtaSectionProps = {
  section: CtaSectionConfig;
};

export function CtaSection({ section }: CtaSectionProps) {
  return (
    <SectionShell>
      <div className="grid gap-6 border-y border-border py-10 md:grid-cols-[1fr_auto] md:items-center">
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
        {section.action ? (
          <Link className={buttonVariants()} href={section.action.href}>
            {section.action.label}
          </Link>
        ) : null}
      </div>
    </SectionShell>
  );
}
