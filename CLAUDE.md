# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # production build
npm run lint      # eslint . (flat config)
```

No test suite is configured.

## Stack

- **Node 24** (`.nvmrc`, `engines`), **Next.js 16** (App Router), React 19, TypeScript, Tailwind CSS v3
- **Firebase / Firestore** — all persistence (`src/db/`)
- **Telegram Bot** — contact-form notifications (`src/helpers/upload.ts`, misnamed)
- **antd** is only used in `/blogs` and the admin pages; public marketing components use `next/image` + Tailwind and no UI library

## Architecture

- `src/data/site.ts` is the single source of content: `services` (drive the hero slides, the flip cards and the footer dropdown), `metrics`, `caseStudies` (placeholder figures/clients, marked TODO) and `CALENDLY_URL`. Edit copy there, not in components.
- `src/app/page.tsx` composes: hero (`components/home/home.tsx`) → `metrics.tsx` → `services/services.tsx` (CSS 3D flip cards) → about → `about/testimonials.tsx` (client stories) → why-us → footer (contact form).
- Scroll motion: `hooks/useInView.ts` + `components/ui/reveal.tsx` + `.reveal` / `.flip-*` rules in `globals.css`; all disabled under `prefers-reduced-motion`.
- Service cards' "Enquire" link dispatches a `select-service` window event that the footer form listens to.
- API routes in `src/app/api/` (`blogs`, `messages`, `edit`, `signin`); admin pages `/admin-manager`, `/admin-wesley-onyango`.

## Environment variables

Required in `.env` (see `.env` file — already present, not committed):

| Variable | Purpose |
|---|---|
| `API_KEY`, `AUTH_DOMAIN`, `PROJECT_ID`, `STORAGE_KEY`, `MESSAGING_SENDER_ID`, `APP_ID` | Firebase config |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Telegram notifications |

## Key conventions

- API routes use `FormData` (not JSON) for POST bodies.
- `.env` and `service.json` are gitignored (they were once committed — keys must stay rotated). Set env vars in Vercel.
- Admin routes are protected by path obscurity (`/admin-manager`, `/admin-wesley-onyango`) — no middleware auth layer currently.
- Blog content is stored as raw MDX/HTML string in Firestore; rendered client-side with `react-markdown` + `rehype-raw`.
