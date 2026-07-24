/** Single source of truth for iOS App Store acquisition links. */

export const APP_STORE_ID = '6451106023'

/** Region-neutral listing — Apple geo-routes the visitor's storefront. */
export const APP_STORE_URL =
  'https://apps.apple.com/app/super-kalooki/id6451106023'

export type AppStoreCampaign =
  | 'website_hero'
  | 'website_header'
  | 'website_cta'
  | 'website_sticky'
  | 'website_footer'
  | 'website_about'
  | 'website_play'
  | 'website'

/** App Store campaign URL for Apple App Analytics (`ct` + `mt=8`). */
export function appStoreUrl(campaign: AppStoreCampaign = 'website'): string {
  const url = new URL(APP_STORE_URL)
  url.searchParams.set('ct', campaign)
  url.searchParams.set('mt', '8')
  return url.toString()
}
