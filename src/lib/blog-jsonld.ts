import type { BlogPost } from '@/lib/blog'
import { BLOG_SITE_ORIGIN, blogCanonicalUrl } from '@/lib/blog'

export function buildArticleJsonLd(post: BlogPost) {
  const url = blogCanonicalUrl(post.slug)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.jsonLd.headline,
    description: post.jsonLd.description,
    image: [`${BLOG_SITE_ORIGIN}/og-image.jpg`],
    datePublished: post.publishedISO,
    dateModified: post.modifiedISO,
    author: {
      '@type': 'Organization',
      name: 'Western Metal Industries Pvt. Ltd.',
      url: BLOG_SITE_ORIGIN,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Western Metal Industries Pvt. Ltd.',
      logo: {
        '@type': 'ImageObject',
        url: `${BLOG_SITE_ORIGIN}/logo.png`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: post.jsonLd.articleSection,
    keywords: post.jsonLd.keywords,
  }
}

export function buildBlogBreadcrumbJsonLd(post: BlogPost) {
  const url = blogCanonicalUrl(post.slug)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BLOG_SITE_ORIGIN}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Insights',
        item: `${BLOG_SITE_ORIGIN}/insights`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.jsonLd.breadcrumbLabel,
        item: url,
      },
    ],
  }
}
