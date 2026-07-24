/**
 * Seed FAQ + articles into Sanity from src/content/*-seed.json
 *
 * Prerequisites:
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID
 *   - NEXT_PUBLIC_SANITY_DATASET
 *   - SANITY_API_WRITE_TOKEN (Editor/Admin token — create temporarily in manage.sanity.io)
 *
 * Usage:
 *   node --env-file=.env.local scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client'
import { randomBytes } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-07-19',
  token,
  useCdn: false,
})

function key() {
  return randomBytes(6).toString('hex')
}

function withKeys(doc) {
  if (Array.isArray(doc.body)) {
    doc.body = doc.body.map((block) => ({
      ...block,
      _key: block._key || key(),
      children: (block.children || []).map((c) => ({...c, _key: c._key || key()})),
    }))
  }
  return doc
}

const faq = JSON.parse(readFileSync(join(root, 'src/content/faq-seed.json'), 'utf8'))
const articles = JSON.parse(readFileSync(join(root, 'src/content/articles-seed.json'), 'utf8'))

const seedFaqIds = new Set(faq.map((item) => `faq.${item.sortOrder}`))
const existingFaqIds = await client.fetch(`*[_type == "faqItem"]._id`)

const tx = client.transaction()

// Drop Studio/orphan FAQ docs so seed is the sole FAQ source of truth
for (const id of existingFaqIds) {
  if (!seedFaqIds.has(id)) {
    tx.delete(id)
  }
}

for (const item of faq) {
  const id = `faq.${item.sortOrder}`
  tx.createOrReplace({_id: id, ...item})
}

for (const article of articles) {
  const id = `article.${article.slug.current}`
  tx.createOrReplace(withKeys({_id: id, ...article}))
}

tx.createOrReplace({
  _id: 'siteSettings',
  _type: 'siteSettings',
  headline: 'Play Jamaican Kalooki — Contract Rummy on mobile',
  subcopy:
    'Nine deals. Changing contracts. Lowest score wins. Free on iOS — solo vs AI or live with friends.',
  primaryCtaLabel: 'Download on the App Store',
  primaryCtaUrl: 'https://apps.apple.com/app/super-kalooki/id6451106023',
})

const result = await tx.commit()
console.log(`Seeded ${faq.length} FAQ items, ${articles.length} articles, siteSettings`)
console.log(result.results?.length ?? 0, 'mutations')
