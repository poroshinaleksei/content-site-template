# Task

## Summary

Define and implement a generator flow inside this repository so Codex can create a new
site project from the scaffold instead of customizing the scaffold repository in place.

## Context

- The current scaffold already supports `pnpm setup` after the scaffold files exist in a
  project folder.
- The intended workflow is now more specific: the user opens a new local folder in
  Codex, points Codex to this repository, and asks it to create a new site project from
  this scaffold.
- The generator is not meant to create another scaffold template. It is meant to create
  a new website project from the existing scaffold.
- The generator should stay in this repository because it is specific to this scaffold.
- The workflow should minimize unnecessary token usage by preferring existing setup
  questions, defaults, presets, and generated project instructions.

## Proposed approach

1. Define a generator entry point that Codex can invoke from a new local project folder.
2. Reuse the current setup question model where possible instead of inventing a parallel
   configuration flow.
3. Copy or initialize the scaffold into the target project folder before deeper
   customization starts.
4. Generate the initial project identity, including `AGENTS.md`, `brief.md`, and the
   main config files.
5. Confirm that the generated project reaches a runnable baseline before any client
   specific design or content work begins.
6. Keep the generator scope narrow: create a new site project from this scaffold, do not
   turn it into a general purpose project creator.

## Result

Task scope defined for generator work inside this repository.

Working definition:

- input: a new local folder plus a Codex prompt that points to this scaffold repository
- output: a runnable new site project derived from this scaffold
- interaction model: the generator asks the user the required setup questions and uses
  defaults for non critical decisions

Planned outcome:

- Codex should be able to use this repository as the scaffold source, initialize a new
  project, run setup, and only then continue with downstream customization.

Implementation outcome:

- `scripts/generate-site.mjs` is the generator entry point.
- `pnpm generate:site <target-directory>` runs the generator from this repository.
- `scripts/setup-core.mjs` owns the shared setup question and output contract.
- `scripts/setup.mjs` remains available for configuring an already copied project.
- The generator copies the scaffold, runs setup in the target project, installs
  dependencies, and runs `pnpm check`.

## Risks and notes

- The generator must not duplicate logic that already exists in `pnpm setup` unless
  there is a clear reason.
- The workflow should stay explicit about the difference between the scaffold source
  repository and the generated downstream project.
- Future improvements should stay inside this repository unless the scaffold specific
  assumptions stop being true.
- The implementation should optimize for reliable local project creation and low token
  usage.

## Pull request draft

### Task

Define the generator workflow for creating a new site project from the scaffold inside
this repository.

### Solution

Added an in repository generator entry point for downstream site projects. The setup
question and output logic now lives in a shared module used by both `pnpm setup` and
`pnpm generate:site`, so generator and setup behavior stay aligned.

### Notes

The generator is scaffold specific and stays in this repository. It verifies the
generated baseline with `pnpm check`; Codex should start `pnpm dev` from the generated
project after generation when a browser check is needed.
