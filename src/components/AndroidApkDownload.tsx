'use client'

import {
  ANDROID_APK_FILENAME,
  ANDROID_APK_PATH,
  ANDROID_APK_SHA256,
  ANDROID_VERSION_CODE,
  ANDROID_VERSION_NAME,
  formatSha256Grouped,
} from '@/lib/android'
import {useState} from 'react'

type Props = {
  /** Extra class on the outer wrap (alignment comes from parent). */
  className?: string
}

export function AndroidApkDownload({className = ''}: Props) {
  const [copied, setCopied] = useState(false)

  async function copyHash() {
    try {
      await navigator.clipboard.writeText(ANDROID_APK_SHA256)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`.trim()}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <a
          aria-label={`Download Super Kalooki ${ANDROID_VERSION_NAME} Android APK`}
          className="inline-flex items-center justify-center min-h-11 px-5 rounded-xl bg-gold text-felt-deep text-[0.9375rem] font-semibold no-underline whitespace-nowrap transition-colors hover:bg-gold-lt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          data-cta="android-apk"
          data-cta-version={`${ANDROID_VERSION_NAME}-${ANDROID_VERSION_CODE}`}
          download={ANDROID_APK_FILENAME}
          href={ANDROID_APK_PATH}
        >
          Download Android APK
        </a>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-[0.6875rem] font-semibold tracking-[0.14em] uppercase text-gold/80 m-0">
              SHA-256
            </p>
            <button
              className="min-h-11 min-w-11 px-2 text-[0.75rem] font-semibold text-gold bg-transparent border-0 cursor-pointer hover:text-gold-lt"
              onClick={copyHash}
              type="button"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <code
            className="block text-[0.6875rem] sm:text-[0.75rem] leading-snug text-ivory/70 font-mono break-all m-0"
            title={ANDROID_APK_SHA256}
          >
            {formatSha256Grouped(ANDROID_APK_SHA256)}
          </code>
        </div>
      </div>
      <p className="text-[0.75rem] text-white/40 m-0 leading-relaxed max-w-[42ch]">
        Version {ANDROID_VERSION_NAME} ({ANDROID_VERSION_CODE}). Android will ask you to allow this
        site, then Install.
      </p>
    </div>
  )
}
