import {PhoneFrame} from '@/components/PhoneFrame'
import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {StoreBadges} from '@/components/StoreBadges'
import {JsonLd} from '@/components/JsonLd'
import {AiSummary} from '@/components/AiSummary'
import {AI_SUMMARY, GUIDE_LINKS} from '@/lib/jamaican-kalooki'
import {
  graphJsonLd,
  mobileApplicationJsonLd,
  organizationJsonLd,
  webPageJsonLd,
} from '@/lib/json-ld'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Play Jamaican Kalooki Online — Free iOS App',
  description:
    'Play Jamaican Kalooki (Contract Rummy) online with Super Kalooki for iOS. Solo vs AI or live private tables for 4–6 friends. Free to download — entertainment only.',
  alternates: {canonical: '/play/'},
  openGraph: {
    title: 'Play Jamaican Kalooki Online on iOS',
    description:
      'Free Super Kalooki app — Jamaican Contract Rummy with nine deals, solo AI, and live tables.',
    url: '/play/',
    images: [
      {
        url: '/marketing/solo-or-friends.png',
        width: 1170,
        height: 2532,
        alt: 'Super Kalooki solo or friends mode',
      },
    ],
  },
}

export default function PlayPage() {
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    mobileApplicationJsonLd(),
    webPageJsonLd({
      name: 'Play Jamaican Kalooki Online',
      description: metadata.description as string,
      path: '/play/',
    }),
  ])

  return (
    <div className="min-h-screen bg-felt text-ivory">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content">
        <section className="pt-28 pb-16 px-5 sm:px-8 lg:px-12 border-b border-white/6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">
              Play online
            </p>
            <h1 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] font-normal text-ivory m-0 mb-5 text-pretty">
              Play Jamaican Kalooki online — free on iOS
            </h1>
            <p className="text-ivory/65 leading-relaxed text-lg max-w-2xl mx-auto mb-8">
              Super Kalooki is the digital Jamaican Contract Rummy table: nine deals, changing contracts, solo AI or a
              private live game with 4–6 friends.
            </p>
            <StoreBadges campaign="website_play" centered />
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 lg:px-12 max-w-3xl mx-auto">
          <AiSummary tone="dark">{AI_SUMMARY}</AiSummary>

          <div className="grid sm:grid-cols-2 gap-10 items-center mb-14">
            <PhoneFrame
              alt="Choose solo AI or host a live Kalooki table"
              src="/marketing/solo-or-friends.png"
            />
            <div>
              <h2 className="font-display text-[clamp(1.4rem,3vw,1.85rem)] text-ivory mb-3">
                Solo vs AI or live with friends
              </h2>
              <p className="text-ivory/60 leading-relaxed mb-4">
                Practice against Beginner, Intermediate, or Expert bots — or host a private online table. Same Jamaican
                Kalooki rules either way.
              </p>
              <ul className="text-ivory/60 leading-relaxed space-y-2 list-disc pl-5 m-0">
                <li>Nine contract deals (333 → 4444)</li>
                <li>Sets, runs, calling, and Jamaican scoring</li>
                <li>Free to download — entertainment only</li>
              </ul>
            </div>
          </div>

          <nav aria-label="Learn Jamaican Kalooki" className="border-t border-white/10 pt-10">
            <p className="text-[0.75rem] font-medium tracking-[0.16em] uppercase text-gold/80 mb-4 m-0">
              New to the rules?
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 list-none m-0 p-0">
              {GUIDE_LINKS.filter((l) => l.href !== '/play/').map((link) => (
                <li key={link.href}>
                  <Link
                    className="inline-flex items-center min-h-11 text-sm font-semibold text-gold no-underline hover:text-gold-lt"
                    href={link.href}
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className="border-t border-white/6 bg-felt-deep py-16 px-5 text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] text-ivory m-0 mb-3">
            Download Super Kalooki free
          </h2>
          <p className="text-ivory/60 mb-8 max-w-lg mx-auto">
            Jamaican Contract Rummy for iPhone and iPad. No real money, gambling, or prizes.
          </p>
          <StoreBadges campaign="website_play" centered />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
