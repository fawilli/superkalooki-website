import Image from 'next/image'
import Link from 'next/link'

const links = [
  {href: '/', label: 'Home'},
  {href: '/blog/', label: 'Blog'},
  {href: '/rules/', label: 'Rules'},
  {href: '/faq/', label: 'FAQ'},
  {href: '/contact/', label: 'Contact'},
  {href: '/privacy-policy/', label: 'Privacy'},
  {href: '/terms-and-conditions/', label: 'Terms'},
  {href: '/cookie-policy/', label: 'Cookies'},
]

export function SiteFooter() {
  return (
    <footer
      className="bg-felt-deep border-t border-white/[0.05] px-5 pt-10 pb-6 md:px-8 md:pt-12 md:pb-8 lg:px-12"
      role="contentinfo"
    >
      <div className="flex flex-col gap-7 pb-7 border-b border-white/[0.06] md:flex-row md:items-start md:justify-between">
        <Link href="/" aria-label="Super Kalooki – Homepage">
          <Image
            alt="Super Kalooki"
            className="h-16 w-auto opacity-80 block"
            height={64}
            src="/logo.png"
            width={85}
          />
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-[0.375rem] list-none m-0 p-0" role="list">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                className="text-sm font-normal text-white/35 no-underline transition-colors duration-150 hover:text-gold"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-5 flex flex-col gap-[0.375rem] text-center md:flex-row md:justify-between md:text-left">
        <p className="text-[0.8rem] text-white/20 m-0">
          © {new Date().getFullYear()} Super Kalooki — Crofts Hill Holdings LLC, Florida, United States
        </p>
        <p className="text-[0.8rem] text-white/20 m-0">
          For entertainment only — no real money, no gambling, no prizes.
        </p>
      </div>
    </footer>
  )
}
