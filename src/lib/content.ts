import articlesSeed from '@/content/articles-seed.json'
import faqSeed from '@/content/faq-seed.json'
import {isSanityConfigured} from '@/sanity/env'
import {client} from '@/sanity/lib/client'
import {
    articleBySlugQuery,
    articleSlugsQuery,
    articlesQuery,
    faqItemsQuery,
    siteSettingsQuery,
} from '@/sanity/lib/queries'

export type ArticleListItem = {
  _id?: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  seoTitle?: string
  seoDescription?: string
  heroImage?: unknown
}

export type Article = ArticleListItem & {
  body?: unknown
}

export type FaqItem = {
  _id?: string
  question: string
  answer: string
  category?: string
  sortOrder?: number
}

const seedArticles: Article[] = articlesSeed.map((a) => ({
  title: a.title,
  slug: a.slug.current,
  excerpt: a.excerpt,
  publishedAt: a.publishedAt,
  seoTitle: a.seoTitle,
  seoDescription: a.seoDescription,
  body: a.body,
}))

const seedFaq: FaqItem[] = faqSeed.map((f) => ({
  question: f.question,
  answer: f.answer,
  category: f.category,
  sortOrder: f.sortOrder,
}))

async function safeFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!isSanityConfigured || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return null
  }
  try {
    return await client.fetch<T>(query, params, {
      next: {tags: ['sanity']},
    })
  } catch {
    return null
  }
}

export async function getArticles(): Promise<ArticleListItem[]> {
  const data = await safeFetch<ArticleListItem[]>(articlesQuery)
  if (data && data.length > 0) return data
  return seedArticles.map(({body: _b, ...rest}) => rest)
}

export async function getArticle(slug: string): Promise<Article | null> {
  const data = await safeFetch<Article>(articleBySlugQuery, {slug})
  if (data) return data
  return seedArticles.find((a) => a.slug === slug) ?? null
}

export async function getArticleSlugs(): Promise<string[]> {
  const data = await safeFetch<string[]>(articleSlugsQuery)
  if (data && data.length > 0) return data
  return seedArticles.map((a) => a.slug)
}

export async function getFaqItems(): Promise<FaqItem[]> {
  const data = await safeFetch<FaqItem[]>(faqItemsQuery)
  if (data && data.length > 0) return data
  return seedFaq
}

export async function getSiteSettings() {
  const data = await safeFetch<{
    headline?: string
    subcopy?: string
    primaryCtaLabel?: string
    primaryCtaUrl?: string
  }>(siteSettingsQuery)
  return (
    data ?? {
      headline: 'Play Jamaican Kalooki — Contract Rummy on mobile',
      subcopy:
        'Nine deals. Changing contracts. Lowest score wins. Free on iOS — solo vs AI or live with friends.',
      primaryCtaLabel: 'Download on the App Store',
      primaryCtaUrl: 'https://apps.apple.com/app/super-kalooki/id6451106023',
    }
  )
}

export function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}
