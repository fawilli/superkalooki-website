import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {StoreBadges} from '@/components/StoreBadges'
import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Super Kalooki',
  description:
    'About Super Kalooki — the Jamaican Kalooki and Contract Rummy app from Crofts Hill Holdings LLC. Our mission, brand, and commitment to fair entertainment play.',
  alternates: {canonical: '/about/'},
  openGraph: {
    title: 'About Super Kalooki',
    description: 'The story behind the Jamaican Kalooki app — brand, company, and how we build for players.',
    images: [{url: '/logo.png', alt: 'Super Kalooki logo'}],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-felt text-ivory">
      <SiteHeader />
      <main id="main-content">
        <section className="pt-28 pb-16 px-5 sm:px-8 lg:px-12 border-b border-white/6">
          <div className="max-w-3xl mx-auto text-center">
            <Image
              alt="Super Kalooki"
              className="mx-auto h-28 sm:h-36 w-auto mb-8 drop-shadow-lg"
              height={216}
              priority
              src="/logo.png"
              width={289}
            />
            <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">About us</p>
            <h1 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] font-normal text-ivory m-0 mb-5 text-pretty">
              Built for the Kalooki table — on your phone
            </h1>
            <p className="text-ivory/65 leading-relaxed text-lg max-w-2xl mx-auto">
              Super Kalooki brings authentic Jamaican Contract Rummy to iOS: nine scored deals, changing contracts,
              and real-time play — solo against AI or live with friends.
            </p>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12 max-w-3xl mx-auto">
          <h2 className="font-display text-[clamp(1.4rem,3vw,1.85rem)] text-ivory mb-4">Who we are</h2>
          <p className="text-ivory/65 leading-relaxed mb-4">
            Super Kalooki is published by <strong className="text-ivory/90 font-medium">Crofts Hill Holdings LLC</strong>
            , Florida, United States. We build mobile card games that respect the real table — clear rules, fair
            scoring, and entertainment-first play with no real-money gambling.
          </p>
          <p className="text-ivory/65 leading-relaxed mb-4">
            Our wordmark and app icon stand for that promise: the green felt, the gold accents, and the contracts
            players know from Jamaican Kalooki nights — rebuilt for touch, private tables, and practice against AI.
          </p>
          <p className="text-ivory/65 leading-relaxed">
            Want the full contracts and scoring? See the{' '}
            <Link className="text-gold hover:text-gold-lt" href="/rules/">
              rules
            </Link>
            . Common questions live in the{' '}
            <Link className="text-gold hover:text-gold-lt" href="/faq/">
              FAQ
            </Link>
            .
          </p>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:px-12 max-w-3xl mx-auto border-t border-white/6 pt-14">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-10">
            <Image
              alt=""
              className="size-20 rounded-[18px] ring-1 ring-white/15 shadow-xl"
              height={80}
              src="/app-icon.png"
              width={80}
            />
            <div>
              <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] text-ivory m-0 mb-2">
                Download Super Kalooki
              </h2>
              <p className="text-ivory/55 m-0 leading-relaxed">
                Free on the App Store for iPhone and iPad. Entertainment only — no real money, no prizes.
              </p>
            </div>
          </div>
          <StoreBadges campaign="website_about" />
          <p className="mt-10 text-sm text-ivory/45">
            Press or partnership inquiries:{' '}
            <a className="text-gold hover:text-gold-lt" href="mailto:superkalookigame@gmail.com">
              superkalookigame@gmail.com
            </a>
            . Or visit{' '}
            <Link className="text-gold hover:text-gold-lt" href="/contact/">
              Contact
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
