// app/products/aluminium-slugs-perforated-with-center-hole/page.tsx
// Targets: "perforated aluminium slugs", "aluminium slugs with center hole",
// "aluminium slugs for collapsible tubes", "pharma tube slugs India"

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
} from "../../components/PageShell";
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
    "Perforated aluminium slugs with center hole for collapsible tubes — pharmaceutical, cosmetic and industrial packaging. 99.7% pure aluminium, 12.5–135.8 mm diameter. India's largest manufacturer since 1978.",
  keywords: [
    "perforated aluminium slugs",
    "aluminium slugs with center hole",
    "pierced aluminium slugs",
    "aluminium slugs for collapsible tubes",
    "pharma tube aluminium slugs",
    "cosmetic tube aluminium slugs",
    "aluminium slugs toothpaste tubes",
    "aluminium slug supplier India",
    "collapsible tube manufacturer",
    "EN AW 1070 perforated slugs",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Perforated Aluminium Slugs (With Center Hole) | Western Metal Industries",
    description:
      "Center-hole aluminium slugs for collapsible tubes in pharma and cosmetic packaging. 99.7% pure, ISO certified, manufactured in India.",
    url: PAGE_URL,
    type: "website",
    images: [`${SITE_URL}${PAGE_IMAGE}`],
  },
};

