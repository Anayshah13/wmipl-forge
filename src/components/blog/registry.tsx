import type { ComponentType } from 'react'
import IndiaVsChina from '@/components/blog/IndiavsChina'

/**
 * Map each `BlogPost.slug` to its article body component.
 * When you add a post in `src/lib/blog.ts`, import and register it here.
 */
export const BLOG_POST_COMPONENTS: Record<string, ComponentType> = {
  'sourcing-aluminium-slugs-india-vs-china': IndiaVsChina,
}

export type RegisteredBlogSlug = keyof typeof BLOG_POST_COMPONENTS

export function getBlogPostComponent(slug: string): ComponentType | undefined {
  return BLOG_POST_COMPONENTS[slug]
}
