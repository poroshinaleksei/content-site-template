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
    <section className={cn("py-16 sm:py-20", className)}>
      <Container size={size}>{children}</Container>
    </section>
  );
}
