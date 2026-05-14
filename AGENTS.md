# Project instructions

## Project context

This project was created from the content site scaffold.
It should keep the scaffold architecture unless the brief or a validated project need requires a change.
Use `brief.md` and `config/` as the main sources of project specific truth.

If this repository is still in its generic scaffold state, treat it as a scaffold source first.
In that case, create a new local project from it, run `pnpm setup`, and get the baseline site running before doing deeper customization work.
Do not start with deep component rewrites while the project identity is still generic.

Current default project identity:

- Site name: Website template
- Owner or brand: Site owner
- Domain: https://example.com
- Site preset: small-business
- Theme preset: nordic-warm

If these values are still generic, run `pnpm setup` before doing substantial customization work.

## Working language

- User communication: Russian
- Documentation and pull request text: English
- Commit messages, code comments, and source code: English

## First files to read

- `AGENTS.md`
- `brief.md`, when it exists
- `config/site.ts`
- `config/theme.ts`
- `config/presets.ts`
- `config/pages/`
- `config/links.ts`

If `brief.md` does not exist, start from `brief.example.md` or run `pnpm setup`.

## Scaffold source workflow

If the user asks to create a new site from this repository:

- treat this repository as the scaffold source
- create a new local project first instead of customizing the source repository in place
- run `pnpm install`
- run `pnpm setup`
- run `pnpm dev`
- confirm that the baseline site is runnable
- only after that continue with client specific customization

Question handling in scaffold mode:

- prefer existing defaults, presets, and config surfaces first
- avoid asking non critical questions before the runnable baseline project exists
- ask follow up questions only when a missing answer materially affects architecture, feature scope, or data handling

## Repository workflow

- Use `main` as the stable branch.
- Start each non trivial task in a new branch.
- Use branch prefixes such as `feat/`, `fix/`, `docs/`, `chore/`, or `refactor/`.
- Keep branch names short and specific.
- Do not push branches. The user handles `git push`.
- Commit only when the user asks for it.
- Prefer small, sequential changes over large batches.
- After a non trivial task, suggest whether the current state should be committed.

## Delivery workflow

- Complete the requested task end to end when the scope is clear.
- After each completed task, report what changed.
- After each completed task, report issues or risks found.
- After each completed task, report relevant alternatives when a decision matters.
- If the user asks for a commit, review diffs per changed file before committing.
- If the user asks for a pull request description, use the template from `.github/pull_request_template.md`.
- When a task needs written discussion or tracking, create a task document from `docs/TASK_TEMPLATE.md`.
- Include the pull request draft in the task document when that task document exists.

## Customization approach

- Prefer config and content changes before changing route components.
- Keep client specific data in `config/`, `brief.md`, and content files before adding it to components.
- Keep reusable section contracts stable unless the requested behavior cannot be expressed through the current configuration surface.
- Do not duplicate site metadata, contact data, social links, or brand strings across multiple files.
- Keep the project understandable for future AI and human edits.
- When starting from the scaffold source, create the baseline project first and customize second.

## Frontend work

- This is a frontend first project. Treat layout, typography, spacing, hierarchy, and responsive behavior as product level concerns.
- Use a design oriented frontend approach for pages, sections, and visual systems instead of shipping a purely technical baseline.
- Prefer reusable visual tokens, section patterns, and consistent interaction states over one off styling.
- Avoid generic placeholder looking UI when implementing real site pages.
- When the environment provides frontend design, browser, or frontend testing skills, prefer them for implementation and verification.
- After notable UI changes, verify the result in a browser when practical.

## Scope control

- Use the brief and config as the source of project specific decisions.
- Do not invent business rules, content sections, or design language beyond what the brief, preset, or direct user request supports.
- Prepare clean extension points instead of premature abstractions.
- Keep optional systems such as CMS, analytics, database, and form delivery outside the core path unless the project specifically needs them.

## Quality expectations

- Use a risk based approach tied to production impact, data handling, security, accessibility, SEO, and maintainability.
- Cover critical paths with tests when the stack and scope justify them.
- Match the existing conventions once the project structure is established.
- Keep starter code readable and easy to modify by hand.

## Reusable content guidance

- Prefer reusable content blocks over niche specific page structures.
- Keep block APIs simple enough for manual editing in downstream projects.
- Avoid hardcoded assumptions about profession, brand tone, taxonomy, or conversion goals.

## SEO baseline

- Treat semantic HTML, metadata structure, crawlability, and social metadata as baseline concerns.
- Leave room for per project overrides such as titles, descriptions, canonical URLs, and structured data.

## Accessibility baseline

- Treat keyboard navigation, color contrast, semantic landmarks, and form labeling as default expectations.
- Do not accept visual patterns that depend on pointer only interaction.
- Keep accessibility requirements visible in architecture and component decisions.

## Documentation

- Update `docs/PROGRESS.md` for noticeable project changes.
- Keep notes short, factual, and reverse chronological.
- Use English in project documentation files.

## Pull request description template

When asked to prepare a pull request description, use this structure:

```md
## Task

Describe the task or need.

## Solution

Describe how the task was solved.

## Notes

List notable tradeoffs, risks, follow up work, or testing notes.
```
