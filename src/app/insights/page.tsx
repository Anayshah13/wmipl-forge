import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BookOpen, Linkedin } from 'lucide-react'
import { InsightsReturnHome } from '@/components/insights/InsightsReturnHome'
import { INSIGHT_POSTS, LINKEDIN_COMPANY_URL, LINKEDIN_EMBEDS } from '@/lib/insights-posts'

export const metadata: Metadata = {
  title: 'Insights | Western Metal Industries',
  description:
    'Articles and perspectives from Western Metal Industries on aluminium slugs, manufacturing, sourcing, and industry trends. Follow our LinkedIn for the latest updates.',
  alternates: {
    canonical: 'https://www.westernaluminium.com/insights',
  },
  openGraph: {
    title: 'Insights | Western Metal Industries',
    description:
      'Articles on aluminium slugs, sourcing, and manufacturing from India’s leading slug manufacturer.',
    url: 'https://www.westernaluminium.com/insights',
    type: 'website',
  },
}

function InsightsGeometricArt() {
  const stroke = '#0A4DAA'
  const strokeMuted = '#1565c0'
  const fillSoft = 'rgba(10, 77, 170, 0.035)'

  return (
    <svg
      className="absolute left-1/2 top-0 h-[min(120vh,1100px)] w-full max-w-[1600px] -translate-x-1/2 opacity-[0.42] sm:h-[min(130vh,1200px)]"
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="insights-grad-arc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A4DAA" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0b2555" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="insights-grad-fill" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A4DAA" stopOpacity="0.045" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Concentric rings — top right */}
      <g opacity="0.2" fill="none" stroke={stroke} strokeWidth="1.2">
        <circle cx="1280" cy="120" r="200" />
        <circle cx="1280" cy="120" r="140" />
        <circle cx="1280" cy="120" r="80" />
      </g>

      {/* Arc segments */}
      <path
        d="M 200 280 A 180 180 0 0 1 380 100"
        fill="none"
        stroke={strokeMuted}
        strokeWidth="1.5"
        opacity="0.14"
      />
      <path
        d="M 220 300 A 160 160 0 0 1 360 140"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.12"
        strokeDasharray="8 12"
      />

      {/* Large hexagon outline */}
      <path
        d="M 420 620 L 520 560 L 620 560 L 680 620 L 620 700 L 520 700 Z"
        fill={fillSoft}
        stroke={stroke}
        strokeWidth="1.2"
        opacity="0.28"
      />
      <path
        d="M 440 630 L 520 585 L 600 585 L 640 630 L 600 675 L 520 675 Z"
        fill="none"
        stroke={strokeMuted}
        strokeWidth="0.9"
        opacity="0.2"
      />

      {/* Triangles — abstract cluster */}
      <g opacity="0.22">
        <polygon
          points="100,750 180,620 260,750"
          fill="url(#insights-grad-fill)"
          stroke={stroke}
          strokeWidth="1"
        />
        <polygon
          points="1200,820 1320,720 1380,880"
          fill={fillSoft}
          stroke={stroke}
          strokeWidth="1"
        />
        <polygon
          points="1350,200 1420,320 1280,320"
          fill="none"
          stroke={strokeMuted}
          strokeWidth="1.2"
          opacity="0.35"
        />
      </g>

      {/* Parallelograms / slats */}
      <g opacity="0.14" fill={fillSoft} stroke={stroke} strokeWidth="0.8">
        <path d="M 900 180 L 1080 100 L 1120 200 L 940 280 Z" />
        <path d="M 920 220 L 1060 155 L 1090 235 L 950 300 Z" fill="none" opacity="0.3" />
      </g>

      {/* Rounded rectangle frames */}
      <rect
        x="60"
        y="400"
        width="220"
        height="140"
        rx="16"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.12"
        transform="rotate(-8 170 470)"
      />
      <rect
        x="1240"
        y="480"
        width="280"
        height="180"
        rx="20"
        fill="none"
        stroke={strokeMuted}
        strokeWidth="1"
        opacity="0.11"
        transform="rotate(6 1380 570)"
      />

      {/* Dot matrix accents */}
      <g fill={stroke} opacity="0.06">
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={`d1-${i}`} cx={700 + i * 32} cy="180" r="3" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={`d2-${i}`} cx={200 + i * 28} cy="920" r="2.5" />
        ))}
      </g>

      {/* Wave / curve */}
      <path
        d="M 0 520 Q 400 480 800 520 T 1600 500"
        fill="none"
        stroke="url(#insights-grad-arc)"
        strokeWidth="2"
        opacity="0.18"
      />
    </svg>
  )
}

function InsightsBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/95 via-blue-50/90 to-white" />
      {/* Soft blue blobs (abstract) */}
      <div className="absolute -left-24 -top-32 h-[min(90vw,28rem)] w-[min(90vw,28rem)] rounded-full bg-[#0A4DAA]/[0.08] blur-3xl" />
      <div className="absolute -right-16 top-[12%] h-[22rem] w-[22rem] rounded-full bg-[#1565c0]/[0.07] blur-3xl md:h-[28rem] md:w-[28rem]" />
      <div className="absolute bottom-[8%] left-[8%] h-72 w-96 max-w-[90vw] rounded-[50%] bg-[#0b2555]/[0.06] blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
      {/* Diagonal ribbon */}
      <div className="absolute -right-40 top-1/2 h-[140%] w-[45%] -translate-y-1/2 rotate-12 bg-gradient-to-l from-[#0A4DAA]/[0.035] via-transparent to-transparent" />
      {/* Geometric vector art */}
      <div className="absolute inset-0">
        <InsightsGeometricArt />
      </div>
      {/* Extended geometric repeat — bottom half emphasis */}
      <div className="absolute inset-x-0 bottom-0 top-[35%] opacity-50">
        <svg
          className="h-full w-full"
          viewBox="0 0 1600 600"
          preserveAspectRatio="xMidYMax meet"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g opacity="0.16" fill="none" stroke="#0A4DAA" strokeWidth="1">
            <polygon points="200,80 320,20 360,120 240,180" />
            <polygon points="1100,40 1280,0 1320,140 1140,160" opacity="0.35" />
            <circle cx="800" cy="200" r="90" stroke="#1565c0" strokeWidth="0.8" opacity="0.28" />
            <circle cx="800" cy="200" r="55" stroke="#0A4DAA" strokeWidth="0.6" opacity="0.25" />
            <path
              d="M 40 400 L 200 320 L 360 400 L 200 520 Z"
              fill="rgba(10, 77, 170, 0.022)"
              stroke="#0A4DAA"
            />
            <path
              d="M 1240 380 L 1400 300 L 1560 420 L 1380 520 Z"
              fill="rgba(21, 101, 192, 0.028)"
              stroke="#1565c0"
            />
          </g>
        </svg>
      </div>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(10 77 170 / 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(10 77 170 / 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0A4DAA]/14 to-transparent" />
    </div>
  )
}

export default function InsightsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pb-16 pt-8 sm:pt-10">
      <InsightsBackground />
      <InsightsReturnHome />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0A4DAA]">Resources</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Insights
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            In-depth articles on aluminium slugs, sourcing, and packaging metals. For day-to-day company
            updates and industry commentary, follow us on LinkedIn.
          </p>
        </header>

        <section aria-labelledby="articles-heading" className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-[#0A4DAA]" aria-hidden />
            <h2 id="articles-heading" className="text-xl font-semibold text-slate-900">
              Articles
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {INSIGHT_POSTS.map((post) => (
              <li key={post.href}>
                <Link
                  href={post.href}
                  className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#0A4DAA]/30 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <time
                        dateTime={post.published}
                        className="text-sm text-slate-500"
                      >
                        {new Date(post.published + 'T12:00:00Z').toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900 group-hover:text-[#0A4DAA]">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-slate-600">{post.description}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#0A4DAA]">
                      Read
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="linkedin-embeds-heading"
          className="mt-2 border-t border-slate-200 pt-10"
        >
          <h2 id="linkedin-embeds-heading" className="sr-only">
            Featured LinkedIn posts
          </h2>
          <p className="mb-6 text-center text-sm text-slate-600">
            Recent updates from our LinkedIn page
          </p>
          {/* 2×n grid: one column on small screens, two columns from md up; overflow-x for 504px-wide embeds */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
            {LINKEDIN_EMBEDS.map((embed, index) => (
              <div
                key={embed.src}
                className="flex min-h-0 w-full min-w-0 justify-center"
              >
                <div
                  className="w-full max-w-[504px] overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch] [scrollbar-gutter:stable]"
                  style={{ touchAction: 'pan-x pan-y pinch-zoom' }}
                >
                  <iframe
                    src={embed.src}
                    title={`${embed.title} (${index + 1} of ${LINKEDIN_EMBEDS.length})`}
                    height={embed.height}
                    width={embed.width}
                    className="mx-auto block max-w-none shrink-0 rounded-xl border border-slate-200 bg-white shadow-sm"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="linkedin-heading"
          className="mt-12 rounded-2xl border border-[#0A4DAA]/20 bg-[#0b2555] p-8 text-white shadow-lg"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-6 w-6" aria-hidden />
                <h2 id="linkedin-heading" className="text-xl font-semibold">
                  Updates on LinkedIn
                </h2>
              </div>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">
                Short posts, news, and announcements from Western Metal Industries appear first on our
                official LinkedIn page. We do not republish the full LinkedIn feed here; linking out keeps
                compliance with LinkedIn’s terms and respects creators’ rights.
              </p>
            </div>
            <a
              href={LINKEDIN_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0b2555] transition hover:bg-slate-100"
            >
              View on LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
