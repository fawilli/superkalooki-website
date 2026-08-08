import {ConsentScripts} from '@/components/ConsentScripts'
import {StickyDownloadBar} from '@/components/StickyDownloadBar'
import {APP_STORE_ID} from '@/lib/app-store'
import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import {Geist, Instrument_Serif} from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Super Kalooki — Play Jamaican Kalooki & Contract Rummy Online',
    template: '%s | Super Kalooki',
  },
  description:
    'Download Super Kalooki, the free Jamaican Contract Rummy (Kalooki) app for iOS. Play solo vs AI or live online with 4–6 friends. Nine deals, changing contracts, lowest score wins.',
  openGraph: {
    type: 'website',
    siteName: 'Super Kalooki',
    locale: 'en_US',
    title: 'Super Kalooki — Jamaican Kalooki & Contract Rummy',
    description:
      'Free Kalooki app: nine scored deals, changing contracts, solo AI or live tables for 4–6 players.',
    images: [
      {
        url: '/marketing/solo-mid-hand.png',
        width: 1920,
        height: 883,
        alt: 'Super Kalooki gameplay screenshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Kalooki — Play Kalooki Online',
    description: 'Free Jamaican Kalooki / Contract Rummy for iOS. Solo or live with friends.',
    images: ['/marketing/solo-mid-hand.png'],
  },
  other: {
    'apple-itunes-app': `app-id=${APP_STORE_ID}, app-argument=${siteUrl}`,
  },
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_personalization: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', false);
`,
          }}
        />
      </head>
      <body
        className="font-sans antialiased pb-20 lg:pb-0"
        style={
          {
            fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
            ['--font-display' as string]: 'var(--font-instrument), serif',
          } as React.CSSProperties
        }
      >
        <ConsentScripts />
        {children}
        <StickyDownloadBar />
        <SpeedInsights />
      </body>
    </html>
  )
}
