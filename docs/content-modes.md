# Content modes

## Supported now: local MDX

Local MDX is the only supported content mode in v1.

Articles live in `content/articles/<locale>/*.mdx`. Frontmatter is parsed with
`gray-matter` and validated with `zod` in `lib/content/schemas.ts`.

Public article routes use `lib/content/articles.ts`. Route files should not parse content
directly.

## Planned later: CMS

Decap CMS and headless CMS integrations are not active in the base scaffold.

The localized content paths and frontmatter fields are compatible with a future Decap
setup. A later integration can add `/admin` and Decap collection config without moving
article files.

A future headless CMS can implement the `ContentSource` contract in
`lib/content/source.ts`.

Sanity is the preferred first candidate, but it is not part of v1.

## Not part of v1

Database backed content is not part of v1. Keep database work out of the scaffold until a
client project needs dynamic data, auth or application behavior.
