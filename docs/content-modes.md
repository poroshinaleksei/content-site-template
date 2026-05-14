# Content modes

## Local MDX mode

Local MDX is the default mode in v1.

Articles live in `content/articles/*.mdx`. Frontmatter is parsed with `gray-matter` and
validated with `zod` in `lib/content/schemas.ts`.

Public article routes use `lib/content/articles.ts`. Route files should not parse content
directly.

## Decap CMS mode

Decap CMS is not active in the base scaffold.

The content paths and frontmatter fields are compatible with a future Decap setup. A later
integration can add `/admin` and Decap collection config without moving article files.

## Headless CMS mode

A future headless CMS can implement the `ContentSource` contract in
`lib/content/source.ts`.

Sanity is the preferred first candidate, but it is not part of v1.

## Database mode

Database backed content is not part of v1. Keep database work out of the scaffold until a
client project needs dynamic data, auth or application behavior.
