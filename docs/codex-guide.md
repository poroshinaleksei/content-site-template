# Codex guide

Use this guide when adapting the template with Codex.

## First files to read

1. `brief.md`, when it exists.
2. `config/site.ts`
3. `config/pages/`
4. `config/links.ts`
5. `content/articles/`

If `brief.md` does not exist, start from `brief.example.md` or run `pnpm setup`.

## Preferred edit order

Change config and content before changing route components.

Use page composition files for section order, labels and copy. Use `config/links.ts` for
contact destinations and social profiles. Use MDX files for article content.

## What to avoid

- Do not duplicate client data in components when it belongs in config.
- Do not hardcode social links inside pages or layout components.
- Do not add CMS, analytics, database or form provider code to the core path unless the
  project specifically needs it.
- Do not make a niche page model in this template repository.

## Quality checks

Run these before delivery:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Use `pnpm check` when a single command is enough.
