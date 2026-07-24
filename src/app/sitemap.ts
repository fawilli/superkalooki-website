import {getArticleSlugs} from '@/lib/content'
import type {MetadataRoute} from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getArticleSlugs()
  const staticRoutes = [
    '',
    '/about/',
    '/blog/',
    '/faq/',
    '/rules/',
    '/jamaican-kalooki/',
    '/jamaican-kalooki/vs-other-variants/',
    '/jamaican-kalooki/scoring/',
    '/jamaican-kalooki/strategy/',
    '/play/',
    '/contact/',
    '/privacy-policy/',
    '/terms-and-conditions/',
    '/cookie-policy/',
  ]

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })),
    ...slugs.map((slug) => ({
      url: `${siteUrl}/blog/${slug}/`,
      lastModified: new Date(),
    })),
  ]
}
