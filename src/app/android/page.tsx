import {AndroidApkDownload} from '@/components/AndroidApkDownload'
import {JsonLd} from '@/components/JsonLd'
import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {StoreBadges} from '@/components/StoreBadges'
import {
  ANDROID_APK_FILENAME,
  ANDROID_APK_SHA256,
  ANDROID_PACKAGE_ID,
  ANDROID_VERSION_CODE,
  ANDROID_VERSION_NAME,
} from '@/lib/android'
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
    'Download the Super Kalooki Android APK from superkalooki.com. Jamaican Contract Rummy — free, entertainment only. Android will ask you to allow this site, then Install.',
  alternates: {canonical: '/android/'},
  openGraph: {
    title: 'Download Super Kalooki for Android',
    description:
      'Free Android APK for Super Kalooki. Version 1.6. Allow this site, then Install.',
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
          <div className="max-w-2xl mx-auto">
            <p className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold/80 mb-3">
              Android
            </p>
            <h1 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] font-normal text-ivory m-0 mb-5 text-pretty">
              Download Super Kalooki for Android
            </h1>
            <p className="text-ivory/65 leading-relaxed text-lg mb-8">
              Free Jamaican Contract Rummy on your phone. Tap download, then Android will ask you to
              allow this site and Install.
            </p>

            <div className="rounded-[1.15rem] border border-white/12 bg-felt-deep/80 p-5 sm:p-7 ring-1 ring-black/30 mb-10">
              <AndroidApkDownload />
            </div>

            <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] text-ivory mb-4">
              After you download
            </h2>
            <ol className="text-ivory/65 leading-relaxed space-y-3 list-decimal pl-5 m-0 mb-10">
              <li>Open {ANDROID_APK_FILENAME} from your downloads.</li>
              <li>If Android asks, allow superkalooki.com to install apps.</li>
              <li>Tap Install. Super Kalooki opens like any other app.</li>
            </ol>

            <dl className="grid gap-4 sm:grid-cols-2 m-0 mb-10 text-sm">
              <div>
                <dt className="text-white/40 m-0 mb-1">Version</dt>
                <dd className="m-0 text-ivory/85">
                  {ANDROID_VERSION_NAME} ({ANDROID_VERSION_CODE})
                </dd>
              </div>
              <div>
                <dt className="text-white/40 m-0 mb-1">Package</dt>
                <dd className="m-0 text-ivory/85 font-mono text-[0.8125rem] break-all">
                  {ANDROID_PACKAGE_ID}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-white/40 m-0 mb-1">SHA-256</dt>
                <dd className="m-0 text-ivory/85 font-mono text-[0.8125rem] break-all">
                  {ANDROID_APK_SHA256}
                </dd>
              </div>
            </dl>

            <p className="text-[0.8rem] text-white/40 tracking-[0.02em] mb-12">
              Entertainment only — no real money, gambling, or prizes.
            </p>

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
