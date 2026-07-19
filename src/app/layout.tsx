import {ConsentScripts} from '@/components/ConsentScripts'
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
    default: 'Super Kalooki — Contract Rummy for iOS & Android',
    template: '%s | Super Kalooki',
  },
  description:
    'Super Kalooki — Contract Rummy on iOS and Android. 4–6 players. Single player AI or live online with friends. Free to download on the App Store.',
  openGraph: {
    type: 'website',
    siteName: 'Super Kalooki',
    locale: 'en_US',
  },
  icons: {
    icon: [
      {url: '/favicon.ico'},
      {url: '/icon-32.png', sizes: '32x32', type: 'image/png'},
      {url: '/icon-192.png', sizes: '192x192', type: 'image/png'},
    ],
    apple: [{url: '/icon-180.png', sizes: '180x180', type: 'image/png'}],
  },
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <body
        className="font-sans antialiased"
        style={
          {
            fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
            ['--font-display' as string]: 'var(--font-instrument), serif',
          } as React.CSSProperties
        }
      >
        <ConsentScripts />
        {children}
      </body>
    </html>
  )
}
