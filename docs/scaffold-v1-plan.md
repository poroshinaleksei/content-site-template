# Scaffold v1 plan

## Summary

Build a hosting neutral starter template for small informational websites using `Next.js App Router`, `React`, `TypeScript`, `Tailwind CSS`, `shadcn/ui`, and a typed `MDX` content layer.

This `v1` should support the following workflow:

- create a new repository from the GitHub template
- run a project setup flow after repository creation
- run the project locally immediately
- customize it through `brief.md`, config files, content files, and modular sections
- deploy it without strong hosting assumptions
- keep clear extension paths for `Decap CMS`, `Supabase`, and more advanced scenarios
- stay ready for optional `Decap CMS` and `Google Analytics` integration without making either one part of the core boot path
- reduce the amount of custom work needed from AI when adapting the scaffold into a new client repository

Chosen defaults:

- deployment baseline: hosting neutral
- contact form: UI and adapter boundary, no real sending by default
- content model: typed MDX layer
- architecture style: config driven and section based
- domain stance: fully domain neutral
- CMS stance: Decap compatible core, optional Decap runtime
- analytics stance: optional `GA4`, disabled by default
- AI stance: the scaffold should optimize for low effort AI customization and low risk of inconsistent edits
- setup stance: interactive project initialization should happen through a dedicated CLI or setup command after template creation

## Implementation changes

### Foundation and tooling

Create the scaffold as a standard `Next.js App Router` project with a small and predictable toolchain.

Decisions:

- use stable `Next.js 16.x`
- use `React 19`
- use `Tailwind CSS 4`
- use `shadcn/ui` only for primitives and reusable UI controls
- use `pnpm`
- use `ESLint CLI` with the Next.js configuration
- use `Prettier`
- add `dev`, `build`, `start`, `lint`, `lint:fix`, `typecheck`, `format`, `check`, and `new:article`
- plan for `setup` as the interactive initialization command
- add `.env.example` only for optional future integrations
- reserve environment variables for optional integrations such as `NEXT_PUBLIC_GA_ID`

Do not include heavy CMS logic, database setup, auth, or provider specific infrastructure in the base boot path.

Generator and setup stance:

- the GitHub template remains the distribution base
- interactive questions must not depend on GitHub template creation behavior
- project initialization questions should be handled by a dedicated CLI generator or a post create `setup` command
- the setup flow should be able to write the initial client specific config and content defaults into the new repository

Generator rollout strategy:

- phase 1: ship a local `setup` command inside the scaffold repository
- phase 2: extract the setup flow into a standalone `create-content-site` package
- keep the setup questions and output contracts stable so the extraction does not require changing the scaffold architecture

### Project architecture

Use a flat and AI friendly structure without `src/`.

AI first requirements:

- keep the main customization surfaces obvious and limited in number
- prefer config and content driven changes over component rewrites
- avoid duplicating client data across multiple files
- make common client adaptations possible without changing core architecture
- keep naming predictable so an AI agent can find the right file quickly
- keep abstractions shallow and avoid hidden conventions that require repository specific knowledge

Planned structure:

- `app/` for routes and metadata files
- `config/` for site, navigation, theme, and page composition
- `content/` for articles and simple page content
- `components/layout/` for shell, header, footer, and wrappers
- `components/sections/` for modular page blocks
- `components/mdx/` for MDX rendering mappings
- `components/ui/` for `shadcn` primitives
- `lib/content/` for typed content loading and validation
- `lib/seo/` for metadata, canonicals, and SEO helpers
- `lib/forms/` for the contact form contract and swappable adapters
- `lib/analytics/` for analytics helpers and provider boundaries
- `components/analytics/` for optional analytics wrappers
- `public/images/` for static images
- `docs/` for project documentation
- `scripts/` or an equivalent location for setup and scaffolding utilities

Do not create a monorepo, a dedicated CMS workspace, or hosting specific structure in `v1`.

### Content system and typed MDX layer

Use local file content as the primary authoring mode.

Content source strategy:

