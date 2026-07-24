'use client'

import {appStoreUrl} from '@/lib/app-store'
import {useEffect, useState} from 'react'

/**
 * Persistent mobile App Store CTA — primary conversion surface for phone traffic.
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
      <div className="border-t border-white/10 bg-felt-deep/95 backdrop-blur-xl px-4 py-3 shadow-[0_-8px_32px_rgba(0,0,0,0.45)]">
        <a
          aria-label="Download Super Kalooki on the App Store"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 text-[0.95rem] font-semibold text-felt-deep no-underline transition-colors hover:bg-gold-lt active:scale-[0.99]"
          data-cta="app-store"
          data-cta-campaign="website_sticky"
          href={appStoreUrl('website_sticky')}
          rel="noopener noreferrer"
          target="_blank"
        >
          Download free on the App Store
        </a>
      </div>
    </div>
  )
}
