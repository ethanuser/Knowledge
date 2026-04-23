# Knowledge (Quartz Site)

Personal knowledge base and blog built with [Quartz](https://quartz.jzhao.xyz), sourced from markdown notes in this repository.

## Overview

- Static site generator: Quartz v4
- Content source: markdown files in this repo (for example `Notes/` and `Blog/`)
- Deploy target: Netlify
- Publish output directory: `.quartz-public`

## Requirements

- Node.js `>=22`
- npm `>=10.9.2`

## Install

```bash
npm install
```

## Local Development

Start dev server with watch mode:

```bash
npm run dev
```

Then open:

- `http://localhost:8080`

## Build and Preview

Production build:

```bash
npm run build
```

Build and serve without watch:

```bash
npm run preview
```

## Scripts

- `npm run dev`  
  Builds and serves locally with file watching.
- `npm run build`  
  One-time production build into `.quartz-public`.
- `npm run preview`  
  Serves the built site (no watch loop).
- `npm run graph:layout`  
  Starts the graph layout save API used by graph edit mode.
- `npm run check`  
  Typecheck and formatting check.
- `npm run format`  
  Format project files with Prettier.
- `npm run test`  
  Run tests.

## Graph Layout Workflow

This repo supports shared global graph positions.

1. Start layout save server:
   ```bash
   npm run graph:layout
   ```
2. Start site:
   ```bash
   npm run dev
   ```
3. Open the site with `?graphEdit=1` and use **Save Layout**.
4. Saved positions are written to:
   - `quartz/static/graph-layout.json`

## Deployment (Netlify)

- Netlify build command: `npm run build`
- Netlify publish directory: `.quartz-public`
- Config file: `netlify.toml`

## Notes

- `quartz.config.ts` is the main site/theme/plugin configuration.
- Tag colors in note tags and folder views are synced to the same mapping used by graph node colors.

## Differences from Native Quartz

This repo includes custom behavior beyond upstream Quartz defaults:

- **Obsidian-style graph color groups**
  - Global/local graph nodes are colorized by tag and path rules.
  - Shared map lives in `quartz/util/graphColors.ts`.
  - Graph rendering consumes those rules in `quartz/components/scripts/graph.inline.ts`.

- **Tag chip colors synced with graph colors**
  - Note-page tags (`TagList`) use the same tag color map as graph nodes.
  - Folder/list tags (`PageList`, including folder view) use the same map too.

- **Shared editable global graph layout**
  - Global graph loads positions from `quartz/static/graph-layout.json`.
  - `?graphEdit=1` enables a Save Layout button in the real Quartz graph UI.
  - `npm run graph:layout` runs the local save API used by that button.

- **Graph tuning changes**
  - Added/used graph config controls like `textFadeThreshold`, `nodeSize`, `linkThickness`, and `linkForce`.
  - Adjusted simulation behavior and defaults for clustering/visual density.

- **Math/code-aware reading time**
  - Custom reading-time estimator in `quartz/util/readingTime.ts`.
  - Math content is weighted more heavily; code has moderate extra weight.
  - Used in both page metadata (`ContentMeta`) and OG image generation (`og.tsx`).

- **Reader mode auto-enabled on blog routes**
  - Blog pages (`/Blog/*` and `/blog/*`) start with reader mode on by default.
  - Reader mode can still be manually toggled on/off while viewing blog posts.
  - Implemented in `quartz/components/scripts/readermode.inline.ts`.

- **SMILES chemistry renderer**
  - Added client-side SMILES rendering support for chemistry notation.
  - Implemented via `quartz/components/scripts/smiles.inline.ts` and wired into page rendering.

- **Case-insensitive shortest-link resolution**
  - `[[activation function]]` can resolve to files like `Activation Function.md` in shortest-link mode.
  - Implemented in `quartz/util/path.ts`.

- **More resilient dev-time content index loading**
  - `renderPage.tsx` includes retry/fallback logic when `static/contentIndex.json` is temporarily missing during rebuilds.

- **Assets watcher hardening**
  - `quartz/plugins/emitters/assets.ts` ignores `ENOENT` on delete events in watch mode to prevent rebuild crashes from stale/duplicate delete events.

- **Sortable folder view header**
  - Folder listings include clickable table-style sort headers for Date Added, Title, and Tag.
  - Header uses dual up/down indicators with active/inactive emphasis for sort direction.
