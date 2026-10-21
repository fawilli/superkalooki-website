import {GuideLayout} from '@/components/GuideLayout'
import {AI_SUMMARY, IPHONE_FAQS} from '@/lib/jamaican-kalooki'
import {
  faqPageJsonLd,
  graphJsonLd,
  organizationJsonLd,
  webPageJsonLd,
} from '@/lib/json-ld'
import type {Metadata} from 'next'
import Link from 'next/link'

const TITLE = 'Can I play Jamaican Kalooki on iPhone?'
const DESCRIPTION =
  'Yes. Super Kalooki is free on the App Store for iPhone and iPad. Download, then play Solo or a live private table. Entertainment only.'

export const metadata: Metadata = {
  title: 'Play Jamaican Kalooki on iPhone — Super Kalooki',
  description: DESCRIPTION,
  alternates: {canonical: '/jamaican-kalooki/iphone/'},
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/jamaican-kalooki/iphone/',
  },
}

export default function IphoneGuidePage() {
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    webPageJsonLd({
      name: TITLE,
      description: DESCRIPTION,
      path: '/jamaican-kalooki/iphone/',
    }),
    faqPageJsonLd(IPHONE_FAQS),
  ])

  return (
    <GuideLayout
      currentPath="/jamaican-kalooki/iphone/"
      eyebrow="iPhone"
      jsonLd={jsonLd}
      showAndroid={false}
      storeCampaign="website_guide_iphone"
      storeSubcopy="Free Jamaican Contract Rummy on iPhone and iPad. Entertainment only — no real money, gambling, or prizes."
      summary={`${AI_SUMMARY} This page is the iPhone download path: App Store Get, then Solo or a live private table.`}
      title={TITLE}
    >
      <p>
        Yes. Super Kalooki is free on the App Store for iPhone and iPad. Download the app, then play Solo vs bots or
        host a live private table for 4–6 friends. Entertainment only — no real money, gambling, or prizes.
      </p>

      <h2>Can I play Jamaican Kalooki on iPhone?</h2>
      <p>
        Super Kalooki is the digital Jamaican Contract Rummy table: nine deals, changing contracts, calling, and
        tacking. The iOS listing is live. Open it, tap Get, and you are at the same rules as the{' '}
        <Link href="/jamaican-kalooki/">Jamaican Kalooki hub</Link>. Google’s AI features use the same{' '}
        <a href="https://developers.google.com/search/docs/appearance/ai-features" rel="noopener noreferrer">
          people-first, crawlable, snippet-eligible
        </a>{' '}
        pages as Search — not a special <code>llms.txt</code> file.
      </p>

      <h2>How do I download Super Kalooki on iPhone?</h2>
      <p>
        Open the Super Kalooki App Store listing and tap Get. The listing is live and the app is free. Practice{' '}
        <Link href="/jamaican-kalooki/tacking/">call and tack</Link> in Solo, then invite friends to a private table.
        The play page also walks through{' '}
        <Link href="/play/">how to play Jamaican Kalooki online</Link>.
      </p>

      <h2>Is Super Kalooki on Google Play?</h2>
      <p>
        This page is the iPhone download path. Super Kalooki does not claim a Google Play listing here. Use the App
        Store Get button for iOS.
      </p>

      <h2>Common questions</h2>
      {IPHONE_FAQS.map((faq) => (
        <div key={faq.question} className="mb-5">
          <h3 className="!text-base !font-semibold !border-0 !pb-0">{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

      <p>
        Next: <Link href="/jamaican-kalooki/scoring/">scoring and deadwood</Link>,{' '}
        <Link href="/jamaican-kalooki/strategy/">strategy tips</Link>, or the{' '}
        <Link href="/jamaican-kalooki/">Jamaican Kalooki hub</Link>.
      </p>
    </GuideLayout>
  )
}
