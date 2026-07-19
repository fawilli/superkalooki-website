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
      {protocol: 'https', hostname: 'play.google.com'},
    ],
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
