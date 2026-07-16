# DreamsEnvisioned

Marketing site for DreamsEnvisioned, a Toronto & GTA wedding cinematographer
specializing in South Asian weddings.

The site is framed like a film viewfinder — a persistent corner-bracket
overlay and a live running timecode stay fixed while content scrolls through
underneath, and section dividers are styled like film slates.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (CSS-first config, see `src/app/globals.css`)
- Framer Motion
- lucide-react

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — root layout, global styles, page composition
- `src/components/chrome` — persistent UI: nav, viewfinder frame, timecode
  ticker, film grain overlay, motion config
- `src/components/sections` — the eight page sections (Hero, Manifesto,
  Featured Films, Experience, Testimonials, Investment, Contact)
- `src/lib/content.ts` — site copy (films, testimonials, packages, process)

## Build & deploy

```bash
npm run build
```

Deploy target is Vercel — connect the GitHub repo in the Vercel dashboard for
git-based deploys, or run `vercel --prod` from this directory.
