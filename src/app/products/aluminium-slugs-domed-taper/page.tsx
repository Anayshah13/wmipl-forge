// app/products/aluminium-slugs-domed-taper/page.tsx
// Targets: "domed aluminium slugs", "taper aluminium slugs", "aerosol can slugs",
// "monobloc aerosol can manufacturer India", "perfume can aluminium slugs"

import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  PageHero,
  Section,
  SpecTable,
  FeatureGrid,
  FAQList,
  CTABand,
  JsonLd,
} from "@/components/PageShell";
import {
  SITE_URL,
  ORGANIZATION_JSONLD,
  breadcrumbJsonLd,
  productJsonLd,
  faqJsonLd,
} from "../../../lib/seo";

const PAGE_URL = `${SITE_URL}/products/aluminium-slugs-domed-taper`;
const PAGE_IMAGE = "/domed.png";

export const metadata: Metadata = {
  title:
    "Domed & Taper Aluminium Slugs | Aerosol Can Manufacturer India | WMI",
  description:
    "Domed and taper aluminium slugs for monobloc aerosol cans — perfumes, deodorants, sanitizers, sprays. 99.7% pure aluminium, 9.8–135.8 mm diameter. Manufactured in Pune by India's largest aluminium slug producer.",
  keywords: [
    "domed aluminium slugs",
    "taper aluminium slugs",
    "aerosol can aluminium slugs",
    "monobloc aerosol can slugs",
    "perfume can aluminium slugs",
    "deodorant can slugs",
    "spray can aluminium slugs",
    "aluminium slugs for aerosol",
    "aluminium slug manufacturer aerosol India",
    "DOT-compliant aerosol slugs",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Domed & Taper Aluminium Slugs for Aerosol Cans | Western Metal Industries",
    description:
      "Domed and conical aluminium slugs for monobloc aerosol cans. High-pressure formability, 99.7% pure, ISO certified.",
    url: PAGE_URL,
    type: "website",
    images: [`${SITE_URL}${PAGE_IMAGE}`],
  },
};

const faqs = [
  {
    q: "What are domed and taper aluminium slugs used for?",
    a: "Domed and taper aluminium slugs are pre-shaped blanks used to manufacture monobloc (one-piece) aerosol cans through impact extrusion. The dome or taper profile gives the slug additional metal in the shoulder region, which becomes the pressure-bearing crown of the finished can. Typical end products include perfume sprays, deodorant cans, sanitizer dispensers, hair spray cans, body sprays, household aerosols and industrial aerosols.",
  },
  {
    q: "Why use a domed slug instead of a plain slug for aerosol cans?",
    a: "Aerosol cans operate under internal pressures of 6–15 bar and must pass burst-pressure safety tests at 1.5x rated pressure. A domed or tapered slug provides extra metal where the can shoulder forms during extrusion, resulting in a thicker, stronger pressure-bearing dome on the finished can. Using a plain slug would either require excessive overall thickness (raising weight and cost) or produce cans that fail pressure testing.",
  },
  {
    q: "What aluminium grade do you use for aerosol can slugs?",
    a: "EN AW-1050A is our preferred grade for aerosol can applications. It provides the right balance of ductility for impact extrusion and mechanical strength to hold pressure. For high-pressure or premium decorative applications we can also supply EN AW-1070A or alloyed grades on request.",
  },
  {
    q: "Are your aerosol slugs DOT-compliant?",
    a: "We supply slugs that conform to international can-manufacturing specifications including EN 570, EN 573-3 and ISO 6506-4. DOT (US Department of Transportation) compliance applies to the finished can — not the slug — but the dimensional accuracy, alloy purity and grain structure of our slugs enable can manufacturers to produce DOT-compliant aerosol cans for export to North American markets.",
  },
  {
    q: "What diameter and thickness range is available for domed slugs?",
    a: "Our domed and taper slugs are available from 9.8 mm to 135.8 mm diameter and 2 mm to 15.4 mm thickness. Standard aerosol can diameters range from 35 mm to 66 mm; perfume and deodorant cans typically use 35–45 mm slugs. Custom dome and taper profiles are produced to customer drawings.",
  },
  {
    q: "Can you produce custom dome profiles for specific aerosol designs?",
    a: "Yes. Different aerosol applications require different dome geometries — flat domed, conical domed, spherical domed and tapered profiles are all standard options. Custom dome profiles for proprietary can designs are produced from customer drawings; tooling costs are quoted separately.",
  },
  {
    q: "What surface finish is best for decorative aerosol cans?",
    a: "Perfume and premium cosmetic aerosol cans are typically lacquered and decorated after extrusion, so the slug surface itself must be free of pits, scratches and rolling defects. We offer vibrated and tumbled finishes that produce a uniform surface ready for downstream printing, lacquering or anodising operations.",
  },
];

