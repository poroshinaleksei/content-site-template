# Task

## Summary

Define the next generator architecture step so Codex can create a new downstream site
project through a create app style bootstrap flow, similar to how React, Next.js, or
Vite projects are initialized, with a publishable launcher package that Codex can invoke
through `npx` or `npm create`.

## Context

- The current repository already contains an in repository generator at
  `scripts/generate-site.mjs`.
- That generator expects a local scaffold copy because it reads template files, copies
  the scaffold into the target directory, runs setup, installs dependencies, and verifies
  the baseline project.
- The current flow works when Codex has a local checkout of this repository.
- The requested next step is a more launcher like experience where Codex can start from a
  GitHub source reference and trigger a create app style flow without requiring a manual
  clone step in the user workflow.
- The preferred delivery model is now a published bootstrap launcher package, not only an
  in repository helper script.
- The goal is to keep the scaffold architecture AI friendly and avoid duplicating setup
  logic, prompts, presets, or file generation logic.

## Proposed approach

Introduce a small bootstrap entry point whose only responsibility is to fetch the
scaffold source, materialize a temporary working copy, and delegate to the in repository
generator.

Target behavior:

1. Codex receives a GitHub URL or equivalent scaffold reference.
2. Codex runs one bootstrap command, similar in spirit to `npx create-*`.
3. The bootstrap command downloads an archive or another lightweight source package of the
   scaffold, instead of doing a full git clone.
4. The bootstrap command extracts the scaffold into a temporary directory.
5. The bootstrap command invokes the local in repository generator from that temporary
   scaffold copy.
6. The generator continues to own setup questions, config generation, install, and
   baseline verification.

Recommended architecture:

- keep `scripts/generate-site.mjs` as the main generator contract
- add a publishable bootstrap layer instead of teaching Codex to reconstruct the scaffold directly
- prefer archive download over full git clone for the bootstrap source fetch
- keep question and output logic in one shared place so bootstrap and setup flows do not
  drift

Preferred implementation direction:

- create a tiny published launcher package, for example `create-content-site`
- keep the scaffold and generator logic in this repository
- make the launcher responsible only for argument parsing, archive download, extraction,
  and delegation to `generate-site.mjs`
- allow the launcher to accept either a default scaffold source or an explicit GitHub URL
- preserve a clean command shape such as:
  `npx create-content-site my-site`
  `npx create-content-site my-site --scaffold https://github.com/owner/repo`

## Result

Task scope defined for the next bootstrap iteration.

Working definition:

- input: a GitHub scaffold reference plus a target local directory
- output: a runnable downstream site project created through a create app style bootstrap
  flow
- interaction model: Codex invokes one bootstrap entry point, then continues through the
  existing generator flow with minimal user questions

Implementation target:

- build the desired `npx` style experience through a tiny published launcher package
- preserve the existing generator as the single source of truth for project creation
- keep the launcher thin enough that scaffold behavior stays owned by this repository

Implementation outcome:

- Added `packages/create-content-site` as the publishable launcher package.
- Added the `create-content-site` bin entry for `npx create-content-site <target>`.
- The launcher resolves GitHub scaffold URLs to `codeload.github.com` archive downloads.
- The launcher supports `--scaffold`, `--ref`, `--skip-install`, and `--skip-check`.
- The launcher extracts the scaffold into a temporary directory and runs
  `scripts/generate-site.mjs` from that extracted copy.
- The in repository generator remains the generator contract and still owns setup,
  install, and verification behavior.
- The generator skips `packages/create-content-site` when copying scaffold files into a
  downstream site project.

Recommended publish model:

- package name: prefer a dry create style name such as `create-content-site`
- distribution: publish to npm so Codex can use `npx` or `npm create`
- package responsibility: fetch, unpack, delegate
- scaffold responsibility: setup questions, project generation, install, verification

Recommended publish checklist for later execution:

1. Create a dedicated launcher package with a `bin` entry.
2. Point it at the default scaffold GitHub repository and branch.
3. Test the launcher locally with `npm pack` and `npx ./create-content-site-*.tgz`.
4. Log in with `npm login` using the target account.
5. Publish with `npm publish --access public`.
6. Verify `npx create-content-site@latest <target-dir>` from a clean temporary folder.
7. Document the release and version bump workflow in the launcher package README.

Recommended operational note for later:

- if you already have access to the npm account, keep publish credentials and package name
  ownership outside the scaffold repo docs
- the implementation task should still add a short maintainer note describing the release
  command, required permissions, and how the launcher version relates to scaffold changes

## Risks and notes

- A true `npx create-*` experience implies a published package and release workflow, which
  adds operational overhead beyond the current in repository generator.
- If bootstrap logic grows beyond archive fetch and delegation, it risks becoming a second
  generator system.
- The bootstrap flow should not push Codex toward reconstructing scaffold files from
  prompts or documentation.
- The final design should keep the user flow simple while preserving deterministic local
  project creation.
- Private scaffold repositories require `GITHUB_TOKEN` or `GH_TOKEN` for archive
  download. Without a readable public archive or token, the launcher fails before it can
  delegate to the generator.
- Public `npx create-content-site my-site` requires the configured default scaffold
  archive to be publicly readable.

## Pull request draft

### Task

Design the next step of the scaffold creation flow so Codex can create downstream site
projects through a create app style bootstrap command.

### Solution

Added a small launcher package that downloads a GitHub scaffold archive, extracts a
temporary scaffold copy, and delegates to the existing in repository generator instead of
duplicating scaffold behavior. Updated documentation for the new `npx` style path and the
existing local generator path.

### Notes

The launcher remains thin and publishable. The scaffold repository continues to own
project generation behavior. Publishing still requires npm account access and a clean
package name ownership check.
