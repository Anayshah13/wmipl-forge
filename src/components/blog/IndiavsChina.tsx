'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import s from './IndiaVsChina.module.css'

/* ─── Types ─────────────────────────────────────────────── */
type BadgeVariant = 'green' | 'amber' | 'red'

/* ─── Small reusable pieces ─────────────────────────────── */
function Badge({ children, variant }: { children: React.ReactNode; variant: BadgeVariant }) {
  const cls = variant === 'green' ? s.badgeGreen : variant === 'amber' ? s.badgeAmber : s.badgeRed
  return <span className={`${s.badge} ${cls}`}>{children}</span>
}

function Callout({ label, children, blue = false }: { label: string; children: React.ReactNode; blue?: boolean }) {
  return (
    <div className={`${s.callout} ${blue ? s.calloutBlue : ''}`}>
      <div className={s.calloutLabel}>{label}</div>
      <p>{children}</p>
    </div>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.checklistItem}>
      <div className={s.checklistIcon}>✓</div>
      {children}
    </div>
  )
}

/* ─── TOC hook: tracks active section ───────────────────── */
function useTocActive(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      io.observe(el)
      return io
    })
    return () => observers.forEach((io) => io?.disconnect())
  }, [ids])
  return active
}

/* ─── Fade-in hook ─────────────────────────────────────────
   Adds global class "visible" — must match .fadeIn:global(.visible) in CSS module. */
function useFadeIn(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const show = () => {
      el.classList.add('visible')
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      show()
      return
    }
    let io: IntersectionObserver
    const fallback = window.setTimeout(() => {
      show()
      io.disconnect()
    }, 3500)
    io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(fallback)
          show()
          io.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 15% 0px' }
    )
    io.observe(el)
    return () => {
      window.clearTimeout(fallback)
      io.disconnect()
    }
  }, [ref])
}

/* ─── Fade wrapper ───────────────────────────────────────── */
type FadeTag = 'div' | 'p' | 'h2' | 'h3' | 'span'

function F({
  children,
  as: Tag = 'div',
  id,
}: {
  children: React.ReactNode
  as?: FadeTag
  id?: string
}) {
  const ref = useRef<HTMLElement>(null)
  useFadeIn(ref)
  return (
    // @ts-expect-error — dynamic intrinsic tag + shared HTMLElement ref
    <Tag ref={ref} id={id} className={s.fadeIn}>
      {children}
    </Tag>
  )
}

