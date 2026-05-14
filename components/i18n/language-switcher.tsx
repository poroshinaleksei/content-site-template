import Link from "next/link";

import { i18nConfig } from "@/config/i18n";
import type { Locale } from "@/config/types";
import { localizedPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  path: string;
  label: string;
  inverted?: boolean;
};

export function LanguageSwitcher({
  locale,
  path,
  label,
  inverted = false,
}: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {i18nConfig.locales.map((item) => (
        <Link
          key={item}
          href={localizedPath(path, item)}
          hrefLang={item}
          aria-current={item === locale ? "true" : undefined}
          className={cn(
            "rounded-md px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
            item === locale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
            inverted &&
              (item === locale
                ? "bg-background text-foreground"
                : "text-background/60 hover:bg-background/10 hover:text-background"),
          )}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}
