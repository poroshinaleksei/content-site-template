# Release guide

Use this guide when creating stable scaffold releases.

## Two version lines

This repository has two related version lines:

- Scaffold repository tags describe the source snapshot used to create downstream sites.
- The `create-content-site` npm package version describes the launcher code and npm
  package documentation.

The launcher is intentionally thin. Most site behavior comes from the scaffold archive it
downloads from GitHub.

## Scaffold tags

For production scaffolds, prefer a Git tag or GitHub release instead of a moving branch.

Example:

```bash
npx create-content-site my-site --scaffold https://github.com/poroshinaleksei/content-site-template --ref v0.1.0
```

Use `main` for active development and smoke testing. Use tags such as `v0.1.0` when the
same scaffold snapshot should be repeatable later.

TODO: create `v0.1.0` after the main branch checks pass and the current scaffold snapshot
is accepted as the first stable public scaffold release.

## Launcher releases

The npm launcher package lives in `packages/create-content-site`.

Publish launcher changes when the CLI behavior, package metadata, or npm package README
changes. Use `docs/publish-guide.md` for the npm release steps.

Do not move setup prompts, config generation, dependency install, or verification into
the launcher. Those belong to the scaffold generator.
