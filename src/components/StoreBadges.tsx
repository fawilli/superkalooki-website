import {AndroidApkDownload} from '@/components/AndroidApkDownload'
import {appStoreUrl, type AppStoreCampaign} from '@/lib/app-store'

type Props = {
  centered?: boolean
  /** Apple App Analytics campaign token */
  campaign?: AppStoreCampaign
  /** Android download button and install steps (default true) */
  showAndroid?: boolean
}

export function StoreBadges({
  centered = false,
  campaign = 'website',
  showAndroid = true,
}: Props) {
  return (
    <div className={centered ? 'flex flex-col items-center gap-5' : 'flex flex-col items-start gap-5'}>
      <a
        aria-label="Download Super Kalooki on the App Store"
        className="inline-block no-underline min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
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
      {showAndroid ? <AndroidApkDownload centered={centered} /> : null}
    </div>
  )
}
