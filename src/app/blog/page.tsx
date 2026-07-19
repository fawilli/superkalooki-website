import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import {formatDate, getArticles} from '@/lib/content'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and guides about Kalooki / Contract Rummy and Super Kalooki.',
}

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main
        className="max-w-[860px] mx-auto px-[1.125rem] pt-20 pb-12 sm:px-6 lg:px-8"
        id="main-content"
      >
        <header className="border-b border-black/[0.08] pb-7 mb-8">
          <span className="text-[0.75rem] font-medium tracking-[0.18em] uppercase text-gold mb-2 block">
            From the Blog
          </span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.625rem)] font-normal text-text-dark m-0">
            Articles
          </h1>
        </header>
        <ul className="list-none m-0 p-0 flex flex-col gap-5">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/blog/${article.slug}/`}
                className="block rounded-lg border border-black/[0.08] bg-white p-6 no-underline hover:border-gold/40 transition-colors min-h-11"
              >
                <p className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-gold mb-2 m-0">
                  {formatDate(article.publishedAt)}
                </p>
                <h2 className="text-lg font-semibold text-text-dark m-0 mb-2">{article.title}</h2>
                <p className="text-text-mid m-0 text-[0.9375rem] leading-relaxed">{article.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  )
}
