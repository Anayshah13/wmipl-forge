export type InsightPost = {
  title: string
  description: string
  href: string
  published: string
}

/** Long-form articles hosted on this site (add new entries when you add blog routes). */
export const INSIGHT_POSTS: InsightPost[] = [
  {
    title: 'Sourcing Aluminium Slugs: India vs China — Cost, Quality & Reliability',
    description:
      'A procurement guide for global buyers comparing Indian and Chinese aluminium slug suppliers on landed cost, quality, lead times, MOQs, tariffs, and ESG.',
    href: '/blog/sourcing-aluminium-slugs-india-vs-china',
    published: '2026-04-01',
  },
]

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
