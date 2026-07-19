'use client'

import {
  CONSENT_STORAGE_KEY,
  OPEN_COOKIE_SETTINGS_EVENT,
  applyGtagConsent,
  readConsent,
  writeConsent,
} from '@/lib/consent'
import Link from 'next/link'
import {useEffect, useSyncExternalStore} from 'react'

const GA_MEASUREMENT = 'G-SL2JT4PC9T'
const GA_TAG = 'GT-KFHT9GHL'
const CLARITY_ID = 'wmxjtxj1w5'

let analyticsLoaded = false
let panelEpoch = 0
let draftAnalytics = false

function emit(name: string) {
  window.dispatchEvent(new Event(name))
}

function subscribeKey(key: string, onChange: () => void) {
  const handler = () => onChange()
  window.addEventListener(key, handler)
  return () => window.removeEventListener(key, handler)
}

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
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
  window.gtag('js', new Date())
  window.gtag('config', GA_TAG)
  window.gtag('config', GA_MEASUREMENT)
  loadClarity()
}

/**
 * Free first-party cookie banner + Consent Mode v2 bridge.
 * Replaces Cookiebot; analytics scripts load only after opt-in.
 */
export function CookieConsent() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const stored = useSyncExternalStore(
    (onChange) => {
      const onStorage = (e: StorageEvent) => {
        if (e.key === null || e.key === CONSENT_STORAGE_KEY) onChange()
      }
      window.addEventListener('storage', onStorage)
      const unsub = subscribeKey('sk-consent-changed', onChange)
      return () => {
        window.removeEventListener('storage', onStorage)
        unsub()
      }
    },
    readConsent,
    () => null,
  )
  const epoch = useSyncExternalStore(
    (onChange) => subscribeKey('sk-consent-ui', onChange),
    () => panelEpoch,
    () => 0,
  )
  const analyticsChecked = useSyncExternalStore(
    (onChange) => subscribeKey('sk-consent-ui', onChange),
    () => draftAnalytics,
    () => false,
  )

  useEffect(() => {
    if (!mounted || !stored) return
    applyGtagConsent(stored.analytics)
    if (stored.analytics) loadAnalytics()
  }, [mounted, stored])

  if (!mounted) return null

  const needsChoice = stored === null
  const settingsOpen = epoch > 0 && epoch % 2 === 1
  // epoch odd = open, even = closed; first visit forces open via needsChoice
  const visible = needsChoice || settingsOpen

  if (!visible) return null

  function save(nextAnalytics: boolean) {
    writeConsent(nextAnalytics)
    applyGtagConsent(nextAnalytics)
    if (nextAnalytics) loadAnalytics()
    draftAnalytics = nextAnalytics
    // close panel: bump to even epoch
    panelEpoch = panelEpoch % 2 === 1 ? panelEpoch + 1 : panelEpoch + 2
    emit('sk-consent-changed')
    emit('sk-consent-ui')
  }

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
            checked={analyticsChecked}
            className="mt-1 size-4 accent-[var(--color-gold)]"
            type="checkbox"
            onChange={(e) => {
              draftAnalytics = e.target.checked
              emit('sk-consent-ui')
            }}
          />
          <span className="text-sm text-ivory/80 leading-snug">
            <strong className="text-ivory font-semibold">Analytics</strong> — help us improve Super Kalooki.com
            (GA4 + Clarity). Off by default.
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
            onClick={() => save(analyticsChecked)}
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
      onClick={() => {
        draftAnalytics = readConsent()?.analytics ?? false
        panelEpoch = panelEpoch % 2 === 1 ? panelEpoch : panelEpoch + 1
        emit(OPEN_COOKIE_SETTINGS_EVENT)
        emit('sk-consent-ui')
      }}
    >
      Cookie settings
    </button>
  )
}
