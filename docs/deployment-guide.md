# Deployment guide

The scaffold is hosting neutral. It uses standard Next.js App Router behavior and does
not depend on a single hosting provider.

## Default recommendation

Use Vercel for the common case. It has the simplest Next.js deployment path and requires
the least project specific setup.

## Vercel

Pros:

- Low setup cost for Next.js.
- Good defaults for App Router builds.
- Simple environment variable management.

Cons:

- Provider specific operational model.
- Cost and limits should be checked for client projects with higher traffic.

## Netlify

Pros:

- Practical for editor oriented workflows.
- Useful if a future Decap CMS path uses Netlify Git Gateway.

Cons:

- Next.js support is good, but the adapter layer adds one more moving part.

## Cloudflare

Pros:

- Good edge network and cost profile.
- Useful for mostly static informational sites.

Cons:

- Some Next.js features may need extra adapter review.
- Keep the site static where possible if choosing this path.

## Environment variables

The scaffold runs without required environment variables.

Optional:

```bash
NEXT_PUBLIC_GA_ID=
```

Analytics scripts load only when this value is set.

## Forms and CMS

Form delivery and CMS auth are not part of the base boot path. Add them per project when
the deployment target and editing workflow are known.
