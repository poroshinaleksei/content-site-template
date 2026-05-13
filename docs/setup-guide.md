# Setup guide

Use the setup command after creating a new repository from this template.

```bash
pnpm setup
```

## Questions

The command asks for:

- Site name
- Owner or brand name
- Short site description
- Expected domain
- Contact email
- Contact phone
- LinkedIn URL
- Instagram URL
- Facebook URL
- GA4 measurement ID

## Files updated

- `config/site.ts`
- `config/links.ts`
- `config/features.ts`
- `brief.md`
- `.env.local`, only when a GA4 measurement ID is provided

## After setup

Review the generated files, then update page composition in `config/pages/` and article
content in `content/articles/`.

Run:

```bash
pnpm check
```

The command is local to this repository for phase 1. A later phase can extract the same
questions and output contract into a standalone generator package.
