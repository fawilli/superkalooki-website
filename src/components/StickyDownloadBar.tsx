'use client'

import {AndroidMark} from '@/components/AndroidMark'
import {ANDROID_DOWNLOAD_PUBLIC} from '@/lib/android'
import {appStoreUrl} from '@/lib/app-store'
import Link from 'next/link'
import {useEffect, useState} from 'react'

/**
 * Mobile download bar. Hidden while the hero App Store control is on screen.
 * One gold App Store action. Android is an outline door to /android/, not a second gold download.
 */
export function StickyDownloadBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('[data-cta-campaign="website_hero"]')
    if (!hero) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      {threshold: 0.2},
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(12px,env(safe-area-inset-bottom))] transition-transform duration-200 ease-out lg:hidden ${
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      }`}
    >
      <div className="sk-glass-strong flex gap-2 rounded-tile p-3">
        <a
          aria-label="Download Super Kalooki on the App Store"
          className="sk-btn sk-btn--gold sk-btn--lg min-w-0 flex-1"
          data-cta="app-store"
          data-cta-campaign="website_sticky"
          href={appStoreUrl('website_sticky')}
          rel="noopener noreferrer"
          target="_blank"
        >
          <AppleMark />
          App Store
        </a>
        {ANDROID_DOWNLOAD_PUBLIC ? (
          <Link
            aria-label="Android waitlist and download"
            className="sk-btn sk-btn--outline sk-btn--lg min-w-0 flex-1"
            href="/android/"
          >
            <AndroidMark className="size-5 shrink-0" />
            Android
          </Link>
        ) : null}
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
