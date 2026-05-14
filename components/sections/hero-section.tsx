import Link from "next/link";

import type { HeroSection as HeroSectionConfig } from "@/config/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SectionShell } from "./section-shell";

type HeroSectionProps = {
  section: HeroSectionConfig;
};

export function HeroSection({ section }: HeroSectionProps) {
  return (
    <SectionShell className="relative overflow-hidden py-20 sm:py-24" size="wide">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {section.eyebrow}
            </p>
          ) : null}
          {section.title ? (
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
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
              <Link className={buttonVariants()} href={section.primaryAction.href}>
                {section.primaryAction.label}
              </Link>
            ) : null}
            {section.secondaryAction ? (
              <Link
                className={buttonVariants({ variant: "secondary" })}
                href={section.secondaryAction.href}
              >
                {section.secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>

        {section.highlights?.length ? (
          <div className="border-y border-border py-5 lg:mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Built around
            </p>
            <div className="mt-5 grid gap-3">
              {section.highlights.map((highlight, index) => (
                <div
                  className={cn(
                    "flex items-center justify-between rounded-md border border-border bg-surface p-4",
                    index === 1 && "lg:translate-x-6",
                  )}
                  key={highlight}
                >
                  <span className="font-serif text-2xl">{highlight}</span>
                  <span className="h-px w-12 bg-accent" />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}
