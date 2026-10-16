'use client'

import {
  androidIntentOpenUrl,
  appLinkQueryFromSearchParams,
  playAppLinkUrl,
  type AppLinkQuery,
} from '@/lib/app-links'
import {useClientPlatform} from '@/hooks/useClientPlatform'
import {useRelatedAppInstalled} from '@/hooks/useRelatedAppInstalled'
import {useSearchParams} from 'next/navigation'
import {Suspense, useMemo} from 'react'

type Props = {
  /** Extra query merged over the current URL (e.g. invite stay-in-browser nudge). */
  query?: AppLinkQuery
  /** Visual weight — gold when we know the Android package is installed. */
  emphasize?: boolean
  className?: string
  children?: React.ReactNode
}

function OpenInAppButtonInner({
  query,
  emphasize = false,
  className = '',
  children = 'Open in Super Kalooki',
}: Props) {
  const platform = useClientPlatform()
  const installState = useRelatedAppInstalled()
  const searchParams = useSearchParams()

  const {href, installed} = useMemo(() => {
    const fromUrl = appLinkQueryFromSearchParams(searchParams)
    const merged: AppLinkQuery = {
      join: query?.join ?? fromUrl.join,
      seats: query?.seats ?? fromUrl.seats,
      resumeSolo: query?.resumeSolo ?? fromUrl.resumeSolo,
    }
    const httpsUrl = playAppLinkUrl(merged)
    const installedNow = installState === 'installed'

    if (platform === 'android') {
      // Intent URL forces an app open from the same origin; HTTPS alone often stays in Chrome.
      const fallback = httpsUrl
      return {href: androidIntentOpenUrl(httpsUrl, fallback), installed: installedNow}
    }

    // iOS / other: Universal Link. Same-origin taps may stay in Safari — Smart App Banner covers that.
    return {href: httpsUrl, installed: false}
  }, [installState, platform, query, searchParams])

  if (platform === null || platform === 'other') return null

  const strong = emphasize || installed
  const classes =
    className ||
    (strong
      ? 'sk-btn sk-btn--gold sk-btn--lg'
      : 'sk-btn sk-btn--outline sk-btn--lg')

  return (
    <a
      aria-label="Open Super Kalooki in the app"
      className={classes}
      data-cta="open-in-app"
      data-cta-platform={platform}
      data-cta-installed={installed ? '1' : '0'}
      href={href}
      rel="noopener"
    >
      {children}
    </a>
  )
}

/** User-initiated open — never auto-launches; never claims install without OS signal. */
export function OpenInAppButton(props: Props) {
  return (
    <Suspense fallback={null}>
      <OpenInAppButtonInner {...props} />
    </Suspense>
  )
}
