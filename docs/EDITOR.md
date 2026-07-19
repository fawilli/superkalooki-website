# Super Kalooki — content editor guide

For non-technical editors publishing articles and FAQ items in Sanity Studio.

## Open Studio

1. Go to **https://superkalooki.com/studio/** (after cutover) or the Vercel preview URL + `/studio/`.
2. Sign in with the Sanity account you were invited to (Google/email).
3. You should see **Article**, **FAQ Item**, and **Site Settings**.

You do **not** need GitHub, Cursor, or Vercel access.

## Publish an article

1. Click **Article** → **Create**.
2. Fill in:
   - **Title**
   - **Slug** (click Generate from title; keep existing slugs if updating a migrated post)
   - **Excerpt** (short summary for cards / SEO)
   - **Hero image** (upload; always fill **Alt text**)
   - **Body** (headings + paragraphs; you can paste images into the body too)
   - **Published at**
   - Optional SEO title / description
3. Click **Publish**.
4. Within about a minute the live site should update (webhook revalidation). If not, tell the founder.

## Add or edit FAQ

1. Click **FAQ Item** → **Create** (or open an existing item).
2. Fill **Question**, **Answer**, **Category**, **Sort order** (lower numbers appear first).
3. **Publish**.

## Images (royalty-free rules)

Prefer, in this order:

1. **Owned gameplay screenshots** from Super Kalooki (best — fully ours).
2. Stock from **Unsplash**, **Pexels**, or **Pixabay** — download the file, then upload into Studio. Do not paste hotlinked URLs.
3. Avoid random AI image dumps for legal/trust pages.

Always:

- Fill **alt text** (describe the image for screen readers).
- Prefer landscape heroes around 1600px wide.
- Do not upload photos of identifiable people unless the stock license clearly covers model release.

## What you must NOT edit

- **Privacy Policy**, **Terms**, **Cookie Policy** — these stay in the code repo and are updated only by the founder via pull request (App Store / compliance).
- Project settings, API tokens, webhooks, members — founder only.

## Need help?

Email **superkalookigame@gmail.com** or ask the founder.
