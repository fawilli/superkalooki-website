'use client'

import {OpenInAppButton} from '@/components/OpenInAppButton'
import {useClientPlatform} from '@/hooks/useClientPlatform'
import {useRelatedAppInstalled} from '@/hooks/useRelatedAppInstalled'
import {useSyncExternalStore} from 'react'

const DISMISS_KEY = 'sk_open_in_app_dismissed'
const dismissListeners = new Set<() => void>()

function readDismissed() {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === '1'
  } catch {
    return false
  }
}

function subscribeDismiss(onStoreChange: () => void) {
  dismissListeners.add(onStoreChange)
  return () => {
    dismissListeners.delete(onStoreChange)
  }
}

function getDismissedSnapshot() {
  return readDismissed()
}

function getServerDismissedSnapshot() {
  return true
}

function dismissOpenInAppPrompt() {
  try {
    sessionStorage.setItem(DISMISS_KEY, '1')
  } catch {
    /* ignore */
  }
  dismissListeners.forEach((listener) => listener())
}

/**
 * Session-dismissible strip when Chrome reports the Android package via
 * getInstalledRelatedApps. Never shown without that OS signal — no fake “has app”.
 */
export function OpenInAppPrompt({variant = 'installed'}: {variant?: 'installed'}) {
  const platform = useClientPlatform()
  const installState = useRelatedAppInstalled()
  const dismissed = useSyncExternalStore(
    subscribeDismiss,
    getDismissedSnapshot,
    getServerDismissedSnapshot,
  )
  const installed = installState === 'installed'

  if (variant !== 'installed') return null
  if (platform !== 'android' || !installed || dismissed) return null

  return (
    <div
      className="fixed inset-x-0 top-[var(--sk-header-offset)] z-30 px-3 pt-2 lg:hidden"
      role="region"
      aria-label="Open in Super Kalooki"
    >
      <div className="sk-glass-strong mx-auto flex max-w-lg items-start gap-3 rounded-tile p-3">
        <div className="min-w-0 flex-1">
          <p className="m-0 text-[0.8125rem] font-semibold text-ivory">Open Super Kalooki</p>
          <p className="m-0 mt-1 text-[0.75rem] leading-snug text-ivory/55">
            Continue in the app for the full table experience.
          </p>
          <div className="mt-3">
            <OpenInAppButton className="sk-btn sk-btn--gold min-h-11 w-full" emphasize>
              Open in Super Kalooki
            </OpenInAppButton>
          </div>
        </div>
        <button
          aria-label="Dismiss open in app prompt"
          className="inline-grid size-11 shrink-0 place-items-center rounded-control border border-white/15 bg-transparent text-ivory/50"
          type="button"
          onClick={dismissOpenInAppPrompt}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        </button>
      </div>
    </div>
  )
}
