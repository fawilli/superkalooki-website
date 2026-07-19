import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {StoreBadges} from '@/components/StoreBadges'
import {formatDate, getArticles, getSiteSettings} from '@/lib/content'
import Link from 'next/link'

export default async function HomePage() {
  const [settings, articles] = await Promise.all([getSiteSettings(), getArticles()])
  const latest = articles.slice(0, 3)

  return (
    <div className="min-h-screen bg-felt text-ivory">
      <SiteHeader />
      <main id="main-content">
        <section
          aria-labelledby="hero-heading"
          className="relative isolate overflow-hidden bg-felt pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 lg:min-h-[78vh] flex items-center"
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 w-full grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/70 mb-4">
                Jamaican Contract Rummy — iOS &amp; Android
              </p>
              <h1
                className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-normal leading-[1.1] text-ivory mb-5 max-w-[18ch] [text-wrap:pretty]"
                id="hero-heading"
                style={{fontFamily: 'var(--font-instrument), serif'}}
              >
                {settings.headline?.includes('Nine deals') ? (
                  <>
                    Nine deals.
                    <br />
                    <em>Changing contracts.</em>
                    <br />
                    Lowest score wins.
                  </>
                ) : (
                  settings.headline
                )}
              </h1>
              <p className="text-base text-ivory/60 mb-8 leading-relaxed lg:text-lg max-w-[48ch]">
                {settings.subcopy}
              </p>
              <StoreBadges />
              <p className="text-[0.8rem] text-white/35 tracking-[0.02em] mt-4">
                For entertainment only — no real money, no gambling, no prizes.
              </p>
            </div>
            <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] hidden sm:block" aria-hidden="true">
              <CardFace className="absolute left-[8%] top-[18%] rotate-[-18deg] opacity-80" label="A" suit="♠" dark />
              <CardFace className="absolute left-[28%] top-[8%] rotate-[-4deg] opacity-92" label="K" suit="♥" red />
              <CardFace className="absolute left-[48%] top-[16%] rotate-[12deg]" label="J" suit="♣" dark />
              <CardFace className="absolute left-[68%] top-[6%] rotate-[26deg] opacity-70 gold" label="☆" suit="🃏" />
            </div>
          </div>
        </section>

        <Divider />

        <section aria-labelledby="about-heading" className="bg-felt text-ivory px-5 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="max-w-7xl mx-auto max-w-3xl">
            <span className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/70 mb-3 block">
              About the Game
            </span>
            <h2
              className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal leading-[1.15] text-ivory mb-4 [text-wrap:pretty]"
              id="about-heading"
              style={{fontFamily: 'var(--font-instrument), serif'}}
            >
              Real Contract Rummy — on your phone
            </h2>
            <p className="text-ivory/60 leading-relaxed mb-4">
              Super Kalooki brings authentic Jamaican Contract Rummy to mobile: nine scored deals, changing
              contracts, calls, and tacks. Play solo against AI or invite friends to a private live table.
            </p>
            <p className="text-ivory/60 leading-relaxed">
              Tables support 4–6 players. Lowest cumulative score after nine deals wins. See the{' '}
              <Link className="text-gold hover:text-gold-lt" href="/rules/">
                full rules
              </Link>
              .
            </p>
          </div>
        </section>

        <Divider />

        <section aria-labelledby="features-heading" className="bg-felt-mid text-ivory py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <span className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/70 mb-3 block">
              What’s in the App
            </span>
            <h2
              className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal leading-[1.15] text-ivory mb-10 max-w-[35ch] [text-wrap:pretty]"
              id="features-heading"
              style={{fontFamily: 'var(--font-instrument), serif'}}
            >
              Everything you need to play your way
            </h2>
            <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 m-0">
              {[
                ['Single Player', 'Sharpen your game against AI bots before you face your crew.'],
                ['Live Online', 'Private table, real time. 4–6 players. Draw, lay your contract, call, discard.'],
                ['Public Leaderboard', 'Opt in to show your display name and wins. Turn it off anytime.'],
                ['Voice & Video (Soon)', 'See and hear your opponents. Same energy as a real table.'],
                ['Custom Rules (Soon)', 'Set your own house rules for live games.'],
              ].map(([title, body]) => (
                <div
                  key={title}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-6 hover:border-gold/35 transition-colors duration-200"
                >
                  <dt className="text-[0.9375rem] font-semibold text-ivory mb-2">{title}</dt>
                  <dd className="text-[0.875rem] text-ivory/55 leading-relaxed m-0">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Divider />

        <section aria-labelledby="blog-heading" className="bg-felt text-ivory py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-10">
              <div>
                <span className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/70 mb-3 block">
                  From the Blog
                </span>
                <h2
                  className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal leading-[1.15] text-ivory max-w-[35ch] [text-wrap:pretty] m-0"
                  id="blog-heading"
                  style={{fontFamily: 'var(--font-instrument), serif'}}
                >
                  Latest Articles
                </h2>
              </div>
              <Link
                className="text-[0.875rem] font-semibold text-gold no-underline whitespace-nowrap shrink-0 hover:text-gold-lt transition-colors duration-150 min-h-11 inline-flex items-center"
                href="/blog/"
              >
                View all →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((article) => (
                <Link
                  key={article.slug}
                  className="group bg-white/[0.03] border border-white/[0.08] rounded-lg p-6 no-underline hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-200 flex flex-col gap-3"
                  href={`/blog/${article.slug}/`}
                >
                  <p className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-gold/70 m-0">
                    {formatDate(article.publishedAt)}
                  </p>
                  <h3 className="text-[1rem] font-semibold text-ivory leading-snug [text-wrap:pretty] m-0">
                    {article.title}
                  </h3>
                  <p className="text-[0.875rem] text-ivory/50 leading-relaxed grow m-0">{article.excerpt}</p>
                  <span className="text-[0.875rem] font-medium text-gold/70 group-hover:text-gold transition-colors duration-150">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        <section aria-labelledby="cta-heading" className="bg-[#111D13] py-16 text-center md:py-20 lg:py-24 px-5">
          <h2
            className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal text-ivory m-0 mb-4"
            id="cta-heading"
            style={{fontFamily: 'var(--font-instrument), serif'}}
          >
            Deal yourself in
          </h2>
          <p className="text-ivory/55 mb-8 max-w-xl mx-auto">
            Download Super Kalooki and start a private table with friends — or practice solo against AI.
          </p>
          <StoreBadges centered />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />
}

function CardFace({
  className,
  label,
  suit,
  red,
  dark,
  gold,
}: {
  className?: string
  label: string
  suit: string
  red?: boolean
  dark?: boolean
  gold?: boolean
}) {
  const color = red ? 'text-red-600' : 'text-felt-deep'
  return (
    <div
      className={`w-[120px] h-[172px] rounded-xl shadow-2xl border border-black/[0.06] flex flex-col p-2.5 ${
        gold ? 'bg-gold border-gold/40' : 'bg-ivory'
      } ${className ?? ''}`}
    >
      <div className={`flex flex-col ${color}`}>
        <span className="text-[1rem] font-bold leading-none">{label}</span>
        <span className="text-[0.85rem] leading-none">{suit}</span>
      </div>
      <div className={`flex-1 flex items-center justify-center text-[2.5rem] leading-none ${color}`}>{suit}</div>
    </div>
  )
}
