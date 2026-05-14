# Codex guide

Use this guide when adapting the template with Codex.

## Default behavior

When this repository is still generic, Codex should treat it as a scaffold source.

The expected order is:

1. Create a new local project from this scaffold.
2. Run `pnpm install`.
3. Run `pnpm setup`.
4. Run `pnpm dev`.
5. Confirm the baseline site is runnable.
6. Only then continue with client specific customization.

Do not start with deep customization while the project still has generic identity values.
Use defaults, presets, and setup output first. Ask follow up questions only when a missing
answer materially affects architecture, feature scope, or data handling.

## First files to read

1. `AGENTS.md`
2. `brief.md`, when it exists.
3. `config/site.ts`
4. `config/theme.ts`
5. `config/presets.ts`
6. `config/pages/`
7. `config/links.ts`
8. `content/articles/`

If `brief.md` does not exist, start from `brief.example.md` or run `pnpm setup`.

## Preferred edit order

Change config and content before changing route components.

Use `config/site.ts` for active locale, preset and site metadata. Use `config/theme.ts`
for visual preset changes. Use page composition files for section order, labels and copy.
Use `config/links.ts` for contact destinations and social profiles. Use localized MDX
files for article content.
Use `AGENTS.md` as the source of truth for user communication language and documentation language.

## Prompt pattern

When the user wants a new site from this scaffold, a short prompt should be enough.

Example:

```text
Use this repository as the scaffold source. Create a new local project first, run setup, get the baseline site running, then customize it through AGENTS.md, brief.md, config/, and content/.
```

## What to avoid

- Do not duplicate client data in components when it belongs in config.
- Do not hardcode social links inside pages or layout components.
- Do not add CMS, analytics, database or form provider code to the core path unless the
  project specifically needs it.
- Do not make a niche page model in this template repository.
- Do not hardcode language dependent UI text in components.
- Do not ask non critical follow up questions before the runnable baseline project exists.
- Do not start by modifying the scaffold source repository when the actual goal is a new project.
- Do not ignore the generated language rules in `AGENTS.md`.

## Quality checks

Run these before delivery:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Use `pnpm check` when a single command is enough.
