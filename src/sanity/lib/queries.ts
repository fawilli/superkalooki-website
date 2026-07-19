import {groq} from 'next-sanity'

export const articlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    seoTitle,
    seoDescription,
    heroImage
  }
`

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    seoTitle,
    seoDescription,
    heroImage,
    body
  }
`

export const articleSlugsQuery = groq`
  *[_type == "article" && defined(slug.current)][].slug.current
`

export const faqItemsQuery = groq`
  *[_type == "faqItem"] | order(sortOrder asc) {
    _id,
    question,
    answer,
    category,
    sortOrder
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    headline,
    subcopy,
    primaryCtaLabel,
    primaryCtaUrl
  }
`
