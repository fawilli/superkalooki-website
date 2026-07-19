import {LegalPage} from '@/components/LegalPage'
import type {Metadata} from 'next'
import {readFileSync} from 'node:fs'
import {join} from 'node:path'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Super Kalooki and superkalooki.com.',
}

export default function CookiePolicyPage() {
  const html = readFileSync(
    join(process.cwd(), 'src/content/cookie-policy.html'),
    'utf8',
  )
  return <LegalPage eyebrow="Legal" title="Cookie Policy" html={html} />
}
