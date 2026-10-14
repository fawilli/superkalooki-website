'use client'

import {detectClientPlatform, type ClientPlatform} from '@/lib/platform'
import {useEffect, useState} from 'react'

/** `null` until mount so SSR/hydration stay on the iOS default. */
export function useClientPlatform(): ClientPlatform | null {
  const [platform, setPlatform] = useState<ClientPlatform | null>(null)

  useEffect(() => {
    setPlatform(detectClientPlatform(navigator.userAgent))
  }, [])

  return platform
}
