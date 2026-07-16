# Uploading real content

This folder is served as-is at the site root (e.g. a file at
`public/hero/reel.mp4` is reachable at `/hero/reel.mp4`). Drop real assets
into the folders below using the exact filenames listed — the site is
already wired to pick them up automatically. Nothing breaks if a file is
missing: the current gradient/grain placeholders show through until you add
the real thing.

You can upload directly from the GitHub web UI: open the folder, click
**Add file → Upload files**, drag your asset in with the exact filename
below, and commit.

## `logo/`

Reference copies of the full logo lockup, for anywhere outside the website
itself (email signatures, press kit, social profile). The site header uses
a live text wordmark by design, so these aren't required for the page to
work — see `logo/README.md`.

## `hero/`

The looping background reel behind the hero wordmark.

- `hero/reel.mp4` — background video, muted/looped, ideally 1920×1080 or
  larger, H.264, under ~15MB so it loads fast
- `hero/poster.jpg` — a single frame shown while the video loads (and to
  browsers/users that don't autoplay video)

## `films/`

Poster images for the Featured Films grid, one per film, named after the
film `id` in `src/lib/content.ts`:

- `films/amrita-veer.jpg`
- `films/priya-arjun.jpg`
- `films/simran-manny.jpg`
- `films/fatima-hamza.jpg`
- `films/divya-karan.jpg`
- `films/ravneet-jaskaran.jpg`

16:9, at least 1280×720. If you add more films later, add a matching entry
in `src/lib/content.ts` with a new `id` and drop `films/<id>.jpg` here.

## Social share image

Drop a 1200×630 image at `public/og-image.jpg` and it will be used
automatically when the site is shared on social media / iMessage / Slack.

## Favicon

Replace `src/app/favicon.ico` directly with your own icon file (same name,
same location) — Next.js picks it up automatically, no code changes needed.
