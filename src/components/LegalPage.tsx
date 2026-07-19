import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'

type Props = {
  eyebrow: string
  title: string
  html: string
}

export function LegalPage({eyebrow, title, html}: Props) {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main
        className="max-w-[860px] mx-auto px-[1.125rem] pt-20 pb-12 sm:px-6 sm:pt-22 sm:pb-14 lg:px-8 lg:pt-26 lg:pb-18"
        id="main-content"
      >
        <header className="border-b border-black/[0.08] pb-7 mb-8">
          <span className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold mb-2 block">
            {eyebrow}
          </span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal leading-[1.15] text-text-dark [text-wrap:pretty] m-0">
            {title}
          </h1>
        </header>
        <div
          className="prose prose-stone max-w-none"
          dangerouslySetInnerHTML={{__html: html}}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
