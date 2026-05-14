import Link from "next/link";

import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { contactLinks, socialLinks } from "@/config/links";
import { getMessages } from "@/config/messages";
import { getFooterNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/types";
import { LinkIcon } from "@/components/links/link-icon";
import { localizedPath } from "@/lib/i18n";

import { Container } from "./container";

type FooterProps = {
  locale: Locale;
  path: string;
};

export function Footer({ locale, path }: FooterProps) {
  const messages = getMessages(locale);
  const footerNavigation = getFooterNavigation(locale);

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <Link
            href={localizedPath("/", locale)}
            className="font-serif text-3xl leading-tight"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-md text-base leading-7 text-background/70">
            {siteConfig.description[locale]}
          </p>
          <div className="mt-6">
            <LanguageSwitcher
              locale={locale}
              path={path}
              label={messages.languageSwitcher}
              inverted
            />
          </div>
        </div>

        <nav aria-label={messages.footerNavigation}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-background/50">
            {messages.footerNavigation}
          </p>
          <ul className="mt-4 space-y-3">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-background/80 hover:text-background"
                  href={localizedPath(item.href, locale)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-background/50">
            {messages.connect}
          </p>
          <ul className="mt-4 space-y-3">
            {[...contactLinks, ...socialLinks].map((link) => (
              <li key={link.id}>
                <a
                  className="inline-flex items-center gap-2 text-background/80 hover:text-background"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <LinkIcon icon={link.icon} className="size-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-background/10 py-5 text-sm text-background/55">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.owner}. {messages.copyright}
        </p>
      </Container>
    </footer>
  );
}
