import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {StoreBadges} from '@/components/StoreBadges'
import {formatDate, getArticles} from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Super Kalooki — Play Jamaican Kalooki & Contract Rummy Online',
  description:
    'Download Super Kalooki, the free Jamaican Contract Rummy app for iOS. Play Kalooki solo vs AI or live online with 4–6 friends. Nine deals, changing contracts, lowest score wins.',
  keywords: [
    'Kalooki',
    'Kalooki app',
    'Jamaican Kalooki',
    'Contract Rummy',
    'play Kalooki online',
    'Kalooki rules',
    'multiplayer card game',
    'rummy app',
  ],
  alternates: {canonical: '/'},
  openGraph: {
    title: 'Super Kalooki — Jamaican Contract Rummy for Mobile',
    description:
      'Authentic Kalooki on your phone: nine scored deals, changing contracts, solo AI or live tables for 4–6 players. Free on the App Store.',
    url: '/',
    type: 'website',
    images: [{url: '/marketing/solo-mid-hand.png', width: 1920, height: 883, alt: 'Super Kalooki gameplay — hand, draw pile, and table melds'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Kalooki — Play Kalooki & Contract Rummy',
    description: 'Free Jamaican Kalooki app. Solo vs AI or live online with friends. Nine deals. Lowest score wins.',
    images: ['/marketing/solo-mid-hand.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Super Kalooki',
      applicationCategory: 'GameApplication',
      operatingSystem: 'iOS, Android',
      description:
        'Super Kalooki is a Jamaican Contract Rummy (Kalooki) mobile game. Play nine scored deals with changing contracts — solo against AI or live online with 4–6 players.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      url: 'https://superkalooki.com/',
      downloadUrl: 'https://apps.apple.com/in/app/super-kalooki/id6451106023',
      image: 'https://superkalooki.com/app-icon.png',
    },
    {
      '@type': 'WebSite',
      name: 'Super Kalooki',
      url: 'https://superkalooki.com/',
      description: 'Official site for Super Kalooki — Jamaican Kalooki and Contract Rummy for iOS and Android.',
    },    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Kalooki?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kalooki is a Jamaican Contract Rummy card game. Players complete changing contracts of sets and runs across nine scored deals; the lowest cumulative score wins.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you play Super Kalooki?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Download Super Kalooki on iOS. Play solo against AI bots or host a live online table for 4–6 players. Each deal has a contract (sets and runs). Draw, lay, call, and discard — first to go out ends the round.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Super Kalooki free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Super Kalooki is free to download on the App Store. It is for entertainment only — no real money, no gambling, and no prizes.',
          },
        },
      ],
    },
  ],
}

