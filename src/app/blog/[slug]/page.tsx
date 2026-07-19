import {PortableBody} from '@/components/PortableBody'
import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {formatDate, getArticle, getArticleSlugs} from '@/lib/content'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

type Props = {params: Promise<{slug: string}>}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs()
  return slugs.map((slug) => ({slug}))
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params
  const article = await getArticle(slug)
  if (!article) return {}
  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
  }
}

export default async function ArticlePage({params}: Props) {
  const {slug} = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main
        className="max-w-[860px] mx-auto px-[1.125rem] pt-20 pb-12 sm:px-6 lg:px-8"
        id="main-content"
      >
        <header className="border-b border-black/[0.08] pb-7 mb-8">
          <p className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-gold mb-2 m-0">
            {formatDate(article.publishedAt)}
          </p>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal text-text-dark m-0 [text-wrap:pretty]">
            {article.title}
          </h1>
          <p className="text-text-mid mt-4 mb-0 leading-relaxed">{article.excerpt}</p>
        </header>
        <PortableBody value={article.body} />
      </main>
      <SiteFooter />
    </div>
  )
}
