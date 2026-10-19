import {ANDROID_PACKAGE_ID} from '@/lib/android'
import {APP_STORE_ID} from '@/lib/app-store'

/** Paths claimed by Universal Links / App Links (see public/.well-known/). */
export const APP_LINK_PACKAGE_ID = ANDROID_PACKAGE_ID
export const APP_LINK_PLAY_PATH = '/play/'

const DEFAULT_SITE = 'https://superkalooki.com'

export function siteOrigin(
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE,
): string {
  return siteUrl.replace(/\/$/, '')
}

export type AppLinkQuery = {
  join?: string | null
  seats?: string | null
  resumeSolo?: string | null
}

/** HTTPS Universal / App Link into the claimed `/play` surface. */
export function playAppLinkUrl(
  query: AppLinkQuery = {},
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE,
): string {
  const url = new URL(APP_LINK_PLAY_PATH, `${siteOrigin(siteUrl)}/`)
  if (query.join) url.searchParams.set('join', query.join)
  if (query.seats) url.searchParams.set('seats', query.seats)
  if (query.resumeSolo) url.searchParams.set('resumeSolo', query.resumeSolo)
  return url.toString()
}

/**
 * Android Intent URL that asks the OS to open the installed package.
 * Falls back to `fallbackUrl` (HTTPS) when the app is not installed — never fakes install state.
 */
export function androidIntentOpenUrl(
  playUrl: string,
  fallbackUrl: string,
  packageId = APP_LINK_PACKAGE_ID,
): string {
  const parsed = new URL(playUrl)
  const pathAndQuery = `${parsed.pathname}${parsed.search}`
  const fallback = encodeURIComponent(fallbackUrl)
  return `intent://${parsed.host}${pathAndQuery}#Intent;scheme=https;package=${packageId};S.browser_fallback_url=${fallback};end`
}

/** Smart App Banner meta content; `appArgument` should be the full HTTPS URL to hand the app. */
export function appleItunesAppMeta(appArgument: string, appId = APP_STORE_ID): string {
  return `app-id=${appId}, app-argument=${appArgument}`
}

/** Read invite / resume params from a URLSearchParams-like source. */
export function appLinkQueryFromSearchParams(
  params: URLSearchParams | {get(name: string): string | null},
): AppLinkQuery {
  return {
    join: params.get('join'),
    seats: params.get('seats'),
    resumeSolo: params.get('resumeSolo'),
  }
}
