import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

export function SectionShell({ children, className, size }: SectionShellProps) {
  return (
    <section className={cn("py-[var(--section-spacing-y)]", className)}>
      <Container size={size}>{children}</Container>
    </section>
  );
}
