# Presets guide

Site presets describe the expected page set, section set and content needs for a common
client site type.

Choose the active preset in `config/site.ts`:

```ts
export const siteConfig = {
  siteType: "single-childrens-book",
  // ...
};
```

Supported presets:

- `single-childrens-book`
- `writer-author`
- `psychologist`
- `small-business`

The preset registry lives in `config/presets.ts`.

## Single children's book

This preset is the most specific v1 preset. It is intended for one book, one author and a
small set of clear purchase or contact actions.

Sections:

- `BookHero`
- `BookIntro`
- `BookDetails`
- `IllustrationGallery`
- `WhereToBuy`
- `ForParents`
- `ForKindergarten`
- `AuthorBio`
- `IllustratorBio`
- `PressLinks`
- `Contact`

Pages:

- `home`
- `about`
- `articles`
- `contact`

Expected data:

- Book title
- Subtitle
- Book description
- Author
- Illustrator
- Publisher
- ISBN
- Cover image
- Illustrations
- Purchase links
- Press or review links
- Age range
- Language
- Format
- Page count
- Themes
- Author bio
- Illustrator bio
- Contact details

The preset currently overrides the home page composition. Other pages continue to use the
generic localized page configs unless the preset adds a page override.

## Writer or author

Sections:

- `Hero`
- `About`
- `Articles`
- `CTA`
- `ContactForm`

Expected data:

- Author bio
- Books or works
- Articles
- Social links

## Psychologist

Sections:

- `Hero`
- `About`
- `Services`
- `FAQ`
- `CTA`
- `ContactForm`

Expected data:

- Practice description
- Services
- Credentials
- Contact details

## Small business

Sections:

- `Hero`
- `About`
- `Services`
- `Articles`
- `CTA`
- `ContactForm`

Expected data:

- Business description
- Services
- External links
- Contact details

## Adding a preset

Add the preset key to `SitePreset` in `config/types.ts`, then add an entry to
`presetRegistry` in `config/presets.ts`.

Keep preset overrides small. Prefer `config/pages/*.ts` for shared page composition and
use `pageOverrides` only when a site type needs a different structure.
