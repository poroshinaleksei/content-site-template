# i18n guide

The scaffold ships with two locales:

- `nb`: default locale, served without a URL prefix.
- `en`: English locale, served under `/en`.

The default URL structure is:

- `/`: Norwegian home page.
- `/about`: Norwegian about page.
- `/articles`: Norwegian article list.
- `/articles/[slug]`: Norwegian article detail page.
- `/contact`: Norwegian contact page.
- `/en`: English home page.
- `/en/about`: English about page.
- `/en/articles`: English article list.
- `/en/articles/[slug]`: English article detail page.
- `/en/contact`: English contact page.

## Configuration

Edit locale settings in `config/site.ts` and `config/i18n.ts`.

`config/site.ts` owns the default locale, supported locales, locale labels, localized
site description and localized default SEO data.

`config/i18n.ts` owns the URL prefix map. Add a new locale to `Locale` in
`config/types.ts`, then add the locale to `siteConfig.locales`, `siteConfig.localeLabels`
and `i18nConfig.localePrefix`.

## Localized copy

Keep language dependent text out of components.

Use these files first:

- `config/messages.ts` for shared UI labels.
- `config/navigation.ts` for header and footer links.
- `config/pages/*.ts` for page sections and page metadata.
- `content/articles/<locale>/*.mdx` for article content.

## Articles

Create a Norwegian article:

```bash
pnpm new:article "Article title"
```

Create an English article:

```bash
pnpm new:article -- --locale en "Article title"
```

Draft articles are excluded from public routes while `draft: true`.

## SEO

Metadata helpers add localized alternates for page routes. The sitemap includes localized
URLs for default and non default locales.

When adding a new route, use the locale aware helpers from `lib/i18n.ts` and
`lib/seo/metadata.ts` instead of assembling localized URLs in the route file.
