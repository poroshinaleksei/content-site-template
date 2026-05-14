# Customization guide

This template is designed to be changed through a small number of files.

## Brand and site data

Edit `config/site.ts` for the site name, owner, production URL, active site preset,
locales, localized description and default SEO image.

Choose the active visual preset in `config/theme.ts` with `themePreset`.

Supported theme presets:

- `nordic-warm`
- `minimal`
- `playful`
- `editorial`

Theme presets define colors, border radius, typography style, background style, spacing
density and button style. Components consume these values through CSS variables and
Tailwind tokens.

Theme fit:

- `nordic-warm`: calm editorial sites, consultants, psychologists and general service
  sites.
- `minimal`: restrained professional sites where content and typography should stay
  quiet.
- `playful`: children's books, creative work and sites that can use warmer accents and
  more space.
- `editorial`: writer, author and essay driven sites with a stronger publication feel.

Keep theme presets as starting points. For client work, adjust tokens in
`config/theme.ts` before hardcoding colors in reusable components.

## Site presets

Choose the active site preset in `config/site.ts` with `siteType`.

Supported site presets:

- `single-childrens-book`
- `writer-author`
- `psychologist`
- `small-business`

Preset metadata and page overrides live in `config/presets.ts`. Use
`docs/presets-guide.md` when changing preset behavior.

## Languages

The default locale is `nb` and uses unprefixed URLs. English uses `/en`.

Use `docs/i18n-guide.md` for route structure, localized content paths and SEO alternate
rules.

## Navigation

Edit `config/navigation.ts`.

Header and footer navigation are locale aware. Use internal paths for local pages and set
`external: true` only for external destinations.

## Links and profiles

Edit `config/links.ts`.

Use `contactLinks` for email, phone, maps and contact destinations. Use `socialLinks` for
profiles. Use `externalLinks` for booking, marketplaces or other external services.

The icon names are typed in `config/types.ts`. Components render icons through a shared
mapping in `components/links/link-icon.tsx`.

## Page composition

Edit files in `config/pages/`.

Each page has a stable `sections` array. Reorder sections by changing the array. Disable a
section by adding `enabled: false`.

Supported section types in v1:

- `hero`
- `about`
- `services`
- `articles`
- `testimonials` (contract only)
- `faq` (contract only)
- `cta`
- `contact-form`
- `book-hero`
- `book-intro`
- `book-details`
- `illustration-gallery`
- `where-to-buy`
- `for-parents`
- `for-kindergarten`
- `author-bio`
- `illustrator-bio`
- `press-links`

## Articles

Add articles in `content/articles/<locale>/`.

```bash
pnpm new:article "Article title"
pnpm new:article -- --locale en "English article title"
```

Draft articles are excluded from public lists and generated article paths while
`draft: true`.

## Contact form

The contact page includes a disabled form by default. The adapter contract lives in
`lib/forms/contact.ts`.

Connect real delivery later through a server action, email provider, Supabase or a form
service. Keep provider details out of the base scaffold until a project needs them.
