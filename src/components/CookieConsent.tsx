'use client'

import {
  OPEN_COOKIE_SETTINGS_EVENT,
  applyGtagConsent,
  readConsent,
  writeConsent,
} from '@/lib/consent'
import Link from 'next/link'
import {useEffect, useState} from 'react'

const GA_MEASUREMENT = 'G-SL2JT4PC9T'
const GA_TAG = 'GT-KFHT9GHL'
const CLARITY_ID = 'wmxjtxj1w5'

let analyticsLoaded = false

function loadClarity() {
  if (document.getElementById('sk-clarity')) return

  const w = window as Window & {
    clarity?: ((...args: unknown[]) => void) & {q?: unknown[]}
  }
  w.clarity =
    w.clarity ||
    function (...args: unknown[]) {
      ;(w.clarity!.q = w.clarity!.q || []).push(args)
    }

  const script = document.createElement('script')
  script.id = 'sk-clarity'
  script.async = true
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`
  const first = document.getElementsByTagName('script')[0]
  first?.parentNode?.insertBefore(script, first)
}

function loadAnalytics() {
  if (analyticsLoaded || document.getElementById('sk-ga-src')) {
    analyticsLoaded = true
    return
  }
  analyticsLoaded = true

  const ga = document.createElement('script')
  ga.id = 'sk-ga-src'
  ga.async = true
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TAG}`
  document.head.appendChild(ga)

  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments)
    }
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_TAG)
  window.gtag('config', GA_MEASUREMENT)
  loadClarity()
}

/**
 * Free first-party cookie banner + Consent Mode v2 bridge.
 * Preference is stored in a cookie + localStorage — no third-party CMP.
 */
export function CookieConsent() {
  const [ready, setReady] = useState(false)
  const [open, setOpen] = useState(false)
  const [draftAnalytics, setDraftAnalytics] = useState(true)

  useEffect(() => {
    const existing = readConsent()
    // Defer state updates so hydration from storage isn't flagged as cascading render.
    queueMicrotask(() => {
      if (existing) {
        setDraftAnalytics(existing.analytics)
        setOpen(false)
      } else {
        setDraftAnalytics(true)
        setOpen(true)
      }
      setReady(true)
    })

    if (existing) {
      applyGtagConsent(existing.analytics)
      if (existing.analytics) loadAnalytics()
    }

    const onOpen = () => {
      const current = readConsent()
      setDraftAnalytics(current?.analytics ?? true)
      setOpen(true)
    }
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen)
  }, [])

  function save(nextAnalytics: boolean) {
    try {
      writeConsent(nextAnalytics)
      applyGtagConsent(nextAnalytics)
      if (nextAnalytics) loadAnalytics()
      setDraftAnalytics(nextAnalytics)
      setOpen(false)
    } catch (err) {
      console.error('Failed to save cookie preference', err)
    }
  }

  if (!ready || !open) return null

  return (
    <div
      aria-describedby="sk-cookie-desc"
      aria-labelledby="sk-cookie-title"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-5"
      role="dialog"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-white/15 bg-felt-deep/95 text-ivory shadow-2xl backdrop-blur-md p-5 sm:p-6">
        <h2 className="font-display text-xl text-ivory m-0 mb-2" id="sk-cookie-title">
          Cookie preferences
        </h2>
        <p className="text-sm text-ivory/65 leading-relaxed m-0 mb-4" id="sk-cookie-desc">
          We use necessary cookies to run the site. With your permission we also use analytics cookies (Google
          Analytics and Microsoft Clarity) to understand usage. See our{' '}
          <Link className="text-gold hover:text-gold-lt underline-offset-2 hover:underline" href="/cookie-policy/">
            Cookie Policy
          </Link>
          .
        </p>

        <label className="flex items-start gap-3 mb-5 cursor-pointer min-h-11">
          <input
            checked={draftAnalytics}
            className="mt-1 size-4 accent-[var(--color-gold)]"
            type="checkbox"
            onChange={(e) => setDraftAnalytics(e.target.checked)}
          />
          <span className="text-sm text-ivory/80 leading-snug">
            <strong className="text-ivory font-semibold">Analytics</strong> — help us improve Super Kalooki.com
            (GA4 + Clarity). Recommended; uncheck to decline.
          </span>
        </label>

        <div className="flex flex-wrap gap-2.5">
          <button
            className="min-h-11 px-4 rounded-md bg-gold text-felt-deep text-sm font-semibold border-0 cursor-pointer hover:bg-gold-lt transition-colors"
            type="button"
            onClick={() => save(true)}
          >
            Accept analytics
          </button>
          <button
            className="min-h-11 px-4 rounded-md bg-white/10 text-ivory text-sm font-semibold border border-white/20 cursor-pointer hover:bg-white/15 transition-colors"
            type="button"
            onClick={() => save(false)}
          >
            Necessary only
          </button>
          <button
            className="min-h-11 px-4 rounded-md bg-transparent text-gold text-sm font-semibold border border-gold/40 cursor-pointer hover:border-gold transition-colors"
            type="button"
            onClick={() => save(draftAnalytics)}
          >
            Save choices
          </button>
        </div>
      </div>
    </div>
  )
}

export function CookieSettingsLink({className = ''}: {className?: string}) {
  return (
    <button
      className={`bg-transparent border-0 p-0 cursor-pointer text-inherit font-inherit ${className}`}
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
    >
      Cookie settings
    </button>
  )
}
