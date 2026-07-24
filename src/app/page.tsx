import {ContractMeldCards, HeroCardFan} from '@/components/HeroCards'
import {JsonLd} from '@/components/JsonLd'
import {PhoneFrame} from '@/components/PhoneFrame'
import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {StoreBadges} from '@/components/StoreBadges'
import {appStoreUrl} from '@/lib/app-store'
import {DIFFERENTIATION_FAQS} from '@/lib/jamaican-kalooki'
import {formatDate, getArticles} from '@/lib/content'
import {
  faqPageJsonLd,
  graphJsonLd,
  mobileApplicationJsonLd,
  organizationJsonLd,
} from '@/lib/json-ld'
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
    images: [
      {
        url: '/marketing/solo-mid-hand.png',
        width: 1920,
        height: 883,
        alt: 'Super Kalooki gameplay — hand, draw pile, and table melds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Kalooki — Play Kalooki & Contract Rummy',
    description:
      'Free Jamaican Kalooki app. Solo vs AI or live online with friends. Nine deals. Lowest score wins.',
    images: ['/marketing/solo-mid-hand.png'],
  },
}

const jsonLd = graphJsonLd([
  organizationJsonLd(),
  {
    '@type': 'WebSite',
    '@id': 'https://superkalooki.com/#website',
    name: 'Super Kalooki',
    url: 'https://superkalooki.com/',
    description:
      'Official site for Super Kalooki — Jamaican Kalooki and Contract Rummy for iOS.',
    publisher: {'@id': 'https://superkalooki.com/#organization'},
  },
  mobileApplicationJsonLd(),
  faqPageJsonLd([
    ...DIFFERENTIATION_FAQS,
    {
      question: 'Is Super Kalooki free?',
      answer:
        'Yes. Super Kalooki is free to download on the App Store. It is for entertainment only — no real money, no gambling, and no prizes.',
    },
  ]),
])

