# Super Kalooki marketing site

Next.js (App Router) + Sanity Free marketing site for **https://superkalooki.com**.

|                |                                                                |
| -------------- | -------------------------------------------------------------- |
| **Local path** | `/Volumes/SSD/superkalooki-website` (sibling of the game repo) |
| **GitHub**     | `fawilli/superkalooki-website`                                 |
| **Host**       | Vercel (Hobby) — owner: `superkalooki@gmail.com`               |
| **CMS**        | Sanity Free — owner: `superkalooki@gmail.com`                  |
| **DNS / SSL**  | Cloudflare (registrar: GoDaddy)                                |

## Prerequisites

- Node.js 20+
- npm
- Accounts per [docs/FOUNDER_SETUP.md](docs/FOUNDER_SETUP.md)

## Local development

```bash
cd /Volumes/SSD/superkalooki-website
cp .env.example .env.local
# Fill NEXT_PUBLIC_SANITY_* (optional — seed JSON fallbacks work without Sanity)
npm install
npm run dev
```

- Site: http://localhost:3000
- Studio: http://localhost:3000/studio (requires Sanity project IDs)

## Content model

| Type                      | Who edits         | Notes                                             |
| ------------------------- | ----------------- | ------------------------------------------------- |
| `article`                 | Non-tech (Studio) | Blog + SEO guides                                 |
| `faqItem`                 | Non-tech (Studio) | FAQ page                                          |
| `siteSettings`            | Founder / editor  | Homepage headline / CTA                           |
| Privacy / Terms / Cookies | Founder (PR)      | Static HTML in `src/content/` — **not** in Sanity |

Seed data lives in `src/content/*-seed.json` and is used until Sanity is configured. Import with `npm run seed` (see founder setup).

## Env vars

See [`.env.example`](.env.example). Never commit `.env.local`.

## Deploy

1. Merge `feat/next-sanity` → `main`
2. Import repo in Vercel under `superkalooki@gmail.com`
3. Set env vars → preview → DNS cutover

Full steps: [docs/FOUNDER_SETUP.md](docs/FOUNDER_SETUP.md)
Editor cheat-sheet: [docs/EDITOR.md](docs/EDITOR.md)

## Legacy static site

Previous Cloudflare Workers HTML site is preserved under [`legacy/`](legacy/) for reference and rollback.

## App links

Android App Links and iOS Universal Links are served from `public/.well-known/`:

- `https://superkalooki.com/.well-known/assetlinks.json`
- `https://superkalooki.com/.well-known/apple-app-site-association`

Both return `application/json` with no redirect. Paths covered: `/play`, `/play/`, `/play/*`.

## Android APK

Production Android build is served from `public/downloads/SuperKalooki-1.7-66.apk`. Player page `/android/` is button + install steps only. Checksum file stays at `public/downloads/SHA256SUMS` for operators, not the public UI.

## Scripts

| Script          | Purpose                                                             |
| --------------- | ------------------------------------------------------------------- |
| `npm run dev`   | Local Next.js                                                       |
| `npm run build` | Production build                                                    |
| `npm run seed`  | Import FAQ/articles into Sanity (`SANITY_API_WRITE_TOKEN` required) |
| `npm run lint`  | ESLint                                                              |
