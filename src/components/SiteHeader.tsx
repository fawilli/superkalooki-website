'use client'

import {appStoreUrl} from '@/lib/app-store'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

const nav = [
  {href: '/jamaican-kalooki/', label: 'Jamaican Kalooki'},
  {href: '/rules/', label: 'Rules'},
  {href: '/play/', label: 'Play'},
  {href: '/blog/', label: 'Blog'},
  {href: '/faq/', label: 'FAQ'},
  {href: '/about/', label: 'About'},
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const downloadHref = appStoreUrl('website_header')

  return (
    <header role="banner">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[200] focus:bg-gold focus:text-black focus:px-4 focus:py-2 focus:font-semibold focus:text-sm"
        href="#main-content"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 inset-x-0 z-50 bg-felt/[0.97] backdrop-blur-[20px] border-b border-white/[0.07]"
      >
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4 lg:px-8">
          <Link
            href="/"
            aria-label="Super Kalooki – Homepage"
            className="shrink-0 flex items-center gap-2.5 no-underline min-h-11"
          >
            <Image
              src="/app-icon.png"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-[10px] shadow-sm ring-1 ring-white/15"
              priority
            />
            <span className="text-[0.95rem] font-semibold tracking-tight text-ivory/90 hidden sm:inline">
              Super Kalooki
            </span>
          </Link>
          <ul className="hidden lg:flex items-center list-none m-0 p-0" role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-[0.9rem] font-medium text-white/55 no-underline px-4 py-2 transition-colors duration-150 hover:text-gold whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              aria-label="Super Kalooki on Instagram"
              className="flex items-center justify-center size-[38px] rounded-full border border-white/[0.13] text-white/50 no-underline transition-all duration-150 hover:border-gold hover:text-gold"
              href="https://www.instagram.com/superkalooki"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a
              aria-label="Download Super Kalooki on the App Store"
              className="inline-flex items-center justify-center min-h-11 px-4 rounded-full bg-gold text-felt-deep text-[0.875rem] font-semibold no-underline transition-colors hover:bg-gold-lt"
              data-cta="app-store"
              data-cta-campaign="website_header"
              href={downloadHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              Download free
            </a>
          </div>
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              aria-label="Download Super Kalooki on the App Store"
              className="inline-flex items-center justify-center min-h-11 px-3.5 rounded-full bg-gold text-felt-deep text-[0.8125rem] font-semibold no-underline"
              data-cta="app-store"
              data-cta-campaign="website_header"
              href={downloadHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              Get app
            </a>
            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              className="flex flex-col justify-center gap-[5px] bg-transparent border-0 cursor-pointer p-[6px] shrink-0 min-h-11 min-w-11"
              type="button"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-[22px] h-px bg-white/75 rounded-sm" />
              <span className="block w-[22px] h-px bg-white/75 rounded-sm" />
              <span className="block w-[22px] h-px bg-white/75 rounded-sm" />
            </button>
          </div>
        </div>
      </nav>
      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden" id="mobile-menu">
          <button
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-[rgba(5,10,6,0.97)] border-0 cursor-pointer"
            type="button"
            onClick={() => setOpen(false)}
          />
          <div
            aria-label="Mobile navigation"
            className="relative z-[1] px-5 pt-20 pb-8 flex flex-col"
            role="navigation"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-[0.875rem] text-[1.0625rem] font-medium text-white/65 no-underline border-b border-white/[0.06] transition-colors duration-150 hover:text-gold min-h-11"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="mt-6 inline-flex items-center justify-center min-h-12 rounded-xl bg-gold text-felt-deep text-[1rem] font-semibold no-underline"
              data-cta="app-store"
              data-cta-campaign="website_header"
              href={downloadHref}
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              Download free on the App Store
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="size-[15px] fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}
