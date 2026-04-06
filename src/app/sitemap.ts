import type { MetadataRoute } from 'next'

const BASE = 'https://www.westernaluminium.com'

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[0]['changeFrequency']>

type Entry = {
  path: string
  changeFrequency: ChangeFreq
  priority: number
}

// All indexable App Router pages (no hash-only URLs).
const ENTRIES: Entry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/why-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/production-process', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/infrastructure', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/management', changeFrequency: 'yearly', priority: 0.75 },
  { path: '/insights', changeFrequency: 'weekly', priority: 0.72 },
  { path: '/clients', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/csr', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/export', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/certifications', changeFrequency: 'yearly', priority: 0.85 },
  { path: '/certificates', changeFrequency: 'yearly', priority: 0.75 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/products', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/products/plain-aluminium-slugs', changeFrequency: 'monthly', priority: 0.88 },
  { path: '/products/perforated-aluminium-slugs', changeFrequency: 'monthly', priority: 0.88 },
  { path: '/products/domed-aluminium-slugs', changeFrequency: 'monthly', priority: 0.88 },
  {
    path: '/blog/sourcing-aluminium-slugs-india-vs-china',
    changeFrequency: 'yearly',
    priority: 0.65,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? `${BASE}/` : `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
