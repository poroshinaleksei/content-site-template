import Link from "next/link";

import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { getMessages } from "@/config/messages";
import { getHeaderNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/types";
import { buttonVariants } from "@/components/ui/button";
import { localizedPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Container } from "./container";

type HeaderProps = {
  locale: Locale;
  path: string;
};

export function Header({ locale, path }: HeaderProps) {
  const messages = getMessages(locale);
  const headerNavigation = getHeaderNavigation(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        <Link
          href={localizedPath("/", locale)}
          className="flex items-center gap-3 text-base font-semibold text-foreground"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="grid size-9 place-items-center rounded-md bg-primary font-serif text-lg text-primary-foreground">
            {siteConfig.name.slice(0, 1)}
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={messages.mainNavigation}
        >
          {headerNavigation.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(item.href, locale)}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={localizedPath("/contact", locale)}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "hidden md:inline-flex",
          )}
        >
          {messages.contact}
        </Link>
        <div className="hidden md:block">
          <LanguageSwitcher
            locale={locale}
            path={path}
            label={messages.languageSwitcher}
          />
        </div>
      </Container>
      <Container
        className="flex items-center gap-1 overflow-x-auto pb-3 md:hidden"
        aria-label={messages.mobileNavigation}
      >
        {headerNavigation.map((item) => (
          <Link
            key={item.href}
            href={localizedPath(item.href, locale)}
            className="shrink-0 rounded-md border border-border bg-surface px-3 py-2 text-sm font-semibold text-muted-foreground"
          >
            {item.label}
          </Link>
        ))}
        <LanguageSwitcher locale={locale} path={path} label={messages.languageSwitcher} />
      </Container>
    </header>
  );
}