export default async function HomePage() {
  const articles = await getArticles()
  const latest = articles.slice(0, 3)

  return (
    <div className="min-h-screen bg-felt text-ivory">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content">
        {/* Hero: brand + copy + real card fan (product vernacular) */}
        <section
          aria-labelledby="hero-heading"
          className="relative isolate overflow-hidden bg-felt-deep pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 min-h-[100svh] flex items-center"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,_rgba(201,168,76,0.14),_transparent_50%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(250,247,240,0.55) 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            <div className="sk-hero-copy max-w-xl">
              <div className="flex items-center gap-3.5 mb-4">
                <Image
                  alt=""
                  className="size-12 sm:size-14 rounded-[12px] shadow-xl ring-1 ring-white/25"
                  height={56}
                  priority
                  src="/app-icon.png"
                  width={56}
                />
                <p className="font-display text-[clamp(1.85rem,4vw,2.75rem)] text-ivory m-0 tracking-tight text-pretty">
                  Super Kalooki
                </p>
              </div>
              <h1
                className="font-display text-[clamp(1.55rem,3.5vw,2.5rem)] font-normal leading-[1.15] text-ivory/95 mb-4 max-w-[24ch] text-pretty"
                id="hero-heading"
              >
                Play Jamaican Kalooki — Contract Rummy on mobile
              </h1>
              <p className="text-base sm:text-lg text-ivory/70 mb-8 leading-relaxed max-w-[42ch]">
                Nine deals. Changing contracts. Lowest score wins. Free on iOS — solo vs AI or live with friends.
              </p>
              <StoreBadges campaign="website_hero" />
              <p className="text-[0.8rem] text-white/40 tracking-[0.02em] mt-4">
                Entertainment only — no real money, gambling, or prizes.
              </p>
            </div>
            <HeroCardFan className="sk-hero-media lg:justify-self-end" />
          </div>
        </section>

        <section
          aria-labelledby="what-heading"
          className="bg-felt px-5 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 border-t border-white/6"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">
                What is Jamaican Kalooki?
              </p>
              <h2
                className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-ivory mb-5 text-pretty"
                id="what-heading"
              >
                Contract Rummy from Jamaica — not Kalooki 40/51
              </h2>
              <p className="text-ivory/65 leading-relaxed mb-4">
                Jamaican Kalooki (also spelled Kaluki) is a <strong className="text-ivory/90 font-medium">Contract Rummy</strong>{' '}
                variant: each of nine deals has a required contract of{' '}
                <strong className="text-ivory/90 font-medium">sets</strong> and{' '}
                <strong className="text-ivory/90 font-medium">runs</strong>. Meet the contract, go out, and keep your
                score low. After nine deals, the lowest total wins — unlike Kalooki 40/51 point-threshold games.
              </p>
              <p className="text-ivory/65 leading-relaxed mb-6">
                Super Kalooki is the mobile app for that Jamaican ruleset — calls, private live tables, and solo practice
                against AI. Start with{' '}
                <Link
                  className="text-gold hover:text-gold-lt underline-offset-2 hover:underline"
                  href="/jamaican-kalooki/"
                >
                  What is Jamaican Kalooki?
                </Link>{' '}
                or the{' '}
                <Link className="text-gold hover:text-gold-lt underline-offset-2 hover:underline" href="/rules/">
                  full rules
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <Link
                  className="inline-flex items-center min-h-11 text-sm font-semibold text-gold hover:text-gold-lt transition-colors"
                  href="/play/"
                >
                  Play on iOS →
                </Link>
                <a
                  className="inline-flex items-center min-h-11 text-sm font-semibold text-gold hover:text-gold-lt transition-colors"
                  data-cta="app-store"
                  data-cta-campaign="website_cta"
                  href={appStoreUrl('website_cta')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download on the App Store →
                </a>
              </div>
            </div>
            <div className="rounded-[1.15rem] border border-white/12 bg-felt-deep/80 p-6 sm:p-8 ring-1 ring-black/30">
              <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-5">
                This deal — example contract
              </p>
              <ContractMeldCards />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="play-heading"
          className="bg-felt-mid border-t border-white/6 py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">
              How to play Super Kalooki
            </p>
            <h2
              className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-ivory mb-12 max-w-[28ch] text-pretty"
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

        <section
          aria-labelledby="safe-heading"
          className="bg-felt border-t border-white/6 px-5 py-14 md:px-8 lg:px-12"
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

        <section
          aria-labelledby="blog-heading"
          className="bg-felt-deep border-t border-white/6 py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-10">
              <div>
                <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">
                  Kalooki guides
                </p>
                <h2
                  className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-ivory max-w-[35ch] text-pretty m-0"
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
                  <p className="text-[0.75rem] font-medium tracking-widest uppercase text-gold/70 m-0 mb-2">
                    {formatDate(article.publishedAt)}
                  </p>
                  <h3 className="text-[1.05rem] font-semibold text-ivory leading-snug text-pretty m-0 mb-2 group-hover:text-gold-lt transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[0.875rem] text-ivory/50 leading-relaxed m-0">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="cta-heading"
          className="border-t border-white/6 bg-felt-deep py-20 md:py-24 px-5 text-center"
        >
          <div className="max-w-3xl mx-auto mb-10">
            <PhoneFrame
              alt="One card left to discard and win the Kalooki round"
              src="/marketing/one-card-out.png"
            />
          </div>
          <h2
            className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal text-ivory m-0 mb-4"
            id="cta-heading"
          >
            Download Super Kalooki free
          </h2>
          <p className="text-ivory/65 mb-8 max-w-xl mx-auto leading-relaxed">
            Start a private Kalooki table with friends — or practice Contract Rummy solo against AI. Free on the App
            Store for iPhone and iPad.
          </p>
          <StoreBadges centered campaign="website_cta" />
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
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      <div className={reverse ? 'lg:order-2' : undefined}>
        <PhoneFrame alt={alt} src={image} />
      </div>
      <div className={reverse ? 'lg:order-1' : undefined}>
        <h3 className="font-display text-[clamp(1.35rem,2.5vw,1.85rem)] font-normal text-ivory mb-3 text-pretty">
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
