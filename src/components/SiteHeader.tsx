'use client'

import {AndroidMark} from '@/components/AndroidMark'
import {ANDROID_DOWNLOAD_PUBLIC} from '@/lib/android'
import {appStoreUrl} from '@/lib/app-store'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import {useState, type MouseEvent} from 'react'

const nav = [
  {href: '/jamaican-kalooki/', label: 'Jamaican Kalooki'},
  {href: '/rules/', label: 'Rules'},
  {href: '/play/', label: 'Play'},
  {href: '/blog/', label: 'Blog'},
  {href: '/faq/', label: 'FAQ'},
  {href: '/about/', label: 'About'},
]

const appStoreHref = appStoreUrl('website_header')

function isCurrent(pathname: string, href: string) {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`
  return path === href || path.startsWith(href)
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  function go(href: string) {
    router.push(href)
    setOpen(false)
  }

  return (
    <header role="banner">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-[env(safe-area-inset-top)] focus:left-4 focus:z-[200] focus:rounded-control focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text-dark"
        href="#main-content"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="sk-glass-strong fixed inset-x-0 top-0 z-50 rounded-none border-x-0 border-t-0 pt-[env(safe-area-inset-top)]"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 lg:px-8">
          <Link
            href="/"
            aria-label="Super Kalooki – Homepage"
            className="flex min-h-11 shrink-0 items-center gap-3 no-underline"
          >
            <Image
              src="/app-icon.png"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-control ring-1 ring-white/15"
              priority
            />
            <span className="hidden text-[0.9375rem] font-semibold text-ivory sm:inline">
              Super Kalooki
            </span>
          </Link>
          <ul className="m-0 hidden list-none items-center p-0 lg:flex" role="list">
            {nav.map((item) => {
              const current = isCurrent(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? 'page' : undefined}
                    className={`block whitespace-nowrap px-3 py-2 text-[0.9375rem] font-medium no-underline ${
                      current ? 'text-gold' : 'text-ivory-dark hover:text-gold'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex shrink-0 items-center gap-2">
            <a
              aria-label="Super Kalooki on Instagram"
              className="hidden size-11 items-center justify-center rounded-control border border-white/20 text-ivory/70 no-underline lg:flex"
              href="https://www.instagram.com/superkalooki"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            {ANDROID_DOWNLOAD_PUBLIC ? <AndroidLink className="hidden lg:inline-flex" /> : null}
            <AppStoreLink />
            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-grid size-11 place-items-center rounded-control border border-white/20 bg-transparent text-ivory lg:hidden"
              type="button"
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>
      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden" id="mobile-menu">
          <button
            aria-label="Close menu overlay"
            className="absolute inset-0 border-0 bg-[rgba(2,14,9,0.55)]"
            type="button"
            onClick={() => setOpen(false)}
          />
          <div
            aria-label="Mobile navigation"
            className="sk-glass-strong absolute inset-y-0 right-0 z-[1] flex w-[min(100%,320px)] flex-col px-4 pb-[env(safe-area-inset-bottom)] pt-[var(--sk-header-offset)]"
            role="navigation"
          >
            {nav.map((item) => {
              const current = isCurrent(pathname, item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? 'page' : undefined}
                  className={`flex min-h-12 items-center border-b border-white/15 text-[1.0625rem] font-medium no-underline ${
                    current ? 'text-gold' : 'text-ivory-dark'
                  }`}
                  onClick={(event) => {
                    event.preventDefault()
                    go(item.href)
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </header>
  )
}

function AppStoreLink({className = ''}: {className?: string}) {
  return (
    <a
      aria-label="Download Super Kalooki on the App Store"
      className={`sk-btn sk-btn--gold ${className}`}
      data-cta="app-store"
      data-cta-campaign="website_header"
      href={appStoreHref}
      rel="noopener noreferrer"
      target="_blank"
    >
      <AppleMark />
      Download
    </a>
  )
}

function AndroidLink({
  className = '',
  onClick,
}: {
  className?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <Link
      aria-label="Android waitlist and download"
      className={`sk-btn sk-btn--outline ${className}`}
      href="/android/"
      onClick={onClick}
    >
      <AndroidMark className="size-[18px] shrink-0" />
      Android
    </Link>
  )
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.85" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function AppleMark() {
  return (
    <svg aria-hidden="true" className="size-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c.7-1 1.2-2.1 1.5-3.2-3.9-1.5-3.8-5.5-3.8-5.1ZM14.7 6.2c.6-.8 1.1-1.9.9-3-1 .1-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="size-[15px] fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}
