export const CONSENT_STORAGE_KEY = 'sk_cookie_consent_v1'
export const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

export type ConsentState = {
  necessary: true
  analytics: boolean
  updatedAt: string
}

export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null

  try {
    const fromCookie = readConsentCookie()
    if (fromCookie) return fromCookie

    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = parseConsent(raw)
    // Migrate legacy localStorage-only preference into a cookie.
    if (parsed) writeConsent(parsed.analytics)
    return parsed
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
  const raw = JSON.stringify(next)
  window.localStorage.setItem(CONSENT_STORAGE_KEY, raw)
  document.cookie = `${CONSENT_STORAGE_KEY}=${encodeURIComponent(raw)}; path=/; max-age=${CONSENT_COOKIE_MAX_AGE}; SameSite=Lax`
  return next
}

function parseConsent(raw: string): ConsentState | null {
  try {
    const parsed = JSON.parse(raw) as ConsentState
    if (typeof parsed.analytics !== 'boolean') return null
    return {...parsed, necessary: true}
  } catch {
    return null
  }
}

function readConsentCookie(): ConsentState | null {
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${CONSENT_STORAGE_KEY}=`))
  if (!match) return null
  const value = decodeURIComponent(match.slice(CONSENT_STORAGE_KEY.length + 1))
  return parseConsent(value)
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
