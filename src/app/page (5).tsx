// app/products/aluminium-slugs-plain-without-center-hole/page.tsx
// Targets: "plain aluminium slugs", "aluminium slugs without center hole",
// "aluminium slugs for rigid containers", "impact extrusion slugs India"

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

const PAGE_URL = `${SITE_URL}/products/aluminium-slugs-plain-without-center-hole`;
const PAGE_IMAGE = "/wocenter.png";

export const metadata: Metadata = {
  title:
    "Plain Aluminium Slugs (Without Center Hole) | Manufacturer in India | WMI",
  description:
    "Plain aluminium slugs without center hole for rigid containers, food packaging, pesticide containers and electronic housings. 99.7% pure aluminium, 9.8–135.8 mm diameter. Manufactured in Pune, India by Western Metal Industries — ISO 9001:2015 certified.",
  keywords: [
    "plain aluminium slugs",
    "aluminium slugs without center hole",
    "rigid aluminium slugs",
    "aluminium slugs for rigid containers",
    "impact extrusion slugs",
    "aluminium slugs food packaging",
    "aluminium slugs pesticide containers",
    "aluminium slugs manufacturer India",
    "aluminium slugs Pune",
    "EN AW 1070 slugs",
    "EN AW 1050 slugs",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Plain Aluminium Slugs (Without Center Hole) | Western Metal Industries",
    description:
      "Plain aluminium slugs for rigid containers, food packaging and electronics. 99.7% pure aluminium, ISO certified, manufactured in India.",
    url: PAGE_URL,
    type: "website",
    images: [`${SITE_URL}${PAGE_IMAGE}`],
  },
};

const faqs = [
  {
    q: "What are plain aluminium slugs used for?",
    a: "Plain aluminium slugs (without center hole) are the starting material for impact extrusion of rigid containers. They are widely used to manufacture food cans, pesticide bottles, electronic component housings, capacitor cans, battery cases and seamless industrial containers where a closed-bottom container is required.",
  },
  {
    q: "What aluminium grade is used in your plain slugs?",
    a: "We use 99.7% pure primary aluminium, typically EN AW-1070A and EN AW-1050A grades, sourced directly from primary aluminium producers. This high-purity grade ensures excellent formability during impact extrusion and uniform mechanical properties across every slug.",
  },
  {
    q: "What diameter and thickness ranges do you offer?",
    a: "Our plain slugs are available from 9.8 mm to 135.8 mm in diameter and 2 mm to 15.4 mm in thickness. We accept custom specifications within this range for OEM impact extrusion lines.",
  },
  {
    q: "What standards do your plain aluminium slugs conform to?",
    a: "All our aluminium slugs are manufactured in accordance with EN 570, EN 573-3 and ISO 6506-4 standards. Our manufacturing facility is certified to ISO 9001:2015 (Quality), ISO 14001:2015 (Environment) and ISO 45001:2018 (Occupational Health & Safety).",
  },
  {
    q: "What surface finishes are available?",
    a: "We offer plain (as-rolled), vibrated and tumbled surface finishes. Surface treatment is selected based on your downstream lubrication and impact extrusion process. Slugs are annealed to specification to achieve the required hardness for forming.",
  },
  {
    q: "What is the minimum order quantity for plain aluminium slugs?",
    a: "Order quantities depend on diameter, thickness and finish specification. For standard sizes we maintain production stock; for custom dimensions our minimum batch is typically 1 metric ton. Please contact our sales team with your specifications for a quote.",
  },
  {
    q: "Do you export plain aluminium slugs outside India?",
    a: "Yes. Western Metal Industries is a recognised export house and ships aluminium slugs to New Zealand, South Africa, Bangladesh, the UAE, Saudi Arabia and several other markets across Asia, Africa and Oceania.",
  },
];

