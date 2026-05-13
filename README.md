# Website template

This repository is a private AI first starter template for informational websites.

The scaffold is intended to stay domain neutral so it can support different downstream projects, including the first expected sites for a psychologist and a writer.

It is designed so that a new client project can be created from the template, initialized through a setup flow, and then adapted by AI with minimal structural changes.

## Current scope

- Repository level workflow and agent instructions
- Scaffold plan for the first implementation version
- Pull request description template
- Task document template for planning and review notes
- Basic repository hygiene files for consistent local setup

## Target direction

- `Next.js`, `React`, `TypeScript`, `Tailwind CSS`, and `shadcn/ui`
- Typed `MDX` as the default content mode
- Config driven and section based architecture
- Optional `Decap CMS` compatibility
- Optional `GA4` integration
- Phase 1 local `setup` command inside the scaffold repository
- Phase 2 standalone `create-content-site` generator
- Future headless CMS integration, with `Sanity` as the preferred first candidate

## Project initialization

The repository itself is a GitHub template, but GitHub template creation is not interactive.

The intended workflow is:

1. Create a new repository from this template
2. Run a setup flow for the new project
3. Fill the initial project data such as site name, owner, domain, contact details, and social links
4. Continue customization through config, content, `brief.md`, and AI guided edits

## Working approach

- Use separate branches for non trivial tasks
- Keep changes incremental
- Commit on request
- Keep project documentation in English

## Planning documents

- Main scaffold plan: [docs/scaffold-v1-plan.md](/Users/aleksei/website-template/docs/scaffold-v1-plan.md)
- Task template: [docs/TASK_TEMPLATE.md](/Users/aleksei/website-template/docs/TASK_TEMPLATE.md)

## Task documents

Use [docs/TASK_TEMPLATE.md](/Users/aleksei/website-template/docs/TASK_TEMPLATE.md) when a task needs written discussion, tracked decisions, or a prepared pull request draft.
