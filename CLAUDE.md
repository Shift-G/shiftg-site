# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workspace layout

This directory is a **workspace, not a git repo**. It holds two unrelated siblings:

- `SHIFT+G/` — business/sales artifacts (Portuguese meeting scripts, kickoff decks, `.pptx`). Not code. Leave alone unless explicitly asked.
- `shiftg-site/` — **the application and the git repo** (`git rev-parse --show-toplevel` resolves here). All development happens here; `cd shiftg-site` before running anything.

The rest of this file is about `shiftg-site/`.

## Commands (run from `shiftg-site/`)

Package manager is **pnpm** (see `pnpm-lock.yaml`).

- `pnpm dev` — dev server (Turbopack) at http://localhost:3000
- `pnpm build` — production build (uses Webpack, not Turbopack — see config note below)
- `pnpm lint` — ESLint (`next lint`, flat config in `eslint.config.mjs`)
- `pnpm chakra:typegen` — **regenerate Chakra theme types. Run after any edit under `src/theme/`** or token/recipe autocomplete and type-checking go stale.
- `pnpm test` — Jest is wired in `package.json`, but there is **no jest config and no test files yet**; running it currently does nothing useful. Add config + a `__tests__` dir before relying on it.

## Architecture

Next.js 15 (App Router) + React 19 + TypeScript (strict) marketing site, **pt-BR**, deployed at `https://shiftg.com.br`. Path alias `@/*` → `src/*`.

**No backend.** There are no API routes or server actions. Contact forms (`src/components/forms/`, built with `react-hook-form` + **zod**) do not POST anywhere — on submit they assemble a WhatsApp message and open a `wa.me` link via `src/utils/whatsapp.ts`. `yup` is an unused leftover dependency; use **zod** for new validation.

**Chakra UI v3 design system is the core of this codebase.** A large hand-built theme lives in `src/theme/` and is assembled by `src/theme/index.ts` (`defineConfig` → `createSystem`):
- `tokens/` raw scales, `semantic-tokens/` light/dark mappings, `recipes/` single-element component styles, `slot-recipes/` multi-part components, plus `text-styles`, `layer-styles`, `motion-styles`, `keyframes`, `global-css`.
- Style values use Chakra token-reference syntax, e.g. `bg="{colors.blue.500/5}"`, not raw hex.
- `src/components/ui/provider.tsx` wraps the app in `ChakraProvider value={system}`; mounted once in `src/app/layout.tsx`.

**SEO is first-class, don't bypass it.** JSON-LD structured data is built in `src/lib/seo-utils.ts` and injected inline in `layout.tsx`; every page exports its own `metadata`. Crawler/sitemap files are generated: `src/app/robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `manifest.json`. New pages need a `metadata` export and (if relevant) a sitemap entry.

**Site-wide constants are centralized** in `src/constants/index.ts` (name, URLs, emails, phone, address, social). Import from `@/constants` — never hardcode contact info, and reuse `SITE_PHONE` for WhatsApp links.

**Page composition:** routes in `src/app/*/page.tsx` compose `src/components/layout/` (`Page`, `Navbar`, `Footer`, `Section`) around `src/components/sections/*` (full-bleed page sections) and `src/components/cards/*`. The home page (`src/app/page.tsx`) stitches together the section components.

**`next.config.mjs` configures both bundlers** — `turbopack` (dev) and a `webpack` function (build). Changing build behavior may require touching both. It also defines custom Chakra chunk splitting, security headers, `/servicos` & service redirects, and image optimization (webp/avif, SVG disallowed).

## Design & content source of truth

Before building or restyling UI, consult these (they are exhaustive and Portuguese):
- `shiftg-site/style-guide/` — 10 numbered docs (BRAND, COLORS, TYPOGRAPHY, SPACING-LAYOUT, COMPONENTS, PATTERNS, MOTION, VOICE-TONE, ANTI-PATTERNS, LOGO-ASSETS). Style is **neo-brutalist editorial**: `rounded="none"`, no shadows, 1px borders and `gap="1px"` grids, high contrast. Fonts: DM Sans (body/heading), DM Serif Display (italic accents), Geist Mono (technical labels).
- `shiftg-site/DOCS/` — brand voice, manifesto, archetypes, and page-copy proposals (content, not code).
