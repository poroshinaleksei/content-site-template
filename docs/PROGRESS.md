# Progress

## 2026-05-14

- Simplified public launcher documentation, made the npm package the primary public entry point, and moved maintainer publish instructions into a dedicated publish guide.
- Added the `create-content-site` launcher package for `npx` style bootstrap through GitHub archive download and generator delegation.
- Added a task document for the `npx` style bootstrap direction and aligned it around a published launcher package instead of an in repository only bootstrap helper.
- Removed outdated `phase 1` and standalone generator wording from the public docs, and aligned future planning around the in repository generator flow.
- Clarified the `README.md` generator workflow so Codex and the in repository generator have explicit roles around setup questions, defaults, and baseline first execution.
- Added the in repository site project generator entry point and shared setup core used by both `pnpm setup` and `pnpm generate:site`.
- Updated generator, setup, README, and Codex workflow documentation for the baseline first downstream project flow.
- Added a dedicated task document for the in repository site project generator workflow.
- Tightened the recommended Codex prompt in `README.md` and `docs/codex-guide.md` to make the baseline first workflow more explicit.
- Added a clearer value proposition to `README.md`, including faster project setup, lower token usage, and more consistent client project output.
- Adjusted the `README.md` Codex section to describe the user facing workflow first and the internal Codex actions second.
- Refined `README.md` into a cleaner product level entrypoint with a tighter Codex usage flow and clearer scope description.
- Updated `README.md` to reflect the initial runnable scaffold baseline and to document the current verification baseline.
- Added explicit frontend first and design oriented rules to `AGENTS.md` and `AGENTS.template.md`.
- Extended `pnpm setup` and `AGENTS` templating to ask for user communication language and documentation language in generated projects.
- Tightened scaffold source instructions in `AGENTS.md`, `README.md`, and `docs/codex-guide.md` so Codex creates a runnable baseline project before deeper customization.
- Replaced duplicated `AGENTS` text in setup with a single `AGENTS.template.md` source.
- Updated `AGENTS.md` to work as a downstream project instruction file and taught `pnpm setup` to rewrite it with project specific identity.
- Added localized routing for Norwegian default URLs and English `/en` URLs, including localized navigation, UI messages, metadata alternates, sitemap entries and article content folders.
- Added theme presets for visual configuration through `config/theme.ts`, CSS variables and Tailwind tokens.
- Added site presets in `config/presets.ts`, including a `single-childrens-book` home page composition with book sections.
- Updated local setup and article scaffolding commands for locale aware content, site preset selection and theme preset selection.
- Added documentation for i18n, presets, theme customization and localized content paths.

## 2026-05-13

- Implemented the initial scaffold baseline with Next.js App Router, React, TypeScript, Tailwind CSS, config driven pages, reusable sections, typed local MDX articles, SEO defaults, optional GA4 boundary, contact form adapter contract, setup command, article scaffolding command and starter documentation.
- Updated the scaffold plan and `README.md` with the setup CLI direction, future headless CMS support, and project initialization workflow.
- Expanded `docs/scaffold-v1-plan.md` with stronger AI first requirements, structured external links and social profile support, and deployment recommendation guidance.
- Updated `docs/scaffold-v1-plan.md` with the agreed Decap CMS and Google Analytics direction.
- Added `docs/scaffold-v1-plan.md` to store the agreed implementation plan for the first scaffold version.
- Added baseline repository files, `.gitignore`, `.editorconfig`, and `.gitattributes`.
- Added `README.md` with the repository purpose and workflow summary.
- Added `docs/TASK_TEMPLATE.md` so task discussion and pull request draft can live in one place.
- Expanded `AGENTS.md` with branch naming rules, smaller commit guidance, domain neutral scope, and baseline sections for reusable content, SEO, and accessibility.
- Initialized the repository with the `main` branch.
- Added the initial `AGENTS.md` with project workflow, language rules, and delivery expectations.
- Added the pull request description template and linked it from `AGENTS.md`.
