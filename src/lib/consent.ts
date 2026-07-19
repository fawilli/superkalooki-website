export const CONSENT_STORAGE_KEY = 'sk_cookie_consent_v1'

export type ConsentState = {
  necessary: true
  analytics: boolean
  updatedAt: string
}

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  updatedAt: '',
}

export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentState
    if (typeof parsed.analytics !== 'boolean') return null
    return {...parsed, necessary: true}
  } catch {
    return null
  }
}

export function writeConsent(analytics: boolean): ConsentState {
  const next: ConsentState = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  }
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next))
  return next
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
  }
}

export function applyGtagConsent(analytics: boolean) {
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      // Official GTM stub shape — push Arguments, not a rest array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments)
    }
  }
  window.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: analytics ? 'granted' : 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
  })
}

export const OPEN_COOKIE_SETTINGS_EVENT = 'sk-open-cookie-settings'