- use local file content as the default path in `v1`
- keep a clear abstraction boundary so the same site structure can later consume a headless CMS
- treat a headless CMS as an optional future content source, not as part of the base boot path

Content design:

- articles live in `content/articles/*.mdx`
- simple page content can live in `content/pages/*.mdx`
- every content file follows one stable frontmatter schema
- all content is loaded through typed loaders instead of route local file parsing
- the schema validates fields such as `title`, `slug`, `description`, `publishedAt`, `excerpt`, `coverImage`, `seo`, and `draft`
- MDX is rendered through one shared component mapping

Decisions:

- use a typed MDX pipeline with schema validation at build time
- keep the authoring format frontmatter compatible for future CMS use
- do not make `Contentlayer` part of the core
- choose one lightweight typed layer, such as `Velite` or an equivalent schema based loader, during implementation
- prepare a future content source abstraction that can support local files, `Decap CMS`, and a headless CMS such as `Sanity`

Behavior:

- the articles page reads typed entries from the content layer
- article detail pages resolve by `slug`
- draft content is excluded from public routes by default
- article ordering is descending by publish date
- route metadata is derived from content metadata and `site config`

Public interfaces introduced:

- `config/site.ts`
- `config/navigation.ts`
- `config/theme.ts`
- `config/pages/*.ts`
- `config/links.ts` or an equivalent structured config for external links, social profiles, and contact destinations
- `config/features.ts` or an equivalent feature selection contract
- typed article and page metadata contracts
- a future content source contract for local and remote content providers

### Modular sections and page composition

Pages should be assembled from sections instead of hardcoded route layouts.

Decisions:

- each section has a stable `type`
- each page is declared through config instead of JSX ordering inside route files
- a page composition file stores section order and enabled blocks
- sections receive structured props or content references instead of scattered client literals

Initial section set for `v1`:

- `Hero`
- `About`
- `Services`
- `Articles`
- `Testimonials`
- `FAQ`
- `CTA`
- `ContactForm`

Deferred but architecture ready:

- `Books`
- `Gallery`
- `Pricing`
- `Booking`
- `RequestForm`

Planned routes:

- home page
- about page
- articles list page
- article detail page
- contact page

Shared shell:

- root layout
- header
- footer
- responsive container system
- theme tokens and typography baseline

Link and profile support:

- support structured external links in config instead of hardcoded anchors inside components
- support contact destinations such as email, phone, maps, booking links, and other external services
- support social links such as `Facebook`, `Instagram`, `LinkedIn`, `X`, `YouTube`, and similar profiles
- render social and external links with icons through a shared mapping layer instead of page local markup
- keep the icon system generic so it can be reused for books, marketplaces, profiles, and service links

Example use cases:

- links to marketplaces where books, products, or services are available
- links to external booking or calendar systems
- links to social media profiles
- links to messaging apps or contact destinations

The contact form must use a stable adapter contract so that later it can connect to:

- a server action
- an email provider
- `Supabase`
- a third party forms service

For `v1`, do not bind form submission to any production provider by default.

### SEO, accessibility, and deployment baseline

Treat SEO and accessibility as core behavior.

SEO baseline:

- root metadata in the layout
- per page metadata from config or content
- `app/sitemap.ts`
- `app/robots.ts`
- canonical URL support through site config
- Open Graph and Twitter metadata defaults
- optional `JSON-LD` helpers for website, organization, and article entities
- semantic structure and internal linking

Accessibility baseline:

- semantic landmarks
- keyboard accessible navigation
- visible focus states
- contrast aware defaults
- labeled form fields and error states
- reduced motion safe defaults for future motion

Deployment stance:

- keep the core free of hosting specific logic
- do not depend on Vercel only APIs in the base architecture
- document deployment for `Vercel`, `Netlify`, and `Cloudflare`
- keep real form delivery and CMS auth outside the hosting neutral core

### Analytics baseline

Treat analytics as an optional integration, not a required dependency.

Analytics baseline:

