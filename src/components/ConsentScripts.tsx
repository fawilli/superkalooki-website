import {CookieConsent} from '@/components/CookieConsent'

/**
 * Consent Mode v2 defaults are inlined in root layout (earliest paint).
 * Analytics scripts load only after opt-in — see CookieConsent.
 */
export function ConsentScripts() {
  return <CookieConsent />
}
