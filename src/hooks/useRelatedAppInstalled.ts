'use client'

import {APP_LINK_PACKAGE_ID} from '@/lib/app-links'
import {detectClientPlatform} from '@/lib/platform'
import {useEffect, useState} from 'react'

type RelatedApp = {
  id?: string
  platform: string
  url?: string
}

type NavigatorWithRelatedApps = Navigator & {
  getInstalledRelatedApps?: () => Promise<RelatedApp[]>
}

export type RelatedAppInstallState = 'unknown' | 'checking' | 'installed' | 'not_detected'

function isSuperKalookiRelated(app: RelatedApp): boolean {
  if (app.id === APP_LINK_PACKAGE_ID) return true
  if (app.url?.includes(`id=${APP_LINK_PACKAGE_ID}`)) return true
  return false
}

/**
 * Best-effort install signal via Chrome's getInstalledRelatedApps (Android).
 * Only `installed` is affirmative — never claim the app is present without a package match.
 * iOS has no equivalent API; stays `unknown` (Smart App Banner handles OS-native open).
 */
export function useRelatedAppInstalled(): RelatedAppInstallState {
  const [state, setState] = useState<RelatedAppInstallState>('unknown')

  useEffect(() => {
    const platform = detectClientPlatform(navigator.userAgent)
    if (platform !== 'android') return

    const nav = navigator as NavigatorWithRelatedApps
    if (typeof nav.getInstalledRelatedApps !== 'function') return

    let cancelled = false

    void (async () => {
      setState('checking')
      try {
        const apps = await nav.getInstalledRelatedApps!()
        if (cancelled) return
        setState(apps.some(isSuperKalookiRelated) ? 'installed' : 'not_detected')
      } catch {
        if (!cancelled) setState('unknown')
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return state
}
