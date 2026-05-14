# Publish guide

Use this guide when releasing the `create-content-site` npm package. Use
`docs/release-guide.md` for scaffold tag and release guidance.

## Package location

The launcher package lives in:

```text
packages/create-content-site
```

The public package name is:

```text
create-content-site
```

## Before publish

Confirm that the default public scaffold source is correct in:

```text
packages/create-content-site/bin/create-content-site.js
```

The current default source is:

```text
https://github.com/poroshinaleksei/content-site-template
```

Run:

```bash
cd packages/create-content-site
npm pack --dry-run --json
npm publish --dry-run --access public
```

## Publish

Run:

```bash
cd packages/create-content-site
npm login
npm publish --access public
```

## Verify

Check package metadata:

```bash
npm view create-content-site version dist-tags repository homepage bugs --json
```

Check the public install flow from a clean temporary directory:

```bash
mkdir -p /tmp/create-content-site-check
cd /tmp/create-content-site-check
npx create-content-site@latest my-site --skip-install
```
