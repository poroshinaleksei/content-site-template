import type { ReactNode } from "react";

import type { Locale } from "@/config/types";

import { Footer } from "./footer";
import { Header } from "./header";

type SiteShellProps = {
  children: ReactNode;
  locale: Locale;
  path: string;
};

export function SiteShell({ children, locale, path }: SiteShellProps) {
  return (
    <>
      <Header locale={locale} path={path} />
      {children}
      <Footer locale={locale} path={path} />
    </>
  );
}