- keep analytics disabled by default
- support `GA4` through `@next/third-parties/google`
- enable analytics only when a measurement ID is provided through environment variables
- isolate analytics setup behind a small wrapper component and helper functions
- keep custom events behind a stable helper instead of scattering tracking calls
- allow future extension to other analytics providers without rewriting the app shell

Behavior:

- no analytics scripts are loaded unless explicitly configured
- pageview tracking should rely on the official `Next.js` integration behavior
- custom events should go through one shared helper
- cookie consent and consent mode are not part of the core `v1`, but the architecture should leave room for them

### Setup flow and project generator

Treat interactive project initialization as a first class part of the scaffold strategy.

Setup baseline:

- keep GitHub template creation simple and non interactive
- provide a dedicated setup command or CLI generator for initializing a fresh client project
- use the setup flow to collect the project information that should not stay generic
- write answers into config and content files instead of relying on repeated manual edits

Initial setup questions should cover:

- site name
- owner or brand name
- short site description
- expected domain or placeholder domain
- contact email
- contact phone if available
- social profile presence and URLs such as `Instagram`, `Facebook`, `LinkedIn`, and others
- whether optional features should be enabled, such as analytics or a future database path

Output expectations:

- initialize the main config files with the chosen values
- create or update the initial `brief.md`
- prepare social links and contact destinations in the structured links config
- leave the repository in a state where AI can continue customization with minimal cleanup

Implementation stance:

- phase 1 should prioritize a working local `setup` command inside the scaffold repository
- phase 2 should extract the generator into a standalone CLI package, for example `create-content-site`
- the first implementation may ship the architecture and command contract before a full polished standalone generator is built

### Documentation and AI workflow

Ship the scaffold with first class documentation.

Required files:

- `README.md`
- `docs/customization-guide.md`
- `docs/codex-guide.md`
- `docs/deployment-guide.md`
- `docs/content-modes.md`
- `docs/setup-guide.md`
- `brief.example.md`

Documentation intent:

- `README.md`: install, run, structure overview, route map, main customization surfaces
- `docs/customization-guide.md`: how to update brand, navigation, page composition, sections, content, external links, and social profiles
- `docs/codex-guide.md`: how Codex should work with the project, read `brief.md` first, prefer config and content changes, preserve SEO and accessibility, avoid duplicating client data, and prefer editing the intended customization surfaces instead of rewriting core structure
- `docs/deployment-guide.md`: hosting neutral deployment notes, environment expectations, and practical recommendations on where to host the site depending on the project type
- `docs/content-modes.md`: local MDX mode as default, optional Decap CMS mode, future headless CMS mode, and future database mode
- `docs/setup-guide.md`: how to initialize a new client project from the template, what the setup command asks, and which files it updates
- `brief.example.md`: reusable client brief template with site type, pages, sections, style, colors, audience, texts, assets, contact data, SEO targets, and special constraints

Deployment guide coverage:

- recommend several deployment options instead of a single platform
- include at least `Vercel`, `Netlify`, and `Cloudflare`
- explain which option is the default recommendation for the common case
- explain when a simpler static style deployment is enough and when a fuller `Next.js` deployment path is preferable
- include high level pros and cons so the choice can be made per client project

AI customization contract:

- `brief.md` is the primary client specific input
- config files are the structured customization layer
- section components stay generic
- client specific literals must not be duplicated across routes and components
- external links, social profiles, and marketplace destinations must come from config rather than component level hardcoding
- the scaffold should make it easy for AI to create a clean client specific repository with minimal architectural changes
- AI should be able to continue from the output of the setup command without needing to normalize scattered project metadata first

### CMS and future extensions

The architecture should be ready to grow, but `v1` should stay lean.

Decap CMS stance:

- the core scaffold must stay fully usable without Decap
- content directories, frontmatter schema, and media conventions must remain compatible with Decap
- Decap is treated as an optional editing layer on top of the Git based content workflow
- the runtime `/admin` experience is not part of the base boot path unless explicitly enabled later

