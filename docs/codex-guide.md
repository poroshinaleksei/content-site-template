# Codex guide

Use this guide when adapting the template with Codex.

## Default behavior

When this repository is still generic, Codex should treat it as a scaffold source.

The expected order is:

1. Use the `npx` launcher when starting from a GitHub scaffold URL.
2. Use the in repository generator when a local scaffold checkout is already available.
3. Create a new local project from this scaffold.
4. Run the generator setup questions with the user.
5. Let the generator install dependencies and run `pnpm check`.
6. Run `pnpm dev` from the generated project.
7. Confirm the baseline site is runnable in a browser.
8. Only then continue with client specific customization.

Do not start with deep customization while the project still has generic identity values.
Use defaults, presets, and setup output first. Ask follow up questions only when a missing
answer materially affects architecture, feature scope, or data handling.

## Launcher entry point

The preferred bootstrap path for a new empty local folder is the launcher package:

```bash
npx create-content-site my-site
npm create content-site@latest my-site
npx create-content-site my-site --scaffold https://github.com/owner/repo
npx create-content-site my-site --scaffold https://github.com/owner/repo --ref main
```

The launcher downloads the scaffold as a GitHub archive, extracts it into a temporary
directory, and then runs the scaffold's `scripts/generate-site.mjs`. It does not use
`git clone`.

The scaffold repository remains the source of truth. The launcher must stay a thin
bootstrap layer and must not duplicate setup prompts, config generation, install, or
verification behavior.

## Generator entry point

The generator lives inside this repository. It creates a downstream site project from
this scaffold and reuses the setup flow instead of duplicating the questions.

From this repository:

```bash
pnpm generate:site ../my-site
```

From a new local folder when Codex has access to the scaffold path:

```bash
node /path/to/website-template/scripts/generate-site.mjs .
```

Both paths end at the same generator contract. The target directory must be empty and
outside the scaffold repository. The generator copies scaffold files, skips local build
and dependency artifacts, writes project identity files, installs dependencies, and
verifies the baseline with `pnpm check`.

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
Use npx create-content-site with this GitHub scaffold URL to create a new site project in this folder. Ask only the setup questions needed for the baseline, use scaffold defaults where possible, get the site runnable locally, and do not start deeper customization until the baseline project is ready.
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
