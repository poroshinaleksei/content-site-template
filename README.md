# Website template

AI first starter template for small informational websites.

This repository is designed as a scaffold source for Codex and similar tools. It provides
a runnable baseline built with `Next.js App Router`, `React`, `TypeScript`,
`Tailwind CSS`, typed local `MDX`, config driven page composition, and reusable sections.

## Why use this scaffold

The main advantages are:

- faster creation of the first working site baseline
- fewer repeated architecture and setup decisions across client projects
- lower token usage when working through Codex, because the main customization surfaces are already structured
- more consistent project outputs across different sites
- less time spent rebuilding the same routing, content, SEO, and setup foundations
- easier downstream customization through `AGENTS.md`, `brief.md`, `config/`, and `content/`

## What it is for

Use this template to start small content focused sites such as:

- writer and author sites
- psychologist and consultant sites
- expert and personal brand sites
- small business websites
- simple brochure style sites with articles and contact information

## Current scope

The current baseline is implemented and runnable.

Current baseline includes:

- Norwegian default routes and English `/en` routes
- site presets and theme presets
- typed local `MDX` articles
- config driven sections and page composition
- structured contact, social, and external links
- optional `GA4` integration boundary
- in repository generator flow for downstream site projects
- local `pnpm setup` flow for new client projects
- documentation for setup, customization, presets, i18n, deployment, and Codex workflow

Future scaffold improvements should be tracked in `docs/scaffold-v1-plan.md` and should
assume the generator remains inside this repository unless project requirements change.

## Quick start for scaffold development

```bash
corepack enable
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Create a downstream project

The primary workflow is to generate a new site project from this scaffold. The generator
lives in this repository and is specific to this scaffold.

Use this repository as the scaffold source, not as the final client project itself.

From this repository:

```bash
pnpm install
pnpm generate:site ../my-site
```

From a new local folder when Codex has access to this repository:

```bash
node /path/to/website-template/scripts/generate-site.mjs .
```

The generator copies the scaffold into the target folder, runs the same setup question
model as `pnpm setup`, writes `AGENTS.md`, `brief.md`, and the main config files, installs
dependencies, and runs `pnpm check`.

The target directory must be empty and outside the scaffold repository.

Useful options:

- `--skip-install`: copy and configure the project without installing dependencies or running checks
- `--skip-check`: skip `pnpm check` after setup

After the generator finishes, run `pnpm dev` from the generated project and open
`http://localhost:3000`.

## Using the generator with Codex

Recommended user flow:

1. Create a new local folder or choose the new local project location.
2. Open Codex in that new project context.
3. Give Codex this repository as the scaffold source.
4. Ask Codex to create the new project from the scaffold and start the baseline site.
5. After the baseline project exists and runs, continue with client specific customization.

The practical model is:

- the generator is a local CLI inside this repository
- Codex is the orchestrator that invokes the generator
- the generator asks the setup questions
- Codex decides which answers can safely use scaffold defaults and which answers must come from the user
- Codex should keep the question set minimal and avoid asking for deeper customization before the baseline exists

Short Codex prompt example:

```text
Use the generator from this repository to create a new site project in this folder. Ask only the setup questions needed for the baseline, use scaffold defaults where possible, get the site runnable locally, and do not start deeper customization until the baseline project is ready.
```

What Codex should do from that prompt:

- invoke `scripts/generate-site.mjs` from this scaffold
- create the new downstream project in the target folder
- run the generator setup flow
- ask the user only for missing identity and contact inputs that are needed for the baseline
- use defaults and presets when the answer is non critical and the scaffold already provides a reasonable fallback
- generate or update `AGENTS.md` and `brief.md`
- install dependencies and run `pnpm check`
- start the local baseline site from the generated project
- only after that continue with deeper project specific work

What Codex should not do:

- do not customize the scaffold repository in place when the actual goal is a new site project
- do not ask the full setup questionnaire up front if defaults already cover non critical fields
- do not start redesigning pages or rewriting components before the generated baseline project runs locally

The setup flow asks for:

- site name
- owner or brand name
- user communication language
- documentation language
- site preset and theme preset
- domain and contact details
- social links
- optional `GA4` measurement ID

Questions Codex should usually ask:

- site name
- owner or brand name
- expected domain, if known
- contact email, if it should differ from the scaffold placeholder
- preset choice, only when the intended site type is not already obvious from the request

Questions Codex can often answer with defaults until later:

- theme preset, unless the user already cares about visual direction
- phone number and social links
- `GA4` measurement ID
- localized descriptions, if the user has not provided final wording yet

Commit messages, code comments, and source code stay in English.

## Main commands

- `pnpm dev`: run the development server
- `pnpm build`: create a production build
- `pnpm start`: run the production server after build
- `pnpm lint`: run ESLint
- `pnpm typecheck`: run TypeScript checks
- `pnpm format`: check formatting
- `pnpm check`: run lint, typecheck, and build
- `pnpm generate:site <target-directory>`: create a downstream site project from this scaffold
- `pnpm new:article "Article title"`: create a draft article in the default locale
- `pnpm new:article -- --locale en "Article title"`: create a draft English article
- `pnpm setup`: configure an already copied project

## Verification

Run:

```bash
pnpm check
```

This validates:

- linting
- type safety
- production build health

Dedicated unit tests and browser tests can be added later per client project or in a later scaffold phase.

## Routes

- `/`: Norwegian home page
- `/about`: Norwegian about page
- `/articles`: Norwegian article list
- `/articles/[slug]`: Norwegian article detail page
- `/contact`: Norwegian contact page
- `/en`: English home page
- `/en/about`: English about page
- `/en/articles`: English article list
- `/en/articles/[slug]`: English article detail page
- `/en/contact`: English contact page
- `/sitemap.xml`: generated sitemap
- `/robots.txt`: generated robots file

## Main customization surfaces

- `AGENTS.md`: project level working rules for Codex and similar agents
- `brief.md`: primary client brief generated by setup
- `config/site.ts`: site identity, locales, preset, and default SEO
- `config/theme.ts`: active theme preset and visual tokens
- `config/presets.ts`: preset level content and page overrides
- `config/navigation.ts`: header and footer navigation
- `config/links.ts`: contact, social, and external links
- `config/features.ts`: optional feature switches
- `config/pages/*.ts`: page composition and section content
- `content/articles/<locale>/*.mdx`: local article content
- `components/sections/`: reusable section implementations

Keep client specific data in config and content first. Change components only when the
requested layout or behavior cannot be expressed through the existing configuration surface.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- local shadcn/ui compatible primitives
- `gray-matter` and `zod` for typed MDX frontmatter
- `next-mdx-remote` for MDX rendering
- `@next/third-parties/google` for optional `GA4`

## Documentation

- [Customization guide](docs/customization-guide.md)
- [Codex guide](docs/codex-guide.md)
- [Setup guide](docs/setup-guide.md)
- [Deployment guide](docs/deployment-guide.md)
- [Content modes](docs/content-modes.md)
- [i18n guide](docs/i18n-guide.md)
- [Presets guide](docs/presets-guide.md)
- [Scaffold plan and roadmap](docs/scaffold-v1-plan.md)
