# Featured film posters

Upload one poster image per film here, named after the film's `id` in
`src/lib/content.ts` — the Featured Films grid picks them up automatically:

- `amrita-veer.jpg`
- `priya-arjun.jpg`
- `simran-manny.jpg`
- `fatima-hamza.jpg`
- `divya-karan.jpg`
- `ravneet-jaskaran.jpg`

16:9, at least 1280×720. Any film without a matching file here keeps using
the current gradient placeholder. Adding a new film later? Add its entry to
`src/lib/content.ts` first, then drop `films/<that id>.jpg` here.
