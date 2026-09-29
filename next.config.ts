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
        source: '/downloads/:file',
        headers: [
          {key: 'Content-Type', value: 'application/vnd.android.package-archive'},
          {key: 'Content-Disposition', value: 'attachment'},
          {key: 'X-Content-Type-Options', value: 'nosniff'},
          {key: 'X-Robots-Tag', value: 'noindex'},
          {key: 'Cache-Control', value: 'public, max-age=31536000, immutable'},
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
