import type {NextConfig} from 'next'

const articleSlugs = [
  'mastering-kalooki-strategies-and-tips-for-beginners',
  'kalooki-playing-etiquette-a-players-guide',
  'kalooki-game',
]

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'cdn.sanity.io'},
      {protocol: 'https', hostname: 'developer.apple.com'},
    ],
  },
  async headers() {
    return [
      {
        source: '/.well-known/assetlinks.json',
        headers: [
          {key: 'Content-Type', value: 'application/json'},
          {key: 'Cache-Control', value: 'public, max-age=3600'},
        ],
      },
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {key: 'Content-Type', value: 'application/json'},
          {key: 'Cache-Control', value: 'public, max-age=3600'},
        ],
      },
      {
        source: '/downloads/:file(.*\\.apk)',
        headers: [
          {key: 'Content-Type', value: 'application/vnd.android.package-archive'},
          {key: 'Content-Disposition', value: 'attachment'},
          {key: 'X-Content-Type-Options', value: 'nosniff'},
          {key: 'X-Robots-Tag', value: 'noindex'},
          {key: 'Cache-Control', value: 'public, max-age=31536000, immutable'},
          // Edge TTL stays short: a 404 cached before a release deploy finishes must not stick for a year.
          {key: 'Vercel-CDN-Cache-Control', value: 'max-age=300'},
        ],
      },
    ]
  },
  async redirects() {
    return articleSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }))
  },
}

export default nextConfig
