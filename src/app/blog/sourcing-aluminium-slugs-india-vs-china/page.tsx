import type { Metadata } from 'next'
import BlogArticle from '@/components/blog/IndiaVsChina'

export const metadata: Metadata = {
  title: 'Sourcing Aluminium Slugs: India vs China — Cost, Quality & Reliability | Western Metal Industries',
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
  ],
  alternates: {
    canonical: 'https://westernaluminium.com/blog/sourcing-aluminium-slugs-india-vs-china',
  },
  openGraph: {
    title: 'Sourcing Aluminium Slugs: India vs China — Cost, Quality & Reliability',
    description:
      'A procurement guide for global buyers comparing Indian and Chinese aluminium slug suppliers on price, quality, lead times and tariff exposure.',
    url: 'https://westernaluminium.com/blog/sourcing-aluminium-slugs-india-vs-china',
    type: 'article',
    publishedTime: '2026-04-01T00:00:00Z',
    authors: ['Western Metal Industries'],
    tags: ['aluminium slugs', 'manufacturing', 'procurement', 'India', 'export'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sourcing Aluminium Slugs: India vs China',
    description:
      'A procurement guide comparing Indian and Chinese aluminium slug suppliers on cost, quality, lead times and tariff exposure.',
  },
}

export default function Page() {
  return <BlogArticle />
}
