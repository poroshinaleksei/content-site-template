import type { MDXComponents } from "mdx/types";

import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn("mt-12 font-serif text-3xl leading-tight text-foreground", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-9 text-2xl font-semibold leading-snug text-foreground",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("mt-5 text-lg leading-8 text-muted-foreground", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn(
        "font-semibold text-primary underline decoration-primary/30",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "mt-5 list-disc space-y-3 pl-6 text-lg text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "mt-5 list-decimal space-y-3 pl-6 text-lg text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("pl-1 leading-8", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-8 border-l-4 border-accent pl-5 font-serif text-2xl leading-9 text-foreground",
        className,
      )}
      {...props}
    />
  ),
};