export default function PlainSlugsPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Products", url: `${SITE_URL}/products` },
    { name: "Plain Aluminium Slugs", url: PAGE_URL },
  ]);

  const product = productJsonLd({
    name: "Plain Aluminium Slugs (Without Center Hole)",
    description:
      "Plain aluminium slugs without center hole, manufactured from 99.7% pure aluminium for impact extrusion of rigid containers, food packaging, pesticide containers and electronic component housings.",
    image: PAGE_IMAGE,
    url: PAGE_URL,
    sku: "WMI-PLAIN-SLUG",
    category: "Aluminium Slugs / Plain Slugs",
    material: "Aluminium EN AW-1070A / EN AW-1050A (99.7% purity)",
    diameterMin: 9.8,
    diameterMax: 135.8,
    thicknessMin: 2,
    thicknessMax: 15.4,
    applicationArea: [
      "Rigid containers",
      "Food packaging",
      "Pesticide containers",
      "Electronic housings",
      "Capacitor cans",
      "Battery cases",
    ],
  });

  const faqSchema = faqJsonLd(faqs);

  return (
    <>
      <JsonLd data={[ORGANIZATION_JSONLD, breadcrumbs, product, faqSchema]} />

      <PageHero
        eyebrow="Aluminium Slugs"
        title="Plain Slugs (Without Center Hole)"
        subtitle="The foundation material for rigid impact-extruded containers in food, pesticide, electronics and industrial sectors. Manufactured from 99.7% pure aluminium with consistent grain structure and surface finish for high-speed extrusion lines."
        image={PAGE_IMAGE}
        imageAlt="Plain aluminium slugs without center hole — Western Metal Industries Pune India"
      />

      <Section>
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Plain Aluminium Slugs" },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#173178] mt-0">
              About our plain aluminium slugs
            </h2>
            <p>
              Plain aluminium slugs — also called <strong>rigid slugs</strong>{" "}
              or <strong>slugs without center hole</strong> — are the precision
              starting blank used to manufacture seamless aluminium containers
              by the impact extrusion process. A single press stroke deforms
              the slug into a finished container body, making slug quality
              directly responsible for the wall thickness, dimensional accuracy
              and surface finish of every container that follows.
            </p>
            <p>
              At Western Metal Industries we have been producing aluminium
              slugs since 1985 and today operate India's largest dedicated slug
              manufacturing facility. Our plain slugs are produced from{" "}
              <strong>99.7% pure primary aluminium</strong> sourced directly
              from primary producers — never from secondary or recycled stock
              — to guarantee the uniform grain structure that impact extrusion
              demands.
            </p>

            <h3 className="text-xl font-bold text-[#173178] mt-8">
              Where plain aluminium slugs are used
            </h3>
            <ul>
              <li>
                <strong>Food packaging</strong> — coffee cans, infant formula
                containers, food-grade powder cans
              </li>
              <li>
                <strong>Pesticide and agrochemical packaging</strong> —
                seamless containers requiring barrier integrity
              </li>
              <li>
                <strong>Electronic component housings</strong> — capacitor
                cans, sensor enclosures, EMI shields
              </li>
              <li>
                <strong>Industrial battery cases</strong> — cylindrical
                aluminium battery housings
              </li>
              <li>
                <strong>Automotive components</strong> — shock absorber tubes,
                fuel filter housings
              </li>
              <li>
                <strong>Pressurised industrial containers</strong> — gas
                cartridges, fire extinguishers (non-DOT), CO₂ cylinders
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#173178] mt-8">
              Why customers specify WMI plain slugs
            </h3>
            <p>
              Consistency at scale is the single most important property of an
              impact extrusion slug. A 2% variation in temper or grain size can
              translate into rejected containers downstream. Our integrated
              process — in-house melting, continuous strip casting, hot and
              cold rolling, automatic punching, annealing and surface
              treatment — means every slug in a batch comes from the same
              metal under the same conditions. We've supplied uninterrupted
              production runs to the same customers for over two decades.
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
                    Plain Slug (Rigid)
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Alloy</dt>
                  <dd className="font-semibold text-slate-900">
                    EN AW-1070A / 1050A
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
                  <dt className="text-slate-500">Temper</dt>
                  <dd className="font-semibold text-slate-900">O, H12</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Finish</dt>
                  <dd className="font-semibold text-slate-900">
                    Plain, Vibrated, Tumbled
                  </dd>
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
        subtitle="Standard production parameters for plain aluminium slugs. Custom dimensions accepted within range — contact our technical team for tolerances."
      >
        <SpecTable
          rows={[
            { label: "Product Designation", value: "Plain Slug / Rigid Slug / Slug Without Center Hole" },
            { label: "Alloy Grades", value: "EN AW-1070A (preferred for tubes), EN AW-1050A (preferred for cans), other alloys on request" },
            { label: "Aluminium Purity", value: "Minimum 99.7% (primary aluminium)" },
            { label: "Diameter Range", value: "9.8 mm to 135.8 mm" },
            { label: "Thickness Range", value: "2.0 mm to 15.4 mm" },
            { label: "Temper", value: "O (fully annealed), H12 (quarter-hard) — application-specific" },
            { label: "Hardness", value: "18 – 21 HB (Brinell), as per ISO 6506-4" },
            { label: "Surface Finish", value: "Plain (as-rolled), Vibrated, Tumbled / Blasted" },
            { label: "Shape Tolerance", value: "±0.1 mm diameter, ±0.05 mm thickness (typical)" },
            { label: "Compliance Standards", value: "EN 570, EN 573-3, ISO 6506-4" },
            { label: "Packaging", value: "25 kg cartons on wooden pallets (40 cartons / pallet), customisable" },
            { label: "Lubrication", value: "Eco-friendly lubricant available pre-extrusion" },
          ]}
        />
      </Section>

      <Section
        title="Quality assurance you can audit"
        subtitle="Every batch traceable from melt to shipment."
      >
        <FeatureGrid
          items={[
            {
              icon: "🔬",
              title: "Spectrometric melt analysis",
              description:
                "Every melt analysed by optical emission spectrometer before casting. Chemical composition recorded against each lot number.",
            },
            {
              icon: "📐",
              title: "Dimensional inspection",
              description:
                "100% visual inspection plus statistical sampling for diameter, thickness and weight on every production batch.",
            },
            {
              icon: "⚙️",
              title: "Hardness testing",
              description:
                "Brinell hardness verified against EN 570 / ISO 6506-4 on annealed slugs. Test reports issued with every shipment on request.",
            },
            {
              icon: "🌱",
              title: "Eco-friendly lubricants",
              description:
                "Pre-extrusion lubrication uses food-safe and eco-friendly compounds — critical for downstream food and pharma applications.",
            },
            {
              icon: "📜",
              title: "ISO certifications",
              description:
                "ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), ISO 45001:2018 (Safety) — re-audited annually.",
            },
            {
              icon: "🏭",
              title: "Integrated manufacturing",
              description:
                "Melting, casting, rolling, punching, annealing and finishing all under one roof at Hadapsar and Bhandgaon plants.",
            },
          ]}
        />
      </Section>

      <Section
        alt
        title="Frequently asked questions"
        subtitle="Common questions from procurement engineers and extrusion line managers."
      >
        <FAQList faqs={faqs} />
      </Section>

      <Section title="Related products">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/products/aluminium-slugs-perforated-with-center-hole"
            className="p-6 rounded-lg border border-slate-200 hover:border-[#173178] hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[#173178] mb-2">
              Perforated Slugs (With Center Hole) →
            </h3>
            <p className="text-slate-600 text-sm">
              Designed for collapsible tubes — pharma, cosmetic and industrial
              packaging.
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
              Specialised shapes for monobloc aerosol cans — perfumes,
              deodorants, sanitizers.
            </p>
          </Link>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
