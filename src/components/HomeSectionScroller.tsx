'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { HOME_SECTION_STORAGE_KEY } from '@/lib/home-section-nav'

/**
 * Runs on the homepage only. After navigating from e.g. /insights with a pending
 * section id (sessionStorage), or with ?scrollTo= / #hash, scrolls to that element
 * and updates the URL to /#sectionId.
 */
export function HomeSectionScroller() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return

    let targetId: string | null = null

    try {
      targetId = sessionStorage.getItem(HOME_SECTION_STORAGE_KEY)
    } catch {
      /* ignore */
    }

    if (!targetId && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      targetId = params.get('scrollTo')
    }

    if (!targetId && typeof window !== 'undefined') {
      const h = window.location.hash?.replace(/^#/, '')
      if (h) targetId = h
    }

    if (!targetId) return

    const finalize = () => {
      try {
        sessionStorage.removeItem(HOME_SECTION_STORAGE_KEY)
      } catch {
        /* ignore */
      }
      window.history.replaceState(null, '', `/#${targetId}`)
    }

    const scrollToTarget = (): boolean => {
      const el = document.getElementById(targetId!)
      if (!el) return false
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      finalize()
      return true
    }

    if (scrollToTarget()) return

    const timeouts: ReturnType<typeof setTimeout>[] = []
    ;[0, 50, 100, 200, 400, 600, 900, 1300, 1800, 2400, 3000].forEach((delay) => {
      timeouts.push(
        setTimeout(() => {
          if (scrollToTarget()) {
            timeouts.forEach(clearTimeout)
          }
        }, delay)
      )
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [pathname])

  return null
}
