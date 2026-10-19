'use client'

import {appleItunesAppMeta, appLinkQueryFromSearchParams, playAppLinkUrl} from '@/lib/app-links'
import {usePathname, useSearchParams} from 'next/navigation'
import {Suspense, useEffect} from 'react'

/**
 * Keeps iOS Smart App Banner `app-argument` aligned with the current page.
 * On `/play` (including `?join=`), hands the app the same Universal Link the OS already claims.
 */
function SmartAppBannerMetaInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const onPlay = pathname === '/play' || pathname === '/play/' || pathname.startsWith('/play/')
    const argument = onPlay
      ? playAppLinkUrl(appLinkQueryFromSearchParams(searchParams))
      : playAppLinkUrl()
    const content = appleItunesAppMeta(argument)

    let meta = document.querySelector('meta[name="apple-itunes-app"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'apple-itunes-app')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }, [pathname, searchParams])

  return null
}

export function SmartAppBannerMeta() {
  return (
    <Suspense fallback={null}>
      <SmartAppBannerMetaInner />
    </Suspense>
  )
}
