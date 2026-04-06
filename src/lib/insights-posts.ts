import { BLOG_POSTS } from '@/lib/blog'

export type InsightPost = {
  title: string
  description: string
  href: string
  published: string
}

/** Derived from `BLOG_POSTS` — keep blog entries in `src/lib/blog.ts` + `components/blog/registry.tsx`. */
export const INSIGHT_POSTS: InsightPost[] = BLOG_POSTS.map((p) => ({
  title: p.listTitle,
  description: p.listDescription,
  href: `/blog/${p.slug}`,
  published: p.publishedDate,
}))

export const LINKEDIN_COMPANY_URL =
  'https://www.linkedin.com/company/western-metal-industries-private-ltd/' as const

/** LinkedIn embed iframes — 2 columns on md+ (2×n rows), 1 column on small screens. */
export type LinkedInEmbed = {
  src: string
  width: number
  height: number
  title: string
}

export const LINKEDIN_EMBEDS: LinkedInEmbed[] = [
  {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7446452119093833728',
    width: 504,
    height: 571,
    title: 'Western Metal Industries — LinkedIn update',
  },
  {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7446161190214467585?collapsed=1',
    width: 504,
    height: 593,
    title: 'Western Metal Industries — LinkedIn update',
  },
  {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7411666155611918336?collapsed=1',
    width: 504,
    height: 264,
    title: 'Western Metal Industries — LinkedIn update',
  },
  {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7408017249397112832?collapsed=1',
    width: 504,
    height: 264,
    title: 'Western Metal Industries — LinkedIn update',
  },
  {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7406930794428112896?collapsed=1',
    width: 504,
    height: 877,
    title: 'Western Metal Industries — LinkedIn update',
  },
  {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7412772305724043264?collapsed=1',
    width: 504,
    height: 669,
    title: 'Western Metal Industries — LinkedIn update',
  },
]
