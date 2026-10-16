'use client'

import {detectClientPlatform, type ClientPlatform} from '@/lib/platform'
import {useSyncExternalStore} from 'react'

function subscribe() {
  return () => {}
}

function getClientSnapshot(): ClientPlatform {
  return detectClientPlatform(navigator.userAgent)
}

function getServerSnapshot(): ClientPlatform | null {
  return null
}

/** `null` on the server / before hydration so SSR stays on the iOS-safe default. */
export function useClientPlatform(): ClientPlatform | null {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)
}
