// Targets: "perforated aluminium slugs", "aluminium slugs with center hole",
// "collapsible tube slugs", "pharmaceutical tube slugs India"

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

const PAGE_URL = `${SITE_URL}/products/aluminium-slugs-perforated-with-center-hole`;
const PAGE_IMAGE = "/wchole.png";

export const metadata: Metadata = {
  title:
    "Perforated Aluminium Slugs (With Center Hole) | Collapsible Tube Manufacturer India | WMI",
  description:
    "Perforated aluminium slugs with center hole for collapsible tubes in pharmaceutical, cosmetic and industrial packaging. 99.7% pure aluminium, 12.5–135.8 mm diameter. Manufactured in Pune by Western Metal Industries — ISO 9001:2015 certified.",
  keywords: [
    "perforated aluminium slugs",
    "aluminium slugs with center hole",
    "collapsible tube slugs",
    "pharmaceutical tube slugs India",
    "cosmetic tube aluminium slugs",
    "pierced aluminium slugs",
    "aluminium slugs manufacturer India",
    "EN AW 1070A slugs",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Perforated Aluminium Slugs (With Center Hole) | Western Metal Industries",
    description:
      "Perforated aluminium slugs for collapsible tubes — pharma, cosmetic and industrial packaging. 99.7% pure aluminium, ISO certified.",
    url: PAGE_URL,
    type: "website",
    images: [`${SITE_URL}${PAGE_IMAGE}`],
  },
};

const faqs = [
  {
    q: "What are perforated aluminium slugs used for?",
    a: "Perforated aluminium slugs (with center hole) are the starting blank for impact extrusion of collapsible aluminium tubes. They are used for pharmaceutical ointments, toothpaste, hair colour, cosmetic creams, food pastes and industrial adhesives where a collapsible, tamper-evident package is required.",
  },
  {
    q: "Why is a center hole required for collapsible tubes?",
    a: "The center hole is pierced during slug manufacture to establish the internal bore of the tube before extrusion. It allows consistent wall thickness during backward extrusion and provides the attachment geometry for nozzles, caps and shoulder fittings on the finished tube.",
  },
  {
    q: "What diameter and thickness ranges do you offer for perforated slugs?",
    a: "Our perforated slugs are available from 12.5 mm to 135.8 mm in diameter and 2 mm to 7 mm in thickness, with hole diameter and position controlled to your tube drawing.",
  },
  {
    q: "What aluminium grade is used for perforated slugs?",
    a: "We typically supply EN AW-1070A at 99.7% purity for collapsible tube applications, ensuring excellent ductility and a clean surface for lacquering and printing.",
  },
  {
    q: "What standards do your perforated aluminium slugs conform to?",
    a: "All slugs are manufactured in accordance with EN 570, EN 573-3 and ISO 6506-4. Our facility is certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018.",
  },
  {
    q: "Do you export perforated aluminium slugs?",
    a: "Yes. We supply tube manufacturers in India and export markets including the UAE, Saudi Arabia, South Africa, Bangladesh and New Zealand.",
  },
];

