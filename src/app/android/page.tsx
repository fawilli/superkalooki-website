import {AndroidApkDownload} from '@/components/AndroidApkDownload'
import {JsonLd} from '@/components/JsonLd'
import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {StoreBadges} from '@/components/StoreBadges'
import {
  androidApplicationJsonLd,
  graphJsonLd,
  organizationJsonLd,
  webPageJsonLd,
} from '@/lib/json-ld'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Download Super Kalooki for Android',
  description:
    'Download Super Kalooki for Android. Tap download, open the file, then tap Install. Free Jamaican Contract Rummy — entertainment only.',
  alternates: {canonical: '/android/'},
  openGraph: {
    title: 'Download Super Kalooki for Android',
    description: 'Free Super Kalooki for Android. Tap download, then Install.',
    url: '/android/',
  },
}

export default function AndroidDownloadPage() {
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    androidApplicationJsonLd(),
    webPageJsonLd({
      name: 'Download Super Kalooki for Android',
      description: metadata.description as string,
      path: '/android/',
    }),
  ])

  return (
    <div className="min-h-screen bg-felt text-ivory">
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="main-content">
        <section className="pt-28 pb-16 px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl mx-auto">
            <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">
              Android
            </p>
            <h1 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] font-normal text-ivory m-0 mb-5 text-pretty">
              Get Super Kalooki on your phone
            </h1>
            <p className="text-ivory/65 leading-relaxed text-lg mb-8">
              Tap the button, then follow the three steps. Free to play — entertainment only.
            </p>

            <div className="rounded-[1.15rem] border border-white/12 bg-felt-deep/80 p-5 sm:p-8 ring-1 ring-black/30 mb-12">
              <AndroidApkDownload />
            </div>

            <p className="text-ivory/55 text-sm m-0">
              On iPhone or iPad, use the{' '}
              <Link className="text-gold hover:text-gold-lt" href="/play/">
                App Store download
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-white/6 bg-felt-deep py-16 px-5 text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] text-ivory m-0 mb-3">
            Also on iOS
          </h2>
          <p className="text-ivory/60 mb-8 max-w-lg mx-auto">
            Super Kalooki is free on the App Store for iPhone and iPad.
          </p>
          <StoreBadges campaign="website_cta" centered showAndroid={false} />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
