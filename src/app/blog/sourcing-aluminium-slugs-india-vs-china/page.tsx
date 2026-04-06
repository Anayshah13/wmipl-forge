import type { Metadata } from 'next'
import BlogArticle from '@/components/blog/IndiavsChina'

const CANONICAL =
  'https://www.westernaluminium.com/blog/sourcing-aluminium-slugs-india-vs-china'
const PUBLISHED = '2026-04-01T08:00:00+05:30'
const MODIFIED = '2026-04-06T12:00:00+05:30'

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Sourcing aluminium slugs from India vs China: quality, cost and reliability compared',
  description:
    'Procurement guide comparing Indian and Chinese aluminium slug suppliers on landed cost, quality, lead times, MOQs, tariffs, and ESG.',
  image: ['https://www.westernaluminium.com/og-image.jpg'],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: {
    '@type': 'Organization',
    name: 'Western Metal Industries Pvt. Ltd.',
    url: 'https://www.westernaluminium.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Western Metal Industries Pvt. Ltd.',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.westernaluminium.com/logo.png',
    },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  articleSection: 'Manufacturing & procurement',
  keywords: [
    'aluminium slugs',
    'India vs China sourcing',
    'impact extrusion',
    'aluminium slug manufacturer India',
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.westernaluminium.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Insights',
      item: 'https://www.westernaluminium.com/insights',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'India vs China aluminium slugs',
      item: CANONICAL,
    },
  ],
}

export const metadata: Metadata = {
  title:
    'Sourcing Aluminium Slugs: India vs China — Cost, Quality & Reliability | Western Metal Industries',
  description:
    'A procurement guide for global buyers comparing Indian and Chinese aluminium slug suppliers on price, quality standards, lead times, MOQs, and tariff exposure.',
  keywords: [
    'aluminium slug manufacturer India',
    'buy aluminium slugs India vs China',
    'aluminium slug supplier India',
    'impact extrusion slug sourcing',
    'aluminium slug quality India',
    'India aluminium export',
    'Chinese aluminium tariff',
    'China plus one sourcing',
    'EN aluminium slug',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Sourcing Aluminium Slugs: India vs China — Cost, Quality & Reliability',
    description:
      'A procurement guide for global buyers comparing Indian and Chinese aluminium slug suppliers on price, quality, lead times and tariff exposure.',
    url: CANONICAL,
    type: 'article',
    siteName: 'Western Metal Industries Pvt. Ltd.',
    locale: 'en_IN',
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ['Western Metal Industries Pvt. Ltd.'],
    tags: ['aluminium slugs', 'manufacturing', 'procurement', 'India', 'export'],
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Western Metal Industries — aluminium slug manufacturing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sourcing Aluminium Slugs: India vs China',
    description:
      'A procurement guide comparing Indian and Chinese aluminium slug suppliers on cost, quality, lead times and tariff exposure.',
    images: ['/og-image.jpg'],
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogArticle />
    </>
  )
}
