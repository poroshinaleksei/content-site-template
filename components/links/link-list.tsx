import type { ExternalLink } from "@/config/types";

import { LinkIcon } from "./link-icon";

type LinkListProps = {
  links: ExternalLink[];
};

export function LinkList({ links }: LinkListProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex items-center justify-between gap-4 rounded-md border border-border bg-background p-4 transition-colors hover:border-primary/50 hover:bg-muted"
          >
            <span>
              <span className="flex items-center gap-2 font-semibold text-foreground">
                <LinkIcon icon={link.icon} className="size-4 text-primary" />
                {link.label}
              </span>
              {link.description ? (
                <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                  {link.description}
                </span>
              ) : null}
            </span>
            <LinkIcon
              icon="arrow-up-right"
              className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
