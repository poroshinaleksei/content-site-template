import { contactLinks, socialLinks } from "@/config/links";
import type { ContactFormSection as ContactFormSectionConfig } from "@/config/types";
import { Button } from "@/components/ui/button";
import { LinkList } from "@/components/links/link-list";

import { SectionShell } from "./section-shell";

type ContactFormSectionProps = {
  section: ContactFormSectionConfig;
};

export function ContactFormSection({ section }: ContactFormSectionProps) {
  return (
    <SectionShell className="pt-0">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="font-serif text-4xl leading-tight text-foreground">
            {section.title}
          </h2>
          {section.body ? (
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{section.body}</p>
          ) : null}
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Contact
              </h3>
              <div className="mt-3">
                <LinkList links={contactLinks} />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Social
              </h3>
              <div className="mt-3">
                <LinkList links={socialLinks} />
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-md border border-border bg-muted/55 p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-foreground" htmlFor="name">
                Name
              </label>
              <input
                className="mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3 text-foreground"
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground" htmlFor="email">
                Email
              </label>
              <input
                className="mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3 text-foreground"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground" htmlFor="phone">
                Phone
              </label>
              <input
                className="mt-2 min-h-11 w-full rounded-md border border-border bg-background px-3 text-foreground"
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-foreground" htmlFor="message">
                Message
              </label>
              <textarea
                className="mt-2 min-h-36 w-full rounded-md border border-border bg-background px-3 py-3 text-foreground"
                id="message"
                name="message"
                required
              />
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            This starter does not send messages until a form adapter is configured.
          </p>
          <Button className="mt-6" type="submit" disabled>
            Sending disabled
          </Button>
        </form>
      </div>
    </SectionShell>
  );
}
