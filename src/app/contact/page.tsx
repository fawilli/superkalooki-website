import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Super Kalooki support, privacy, and general inquiries.',
}

const contacts = [
  {label: 'General', email: 'superkalookigame@gmail.com'},
  {label: 'Support', email: 'support@superkalooki.com'},
  {label: 'Privacy', email: 'privacy@superkalooki.com'},
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main
        className="max-w-[860px] mx-auto px-[1.125rem] pt-20 pb-12 sm:px-6 lg:px-8"
        id="main-content"
      >
        <header className="border-b border-black/[0.08] pb-7 mb-8">
          <span className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold mb-2 block">
            Get in Touch
          </span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal text-text-dark m-0">
            Contact Us
          </h1>
        </header>
        <p className="text-text-mid leading-relaxed">
          Have a question, found a bug, or want to share feedback? We’re always happy to hear from our players.
        </p>
        <ul className="list-none m-0 p-0 flex flex-col gap-3 mt-8">
          {contacts.map((c) => (
            <li key={c.email}>
              <a
                className="inline-flex min-h-11 items-center text-green-link font-semibold hover:text-gold"
                href={`mailto:${c.email}`}
              >
                {c.label}: {c.email}
              </a>
            </li>
          ))}
          <li>
            <a
              className="inline-flex min-h-11 items-center text-green-link font-semibold hover:text-gold"
              href="https://www.instagram.com/superkalooki"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram: @superkalooki
            </a>
          </li>
        </ul>
        <p className="text-text-muted text-sm mt-8">
          Crofts Hill Holdings LLC, Florida, United States
        </p>
        <p className="mt-6">
          <Link className="text-green-link hover:text-gold" href="/faq/">
            Browse the FAQ →
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}
