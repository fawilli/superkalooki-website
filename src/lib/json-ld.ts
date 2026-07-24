import {APP_STORE_URL} from '@/lib/app-store'
import {
  AI_SUMMARY,
  ORG_NAME,
  PRODUCT_NAME,
  SITE_URL,
  type FaqPair,
} from '@/lib/jamaican-kalooki'

export function organizationJsonLd() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: ORG_NAME,
    legalName: ORG_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/app-icon.png`,
    brand: {
      '@type': 'Brand',
      name: PRODUCT_NAME,
    },
    sameAs: ['https://www.instagram.com/superkalooki'],
  }
}

export function mobileApplicationJsonLd() {
  return {
    '@type': 'MobileApplication',
    '@id': `${SITE_URL}/#app`,
    name: PRODUCT_NAME,
    applicationCategory: 'GameApplication',
    operatingSystem: 'iOS',
    description: AI_SUMMARY,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    url: SITE_URL,
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    image: `${SITE_URL}/app-icon.png`,
    publisher: {'@id': `${SITE_URL}/#organization`},
  }
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: PRODUCT_NAME,
      url: SITE_URL,
    },
    about: {
      '@type': 'Thing',
      name: 'Jamaican Kalooki',
      description: AI_SUMMARY,
    },
  }
}

export function faqPageJsonLd(faqs: FaqPair[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function howToJsonLd({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: string[]
}) {
  return {
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `Step ${i + 1}`,
      text,
    })),
  }
}

export function graphJsonLd(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}
