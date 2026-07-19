import {LegalPage} from '@/components/LegalPage'
import type {Metadata} from 'next'
import {readFileSync} from 'node:fs'
import {join} from 'node:path'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Super Kalooki and superkalooki.com.',
}

export default function PrivacyPolicyPage() {
  const html = readFileSync(
    join(process.cwd(), 'src/content/privacy-policy.html'),
    'utf8',
  )
  return <LegalPage eyebrow="Legal" title="Privacy Policy" html={html} />
}