Planned Decap integration profiles:

- `Decap + GitHub backend` for teams where editors already have repository access
- `Decap + Netlify Git Gateway` for more editor oriented workflows where direct GitHub access should be avoided

Decap ready requirements in the core:

- stable frontmatter fields that map cleanly to CMS collections
- predictable paths for articles, pages, and uploaded media
- no content assumptions that depend on manual code editing only
- no architecture choices that block a later `/admin` integration

Future headless CMS direction:

- keep room for a future headless CMS integration
- prefer `Sanity` as the first candidate because it is a practical low cost option for this use case
- do not make `Sanity` part of the `v1` core boot path
- keep the content source abstraction broad enough that another headless CMS could be added later if needed

Other planned extension seams:

- ready extension points for `Supabase` through `lib/forms/` and future `lib/data/`
- future headless CMS integration, with `Sanity` as the preferred first option
- future analytics vendor expansion beyond `GA4`
- future newsletter and booking modules
- future i18n
- future theme presets

Current assumption:

- `Decap CMS` compatibility is part of the plan
- active `Decap CMS` runtime is not part of the base boot path

## Public interfaces and contracts

The implementation should introduce these stable interfaces:

- `site config` contract for site name, domain, default SEO, social links, contact data, and locale
- `navigation config` contract for header and footer
- `theme config` contract for typography, color tokens, radius, and visual style hooks
- `links config` contract for external links, social profiles, contact destinations, and icon selection
- `setup contract` for project initialization answers and the files they populate
- `page composition` contract for enabled sections and section order
- `article metadata` schema for MDX frontmatter
- `contact form adapter` interface with one submit contract and swappable implementations
- `analytics wrapper` and event helper boundary for optional `GA4`
- `brief driven customization` workflow as the main adaptation model

These interfaces become part of the template promise and should remain stable across early iterations.

## Test plan

### Core verification

- install dependencies and run `dev`
- `build` succeeds without required environment variables in local content mode
- `lint`, `typecheck`, and `check` succeed
- all routes render without runtime errors

### Content and routing

- the articles page renders typed content from `content/articles`
- article detail pages resolve by `slug`
- draft articles are excluded from public listings and routes
- malformed frontmatter fails clearly
- metadata updates correctly when content changes

### Page composition

- sections can be enabled, disabled, and reordered through config without route rewrites
- section content changes do not require component rewrites
- layouts remain responsive on mobile and desktop

### SEO and accessibility

- root metadata renders correctly
- article metadata overrides defaults correctly
- `sitemap` and `robots` generate correctly
- navigation and the contact form are keyboard accessible
- labels, validation states, and focus states behave correctly

### Documentation and starter experience

- a new user can create a project from the template, install dependencies, run the site, and understand the main customization surfaces
- a new user can initialize a fresh client project through a setup flow instead of editing every base file by hand
- a new client project can start from `brief.md` plus config and content edits without rewriting the architecture in the common case
- a future Decap integration can target the same content model without restructuring content directories
- `GA4` can be enabled by environment configuration without changing route code
- external links and social profiles can be updated through config without editing layout or page components
- AI can adapt the template into a client specific repository by primarily editing `brief`, config, and content files

## Assumptions and defaults

- package manager: `pnpm`
- routing model: `App Router`
- styling baseline: `Tailwind CSS 4` with limited `shadcn/ui` usage
- deployment model: hosting neutral, without Vercel only core features
- content mode: typed local MDX as the default path
- contact form: UI plus adapter boundary, without real email delivery by default
- `Decap CMS`: the core is Decap compatible, but Decap runtime is not active in the base boot path
- analytics: `GA4` is optional, disabled by default, and enabled only through environment configuration
- project initialization: a dedicated setup or generator flow is expected, because GitHub template creation itself is not interactive
- dark mode: not part of the core unless it falls out naturally from the token architecture
- multilingual support: not part of `v1`
- cookies and consent mode are not part of the core
- newsletter, booking engine, and `Supabase` are not part of the core
