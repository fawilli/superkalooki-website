import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {getFaqItems} from '@/lib/content'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Super Kalooki and Contract Rummy.',
}

export default async function FaqPage() {
  const items = await getFaqItems()

  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main
        className="max-w-[860px] mx-auto px-[1.125rem] pt-20 pb-12 sm:px-6 lg:px-8"
        id="main-content"
      >
        <header className="border-b border-black/[0.08] pb-7 mb-8">
          <span className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold mb-2 block">
            Help Centre
          </span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal text-text-dark m-0">
            Frequently Asked Questions
          </h1>
        </header>
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              key={item.question}
              className="border-b border-black/[0.07] py-4"
              role="group"
            >
              <p className="text-base font-semibold text-text-dark mb-1.5 before:content-['Q\00a0\00a0'] before:text-gold before:font-bold m-0">
                {item.question}
              </p>
              <p className="text-[0.9375rem] leading-7 text-text-mid before:content-['A\00a0\00a0'] before:text-green-link before:font-semibold m-0">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-7 p-[1.125rem_1.25rem] bg-black/[0.03] border border-black/[0.07] rounded-[3px] text-center">
          <p className="text-[0.9375rem] text-text-muted mb-1">Still have questions?</p>
          <a
            className="font-semibold text-green-link hover:text-gold min-h-11 inline-flex items-center"
            href="mailto:superkalookigame@gmail.com"
          >
            superkalookigame@gmail.com
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
