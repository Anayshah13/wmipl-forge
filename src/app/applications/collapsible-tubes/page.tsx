// app/applications/collapsible-tubes/page.tsx
// Targets: "aluminium slugs for collapsible tubes", "pharma tube manufacturer",
// "toothpaste tube aluminium slugs", "cosmetic tube material India"

import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  PageHero,
  Section,
  FeatureGrid,
  FAQList,
  CTABand,
  JsonLd,
} from "@/components/PageShell";
import {
  SITE_URL,
  ORGANIZATION_JSONLD,
  breadcrumbJsonLd,
  faqJsonLd,
} from "../../../lib/seo";

const PAGE_URL = `${SITE_URL}/applications/collapsible-tubes`;

export const metadata: Metadata = {
  title:
    "Aluminium Slugs for Collapsible Tubes | Pharma & Cosmetic Tube Material India",
  description:
    "Perforated aluminium slugs for collapsible tubes — pharmaceutical ointments, toothpaste, hair colours, cosmetic creams, industrial adhesives. 99.7% pure aluminium from India's largest manufacturer.",
  keywords: [
    "aluminium slugs for collapsible tubes",
    "pharma tube aluminium slugs",
    "toothpaste tube manufacturer India",
    "cosmetic tube aluminium",
    "ointment tube aluminium slugs",
    "hair colour tube slugs",
    "collapsible tube material supplier",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Aluminium Slugs for Collapsible Tubes | Western Metal Industries",
    description:
      "Perforated aluminium slugs for pharma, cosmetic and industrial collapsible tubes.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "Why are collapsible tubes made of aluminium?",
    a: "Aluminium gives collapsible tubes three properties that no other material matches simultaneously: full barrier protection (against oxygen, light and moisture), complete collapsibility without springback (so the tube empties cleanly and prevents back-suction of air), and non-reactivity with most pharmaceutical and cosmetic formulations. Laminated and plastic tubes can match one or two of these but not all three.",
  },
  {
    q: "What wall thickness can be achieved in collapsible tubes?",
    a: "Modern collapsible aluminium tubes achieve wall thicknesses between 0.11 mm and 0.18 mm depending on tube diameter, length and contents. This requires a high-ductility starting slug — typically EN AW-1070A grade at 99.7% purity — combined with controlled impact extrusion and downstream annealing.",
  },
  {
    q: "Are aluminium collapsible tubes suitable for pharmaceutical use?",
    a: "Yes. Aluminium collapsible tubes are widely used for primary pharmaceutical packaging — ophthalmic ointments, dermatological creams, dental gels, hemorrhoid treatments, anti-fungal pastes, and many oral medications. Internal lacquering (epoxy, phenolic or similar) is applied where chemical compatibility with the active pharmaceutical ingredient requires it.",
  },
  {
    q: "Can aluminium collapsible tubes be printed and decorated?",
    a: "Yes. After impact extrusion, collapsible tubes are typically base-coated (white or coloured), offset-printed with brand and product information, and over-varnished. The slug surface finish — vibrated or tumbled — must be free of rolling defects to take downstream decoration cleanly.",
  },
  {
    q: "What is the typical lifespan of a collapsible aluminium tube on shelf?",
    a: "Properly manufactured aluminium collapsible tubes provide multi-year shelf life for most pharmaceutical and cosmetic products — limited by the product inside, not the tube. The full aluminium barrier prevents oxygen permeation and light damage, which are the main shelf-life killers for sensitive formulations.",
  },
];

export default function CollapsibleTubesApplicationPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Applications", url: `${SITE_URL}/applications` },
    { name: "Collapsible Tubes", url: PAGE_URL },
  ]);

  return (
    <>
      <JsonLd
        data={[ORGANIZATION_JSONLD, breadcrumbs, faqJsonLd(faqs)]}
      />

      <PageHero
        eyebrow="Application"
        title="Aluminium Slugs for Collapsible Tubes"
        subtitle="The starting blank for every collapsible aluminium tube — pharmaceutical ointments, toothpaste, hair colour, cosmetic creams and industrial adhesives. Engineered for the thinnest walls and the longest shelf lives."
        image="/wchole.png"
        imageAlt="Collapsible aluminium tubes manufactured from Western Metal Industries slugs"
      />

      <Section>
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Applications" },
            { name: "Collapsible Tubes" },
          ]}
        />

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#173178] mt-0">
            Why aluminium dominates collapsible tube packaging
          </h2>
          <p>
            A collapsible tube has one job that sounds simple but is
            unexpectedly demanding: dispense product on demand, then stay
            collapsed without springing back to suck air (and oxygen) into
            the contents. Plastic tubes spring back. Laminated tubes
            partially spring back. Only aluminium collapses fully and stays
            collapsed — which is why it remains the gold-standard packaging
            for products where oxygen exposure ruins shelf life.
          </p>
          <p>
            Beyond collapsibility, aluminium provides a complete light,
            moisture and gas barrier. For pharmaceutical and high-end
            cosmetic products this is decisive: the tube is the difference
            between a six-month shelf life and a three-year shelf life on
            the same formulation.
          </p>

          <h3 className="text-xl font-bold text-[#173178] mt-8">
            Collapsible tube end-products served by our slugs
          </h3>
          <ul>
            <li>
              <strong>Pharmaceutical ointments and creams</strong> — antibiotic
              creams, antifungal creams, ophthalmic ointments, dermatological
              treatments, hemorrhoid preparations
            </li>
            <li>
              <strong>Oral care</strong> — toothpastes, medicated dental gels,
              denture adhesives
            </li>
            <li>
              <strong>Hair care</strong> — hair colour (where the chemistry
              demands a full aluminium barrier), bleaching creams, depilatory
              creams
            </li>
            <li>
              <strong>Cosmetic creams</strong> — premium skin creams, hand
              creams, anti-ageing formulations, sunscreens (some markets)
            </li>
            <li>
              <strong>Food</strong> — concentrated pastes (tomato, anchovy,
              wasabi), condensed milk in regions permitting it
            </li>
            <li>
              <strong>Industrial</strong> — high-grade adhesives, sealants,
              anti-seize compounds, lubricant pastes, electronic potting
              compounds
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#173178] mt-8">
            What the impact extrusion process demands of the slug
          </h3>
          <p>
            A collapsible tube is impact-extruded from a perforated slug in a
            single press stroke. A typical 30 mm diameter, 6 mm thick slug
            becomes a 30 mm diameter tube 150–200 mm long with walls
            thinner than 0.15 mm. That's an extreme deformation ratio — the
            aluminium must flow plastically by more than ten times its
            original length without rupture.
          </p>
          <p>
            This places three uncompromising demands on the slug:
          </p>
          <ul>
            <li>
              <strong>Maximum ductility</strong> — achieved through 99.7%
              pure primary aluminium (EN AW-1070A) and controlled annealing
            </li>
            <li>
              <strong>Uniform grain structure</strong> — any coarse-grained
              region in the slug becomes a thin spot or pinhole in the tube
            </li>
            <li>
              <strong>Concentric center hole</strong> — the hole becomes the
              tube nozzle, and its position determines whether the cap will
              seat correctly
            </li>
          </ul>
          <p>
            Our perforated slugs are designed around these three demands
            from the melt onward. Three decades of pharma and cosmetic tube
            customers have validated the result.
          </p>
        </div>
      </Section>

      <Section
        alt
        title="What we deliver to tube manufacturers"
        subtitle="Pharma packaging is a documentation-heavy industry. Our supply meets it."
      >
        <FeatureGrid
          items={[
            {
              icon: "💊",
              title: "Pharma-grade purity",
              description:
                "99.7% pure primary aluminium with batch-level chemical certificates and ISO 9001:2015 quality documentation.",
            },
            {
              icon: "🎯",
              title: "Concentric center holes",
              description:
                "Precision punching for tight hole-position tolerance — critical for cap-thread alignment on the finished tube.",
            },
            {
              icon: "🧬",
              title: "Fine grain microstructure",
              description:
                "Controlled annealing for uniform grain size — enabling tube walls as thin as 0.11 mm without tearing or pinholing.",
            },
            {
              icon: "🛢️",
              title: "Food-safe lubrication",
              description:
                "Eco-friendly, food-safe lubricants applied pre-extrusion — essential for primary contact pharma and cosmetic packaging.",
            },
            {
              icon: "📋",
              title: "Lot traceability",
              description:
                "Melt-to-shipment traceability with batch reports linking every slug lot to its source melt analysis.",
            },
            {
              icon: "🌐",
              title: "Export-grade packing",
              description:
                "VCI-lined cartons and fumigated pallets — surface oxidation prevented through long sea-freight routes.",
            },
          ]}
        />
      </Section>

      <Section
        title="Recommended product"
        subtitle="For collapsible tube manufacture, specify our Perforated slugs."
      >
        <Link
          href="/products/aluminium-slugs-perforated-with-center-hole"
          className="block p-8 rounded-lg border-2 border-[#173178] bg-blue-50 hover:bg-blue-100 transition"
        >
          <h3 className="text-2xl font-bold text-[#173178] mb-2">
            Perforated Slugs (With Center Hole) →
          </h3>
          <p className="text-slate-700">
            Precision-pierced aluminium slugs engineered for the impact
            extrusion of collapsible tubes. 12.5 – 135.8 mm diameter,
            EN AW-1070A grade, 99.7% pure aluminium.
          </p>
          <span className="mt-4 inline-block text-[#173178] font-semibold">
            View product specifications →
          </span>
        </Link>
      </Section>

      <Section alt title="Frequently asked questions">
        <FAQList faqs={faqs} />
      </Section>

      <CTABand />
    </>
  );
}