export default function PerforatedSlugsPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Products", url: `${SITE_URL}/products` },
    { name: "Perforated Aluminium Slugs", url: PAGE_URL },
  ]);

  const product = productJsonLd({
    name: "Perforated Aluminium Slugs (With Center Hole)",
    description:
      "Perforated aluminium slugs with center hole for impact extrusion of collapsible tubes in pharmaceutical, cosmetic and industrial packaging.",
    image: PAGE_IMAGE,
    url: PAGE_URL,
    sku: "WMI-PERFORATED-SLUG",
    category: "Aluminium Slugs / Perforated Slugs",
    material: "Aluminium EN AW-1070A (99.7% purity)",
    diameterMin: 12.5,
    diameterMax: 135.8,
    thicknessMin: 2,
    thicknessMax: 7,
    applicationArea: [
      "Collapsible tubes",
      "Pharmaceutical packaging",
      "Cosmetic tubes",
      "Toothpaste tubes",
      "Industrial adhesives",
    ],
  });

  const faqSchema = faqJsonLd(faqs);

  return (
    <>
      <JsonLd data={[ORGANIZATION_JSONLD, breadcrumbs, product, faqSchema]} />

      <PageHero
        eyebrow="Aluminium Slugs"
        title="Perforated Slugs (With Center Hole)"
        subtitle="Precision-pierced aluminium slugs for collapsible tube manufacturing — pharmaceutical, cosmetic and industrial applications. Tight tolerances for hygienic, seamless tube production."
        image={PAGE_IMAGE}
        imageAlt="Perforated aluminium slugs with center hole — Western Metal Industries Pune India"
      />

      <Section>
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Perforated Aluminium Slugs" },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#173178] mt-0">
              About our perforated aluminium slugs
            </h2>
            <p>
              Perforated aluminium slugs — also called{" "}
              <strong>pierced slugs</strong> or{" "}
              <strong>slugs with center hole</strong> — are engineered for the
              backward impact extrusion process used to manufacture collapsible
              aluminium tubes. The center hole is formed during punching so that
              wall thickness, bore diameter and shoulder geometry remain
              consistent from slug to finished tube.
            </p>
            <p>
              Western Metal Industries has supplied perforated slugs to leading
              pharmaceutical and cosmetic tube manufacturers for decades. Every
              slug is produced from <strong>99.7% pure primary aluminium</strong>{" "}
              with lot traceability and chemical certificates available for
              regulated applications.
            </p>

            <h3 className="text-xl font-bold text-[#173178] mt-8">
              Typical applications
            </h3>
            <ul>
              <li>
                <strong>Pharmaceutical</strong> — ointments, creams, gels,
                topical medicines
              </li>
              <li>
                <strong>Cosmetic</strong> — toothpaste, hair colour, skin creams
              </li>
              <li>
                <strong>Food</strong> — concentrated pastes and viscous products
              </li>
              <li>
                <strong>Industrial</strong> — adhesives, sealants, lubricants
              </li>
            </ul>
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
                    Perforated Slug (With Center Hole)
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Alloy</dt>
                  <dd className="font-semibold text-slate-900">EN AW-1070A</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Purity</dt>
                  <dd className="font-semibold text-slate-900">99.7% Al</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Diameter</dt>
                  <dd className="font-semibold text-slate-900">
                    12.5 – 135.8 mm
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Thickness</dt>
                  <dd className="font-semibold text-slate-900">2 – 7 mm</dd>
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
        subtitle="Standard production parameters for perforated aluminium slugs."
      >
        <SpecTable
          rows={[
            {
              label: "Product Designation",
              value: "Perforated Slug / Pierced Slug / Slug With Center Hole",
            },
            { label: "Alloy Grade", value: "EN AW-1070A (99.7% purity)" },
            { label: "Diameter Range", value: "12.5 mm to 135.8 mm" },
            { label: "Thickness Range", value: "2.0 mm to 7.0 mm" },
            { label: "Temper", value: "O (fully annealed) — application-specific" },
            { label: "Surface Finish", value: "Plain, Vibrated, Tumbled" },
            { label: "Compliance Standards", value: "EN 570, EN 573-3, ISO 6506-4" },
          ]}
        />
      </Section>

      <Section
        title="Quality assurance"
        subtitle="Every batch traceable from melt to shipment."
      >
        <FeatureGrid
          items={[
            {
              icon: "🔬",
              title: "Spectrometric melt analysis",
              description:
                "Chemical composition recorded per lot for pharma and export compliance.",
            },
            {
              icon: "📐",
              title: "Hole position control",
              description:
                "Center hole diameter and concentricity held to your tube drawing.",
            },
            {
              icon: "📜",
              title: "ISO certifications",
              description:
                "ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified facility.",
            },
            {
              icon: "🏭",
              title: "Integrated manufacturing",
              description:
                "Melting through finishing under one roof at Hadapsar and Bhandgaon.",
            },
          ]}
        />
      </Section>

      <Section alt title="Frequently asked questions">
        <FAQList faqs={faqs} />
      </Section>

      <Section title="Related products">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/products/aluminium-slugs-plain-without-center-hole"
            className="p-6 rounded-lg border border-slate-200 hover:border-[#173178] hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[#173178] mb-2">
              Plain Slugs (Without Center Hole) →
            </h3>
            <p className="text-slate-600 text-sm">
              For rigid containers, food packaging and industrial housings.
            </p>
          </Link>
          <Link
            href="/products/aluminium-slugs-domed-taper"
            className="p-6 rounded-lg border border-slate-200 hover:border-[#173178] hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[#173178] mb-2">
              Domed / Taper Slugs →
            </h3>
            <p className="text-slate-600 text-sm">
              For monobloc aerosol cans — perfumes, deodorants, sanitizers.
            </p>
          </Link>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
