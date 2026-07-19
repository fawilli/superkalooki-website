import {LegalPage} from '@/components/LegalPage'
import type {Metadata} from 'next'
import {readFileSync} from 'node:fs'
import {join} from 'node:path'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for Super Kalooki.',
}

export default function TermsPage() {
  const html = readFileSync(
    join(process.cwd(), 'src/content/terms-and-conditions.html'),
    'utf8',
  )
  return <LegalPage eyebrow="Legal" title="Terms and Conditions" html={html} />
}
