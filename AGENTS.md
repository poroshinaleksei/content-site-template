# Project instructions

## Project context

This repository is a GitHub template for starting informational websites.
It should stay generic by default and avoid early coupling to a specific niche, brand, or content model.
The first expected downstream sites are for a psychologist and a writer, but the scaffold must remain reusable for other content focused websites.

## Working language

- User communication: Russian
- Documentation, commit messages, pull request text, code comments, and source code: English

## Repository workflow

- Use `main` as the stable branch.
- Start each non trivial task in a new branch.
- Use branch prefixes such as `feat/`, `fix/`, `docs/`, `chore/`, or `refactor/`.
- Keep branch names short, specific, and readable, for example `feat/homepage-hero`, `fix/navigation-layout`, or `docs/setup-workflow`.
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

## Scope control

- Prefer reusable structure over niche specific implementation.
- Do not invent business rules, content sections, design language, or architecture details before they are requested.
- When requirements are still open, prepare clean extension points instead of premature abstractions.
- Keep the scaffold domain neutral so it can be reused for different informational websites.

## Quality expectations

- Use a risk based approach tied to production impact, data handling, security, accessibility, SEO, and maintainability.
- Cover critical paths with tests when the stack and scope justify them.
- Match the existing conventions once the project structure is established.
- Keep generated starter code readable and easy to modify by hand.

## Reusable content guidance

- Prefer reusable content blocks over niche specific page structures.
- Keep block APIs simple enough for manual editing in downstream projects.
- Avoid hardcoded assumptions about profession, brand tone, taxonomy, or conversion goals.

## SEO baseline

- Treat semantic HTML, metadata structure, crawlability, and social metadata as baseline concerns.
- Avoid SEO specific implementation details that depend on a framework until the stack is chosen.
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

## Open decisions to confirm later

- Template stack and rendering model
- Content source strategy
- Styling approach and design system depth
- SEO baseline and analytics requirements
- Form handling and CMS needs