export default function DomedSlugsPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Products", url: `${SITE_URL}/products` },
    { name: "Domed & Taper Aluminium Slugs", url: PAGE_URL },
  ]);

  const product = productJsonLd({
    name: "Domed & Taper Aluminium Slugs",
    description:
      "Domed and taper aluminium slugs manufactured from 99.7% pure primary aluminium for impact extrusion of monobloc aerosol cans — perfumes, deodorants, sanitizers and pressurised sprays.",
    image: PAGE_IMAGE,
    url: PAGE_URL,
    sku: "WMI-DOMED-SLUG",
    category: "Aluminium Slugs / Domed Slugs / Taper Slugs",
    material: "Aluminium EN AW-1050A (99.7% purity)",
    diameterMin: 9.8,
    diameterMax: 135.8,
    thicknessMin: 2,
    thicknessMax: 15.4,
    applicationArea: [
      "Monobloc aerosol cans",
      "Perfume cans",
      "Deodorant cans",
      "Sanitizer cans",
      "Hair spray cans",
      "Body spray cans",
      "Pharmaceutical sprays",
      "Household aerosols",
    ],
  });

  const faqSchema = faqJsonLd(faqs);

  return (
    <>
      <JsonLd data={[ORGANIZATION_JSONLD, breadcrumbs, product, faqSchema]} />

      <PageHero
        eyebrow="Aluminium Slugs"
        title="Domed & Taper Slugs"
        subtitle="Pre-shaped aluminium slugs engineered for monobloc aerosol can production. The dome or taper profile delivers the extra metal needed at the can shoulder — producing pressure-rated cans for perfumes, deodorants, sanitizers and pharmaceutical sprays without compromising on weight or strength."
        image={PAGE_IMAGE}
        imageAlt="Domed and taper aluminium slugs for aerosol cans — Western Metal Industries Pune India"
      />

      <Section>
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Domed & Taper Slugs" },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#173178] mt-0">
              About our domed and taper aluminium slugs
            </h2>
            <p>
              Domed and taper aluminium slugs are the specialised blanks from
              which <strong>monobloc aerosol cans</strong> — one-piece,
              seamless pressure containers — are impact-extruded. The dome or
              taper geometry pre-distributes aluminium to the regions of the
              slug that will become the can shoulder and base, where the
              finished can must withstand internal pressure during use and
              transport.
            </p>
            <p>
              The global aerosol can market is dominated by aluminium for
              perfumes, deodorants, hair sprays and an increasingly long list
              of personal-care and pharmaceutical products. Behind every one
              of these cans is a precision-engineered slug. Western Metal
              Industries has supplied the Indian and export aerosol can
              industry since the mid-1990s and is one of the few Indian
              manufacturers capable of producing domed slugs across the full
              9.8 – 135.8 mm diameter range.
            </p>

            <h3 className="text-xl font-bold text-[#173178] mt-8">
              Dome profiles we manufacture
            </h3>
            <ul>
              <li>
                <strong>Flat domed</strong> — minimal crown, used for cans
                with moderate pressure ratings and shorter heights
              </li>
              <li>
                <strong>Conical domed</strong> — gradual taper from rim to
                centre, standard for most deodorant and perfume can designs
              </li>
              <li>
                <strong>Spherical domed</strong> — pronounced rounded crown,
                used for high-pressure and premium decorative cans
              </li>
              <li>
                <strong>Taper slugs</strong> — non-symmetric taper for
                specific can shoulder geometries
              </li>
              <li>
                <strong>Custom profiles</strong> — produced to customer
                drawings for proprietary can designs
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#173178] mt-8">
              Aerosol applications served
            </h3>
            <ul>
              <li>
                <strong>Personal care</strong> — perfume sprays, body sprays,
                deodorants, antiperspirants, hair sprays, hair mousses
              </li>
              <li>
                <strong>Sanitizers and hygiene</strong> — surface sanitizers,
                hand sanitizer sprays, disinfectant sprays
              </li>
              <li>
                <strong>Pharmaceutical</strong> — metered-dose inhalers (MDI),
                topical anaesthetic sprays, throat sprays
              </li>
              <li>
                <strong>Household</strong> — air fresheners, insecticides,
                fabric refreshers, polish sprays
              </li>
              <li>
                <strong>Industrial</strong> — lubricant sprays, marker paint
                sprays, electronic contact cleaners
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#173178] mt-8">
              The metallurgy behind a safe aerosol can
            </h3>
            <p>
              An aerosol can is a pressure vessel that consumers handle
              casually — drop it, leave it in a hot car, dispose of it
              incorrectly. The slug it began as must therefore deliver
              <strong> uniform strength, no inclusions and predictable
              elongation</strong>. We control these properties from the melt
              upward: spectrometric melt analysis, continuous strip casting,
              precise hot and cold rolling, controlled annealing, and 100%
              inspection of the pre-shaped slug before packing. Our customers
              routinely pass burst-pressure testing at 1.5× rated pressure
              with our slugs.
            </p>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-[#173178] mb-4">
                At a glance
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-slate-500">Product type</dt>
                  <dd className="font-semibold text-slate-900">
                    Domed / Taper Slug
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Alloy</dt>
                  <dd className="font-semibold text-slate-900">
                    EN AW-1050A (preferred)
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Purity</dt>
                  <dd className="font-semibold text-slate-900">99.7% Al</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Diameter</dt>
                  <dd className="font-semibold text-slate-900">
                    9.8 – 135.8 mm
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Thickness</dt>
                  <dd className="font-semibold text-slate-900">
                    2 – 15.4 mm
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Dome profiles</dt>
                  <dd className="font-semibold text-slate-900">
                    Flat / Conical / Spherical / Custom
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Temper</dt>
                  <dd className="font-semibold text-slate-900">O, H12</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Standards</dt>
                  <dd className="font-semibold text-slate-900">
                    EN 570, EN 573-3, ISO 6506-4
                  </dd>
                </div>
              </dl>
              <Link
                href="/#contactus"
                className="mt-6 block w-full text-center px-4 py-3 bg-[#173178] text-white font-semibold rounded hover:bg-[#0f1f4a] transition"
              >
                Request Specification Sheet
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        alt
        title="Technical Specifications"
        subtitle="Dome profile, diameter and thickness customised to your aerosol can design and pressure rating."
      >
        <SpecTable
          rows={[
            { label: "Product Designation", value: "Domed Slug / Taper Slug / Aerosol Can Slug" },
            { label: "Preferred Alloy", value: "EN AW-1050A (aerosol cans); EN AW-1070A on request" },
            { label: "Aluminium Purity", value: "Minimum 99.7% (primary aluminium)" },
            { label: "Diameter Range", value: "9.8 mm to 135.8 mm" },
            { label: "Thickness Range", value: "2.0 mm to 15.4 mm" },
            { label: "Dome Profile Options", value: "Flat Domed, Conical Domed, Spherical Domed, Custom Taper" },
            { label: "Temper", value: "O (annealed), H12 (quarter-hard) — application-specific" },
            { label: "Hardness", value: "18 – 21 HB (Brinell), as per ISO 6506-4" },
            { label: "Surface Finish", value: "Plain, Vibrated, Tumbled — selected for downstream lacquering" },
            { label: "Pressure Performance", value: "Slugs designed to enable cans rated 6 – 15 bar working pressure" },
            { label: "Compliance Standards", value: "EN 570, EN 573-3, ISO 6506-4" },
            { label: "Decorative Compatibility", value: "Surface finish prepared for printing, lacquering, anodising downstream" },
            { label: "Packaging", value: "25 kg cartons, palletised, customisable for export" },
          ]}
        />
      </Section>

      <Section
        title="What makes WMI the supplier of choice for aerosol can makers"
        subtitle="The slug is what stands between a successful product launch and a recalled batch. Here's our process."
      >
        <FeatureGrid
          items={[
            {
              icon: "💨",
              title: "Engineered for pressure",
              description:
                "Dome geometry pre-distributes metal where the can will bear pressure — enabling thinner walls and lighter cans without losing safety margin.",
            },
            {
              icon: "🎨",
              title: "Print-ready surface",
              description:
                "Vibrated and tumbled finishes produce a uniform surface that takes lacquer and offset printing cleanly — critical for premium perfume cans.",
            },
            {
              icon: "🔬",
              title: "Burst-test ready",
              description:
                "Tight control on grain size and elongation. Our customers consistently pass 1.5× rated-pressure burst testing as required by international standards.",
            },
            {
              icon: "🌍",
              title: "Export to 50+ markets",
              description:
                "Slugs supplied to can manufacturers serving North American, European, Middle Eastern, African and Asia-Pacific aerosol markets.",
            },
            {
              icon: "🛠️",
              title: "Custom dome profiles",
              description:
                "Capable of producing proprietary dome geometries from customer drawings — supporting design differentiation for premium brands.",
            },
            {
              icon: "🌱",
              title: "Sustainability credentials",
              description:
                "ISO 14001:2015 environmental management plus solar-powered manufacturing (1.32 MW installed) supports brand-owner sustainability targets.",
            },
          ]}
        />
      </Section>

      <Section
        alt
        title="Frequently asked questions"
        subtitle="Common questions from aerosol can manufacturers and brand-side packaging engineers."
      >
        <FAQList faqs={faqs} />
      </Section>

      <Section title="Explore related products and applications">
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/products/aluminium-slugs-plain-without-center-hole"
            className="p-6 rounded-lg border border-slate-200 hover:border-[#173178] hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[#173178] mb-2">
              Plain Slugs →
            </h3>
            <p className="text-slate-600 text-sm">
              For rigid containers, food packaging, electronic housings.
            </p>
          </Link>
          <Link
            href="/products/aluminium-slugs-perforated-with-center-hole"
            className="p-6 rounded-lg border border-slate-200 hover:border-[#173178] hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[#173178] mb-2">
              Perforated Slugs →
            </h3>
            <p className="text-slate-600 text-sm">
              For collapsible tubes — pharma, cosmetic and industrial.
            </p>
          </Link>
          <Link
            href="/applications/aerosol-cans"
            className="p-6 rounded-lg border border-slate-200 hover:border-[#173178] hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[#173178] mb-2">
              Application: Aerosol Cans →
            </h3>
            <p className="text-slate-600 text-sm">
              Deep-dive into monobloc aerosol can manufacture.
            </p>
          </Link>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