export default async function HomePage() {
  const articles = await getArticles()
  const latest = articles.slice(0, 3)

  return (
    <div className="min-h-screen bg-felt text-ivory">
      <script
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        type="application/ld+json"
      />
      <SiteHeader />
      <main id="main-content">
        {/* Hero — one composition: brand, headline, support, CTA, full-bleed product image */}
        <section
          aria-labelledby="hero-heading"
          className="relative isolate min-h-[100svh] flex items-end overflow-hidden pt-16"
        >
          <Image
            alt="Super Kalooki table — live hand with draw pile, discard, and opponent cards"
            className="object-cover object-center sk-hero-media"
            fill
            priority
            sizes="100vw"
            src="/marketing/solo-mid-hand.png"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-felt-deep via-felt-deep/75 to-felt/35"
          />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 sk-hero-copy">
            <div className="flex items-center gap-4 mb-4">
              <Image
                alt=""
                className="size-14 sm:size-16 rounded-[14px] shadow-xl ring-1 ring-white/25"
                height={64}
                priority
                src="/app-icon.png"
                width={64}
              />
              <p className="font-display text-[clamp(2rem,5vw,3.25rem)] text-ivory m-0 tracking-tight [text-wrap:pretty]">
                Super Kalooki
              </p>
            </div>
            <h1
              className="font-display text-[clamp(1.65rem,3.8vw,2.75rem)] font-normal leading-[1.15] text-ivory/95 mb-4 max-w-[22ch] [text-wrap:pretty]"
              id="hero-heading"
            >
              Play Jamaican Kalooki — Contract Rummy on mobile
            </h1>
            <p className="text-base sm:text-lg text-ivory/70 mb-8 leading-relaxed max-w-[42ch]">
              Nine deals. Changing contracts. Lowest score wins. Free on iOS — solo vs AI or live with friends.
            </p>
            <StoreBadges />
            <p className="text-[0.8rem] text-white/40 tracking-[0.02em] mt-4">
              Entertainment only — no real money, gambling, or prizes.
            </p>
          </div>
        </section>

        {/* What is Kalooki — AEO answer block */}
        <section
          aria-labelledby="what-heading"
          className="bg-felt px-5 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 border-t border-white/[0.06]"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">
                What is Kalooki?
              </p>
              <h2
                className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-ivory mb-5 [text-wrap:pretty]"
                id="what-heading"
              >
                Contract Rummy from Jamaica — rebuilt for your phone
              </h2>
              <p className="text-ivory/65 leading-relaxed mb-4">
                Kalooki (also spelled Kaluki) is Contract Rummy: each of nine deals has a required contract of{' '}
                <strong className="text-ivory/90 font-medium">sets</strong> and{' '}
                <strong className="text-ivory/90 font-medium">runs</strong>. Meet the contract, go out, and keep your
                score low. After nine deals, the lowest total wins.
              </p>
              <p className="text-ivory/65 leading-relaxed mb-6">
                Super Kalooki is the mobile Kalooki app for that exact game — calls, tacks, private live tables, and
                solo practice against AI. Read the{' '}
                <Link className="text-gold hover:text-gold-lt underline-offset-2 hover:underline" href="/rules/">
                  full Kalooki rules
                </Link>{' '}
                or start a table now.
              </p>
              <Link
                className="inline-flex items-center min-h-11 text-sm font-semibold text-gold hover:text-gold-lt transition-colors"
                href="/faq/"
              >
                Kalooki FAQ →
              </Link>
            </div>
            <figure className="relative aspect-16/9 overflow-hidden rounded-sm ring-1 ring-white/10 shadow-2xl">
              <Image
                alt="Pre-deal screen showing this deal’s Kalooki contract — set of 3 and run of 4"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="/marketing/hero-deal-in.png"
              />
            </figure>
          </div>
        </section>

        {/* How you play — product proof */}
        <section
          aria-labelledby="play-heading"
          className="bg-felt-mid border-t border-white/[0.06] py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">
              How to play Super Kalooki
            </p>
            <h2
              className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-ivory mb-12 max-w-[28ch] [text-wrap:pretty]"
              id="play-heading"
            >
              Deal in. Lay your contract. Race to go out.
            </h2>

            <div className="space-y-14 lg:space-y-20">
              <FeatureRow
                alt="Sorted Kalooki hand ready to lay sets and runs on the table"
                body="Draw from the stock or take the discard, then lay sets and runs to meet that deal’s contract. Call when you can — then discard to stay lean."
                href="/rules/"
                image="/marketing/sorted-hand.png"
                linkLabel="See contracts & scoring"
                title="Meet the contract each deal"
              />
              <FeatureRow
                alt="Scoreboard across nine Kalooki deals with win badges and running totals"
                body="Track every round on a live scoreboard. Nine deals, changing contracts (333 through the full run), lowest cumulative score wins the match."
                href="/rules/"
                image="/marketing/nine-deals.png"
                linkLabel="How scoring works"
                reverse
                title="Nine deals. Lowest score wins."
              />
              <FeatureRow
                alt="Mode choice — solo against bots or host a live table with friends"
                body="Practice solo against Beginner, Intermediate, or Expert AI, or host a private live online table for 4–6 players. Same Kalooki rules either way."
                href="/faq/"
                image="/marketing/solo-or-friends.png"
                linkLabel="Modes & player counts"
                title="Solo vs AI or live with friends"
              />
            </div>
          </div>
        </section>

        {/* Trust / compliance strip */}
        <section
          aria-labelledby="safe-heading"
          className="bg-felt border-t border-white/[0.06] px-5 py-14 md:px-8 lg:px-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="font-display text-[clamp(1.5rem,3vw,2rem)] text-ivory mb-3"
              id="safe-heading"
            >
              Free Kalooki for entertainment — not gambling
            </h2>
            <p className="text-ivory/55 leading-relaxed">
              Super Kalooki involves no real-money wagering, no cash prizes, and no gambling. Optional public
              leaderboard wins are opt-in display names only. See our{' '}
              <Link className="text-gold hover:text-gold-lt" href="/privacy-policy/">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link className="text-gold hover:text-gold-lt" href="/terms-and-conditions/">
                Terms
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Blog — SEM content hub */}
        <section
          aria-labelledby="blog-heading"
          className="bg-felt-deep border-t border-white/[0.06] py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-10">
              <div>
                <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">
                  Kalooki guides
                </p>
                <h2
                  className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-ivory max-w-[35ch] [text-wrap:pretty] m-0"
                  id="blog-heading"
                >
                  Strategies, etiquette &amp; how to play
                </h2>
              </div>
              <Link
                className="text-[0.875rem] font-semibold text-gold no-underline whitespace-nowrap shrink-0 hover:text-gold-lt transition-colors duration-150 min-h-11 inline-flex items-center"
                href="/blog/"
              >
                All articles →
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((article) => (
                <Link
                  key={article.slug}
                  className="group block no-underline border-t border-gold/25 pt-5 hover:border-gold/60 transition-colors"
                  href={`/blog/${article.slug}/`}
                >
                  <p className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-gold/70 m-0 mb-2">
                    {formatDate(article.publishedAt)}
                  </p>
                  <h3 className="text-[1.05rem] font-semibold text-ivory leading-snug [text-wrap:pretty] m-0 mb-2 group-hover:text-gold-lt transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[0.875rem] text-ivory/50 leading-relaxed m-0">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          aria-labelledby="cta-heading"
          className="relative isolate overflow-hidden border-t border-white/[0.06] py-20 md:py-24 px-5 text-center"
        >
          <Image
            alt=""
            aria-hidden="true"
            className="object-cover object-center opacity-40"
            fill
            sizes="100vw"
            src="/marketing/one-card-out.png"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-felt-deep/80" />
          <div className="relative z-10">
            <h2
              className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal text-ivory m-0 mb-4"
              id="cta-heading"
            >
              Download Super Kalooki free
            </h2>
            <p className="text-ivory/65 mb-8 max-w-xl mx-auto leading-relaxed">
              Start a private Kalooki table with friends — or practice Contract Rummy solo against AI. Available now
              on the App Store; Google Play coming soon.
            </p>
            <StoreBadges centered />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function FeatureRow({
  title,
  body,
  image,
  alt,
  href,
  linkLabel,
  reverse = false,
}: {
  title: string
  body: string
  image: string
  alt: string
  href: string
  linkLabel: string
  reverse?: boolean
}) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${reverse ? 'lg:[&>figure]:order-2' : ''}`}
    >
      <figure className="relative aspect-16/9 overflow-hidden rounded-sm ring-1 ring-white/10 shadow-xl">
        <Image alt={alt} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src={image} />
      </figure>
      <div>
        <h3 className="font-display text-[clamp(1.35rem,2.5vw,1.85rem)] font-normal text-ivory mb-3 [text-wrap:pretty]">
          {title}
        </h3>
        <p className="text-ivory/60 leading-relaxed mb-5">{body}</p>
        <Link
          className="inline-flex items-center min-h-11 text-sm font-semibold text-gold hover:text-gold-lt transition-colors"
          href={href}
        >
          {linkLabel} →
        </Link>
      </div>
    </div>
  )
}
