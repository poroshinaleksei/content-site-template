import Link from "next/link";

import { contactLinks, socialLinks } from "@/config/links";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { LinkIcon } from "@/components/links/link-icon";

import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <Link href="/" className="font-serif text-3xl leading-tight">
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-md text-base leading-7 text-background/70">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-background/50">
            Pages
          </p>
          <ul className="mt-4 space-y-3">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-background/80 hover:text-background"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-background/50">
            Connect
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
          &copy; {new Date().getFullYear()} {siteConfig.owner}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
