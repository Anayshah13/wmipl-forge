import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogSlugs, blogCanonicalUrl } from '@/lib/blog'
import { getBlogPostComponent } from '@/components/blog/registry'
import { buildArticleJsonLd, buildBlogBreadcrumbJsonLd } from '@/lib/blog-jsonld'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  const canonical = blogCanonicalUrl(post.slug)

  return {
    title: { absolute: post.seo.fullTitle },
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: { canonical },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: post.seo.openGraphTitle,
      description: post.seo.description,
      url: canonical,
      type: 'article',
      siteName: 'Western Metal Industries Pvt. Ltd.',
      locale: 'en_IN',
      publishedTime: post.publishedISO,
      modifiedTime: post.modifiedISO,
      authors: ['Western Metal Industries Pvt. Ltd.'],
      tags: post.seo.ogArticleTags,
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
      title: post.seo.twitterTitle,
      description: post.seo.twitterDescription,
      images: ['/og-image.jpg'],
    },
  }
}

export default function BlogArticlePage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const Body = getBlogPostComponent(params.slug)
  if (!Body) notFound()

  const articleJsonLd = buildArticleJsonLd(post)
  const breadcrumbJsonLd = buildBlogBreadcrumbJsonLd(post)

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
      <Body />
    </>
  )
}
