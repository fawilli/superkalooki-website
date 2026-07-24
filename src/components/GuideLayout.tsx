import {AiSummary} from '@/components/AiSummary'
import {JsonLd} from '@/components/JsonLd'
import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {StoreBadges} from '@/components/StoreBadges'
import type {AppStoreCampaign} from '@/lib/app-store'
import {GUIDE_LINKS} from '@/lib/jamaican-kalooki'
import Link from 'next/link'
import type {ReactNode} from 'react'

type Props = {
  eyebrow: string
  title: string
  summary: string
  children: ReactNode
  jsonLd?: Record<string, unknown>
  /** Highlight current path in guided links */
  currentPath?: string
  showStoreCta?: boolean
  storeCampaign?: AppStoreCampaign
}

export function GuideLayout({
  eyebrow,
  title,
  summary,
  children,
  jsonLd,
  currentPath,
  showStoreCta = true,
  storeCampaign = 'website_cta',
}: Props) {
  return (
    <div className="min-h-screen bg-ivory text-text-dark">
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
      <SiteHeader />
      <main
        className="max-w-[860px] mx-auto px-[1.125rem] pt-20 pb-14 sm:px-6 sm:pt-22 lg:px-8 lg:pt-26 lg:pb-18"
        id="main-content"
      >
        <header className="border-b border-black/[0.08] pb-7 mb-8">
          <span className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold mb-2 block">
            {eyebrow}
          </span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal leading-[1.15] text-text-dark text-pretty m-0">
            {title}
          </h1>
        </header>

        <AiSummary>{summary}</AiSummary>

        <div className="prose prose-stone max-w-none guide-prose">{children}</div>

        <nav aria-label="Jamaican Kalooki guides" className="mt-12 pt-8 border-t border-black/[0.08]">
          <p className="text-[0.75rem] font-medium tracking-[0.16em] uppercase text-gold mb-4 m-0">
            Guided links
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 list-none m-0 p-0">
            {GUIDE_LINKS.map((link) => {
              const active = currentPath === link.href
              return (
                <li key={link.href}>
                  <Link
                    aria-current={active ? 'page' : undefined}
                    className={`inline-flex items-center min-h-11 text-sm font-semibold no-underline transition-colors ${
                      active
                        ? 'text-text-dark'
                        : 'text-green-link hover:text-gold'
                    }`}
                    href={link.href}
                  >
                    {link.label} {active ? '' : '→'}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {showStoreCta ? (
          <div className="mt-10 rounded-xl border border-black/[0.08] bg-felt px-5 py-8 text-center">
            <p className="font-display text-[1.5rem] text-ivory m-0 mb-2">Play Super Kalooki free</p>
            <p className="text-ivory/60 text-sm m-0 mb-5 max-w-md mx-auto">
              Jamaican Contract Rummy on iOS — solo vs AI or live with friends.
            </p>
            <StoreBadges campaign={storeCampaign} centered />
          </div>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  )
}
