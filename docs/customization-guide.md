# Customization guide

This template is designed to be changed through a small number of files.

## Brand and site data

Edit `config/site.ts` for the site name, owner, description, production URL, locale and
default SEO image.

Use `config/theme.ts` for color and typography notes. The active Tailwind tokens live in
`app/globals.css`, so update both files when a real project needs a changed visual system.

## Navigation

Edit `config/navigation.ts`.

Header and footer navigation are separate arrays. Use internal paths for local pages and
set `external: true` only for external destinations.

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

## Articles

Add articles in `content/articles/`.

```bash
pnpm new:article "Article title"
```

Draft articles are excluded from public lists and generated article paths while
`draft: true`.

## Contact form

The contact page includes a disabled form by default. The adapter contract lives in
`lib/forms/contact.ts`.

Connect real delivery later through a server action, email provider, Supabase or a form
service. Keep provider details out of the base scaffold until a project needs them.
