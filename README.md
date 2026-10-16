# Super Kalooki marketing site

Next.js (App Router) + Sanity Free marketing site for **https://superkalooki.com**.

|                |                                                                         |
| -------------- | ----------------------------------------------------------------------- |
| **Local path** | `/Volumes/SSD/SuperKalooki/superkalooki-website` (inside the game repo) |
| **GitHub**     | `fawilli/superkalooki-website`                                          |
| **Host**       | Vercel (Hobby) — owner: `superkalooki@gmail.com`                        |
| **CMS**        | Sanity Free — owner: `superkalooki@gmail.com`                           |
| **DNS / SSL**  | Cloudflare (registrar: GoDaddy)                                         |

## Prerequisites

- Node.js 20+
- npm
- Accounts per [docs/FOUNDER_SETUP.md](docs/FOUNDER_SETUP.md)

## Local development

```bash
cd /Volumes/SSD/SuperKalooki/superkalooki-website
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

### Open-in-app (marketing soft nudge)

Invite Universal / App Links are unchanged. For general browsing (and when someone stays in Safari/Chrome on `/play?join=…`):

| Platform | Mechanism |
| -------- | --------- |
| **iOS** | Smart App Banner (`apple-itunes-app`, `app-id=6451106023`) plus a user-tapped “Open in Super Kalooki” Universal Link to `/play/` |
| **Android** | User-tapped `intent://` into `com.game.superkalooki` with HTTPS fallback; optional `getInstalledRelatedApps` via `manifest.webmanifest` `related_applications` (never claims install without that signal) |

No new env vars. Existing: `NEXT_PUBLIC_SITE_URL` (defaults to `https://superkalooki.com`), App Store ID `6451106023` in `src/lib/app-store.ts`, package `com.game.superkalooki` in `src/lib/android.ts`.

## Android APK

Production Android build is served from `public/downloads/SuperKalooki-1.8-72-release.apk`. Player page `/android/` is button + install steps only. Checksum file stays at `public/downloads/SHA256SUMS` for operators, not the public UI.

## Scripts

| Script          | Purpose                                                             |
| --------------- | ------------------------------------------------------------------- |
| `npm run dev`   | Local Next.js                                                       |
| `npm run build` | Production build                                                    |
| `npm run seed`  | Import FAQ/articles into Sanity (`SANITY_API_WRITE_TOKEN` required) |
| `npm run lint`  | ESLint                                                              |