const faqs = [
  {
    q: "What are perforated aluminium slugs used for?",
    a: "Perforated aluminium slugs — also called pierced slugs or slugs with center hole — are the precision blank used to manufacture collapsible aluminium tubes. The center hole becomes the nozzle aperture after impact extrusion, eliminating a secondary drilling operation. Typical end products include pharmaceutical ointment tubes, toothpaste tubes, hair colour tubes, cosmetic creams and industrial adhesive tubes.",
  },
  {
    q: "What hole sizes do you offer in perforated slugs?",
    a: "Center hole diameters are matched to the final nozzle and cap specification of the tube. Common hole diameters range from 3 mm to 12 mm depending on the slug outer diameter and the tube design. We work to customer drawings or industry-standard tube specifications.",
  },
  {
    q: "Are your perforated slugs suitable for pharmaceutical packaging?",
    a: "Yes. Our perforated slugs are manufactured from 99.7% pure primary aluminium with food-safe lubricants and traceable melt records — making them suitable for primary pharmaceutical packaging including ophthalmic ointments, dermatological creams, hemorrhoid treatments and oral pastes. Slugs are supplied with chemical composition certificates and ISO 9001:2015 quality documentation.",
  },
  {
    q: "What diameter range is available for perforated slugs?",
    a: "Our perforated slugs range from 12.5 mm to 135.8 mm in outer diameter and 2 mm to 7 mm in thickness. The lower bound reflects the minimum diameter at which a center hole can be reliably punched in the slug without distortion.",
  },
  {
    q: "Do perforated slugs require a different aluminium grade?",
    a: "We typically use EN AW-1070A for collapsible tube applications because of its exceptional ductility — collapsible tubes require the aluminium to extrude into very thin walls (often under 0.15 mm) without tearing. The higher purity grade also resists corrosion from formulated products inside the tube.",
  },
  {
    q: "What is the typical wall thickness achievable from your slugs?",
    a: "With our slugs, customers routinely achieve tube wall thicknesses between 0.11 mm and 0.18 mm depending on extrusion speed, lubrication and tube length. Our consistent grain structure is critical to achieving these thin walls without rupture or pin-holing.",
  },
  {
    q: "How are perforated slugs packaged for shipment?",
    a: "Standard packaging is 25 kg cartons on wooden pallets, 40 cartons per pallet. For long sea-freight routes we offer fumigation-treated wood, VCI inner liners and shrink-wrapped pallets to prevent surface oxidation during transit.",
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
      "Perforated aluminium slugs with center hole, manufactured from 99.7% pure primary aluminium for impact extrusion of collapsible tubes used in pharmaceutical, cosmetic and industrial packaging.",
    image: PAGE_IMAGE,
    url: PAGE_URL,
    sku: "WMI-PERF-SLUG",
    category: "Aluminium Slugs / Perforated Slugs",
    material: "Aluminium EN AW-1070A (99.7% purity)",
    diameterMin: 12.5,
    diameterMax: 135.8,
    thicknessMin: 2,
    thicknessMax: 7,
    applicationArea: [
      "Collapsible tubes",
      "Pharmaceutical tubes",
      "Cosmetic tubes",
      "Toothpaste tubes",
      "Hair colour tubes",
      "Industrial adhesive tubes",
    ],
  });

  const faqSchema = faqJsonLd(faqs);

  return (
    <>
      <JsonLd data={[ORGANIZATION_JSONLD, breadcrumbs, product, faqSchema]} />

      <PageHero
        eyebrow="Aluminium Slugs"
        title="Perforated Slugs (With Center Hole)"
        subtitle="Precision-pierced aluminium slugs engineered for the impact extrusion of collapsible tubes. The pre-formed center hole becomes the tube nozzle — eliminating a secondary operation and guaranteeing concentric, leak-proof packaging for pharma and cosmetic products."
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
              Perforated aluminium slugs — sometimes called <strong>pierced
              slugs</strong> or <strong>slugs with center hole</strong> — are
              the engineered blank from which a collapsible aluminium tube is
              impact-extruded in a single press stroke. The center hole
              becomes the tube nozzle, so its concentricity, diameter
              tolerance and edge finish directly determine whether your
              extruded tube will seal correctly with the cap and dispense
              evenly through use.
            </p>
            <p>
              India's pharmaceutical and personal-care industries are among
              the largest consumers of collapsible aluminium tubes globally.
              Western Metal Industries has supplied perforated slugs to this
              sector for over three decades, building deep expertise in the
              specific metallurgy required: extremely fine grain structure,
              high ductility, low Mn/Mg content and consistent annealing
              across the entire slug face.
            </p>

            <h3 className="text-xl font-bold text-[#173178] mt-8">
              Typical end products manufactured from our perforated slugs
            </h3>
            <ul>
              <li>
                <strong>Pharmaceutical tubes</strong> — ophthalmic ointments,
                dermatological creams, dental gels, hemorrhoid treatments
              </li>
              <li>
                <strong>Oral care tubes</strong> — toothpaste, gum gels,
                medicated mouth pastes
              </li>
              <li>
                <strong>Cosmetic and personal-care tubes</strong> — hair
                colours, depilatory creams, skin creams, hand creams
              </li>
              <li>
                <strong>Industrial tubes</strong> — adhesives, sealants,
                lubricant pastes, anti-seize compounds
              </li>
              <li>
                <strong>Food tubes</strong> — condiments, concentrated pastes,
                spreads (where regulations permit aluminium)
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#173178] mt-8">
              What separates our perforated slugs
            </h3>
            <p>
              The challenge with collapsible tubes is the extreme deformation
              involved: a 30 mm slug typically extrudes into a tube 150–200 mm
              long with walls thinner than 0.15 mm. Any inclusion, surface
              defect or grain inconsistency in the slug shows up as a
              pinhole, tear or weak shoulder in the final tube. Our use of
              <strong> 99.7% pure primary aluminium</strong>, controlled
              continuous strip casting and fully integrated rolling and
              punching gives our customers tube reject rates well below
              industry averages.
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
                    Perforated / Pierced Slug
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
                  <dt className="text-slate-500">Outer diameter</dt>
                  <dd className="font-semibold text-slate-900">
                    12.5 – 135.8 mm
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Thickness</dt>
                  <dd className="font-semibold text-slate-900">2 – 7 mm</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Center hole</dt>
                  <dd className="font-semibold text-slate-900">
                    Customised, typically 3 – 12 mm
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Temper</dt>
                  <dd className="font-semibold text-slate-900">O (annealed)</dd>
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
        subtitle="Standard production parameters for perforated aluminium slugs. Hole diameter and outer diameter customised to your tube design."
      >
        <SpecTable
          rows={[
            { label: "Product Designation", value: "Perforated Slug / Pierced Slug / Slug With Center Hole" },
            { label: "Preferred Alloy", value: "EN AW-1070A (high ductility for collapsible tubes)" },
            { label: "Aluminium Purity", value: "Minimum 99.7% (primary aluminium)" },
            { label: "Outer Diameter Range", value: "12.5 mm to 135.8 mm" },
            { label: "Thickness Range", value: "2.0 mm to 7.0 mm" },
            { label: "Center Hole Diameter", value: "Custom — typically 3 mm to 12 mm" },
            { label: "Temper", value: "O (fully annealed) — required for maximum elongation" },
            { label: "Hardness", value: "18 – 21 HB (Brinell), as per ISO 6506-4" },
            { label: "Surface Finish", value: "Plain, Vibrated, Tumbled" },
            { label: "Hole Concentricity", value: "Maintained to tube manufacturer specification" },
            { label: "Compliance Standards", value: "EN 570, EN 573-3, ISO 6506-4" },
            { label: "Lubrication", value: "Food-safe and pharma-grade lubricants on request" },
            { label: "Packaging", value: "25 kg cartons, palletised, VCI-lined for export" },
          ]}
        />
      </Section>

      <Section
        title="Why pharma and cosmetic manufacturers specify WMI"
        subtitle="The slug is the most critical input in collapsible tube manufacture. Here's what we deliver."
      >
        <FeatureGrid
          items={[
            {
              icon: "💊",
              title: "Pharma-grade purity",
              description:
                "99.7% pure primary aluminium sourced from primary producers — never secondary or recycled. Full chemical composition certificate per batch.",
            },
            {
              icon: "🎯",
              title: "Concentric center holes",
              description:
                "Precision punching equipment maintains hole concentricity to tight tolerances — critical for cap-thread alignment in finished tubes.",
            },
            {
              icon: "🧬",
              title: "Fine-grain microstructure",
              description:
                "Controlled annealing produces uniform grain size across the slug face — enabling tube walls as thin as 0.11 mm without rupture.",
            },
            {
              icon: "🛢️",
              title: "Food-safe lubrication",
              description:
                "Eco-friendly, food-safe lubricants available pre-applied — essential for primary contact pharma and cosmetic packaging.",
            },
            {
              icon: "📋",
              title: "Full traceability",
              description:
                "Melt-to-shipment lot tracking. Pharma customers receive batch reports linking slug lots to specific melt analyses.",
            },
            {
              icon: "🌐",
              title: "Export-ready packaging",
              description:
                "VCI-lined cartons, fumigated pallets and shrink-wrap protect surface finish through long sea-freight transit.",
            },
          ]}
        />
      </Section>

      <Section
        alt
        title="Frequently asked questions"
        subtitle="Common technical questions from collapsible tube manufacturers."
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
            href="/products/aluminium-slugs-domed-taper"
            className="p-6 rounded-lg border border-slate-200 hover:border-[#173178] hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[#173178] mb-2">
              Domed / Taper Slugs →
            </h3>
            <p className="text-slate-600 text-sm">
              For aerosol cans — perfumes, deodorants, sanitizers.
            </p>
          </Link>
          <Link
            href="/applications/collapsible-tubes"
            className="p-6 rounded-lg border border-slate-200 hover:border-[#173178] hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[#173178] mb-2">
              Application: Collapsible Tubes →
            </h3>
            <p className="text-slate-600 text-sm">
              Deep-dive into pharma and cosmetic tube manufacture.
            </p>
          </Link>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

// app/sitemap.ts
// Next.js App Router automatic sitemap. Place at app/sitemap.ts — Next.js will
// generate /sitemap.xml at build time. Merge with any existing sitemap entries.

import type { MetadataRoute } from "next";

const SITE_URL = "https://www.westernaluminium.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Homepage
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Products index
    {
      url: `${SITE_URL}/products`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Product pages
    {
      url: `${SITE_URL}/products/aluminium-slugs-plain-without-center-hole`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/products/aluminium-slugs-perforated-with-center-hole`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/products/aluminium-slugs-domed-taper`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Applications index
    {
      url: `${SITE_URL}/applications`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Application pages
    {
      url: `${SITE_URL}/applications/aerosol-cans`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/applications/collapsible-tubes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/applications/food-packaging`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/applications/automotive-impact-extrusion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}


