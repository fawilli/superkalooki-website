import {GuideLayout} from '@/components/GuideLayout'
import {
  AI_SUMMARY,
  COMPARISON_ROWS,
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
  title: 'Jamaican Kalooki vs Kalooki 40/51 & Contract Rummy',
  description:
    'How Jamaican Kalooki differs from Kalooki 40, Kalooki 51, and generic Contract Rummy — contracts, scoring, calling, and what Super Kalooki implements.',
  alternates: {canonical: '/jamaican-kalooki/vs-other-variants/'},
  openGraph: {
    title: 'Jamaican Kalooki vs Other Variants',
    description: NOT_KALOOKI_40_51,
    url: '/jamaican-kalooki/vs-other-variants/',
  },
}

export default function VsOtherVariantsPage() {
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    webPageJsonLd({
      name: 'Jamaican Kalooki vs Other Variants',
      description: metadata.description as string,
      path: '/jamaican-kalooki/vs-other-variants/',
    }),
    faqPageJsonLd(DIFFERENTIATION_FAQS),
  ])

  return (
    <GuideLayout
      currentPath="/jamaican-kalooki/vs-other-variants/"
      eyebrow="Compare variants"
      jsonLd={jsonLd}
      summary={AI_SUMMARY}
      title="Jamaican Kalooki vs Kalooki 40/51 & Contract Rummy"
    >
      <p>
        Jamaican Kalooki is a <strong>Contract Rummy family</strong> game — not a separate invention, and not the same
        as Kalooki 40 or Kalooki 51. Use this table when AI or search results mix the names.
      </p>

      <div className="overflow-x-auto my-8">
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Jamaican Kalooki</th>
              <th>Kalooki 40 / 51</th>
              <th>Contract Rummy (family)</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.aspect}>
                <td>
                  <strong>{row.aspect}</strong>
                </td>
                <td>{row.jamaican}</td>
                <td>{row.kalooki4051}</td>
                <td>{row.contractRummy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Is Jamaican Kalooki the same as Contract Rummy?</h2>
      <p>{DIFFERENTIATION_FAQS[2].answer}</p>

      <h2>What makes Jamaican Kalooki different from Kalooki 40/51?</h2>
      <p>{DIFFERENTIATION_FAQS[3].answer}</p>

      <p>
        For the full contract sequence and penalties, see the{' '}
        <Link href="/rules/">Jamaican Kalooki rules</Link>. To learn{' '}
        <Link href="/jamaican-kalooki/scoring/">scoring &amp; deadwood</Link>, or{' '}
        <Link href="/play/">play Super Kalooki online on iOS</Link>.
      </p>
    </GuideLayout>
  )
}
