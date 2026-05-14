# create-content-site

Create a downstream content site project from the public scaffold.

The launcher downloads a scaffold repository archive from GitHub, extracts it into a
temporary directory, and delegates project creation to the scaffold repository's existing
`scripts/generate-site.mjs` entry point.

It does not own setup prompts, config generation, dependency install, or project
verification. Those remain in the scaffold repository.

## Usage

```bash
npx create-content-site my-site
npm create content-site@latest my-site
npx create-content-site my-site --scaffold https://github.com/poroshinaleksei/content-site-template
npx create-content-site my-site --scaffold https://github.com/poroshinaleksei/content-site-template --ref main
```

The default `npx create-content-site my-site` flow downloads the scaffold from:

```text
https://github.com/poroshinaleksei/content-site-template
```

Useful options:

- `--skip-install`: create and configure the project without installing dependencies or
  running checks.
- `--skip-check`: install dependencies but skip the scaffold generator's `pnpm check`
  step.
