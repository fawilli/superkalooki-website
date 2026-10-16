'use client'

import {AndroidApkDownload} from '@/components/AndroidApkDownload'
import {OpenInAppButton} from '@/components/OpenInAppButton'
import {ANDROID_DOWNLOAD_PUBLIC} from '@/lib/android'
import {appStoreUrl, type AppStoreCampaign} from '@/lib/app-store'
import {useClientPlatform} from '@/hooks/useClientPlatform'
import {useRelatedAppInstalled} from '@/hooks/useRelatedAppInstalled'

type Props = {
  centered?: boolean
  /** Apple App Analytics campaign token */
  campaign?: AppStoreCampaign
  /** Android download button and install steps (default true) */
  showAndroid?: boolean
  /** Soft “Open in Super Kalooki” on mobile (default true) */
  showOpenInApp?: boolean
}

export function StoreBadges({
  centered = false,
  campaign = 'website',
  showAndroid = true,
  showOpenInApp = true,
}: Props) {
  const platform = useClientPlatform()
  const installState = useRelatedAppInstalled()
  const mobile = platform === 'ios' || platform === 'android'
  const installed = installState === 'installed'
  const align = centered ? 'items-center' : 'items-start'

  return (
    <div className={`flex flex-col gap-5 ${align}`}>
      {showOpenInApp && mobile ? (
        <div className={`flex w-full flex-col gap-2 ${align}`}>
          <OpenInAppButton emphasize={installed} />
          {installed ? (
            <p className="m-0 text-[0.8rem] text-ivory/45">Continue in the app — download stays available below.</p>
          ) : null}
        </div>
      ) : null}

      {/* When Android confirms install, keep store CTAs secondary — never hide them. */}
      <div
        className={`flex flex-col gap-5 ${align} ${installed ? 'opacity-90' : ''}`}
      >
        <a
          aria-label="Download Super Kalooki on the App Store"
          className="inline-block min-h-11 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          data-cta="app-store"
          data-cta-campaign={campaign}
          href={appStoreUrl(campaign)}
          rel="noopener noreferrer"
          target="_blank"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Download on the App Store"
            height={44}
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            style={{height: 44, width: 'auto', display: 'block'}}
          />
        </a>
        {showAndroid && ANDROID_DOWNLOAD_PUBLIC ? <AndroidApkDownload centered={centered} /> : null}
      </div>
    </div>
  )
}