/* ─── TOC section IDs ────────────────────────────────────── */
const TOC_IDS = ['cost', 'quality', 'comparison', 'leadtime', 'esg', 'checklist', 'conclusion']

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function IndiaVsChina() {
  /* reading progress */
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* active TOC */
  const activeId = useTocActive(TOC_IDS)

  return (
    <article className={s.root} aria-labelledby="article-title">
      {/* PROGRESS BAR */}
      <div className={s.progressBar} style={{ width: `${progress}%` }} aria-hidden />

      {/* ── HERO ─────────────────────────────────────────── */}
      <header className={s.hero}>
        <div className={s.heroInner}>
          <nav className={s.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/insights">Insights</Link>
            <span aria-hidden>/</span>
            <span aria-current="page">India vs China</span>
          </nav>
          <p className={s.heroTag}>Procurement Guide</p>
          <h1 id="article-title" className={s.heroH1}>
            Sourcing Aluminium slugs from India vs&nbsp;China: quality, cost and reliability compared
          </h1>
          <div className={s.heroMeta}>
            <div className={s.heroMetaItem}>
              <span className={s.heroMetaDot} aria-hidden />
              <time dateTime="2026-04-01">April 2026</time>
            </div>
            <div className={s.heroMetaItem}>
              <span className={s.heroMetaDot} aria-hidden />
              <span>8 min read</span>
            </div>
            <div className={s.heroMetaItem}>
              <span className={s.heroMetaDot} aria-hidden />
              <span>~1,600 words</span>
            </div>
            <div className={s.heroMetaItem}>
              <span className={s.heroMetaDot} aria-hidden />
              <span>Western Metal Industries</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── ARTICLE + SIDEBAR GRID ───────────────────────── */}
      <div className={s.articleWrap}>

        {/* ── ARTICLE BODY ─────────────────────────────── */}
        <div className={s.articleBody}>

          {/* INTRO */}
          <F as="p"><span className={s.lead}>For global procurement teams sourcing aluminium slugs, China has been the default answer for decades. Low base cost, high production volumes, and well-established export infrastructure made it the obvious starting point for buyers in Europe, the Americas and the Middle East.</span></F>

          <F as="p">That calculus is changing. Rising anti-dumping duties in the EU and the US, growing ESG pressure on supply chains, and the strategic imperative to reduce single-source dependence have pushed procurement managers to look beyond China. India — and specifically manufacturers like Western Metal Industries in Pune — has emerged as a credible, cost-competitive primary source, not merely a backup option.</F>

          <F as="p">This guide gives procurement decision-makers a clear-eyed comparison across five dimensions: cost, quality, lead time and reliability, sustainability, and how to evaluate a new supplier before committing.</F>

          <F>
            <Callout label="Key takeaway">
              India&apos;s post-tariff landed cost is now competitive with China for buyers in Europe and North America — with lower regulatory risk, improving ESG credentials, and comparable quality for aerosol, pharma, cosmetic and automotive applications.
            </Callout>
          </F>

          {/* ── SECTION 1: COST ───────────────────────── */}
          <F as="h2" id="cost">1. Cost comparison: what the numbers actually say</F>

          <F as="p">The sticker price on a Chinese aluminium slug has historically been lower than Indian alternatives. But the relevant number for procurement is the landed cost after all duties, freight and compliance costs — and that picture looks very different.</F>

          <F as="h3">Anti-dumping and countervailing duties</F>
          <F as="p">The EU has active anti-dumping measures on several aluminium semi-finished products originating from China, and the US has maintained Section 232 tariffs and additional trade remedy measures on Chinese aluminium imports. For buyers in these regions, the effective tariff burden on Chinese aluminium slugs can add <strong>10–25%</strong> to the cost depending on the specific product classification and country of origin.</F>
          <F as="p">Indian-origin aluminium slugs attract no anti-dumping duties in the EU or the US. India holds Most Favoured Nation (MFN) status with both, and benefits from preferential frameworks in several Middle Eastern markets.</F>

          <F as="h3">Freight cost comparison</F>
          <F as="p">India to Northern Europe (via JNPT/Nhava Sheva): <strong>18–22 days sea freight</strong>, similar transit time to China&apos;s 22–28 days from Shanghai or Ningbo. Freight rates from India to the Middle East and Southeast Asia are typically lower than Chinese equivalents.</F>

          <F as="h3">Raw material and energy cost</F>
          <F as="p">Both India and China price aluminium ingot based on LME rates plus local premium. India&apos;s energy costs in aluminium processing have risen, but remain below European levels. Labour costs in Indian manufacturing remain a meaningful cost advantage over European supply.</F>
          <F as="p">The net result: for buyers in the EU and North America, Indian-origin aluminium slugs arrive at a landed cost that is broadly comparable with — and often below — Chinese-origin product once tariffs are applied, and significantly below European-manufactured slugs on a price-per-kg basis.</F>

          {/* ── SECTION 2: QUALITY ────────────────────── */}
          <F as="h2" id="quality">2. Quality standards: alloy grades, tolerances and certifications</F>

          <F as="p">The most common concern procurement teams raise about Indian manufacturers is quality consistency. It is a fair question — and the answer depends heavily on which supplier you are evaluating.</F>

          <F as="h3">Alloy grades and purity</F>
          <F as="p">Premium aluminium slugs for impact extrusion applications typically require alloy grades 1050, 1070 or 1100 (high purity, &gt;99% aluminium) for aerosol and cosmetic tubes, or 3003 (aluminium-manganese) for applications requiring higher strength. Established Indian manufacturers with long export histories have produced to these specifications for European and Middle Eastern customers for decades. The key is requesting mill test certificates (MTCs) with each shipment and having them independently verified for your first few orders.</F>

          <F as="h3">Dimensional tolerances and surface finish</F>
          <F as="p">Impact extrusion is an unforgiving process — slug diameter tolerance and surface cleanliness directly affect die wear and reject rates at the customer&apos;s plant. Manufacturers supplying high-volume European aerosol or cosmetic tube producers have to meet tight tolerances (typically <strong>±0.05 mm</strong> on diameter, specific requirements on surface roughness and lubricant coating) or they do not retain the business. Ask for process capability data (Cpk values) for your specific dimensions rather than accepting general quality claims.</F>

          <F as="h3">Certifications to look for</F>
          <F>
            <ul>
              <li><strong>ISO 9001:2015</strong> — quality management system</li>
              <li><strong>BIS certification</strong> (Bureau of Indian Standards) — relevant for domestic Indian compliance</li>
              <li><strong>RoHS compliance documentation</strong> — required for EU electronics applications</li>
              <li><strong>REACH documentation</strong> — for any slug used in products sold into the European market</li>
              <li><strong>Customer-specific audit approval</strong> — ask if they have been audited by any named European or US customers</li>
            </ul>
          </F>

          {/* ── SECTION 3: COMPARISON TABLE ───────────── */}
          <F as="h2" id="comparison">3. Side-by-side comparison: India vs China vs Europe</F>

          <F>
            <div className={s.tableWrap}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>India</th>
                    <th>China</th>
                    <th>Europe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Price (post-tariff landed cost)</td>
                    <td><Badge variant="green">Competitive</Badge></td>
                    <td><Badge variant="amber">Low base, high after duties</Badge></td>
                    <td><Badge variant="red">High base cost</Badge></td>
                  </tr>
                  <tr>
                    <td>Quality consistency</td>
                    <td><Badge variant="green">High — ISO-certified</Badge></td>
                    <td><Badge variant="amber">Variable by supplier</Badge></td>
                    <td><Badge variant="green">Very high</Badge></td>
                  </tr>
                  <tr>
                    <td>Anti-dumping duty exposure (EU/US)</td>
                    <td><Badge variant="green">None</Badge></td>
                    <td><Badge variant="red">Significant</Badge></td>
                    <td><Badge variant="green">None</Badge></td>
                  </tr>
                  <tr>
                    <td>Lead time (sea to Europe)</td>
                    <td>18–22 days</td>
                    <td>22–28 days</td>
                    <td>5–10 days</td>
                  </tr>
                  <tr>
                    <td>MOQ flexibility</td>
                    <td>Moderate–High</td>
                    <td>Low–High</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>ESG / recycled content data</td>
                    <td><Badge variant="amber">Improving</Badge></td>
                    <td><Badge variant="red">Limited</Badge></td>
                    <td><Badge variant="green">Strong</Badge></td>
                  </tr>
                  <tr>
                    <td>Supply chain risk</td>
                    <td><Badge variant="green">Low</Badge></td>
                    <td><Badge variant="red">Geopolitical exposure</Badge></td>
                    <td><Badge variant="green">Low</Badge></td>
                  </tr>
                  <tr>
                    <td>Regulatory compliance (pharma/food)</td>
                    <td><Badge variant="green">Strong</Badge></td>
                    <td><Badge variant="amber">Requires audit</Badge></td>
                    <td><Badge variant="green">Strong</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={s.tableNote}>
              Note: This table reflects general market conditions as of 2026. Individual supplier performance varies significantly — use this as a framework for structuring your evaluation, not as a definitive verdict on any supplier.
            </p>
          </F>

          {/* ── SECTION 4: LEAD TIMES ─────────────────── */}
          <F as="h2" id="leadtime">4. Lead times, MOQs and supply chain reliability</F>

          <F as="h3">Transit times</F>
          <F as="p">Sea freight from major Indian ports (JNPT Nhava Sheva, Mundra) to Hamburg or Rotterdam runs 18–22 days. Shanghai to Hamburg is typically 22–28 days. For Middle Eastern buyers, Indian ports have a clear time advantage. Air freight is available from India for urgent sample shipments or time-critical top-ups.</F>

          <F as="h3">Minimum order quantities</F>
          <F as="p">Indian slug manufacturers typically work in MOQs of <strong>5–20 metric tonnes</strong> per order per specification, which suits medium-to-large buyers well. Smaller trial quantities (1–3 MT) are often possible for qualification purposes. Chinese manufacturers can go lower on MOQ at the spot market end, but branded Indian manufacturers are broadly comparable with Chinese export-focused producers.</F>

          <F as="h3">The China+1 argument</F>
          <F as="p">The phrase &ldquo;China+1&rdquo; has become a procurement standard — the practice of maintaining a secondary source outside China for critical materials. Aluminium slugs are not exempt from supply chain disruption risk: factory shutdowns, port congestion (as seen during 2021–22), currency movements, and regulatory changes can all affect Chinese supply. An established Indian supplier who has already qualified your specifications is a lower-risk second source than starting that qualification process in a crisis.</F>

          <F>
            <Callout label="Risk consideration" blue>
              Buyers who are 100% single-sourced from China on aluminium slugs are carrying concentration risk that their risk management frameworks increasingly flag. The qualification cost of an Indian secondary supplier is modest relative to the cost of a production shutdown caused by a supply disruption.
            </Callout>
          </F>

          {/* ── SECTION 5: ESG ────────────────────────── */}
          <F as="h2" id="esg">5. Sustainability and ESG considerations</F>

          <F as="p">ESG considerations are moving from &ldquo;nice to have&rdquo; to procurement requirements for a growing number of buyers, particularly in the EU. Scope 3 emissions reporting, recycled content targets and supplier sustainability audits are becoming standard elements of supplier due diligence.</F>

          <F as="h3">Recycled aluminium</F>
          <F as="p">Both India and China have secondary (recycled) aluminium production. Post-consumer recycled (PCR) and post-industrial recycled (PIR) aluminium slugs are an emerging category — some manufacturers now offer slugs with declared recycled content and accompanying documentation. If your customers or internal ESG targets require recycled content in packaging, ask suppliers specifically about their recycled input sourcing and whether they can provide a material declaration.</F>

          <F as="h3">Scope 3 emissions data</F>
          <F as="p">European manufacturers are ahead of Indian and Chinese peers on providing product-level carbon footprint data. However, this gap is narrowing — the regulatory pressure of the EU&apos;s Carbon Border Adjustment Mechanism (CBAM), which applies to aluminium imports, will accelerate the availability of emissions data from Indian manufacturers. Ask for it in your supplier questionnaire: credible manufacturers are beginning to prepare.</F>

          <F as="h3">India&apos;s improving position</F>
          <F as="p">India&apos;s aluminium sector is investing in renewable energy and energy efficiency. The country&apos;s lower per-capita industrial emissions baseline, combined with active government incentives for green manufacturing, means the trajectory is positive. For buyers making 3–5 year sourcing decisions, India&apos;s ESG outlook is more favourable than China&apos;s on most frameworks.</F>

          {/* ── SECTION 6: CHECKLIST ──────────────────── */}
          <F as="h2" id="checklist">6. How to evaluate an Indian aluminium slug manufacturer: a procurement checklist</F>

          <F as="p">Before placing your first commercial order, run through this checklist with any new supplier:</F>

          <F>
            <div className={s.checklistGrid}>
              <CheckItem>Factory audit availability</CheckItem>
              <CheckItem>Certifications held (ISO 9001, BIS)</CheckItem>
              <CheckItem>Sample process and timeline</CheckItem>
              <CheckItem>Alloy grades and size range offered</CheckItem>
              <CheckItem>MOQ and batch flexibility</CheckItem>
              <CheckItem>Incoterms offered (FOB / CIF / DAP)</CheckItem>
              <CheckItem>Export documentation capability</CheckItem>
              <CheckItem>Reference customers in your region</CheckItem>
              <CheckItem>Response time to RFQ</CheckItem>
              <CheckItem>Payment terms and currency flexibility</CheckItem>
            </div>
          </F>

          <F as="h3">The sample process</F>
          <F as="p">Request a formal sample order (typically 100–500 kg depending on your application) and run it through your standard incoming quality inspection plus a production trial. Record die wear, reject rate and surface defect data. Compare against your existing baseline. A credible manufacturer will welcome this process — it is how long-term supply relationships are built.</F>

          <F as="h3">Payment terms and documentation</F>
          <F as="p">Standard export terms from India are Letter of Credit (LC) at sight or 30–60 days. TT (telegraphic transfer) against documents is common with established relationships. Ensure you receive a full set of export documents: commercial invoice, packing list, certificate of origin, bill of lading, MTC and any required compliance certificates (RoHS, REACH, etc.).</F>

          {/* ── CONCLUSION ────────────────────────────── */}
          <F as="h2" id="conclusion">Conclusion</F>

          <F as="p">India is no longer a backup option for aluminium slug procurement — it is a primary source that deserves serious evaluation alongside Chinese and European suppliers. The combination of competitive post-tariff landed cost, established manufacturing quality, supply chain resilience and improving ESG credentials makes India a compelling sourcing destination for buyers in Europe, the Americas and the Middle East.</F>

          <F as="p">The key is choosing the right manufacturer. Not all Indian producers meet export-grade standards, so the due diligence framework above matters. Look for certifications, customer references, transparent process capability data and a willingness to support a formal qualification process.</F>

          {/* ABOUT CTA */}
          <F>
            <div className={s.aboutBox}>
              <div className={s.aboutLabel}>About the author</div>
              <h3>Western Metal Industries Pvt. Ltd.</h3>
              <p>Founded in 1978 and headquartered in Pune, Western Metal Industries is one of India&apos;s leading manufacturers of aluminium slugs, supplying customers across the aerosol, pharmaceutical, cosmetics and automotive sectors globally. To request a sample, technical datasheet or export quote, get in touch with our export team directly.</p>
              <Link href="/contact" className={s.btn}>Request a quote ↗</Link>
            </div>
          </F>

        </div>

        {/* ── SIDEBAR ──────────────────────────────────── */}
        <aside className={s.sidebar} aria-label="Article tools and summary">

          <div className={s.sidebarBlock}>
            <div className={s.sidebarLabel}>In this article</div>
            <ul className={s.tocList}>
              {[
                { id: 'cost',       label: '1. Cost comparison' },
                { id: 'quality',    label: '2. Quality & certifications' },
                { id: 'comparison', label: '3. India vs China vs Europe' },
                { id: 'leadtime',   label: '4. Lead times & MOQs' },
                { id: 'esg',        label: '5. Sustainability & ESG' },
                { id: 'checklist',  label: '6. Procurement checklist' },
                { id: 'conclusion', label: 'Conclusion' },
              ].map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`${s.tocLink} ${activeId === id ? s.tocLinkActive : ''}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.sidebarBlock}>
            <div className={s.sidebarLabel}>Market snapshot</div>
            <div className={s.statCard}>
              <div className={s.statNum}>$4.3B</div>
              <div className={s.statLabel}>Global aluminium slug market size, 2026</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statNum}>6.5%</div>
              <div className={s.statLabel}>CAGR through 2035</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statNum}>1978</div>
              <div className={s.statLabel}>Year Western Metal Industries was founded</div>
            </div>
          </div>

          <div className={s.sidebarBlock}>
            <div className={s.sidebarCta}>
              <p>Evaluating Indian aluminium slug suppliers? Talk to our export team.</p>
              <Link href="/contact" className={`${s.btn} ${s.btnSm}`}>
                Get in touch ↗
              </Link>
            </div>
          </div>

        </aside>
      </div>
    </article>
  )
}
