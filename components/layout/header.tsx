import Link from "next/link";

import { headerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-3 text-base font-semibold text-foreground"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="grid size-9 place-items-center rounded-md bg-primary font-serif text-lg text-primary-foreground">
            {siteConfig.name.slice(0, 1)}
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {headerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "hidden md:inline-flex",
          )}
        >
          Contact
        </Link>
      </Container>
      <Container
        className="flex gap-1 overflow-x-auto pb-3 md:hidden"
        aria-label="Mobile navigation"
      >
        {headerNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-md border border-border bg-background px-3 py-2 text-sm font-semibold text-muted-foreground"
          >
            {item.label}
          </Link>
        ))}
      </Container>
    </header>
  );
}
