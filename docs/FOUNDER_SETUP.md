# Founder setup — Vercel, Sanity, Cloudflare cutover

Owner account for product SaaS: **`superkalooki@gmail.com`**
GitHub code stays on **`fawilli/superkalooki-website`**.

## 1. Vercel

1. Sign up / log in at [vercel.com](https://vercel.com) as **`superkalooki@gmail.com`**. Enable MFA.
2. Connect GitHub account **`fawilli`** (Account Settings → Authentication → GitHub). Grant access to `superkalooki-website` only at first.
3. **Import** `fawilli/superkalooki-website`:
   - Framework: Next.js
   - Root: `/`
   - Production branch: `main` (merge `feat/next-sanity` first)
4. Set environment variables (Development, Preview, Production) from [`.env.example`](../.env.example):

   | Key                              | Notes                                                            |
   | -------------------------------- | ---------------------------------------------------------------- |
   | `NEXT_PUBLIC_SANITY_PROJECT_ID`  | From Sanity Manage                                               |
   | `NEXT_PUBLIC_SANITY_DATASET`     | `production`                                                     |
   | `NEXT_PUBLIC_SANITY_API_VERSION` | `2026-07-19`                                                     |
   | `SANITY_API_READ_TOKEN`          | Viewer token (Draft Mode; optional for public)                   |
   | `SANITY_REVALIDATE_SECRET`       | 32+ random chars from password manager                           |
   | `NEXT_PUBLIC_SITE_URL`           | `https://superkalooki.com` (Production); preview URL for Preview |

5. Local CLI (optional):

   ```bash
   npm install --global vercel
   vercel login superkalooki@gmail.com
   cd /Volumes/SSD/superkalooki-website
   vercel link --yes --project superkalooki-website
   vercel env pull .env.local --yes
   ```

6. Optionally invite `fabianaudley@gmail.com` as a **collaborator** (not owner).

## 2. Sanity

1. Sign up / log in at [sanity.io](https://www.sanity.io) as **`superkalooki@gmail.com`**. Enable MFA.
2. Create the project in [manage.sanity.io](https://manage.sanity.io/) (or `npx sanity@latest init`) as **Super Kalooki Marketing**, Free plan, dataset `production`.

   **There is no separate Studio to configure in Manage.** Studio is embedded in this Next.js app at **`/studio`** (`src/app/studio/…` + `sanity.config.ts`). You will not see a hosted `*.sanity.studio` unless you later run `npx sanity deploy` (optional; not required).

3. In Manage → **API → CORS origins** (required for embedded Studio login — Allow credentials **ON**):

   | Origin | Notes |
   | --- | --- |
   | `http://localhost:3000` | Local `npm run dev` |
   | `https://superkalooki-website-superkalookigame.vercel.app` | Vercel production alias |
   | `https://superkalooki.com` | After Cloudflare cutover |
   | `https://www.superkalooki.com` | After Cloudflare cutover |

   Also add each Preview deployment host you use, or run `npx sanity cors add <origin> --credentials` from the repo.
4. **API → Tokens**: create **Viewer** token `Vercel Draft Mode` → `SANITY_API_READ_TOKEN`.
5. **Members**: invite founder + non-tech editor with the least-privileged content-editing role.
6. Seed content (temporary Writer/Editor token):

   ```bash
   # Add SANITY_API_WRITE_TOKEN to .env.local temporarily
   npm run seed
   # Then revoke the write token in Manage
   ```

7. **API → Webhooks** (after Production domain is live):
   - URL: `https://superkalooki.com/api/revalidate`
   - Trigger: create / update / delete
   - Secret: same as `SANITY_REVALIDATE_SECRET`
   - Enable signature validation

## 3. Cloudflare DNS + SSL (GoDaddy unchanged)

Chain: **GoDaddy (registrar) → Cloudflare (DNS + SSL) → Vercel (origin)**.

The old marketing site was a **Cloudflare Worker git-connected to this repo**. That auto-deploy is **off** — the GitHub Action was moved to `legacy/github-workflows/deploy-cloudflare-workers.yml` so pushes to `main` no longer deploy to Workers. App hosting for apex/`www` is Vercel.

1. In Vercel, add domains `superkalooki.com` + `www.superkalooki.com` (project hostnames only — registrar stays GoDaddy). Note the DNS target. Do **not** change Cloudflare nameservers.
2. Cloudflare zone `superkalooki.com`:
   - Disconnect / delete the marketing Worker (or at least remove route `superkalooki.com/*`). Leave `game.` / `stage.` / `api.` alone.
   - If Workers Builds is still linked to this GitHub repo, disconnect it so it cannot redeploy over DNS.
   - Point `@` and `www` at Vercel’s target; keep **proxied (orange cloud)**.
3. SSL/TLS mode: **Full (strict)**. Keep Always Use HTTPS.
4. Verify `https://superkalooki.com/privacy-policy/` (App Store URL).
5. After 48h stable, you can fully delete the old Worker. Keep `legacy/wrangler.jsonc` + `legacy/github-workflows/` for rollback.

### Rollback

Restore `legacy/github-workflows/deploy-cloudflare-workers.yml` to `.github/workflows/deploy.yml` (and point wrangler at `legacy/` or restore root static assets), re-add Cloudflare Worker route for `superkalooki.com/*`, and repoint apex/`www` to the Worker. SSL can stay Full (strict).

## 4. Image library seed (manual)

Upload 10–15 approved assets in Studio (Media):

- Gameplay / UI screenshots from the app
- 5–10 curated Unsplash/Pexels lifestyle images (downloaded, not hotlinked)

Editors use these instead of hunting licenses.
