import {AiSummary} from '@/components/AiSummary'
import {JsonLd} from '@/components/JsonLd'
import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {StoreBadges} from '@/components/StoreBadges'
import {
  AI_SUMMARY,
  DIFFERENTIATION_FAQS,
  GUIDE_LINKS,
  NOT_KALOOKI_40_51,
} from '@/lib/jamaican-kalooki'
import {
  faqPageJsonLd,
  graphJsonLd,
  howToJsonLd,
  organizationJsonLd,
  webPageJsonLd,
} from '@/lib/json-ld'
import type {Metadata} from 'next'
import Link from 'next/link'
import {readFileSync} from 'node:fs'
import {join} from 'node:path'

export const metadata: Metadata = {
  title: 'Jamaican Kalooki Rules — Contracts, Scoring & How to Play',
  description:
    'Official Jamaican Kalooki (Contract Rummy) rules for Super Kalooki: nine deals, contracts, sets and runs, jokers, calling, deadwood scoring. Not Kalooki 40 or 51.',
  alternates: {canonical: '/rules/'},
  openGraph: {
    title: 'Jamaican Kalooki Rules',
    description:
      'Canonical Jamaican Contract Rummy rules — contracts, melds, scoring, and penalties. Super Kalooki for iOS.',
    url: '/rules/',
  },
}

const howToPlaySteps = [
  'Deal the hand for the current contract (nine deals from 333 through 4444).',
  'On your turn, draw from the stock or take the discard.',
  'Optionally lay threes (sets) and fours (runs) that fully meet that deal’s contract.',
  'Discard one non-joker card face-up.',
  'When a player goes out, others add deadwood values to their score; after nine deals, lowest total wins.',
]

export default function RulesPage() {
  const html = readFileSync(join(process.cwd(), 'src/content/rules.html'), 'utf8')
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    webPageJsonLd({
      name: 'Jamaican Kalooki Rules',
      description: metadata.description as string,
      path: '/rules/',
    }),
    howToJsonLd({
      name: 'How to play Jamaican Kalooki',
      description: AI_SUMMARY,
      steps: howToPlaySteps,
    }),
    faqPageJsonLd(DIFFERENTIATION_FAQS),
  ])

  return (
    <div className="min-h-screen bg-ivory">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main
        className="max-w-[860px] mx-auto px-[1.125rem] pt-20 pb-12 sm:px-6 sm:pt-22 sm:pb-14 lg:px-8 lg:pt-26 lg:pb-18"
        id="main-content"
      >
        <header className="border-b border-black/[0.08] pb-7 mb-8">
          <span className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold mb-2 block">
            Canonical ruleset
          </span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal leading-[1.15] text-text-dark text-pretty m-0">
            Jamaican Kalooki Rules
          </h1>
        </header>

        <AiSummary>{AI_SUMMARY}</AiSummary>

        <aside className="rounded-xl border border-gold/35 bg-gold/10 px-4 py-4 mb-8">
          <p className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-gold m-0 mb-2">
            Variant clarification
          </p>
          <p className="text-[0.95rem] leading-relaxed text-text-mid m-0">{NOT_KALOOKI_40_51}</p>
        </aside>

        <div
          className="prose prose-stone max-w-none"
          dangerouslySetInnerHTML={{__html: html}}
        />

        <nav aria-label="Related guides" className="mt-12 pt-8 border-t border-black/[0.08]">
          <p className="text-[0.75rem] font-medium tracking-[0.16em] uppercase text-gold mb-4 m-0">
            Guided links
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 list-none m-0 p-0">
            {GUIDE_LINKS.filter((l) => l.href !== '/rules/').map((link) => (
              <li key={link.href}>
                <Link
                  className="inline-flex items-center min-h-11 text-sm font-semibold text-green-link no-underline hover:text-gold"
                  href={link.href}
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 rounded-xl border border-black/[0.08] bg-felt px-5 py-8 text-center">
          <p className="font-display text-[1.5rem] text-ivory m-0 mb-2">Play by these rules on iOS</p>
          <p className="text-ivory/60 text-sm m-0 mb-5">
            Super Kalooki — free Jamaican Contract Rummy. Entertainment only.
          </p>
          <StoreBadges campaign="website_cta" centered />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
