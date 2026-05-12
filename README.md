# Palatial Pools Staging

**Palatial Pools Staging** is the Astro-based staging web project for Palatial Pools. The repository was renamed from `square-boat-74da` to `palatial-pools-staging` and is configured for auto-deploy to the staging server at `170.64.221.23` through the existing repository webhook.

The webhook remains attached to the renamed GitHub repository. Local clones and deployment scripts that still reference the old repository URL should update their remote to `goldsmithtrust/palatial-pools-staging`.

## Repository status

| Area | Current implementation |
|---|---|
| Repository | `goldsmithtrust/palatial-pools-staging` |
| Framework | Astro 5 with MDX and sitemap integration. |
| Adapter | `@astrojs/node` standalone output. |
| Deployment config | `Dockerfile`, `fly.toml`, `wrangler.json`, and an existing webhook-driven staging deployment. |
| Public assets | Static assets under `public/` plus a saved Palatial Pools website archive. |
| Source pages | Astro pages under `src/pages/` and shared components under `src/components/`. |

## Project structure

| Path | Purpose |
|---|---|
| `src/pages/` | Astro routes, including `index.astro`, `about.astro`, and `rss.xml.js`. |
| `src/components/` | Shared layout and page components. |
| `src/layouts/` | Blog post layout. |
| `src/styles/global.css` | Global styling. |
| `public/` | Static assets and placeholder blog images. |
| `astro.config.mjs` | Astro configuration, integrations, output mode, and Node adapter. |
| `Dockerfile` | Multi-stage production image for Node standalone server output. |
| `wrangler.json` | Cloudflare Workers configuration retained for compatibility. |
| `fly.toml` | Fly.io deployment configuration retained in the project. |

## Local setup

```bash
cd palatial-pools-staging
npm install
npm run dev
```

Astro serves the development site at `http://localhost:4321` by default. Use `npm run build` before committing substantive changes.

## Build and deployment

| Command | Purpose |
|---|---|
| `npm run dev` | Start local Astro dev server. |
| `npm run build` | Build the production output. |
| `npm run preview` | Build and run a local preview. |
| `npm run check` | Run Astro build, TypeScript check, and Wrangler dry run. |
| `npm run deploy` | Build and deploy through Wrangler if Cloudflare deployment is active. |

The included Dockerfile builds the Astro server output and runs `./dist/server/entry.mjs` on port `3000`.

```bash
docker build -t palatial-pools-staging .
docker run -p 3000:3000 palatial-pools-staging
```

## Staging webhook and renamed repository

The repository was formerly `square-boat-74da`. The webhook configured for auto-deploy to `170.64.221.23` remains attached after the GitHub rename, but any local clone should update its remote URL.

```bash
git remote set-url origin git@github.com:goldsmithtrust/palatial-pools-staging.git
```

Review deployment scripts, dashboards, and server-side clone paths for old repository references before relying on automated deploys.

## Cursor agent guidance

Start by reading `.cursorrules`, `README.md`, `package.json`, `astro.config.mjs`, `Dockerfile`, `wrangler.json`, and `fly.toml`. Keep changes staging-safe: this repository may be used to test website concepts before they move to the production public website. Do not commit secrets, server credentials, or private customer data.
