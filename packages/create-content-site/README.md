# create-content-site

Thin bootstrap launcher for the content site scaffold.

The launcher downloads a scaffold repository archive from GitHub, extracts it into a
temporary directory, and delegates project creation to the scaffold repository's existing
`scripts/generate-site.mjs` entry point.

It does not own setup prompts, config generation, dependency install, or project
verification. Those remain in the scaffold repository.

For private scaffold repositories, run the launcher with `GITHUB_TOKEN` or `GH_TOKEN`
available in the environment. The token needs read access to the scaffold repository.

## Usage

```bash
npx create-content-site my-site
npm create content-site@latest my-site
npx create-content-site my-site --scaffold https://github.com/owner/repo
npx create-content-site my-site --scaffold https://github.com/owner/repo --ref main
```

Useful delegated options:

- `--skip-install`: create and configure the project without installing dependencies or
  running checks.
- `--skip-check`: install dependencies but skip the scaffold generator's `pnpm check`
  step.

## Maintainer notes

The package name is set in `package.json` under `name`. The default scaffold source and
default ref are set in `bin/create-content-site.mjs`.

Before publishing, confirm that the default scaffold archive URL is readable by the
intended users. Public `npx create-content-site my-site` requires a public scaffold
archive.

Local package check:

```bash
cd packages/create-content-site
npm pack
mkdir -p /tmp/create-content-site-check
cd /tmp/create-content-site-check
npx /path/to/create-content-site-0.1.0.tgz my-site --skip-install
cd /path/to/website-template/packages/create-content-site
```

Publish flow:

```bash
cd packages/create-content-site
npm login
npm publish --access public
```

After publish, verify from a clean temporary directory:

```bash
npx create-content-site@latest my-site --skip-install
```
