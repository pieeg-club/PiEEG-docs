<img width="2343" height="1986" alt="image" src="https://github.com/user-attachments/assets/e48014af-1276-4c6b-818d-5c46ec9e7f92" />

# PiEEG Documentation

Static documentation site built with **Nextra v4**, **Next.js 16** (App Router + static export), **React 19**, and **Pagefind** search.

## Project Structure

- `content/` — MDX documentation pages and `_meta.js` navigation files
- `app/` — Next.js App Router layout (`app/layout.tsx`) and catch-all MDX renderer (`app/[[...mdxPath]]/page.tsx`)
- `mdx-components.tsx` — Nextra theme MDX component overrides
- `public/` — Static assets (images, `logo.webp`, `.nojekyll`)

## Development

```bash
npm install
npm run dev
```

## Build & Search Index

```bash
npm run build
```

`npm run build` outputs the static site to `out/` and runs `postbuild` (`pagefind`) to generate the search index at `public/_pagefind` (for `npm run dev`) and `out/_pagefind` (for static deployments).

