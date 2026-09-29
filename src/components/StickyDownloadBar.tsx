'use client'

import {AndroidMark} from '@/components/AndroidMark'
import {ANDROID_APK_FILENAME, ANDROID_APK_PATH} from '@/lib/android'
import {appStoreUrl} from '@/lib/app-store'
import {useEffect, useState} from 'react'

/**
 * Persistent mobile download bar — both stores, after the hero scrolls away.
 * Hidden on large screens where header + hero badges already convert.
 */
export function StickyDownloadBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280)
    onScroll()
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden transition-transform duration-200 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
      style={{paddingBottom: 'env(safe-area-inset-bottom, 0px)'}}
    >
      <div className="flex gap-2 border-t border-white/10 bg-felt-deep/95 px-3 py-3 shadow-[0_-8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <a
          aria-label="Download Super Kalooki on the App Store"
          className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl bg-gold px-3 text-[0.9rem] font-semibold text-felt-deep no-underline transition-colors hover:bg-gold-lt active:scale-[0.99]"
          data-cta="app-store"
          data-cta-campaign="website_sticky"
          href={appStoreUrl('website_sticky')}
          rel="noopener noreferrer"
          target="_blank"
        >
          <AppleMark />
          App Store
        </a>
        <a
          aria-label="Download Super Kalooki for Android"
          className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl bg-gold px-3 text-[0.9rem] font-semibold text-felt-deep no-underline transition-colors hover:bg-gold-lt active:scale-[0.99]"
          data-cta="android-apk"
          data-cta-campaign="website_sticky"
          download={ANDROID_APK_FILENAME}
          href={ANDROID_APK_PATH}
        >
          <AndroidMark className="size-5 shrink-0" />
          Android
        </a>
      </div>
    </div>
  )
}

function AppleMark() {
  return (
    <svg aria-hidden="true" className="size-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c.7-1 1.2-2.1 1.5-3.2-3.9-1.5-3.8-5.5-3.8-5.1ZM14.7 6.2c.6-.8 1.1-1.9.9-3-1 .1-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3Z" />
    </svg>
  )
}
