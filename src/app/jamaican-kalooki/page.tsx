import {GuideLayout} from '@/components/GuideLayout'
import {
  AI_SUMMARY,
  CANONICAL_DEFINITION,
  DEFINED_TERMS,
  DIFFERENTIATION_FAQS,
  NOT_KALOOKI_40_51,
} from '@/lib/jamaican-kalooki'
import {
  faqPageJsonLd,
  graphJsonLd,
  organizationJsonLd,
  webPageJsonLd,
} from '@/lib/json-ld'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is Jamaican Kalooki? — Contract Rummy from Jamaica',
  description:
    'Jamaican Kalooki is a Contract Rummy variant with nine contract deals, sets and runs, jokers, and Jamaican scoring. Super Kalooki is the iOS app for this ruleset — not Kalooki 40/51.',
  alternates: {canonical: '/jamaican-kalooki/'},
  openGraph: {
    title: 'What Is Jamaican Kalooki?',
    description: CANONICAL_DEFINITION,
    url: '/jamaican-kalooki/',
  },
}

export default function JamaicanKalookiHubPage() {
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    webPageJsonLd({
      name: 'What Is Jamaican Kalooki?',
      description: metadata.description as string,
      path: '/jamaican-kalooki/',
    }),
    faqPageJsonLd(DIFFERENTIATION_FAQS),
  ])

  return (
    <GuideLayout
      currentPath="/jamaican-kalooki/"
      eyebrow="Jamaican Kalooki"
      jsonLd={jsonLd}
      summary={AI_SUMMARY}
      title="What is Jamaican Kalooki?"
    >
      <p>{CANONICAL_DEFINITION}</p>
      <p>{NOT_KALOOKI_40_51}</p>

      <h2>Why the name matters</h2>
      <p>
        Search engines and AI tools often treat “Kalooki” as Kalooki 40 or Kalooki 51. Those are different games.
        Jamaican Kalooki sits in the <strong>Contract Rummy</strong> family: you complete a prescribed contract each
        deal, then race to go out while keeping deadwood low.
      </p>
      <p>
        <Link href="/rules/">Read the full Jamaican Kalooki rules</Link>, compare{' '}
        <Link href="/jamaican-kalooki/vs-other-variants/">variants</Link>, or{' '}
        <Link href="/play/">play Super Kalooki on iOS</Link>.
      </p>

      <h2>Key terms</h2>
      <dl>
        {DEFINED_TERMS.map((item) => (
          <div key={item.term} className="mb-4">
            <dt className="font-semibold text-text-dark m-0">{item.term}</dt>
            <dd className="m-0 mt-1 text-text-mid">{item.definition}</dd>
          </div>
        ))}
      </dl>

      <h2>Quick answers</h2>
      {DIFFERENTIATION_FAQS.map((faq) => (
        <div key={faq.question} className="mb-5">
          <h3 className="!text-base !font-semibold !border-0 !pb-0">{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </GuideLayout>
  )
}
