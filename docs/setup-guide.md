# Setup guide

Use the generator when creating a new downstream site project from this scaffold. Use
`pnpm setup` only after the scaffold files already exist in the target project.

## Generator flow

From this repository:

```bash
pnpm generate:site ../my-site
```

From a new local folder when Codex has access to the scaffold path:

```bash
node /path/to/website-template/scripts/generate-site.mjs .
```

The generator:

- copies this scaffold into the target directory
- skips `.git`, `node_modules`, `.next`, build output, cache files, logs and local env files
- runs the shared setup question flow in the generated project
- writes `AGENTS.md`, `brief.md`, and the main config files
- runs `pnpm install`
- runs `pnpm check`

The target directory must be empty and outside the scaffold repository.

Useful options:

- `--skip-install`: copy and configure the project without installing dependencies or running checks
- `--skip-check`: skip `pnpm check` after setup

After generation, run `pnpm dev` from the generated project and open
`http://localhost:3000`.

## Setup flow

Use the setup command after copying scaffold files into a project folder.

```bash
pnpm setup
```

## Questions

The command asks for:

- Site name
- Owner or brand name
- User communication language
- Documentation language
- Short site description in Norwegian
- Short site description in English
- Expected domain
- Site preset
- Theme preset
- Contact email
- Contact phone
- LinkedIn URL
- Instagram URL
- Facebook URL
- GA4 measurement ID

## Files updated

- `AGENTS.md`
- `AGENTS.template.md` is used as the source template for `AGENTS.md`
- `config/site.ts`
- `config/theme.ts`
- `config/links.ts`
- `config/features.ts`
- `brief.md`
- `.env.local`, only when a GA4 measurement ID is provided

## After setup

Review the generated files, especially `AGENTS.md`, then update page composition in
`config/pages/`, active preset data in `config/presets.ts`, and article content in
`content/articles/<locale>/`.

The setup flow uses the selected communication and documentation languages in `AGENTS.md`.
Commit messages, code comments, and source code still stay in English.

Run:

```bash
pnpm check
```

The generator and setup command share the same question and output contract. Keep changes
to project identity in that shared setup logic so the two flows do not drift.
