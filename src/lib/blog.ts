/**
 * Blog registry — single source of truth for all /blog/[slug] articles.
 *
 * To add a post:
 * 1. Create a component under `src/components/blog/` (e.g. `MyPost.tsx`).
 * 2. Add the slug + metadata to `BLOG_POSTS` below.
 * 3. Register the component in `src/components/blog/registry.tsx`.
 */

export const BLOG_SITE_ORIGIN = 'https://www.westernaluminium.com' as const

export type BlogPostSeo = {
  /** Use with metadata `title.absolute` — full document title */
  fullTitle: string
  description: string
  keywords: string[]
  openGraphTitle: string
  twitterTitle: string
  twitterDescription: string
  /** Open Graph article tags */
  ogArticleTags: string[]
}

export type BlogPostJsonLd = {
  headline: string
  description: string
  articleSection: string
  keywords: string[]
  /** Last crumb label for Article → Insights → this post */
  breadcrumbLabel: string
}

export type BlogPost = {
  slug: string
  /** Insights page + internal listings */
  listTitle: string
  listDescription: string
  /** YYYY-MM-DD for listing and time elements */
  publishedDate: string
  publishedISO: string
  modifiedISO: string
  seo: BlogPostSeo
  jsonLd: BlogPostJsonLd
  /** Sitemap priority 0–1 */
  sitemapPriority: number
  sitemapChangeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'sourcing-aluminium-slugs-india-vs-china',
    listTitle: 'Sourcing Aluminium Slugs: India vs China — Cost, Quality & Reliability',
    listDescription:
      'A procurement guide for global buyers comparing Indian and Chinese aluminium slug suppliers on landed cost, quality, lead times, MOQs, tariffs, and ESG.',
    publishedDate: '2026-04-01',
    publishedISO: '2026-04-01T08:00:00+05:30',
    modifiedISO: '2026-04-06T12:00:00+05:30',
    seo: {
      fullTitle:
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
      openGraphTitle: 'Sourcing Aluminium Slugs: India vs China — Cost, Quality & Reliability',
      twitterTitle: 'Sourcing Aluminium Slugs: India vs China',
      twitterDescription:
        'A procurement guide comparing Indian and Chinese aluminium slug suppliers on cost, quality, lead times and tariff exposure.',
      ogArticleTags: ['aluminium slugs', 'manufacturing', 'procurement', 'India', 'export'],
    },
    jsonLd: {
      headline:
        'Sourcing aluminium slugs from India vs China: quality, cost and reliability compared',
      description:
        'Procurement guide comparing Indian and Chinese aluminium slug suppliers on landed cost, quality, lead times, MOQs, tariffs, and ESG.',
      articleSection: 'Manufacturing & procurement',
      keywords: [
        'aluminium slugs',
        'India vs China sourcing',
        'impact extrusion',
        'aluminium slug manufacturer India',
      ],
      breadcrumbLabel: 'India vs China aluminium slugs',
    },
    sitemapPriority: 0.65,
    sitemapChangeFrequency: 'yearly',
  },
]

const bySlug = new Map(BLOG_POSTS.map((p) => [p.slug, p]))

export function getBlogPost(slug: string): BlogPost | undefined {
  return bySlug.get(slug)
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug)
}

/** Paths like `/blog/my-slug` for sitemap */
export function getAllBlogPaths(): string[] {
  return BLOG_POSTS.map((p) => `/blog/${p.slug}`)
}

export function blogCanonicalUrl(slug: string): string {
  return `${BLOG_SITE_ORIGIN}/blog/${slug}`
}
