import {LegalPage} from '@/components/LegalPage'
import type {Metadata} from 'next'
import {readFileSync} from 'node:fs'
import {join} from 'node:path'

export const metadata: Metadata = {
  title: 'Rules',
  description: 'Official Super Kalooki / Contract Rummy rules — deals, contracts, scoring, and jokers.',
}

export default function RulesPage() {
  const html = readFileSync(join(process.cwd(), 'src/content/rules.html'), 'utf8')
  return <LegalPage eyebrow="Gameplay" title="Kalooki Rules" html={html} />
}
