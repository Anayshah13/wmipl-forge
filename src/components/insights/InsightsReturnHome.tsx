'use client'

import Link from 'next/link'

export function InsightsReturnHome() {
  return (
    <Link
      href="/"
      className="fixed left-4 top-4 z-[100] inline-flex items-center justify-center rounded-full border border-[#0A4DAA]/35 bg-white px-6 py-2.5 text-sm font-semibold text-[#0b2555] shadow-lg transition hover:bg-[#0b2555] hover:text-white hover:border-[#0b2555]"
    >
      Return To HomePage
    </Link>
  )
}
