// app/applications/automotive-impact-extrusion/page.tsx
// Targets: "aluminium slugs automotive", "impact extrusion automotive parts",
// "shock absorber tube manufacturer", "automotive aluminium components India"

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

const PAGE_URL = `${SITE_URL}/applications/automotive-impact-extrusion`;

export const metadata: Metadata = {
  title:
    "Aluminium Slugs for Automotive Impact Extrusion | Auto Component Material India",
  description:
    "Aluminium slugs for automotive impact extrusion — shock absorber tubes, fuel filter housings, fire extinguisher cylinders, capacitor cans, battery housings. Engineered for high-speed automotive supply chains. ISO 9001:2015 certified.",
  keywords: [
    "aluminium slugs automotive",
    "automotive impact extrusion",
    "shock absorber tube aluminium",
    "fuel filter housing aluminium",
    "automotive component aluminium slugs",
    "capacitor can aluminium",
    "battery housing aluminium India",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Aluminium Slugs for Automotive Impact Extrusion | Western Metal Industries",
    description:
      "High-purity aluminium slugs for automotive and industrial impact extrusion components.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "What automotive components are made from impact-extruded aluminium slugs?",
    a: "Common impact-extruded automotive components include shock absorber tubes, fuel filter housings, fuel line components, hydraulic accumulator housings, airbag inflator canisters, capacitor cans for automotive electronics, battery cell housings, and various sensor and actuator enclosures. The seamless, single-piece construction is preferred for pressure-bearing and safety-critical applications.",
  },
  {
    q: "Why is impact extrusion used for automotive components?",
    a: "Impact extrusion produces seamless, one-piece pressure-bearing components in a single press stroke — no welds, no seams, no failure points. For automotive components that must hold pressure (shock absorbers, fuel filters, airbag inflators) or contain reactive materials (battery housings), this single-stroke seamless construction is significantly more reliable than welded or cast alternatives.",
  },
  {
    q: "What aluminium grade is used for automotive impact-extruded parts?",
    a: "EN AW-1050A is widely used for general automotive impact extrusion. EN AW-1070A is specified where higher ductility is needed. For structural or high-strength automotive applications, alloyed grades (3000-series and others) may be specified — these can also be supplied on request.",
  },
  {
    q: "Do you supply slugs for EV battery housings?",
    a: "Yes. Cylindrical aluminium cans for EV battery cells and modules are typically impact-extruded from precision slugs. We supply slugs to battery housing manufacturers in this growing segment, with the dimensional consistency and surface finish required for high-speed automated production lines.",
  },
  {
    q: "What quality standards do automotive customers typically require?",
    a: "Automotive supply chains typically require IATF 16949 compliance at the component manufacturer level. While our facility is ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified, automotive component customers integrate our slugs into their own IATF 16949 quality systems. Full material certificates, batch traceability and statistical process control data are supplied to support automotive PPAP and APQP requirements.",
  },
];

export default function AutomotiveApplicationPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Applications", url: `${SITE_URL}/applications` },
    { name: "Automotive Impact Extrusion", url: PAGE_URL },
  ]);

  return (
    <>
      <JsonLd
        data={[ORGANIZATION_JSONLD, breadcrumbs, faqJsonLd(faqs)]}
      />

      <PageHero
        eyebrow="Application"
        title="Aluminium Slugs for Automotive Impact Extrusion"
        subtitle="The seamless aluminium components inside every modern vehicle — shock absorbers, fuel filters, airbag inflators, EV battery cells — start as impact-extruded slugs. We supply this growing segment with the dimensional consistency and metallurgical control automotive supply chains demand."
        image="/wocenter.png"
        imageAlt="Automotive aluminium components manufactured from Western Metal Industries slugs"
      />

      <Section>
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Applications" },
            { name: "Automotive Impact Extrusion" },
          ]}
        />

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#173178] mt-0">
            Why automotive engineers specify impact-extruded aluminium
          </h2>
          <p>
            Look inside a modern vehicle and you'll find dozens of
            cylindrical aluminium components — most of them invisible until
            something goes wrong. Shock absorber tubes, fuel filter
            housings, hydraulic accumulators, airbag inflator canisters,
            capacitor cans, EV battery cells. Almost all of these are
            impact-extruded from aluminium slugs.
          </p>
          <p>
            The reason is straightforward: impact extrusion produces a
            seamless, one-piece pressure-bearing component in a single
            press stroke. There are no welds to inspect, no seams to fail,
            no joints to corrode. For safety-critical components — airbag
            inflators, brake hydraulic accumulators, fuel system
            components — this single-piece construction is significantly
            more reliable than welded or cast alternatives. For lightweight
            components — EV battery housings, electronic enclosures — the
            high strength-to-weight ratio of aluminium combined with the
            wall-thickness control of impact extrusion delivers minimum
            mass with full structural integrity.
          </p>

          <h3 className="text-xl font-bold text-[#173178] mt-8">
            Automotive components manufactured from our slugs
          </h3>
          <ul>
            <li>
              <strong>Suspension</strong> — shock absorber tubes, strut
              housings
            </li>
            <li>
              <strong>Fuel and fluid systems</strong> — fuel filter
              housings, fuel line accumulators, brake hydraulic
              accumulators, oil filter housings
            </li>
            <li>
              <strong>Safety systems</strong> — airbag inflator canisters,
              seat-belt pretensioner tubes (where aluminium is specified)
            </li>
            <li>
              <strong>Electrical and electronics</strong> — capacitor cans,
              sensor housings, ECU enclosures, ignition coil housings
            </li>
            <li>
              <strong>Electric vehicles</strong> — cylindrical battery cell
              cans, battery module housings, high-voltage component
              enclosures
            </li>
            <li>
              <strong>HVAC and refrigeration</strong> — receiver-drier
              housings, accumulator tubes in automotive air conditioning
              systems
            </li>
            <li>
              <strong>Industrial and adjacent</strong> — fire extinguisher
              cylinders, CO₂ cartridges, hydraulic and pneumatic
              accumulators
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#173178] mt-8">
            What automotive supply chains demand from the slug
          </h3>
          <p>
            Automotive manufacturing is uncompromising on consistency.
            Component reject rates are tracked in parts-per-million; a
            single contaminated melt or out-of-spec slug batch can trigger
            line stoppages costing tens of thousands of dollars per hour.
            The slug specification must support this regime:
          </p>
          <ul>
            <li>
              <strong>Statistical process control</strong> — batch-level
              hardness, dimensional and chemical data supplied with every
              shipment
            </li>
            <li>
              <strong>Lot traceability</strong> — every slug traceable to
              its source melt, in support of PPAP and 8D documentation
            </li>
            <li>
              <strong>Surface finish for downstream operations</strong> —
              prepared for impact extrusion lubrication, lacquering or
              anodising
            </li>
            <li>
              <strong>Consistent grain structure</strong> — enabling
              uniform wall thickness in the extruded component, critical
              for fatigue life
            </li>
            <li>
              <strong>Custom alloys on request</strong> — alongside the
              standard EN AW-1050A and 1070A grades, we can quote on
              alternative grades for specific automotive specifications
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#173178] mt-8">
            A growing segment: EV battery housings
          </h3>
          <p>
            The electric vehicle transition is reshaping automotive
            aluminium demand. Cylindrical battery cells — the 18650, 21700
            and 4680 formats — are housed in impact-extruded aluminium
            cans. Module housings, busbar covers and high-voltage
            connector enclosures are increasingly aluminium for both
            weight reduction and thermal management. Western Metal
            Industries is actively expanding capacity to serve this
            segment from our Bhandgaon facility.
          </p>
        </div>
      </Section>

      <Section
        alt
        title="What we deliver to automotive component manufacturers"
      >
        <FeatureGrid
          items={[
            {
              icon: "🚗",
              title: "Automotive-grade consistency",
              description:
                "Statistical process control data supplied with every batch — supporting PPAP, APQP and 8D documentation in your IATF 16949 quality system.",
            },
            {
              icon: "📊",
              title: "Full lot traceability",
              description:
                "Every slug traceable to its source melt. Batch reports linking dimensional and chemical data to production lot numbers.",
            },
            {
              icon: "⚙️",
              title: "Extrusion-ready specification",
              description:
                "Tight diameter and thickness tolerances engineered for high-speed automotive impact extrusion presses (150+ parts/minute).",
            },
            {
              icon: "🔋",
              title: "EV-ready capacity",
              description:
                "Active investment in cylindrical battery cell slug capacity at our Bhandgaon facility — serving the EV transition in India and export markets.",
            },
            {
              icon: "🛡️",
              title: "Safety-critical reliability",
              description:
                "Three decades of supplying slugs into airbag, fuel-system and brake-system component supply chains — where defects are not an option.",
            },
            {
              icon: "🏭",
              title: "Integrated manufacturing",
              description:
                "In-house melting, casting, rolling, punching and finishing — eliminating the multi-vendor quality risk that plagues fragmented supply chains.",
            },
          ]}
        />
      </Section>

      <Section
        title="Recommended product"
        subtitle="For automotive impact extrusion, specify our Plain slugs."
      >
        <Link
          href="/products/aluminium-slugs-plain-without-center-hole"
          className="block p-8 rounded-lg border-2 border-[#173178] bg-blue-50 hover:bg-blue-100 transition"
        >
          <h3 className="text-2xl font-bold text-[#173178] mb-2">
            Plain Slugs (Without Center Hole) →
          </h3>
          <p className="text-slate-700">
            Plain aluminium slugs for impact extrusion of seamless
            automotive components. 9.8 – 135.8 mm diameter, multiple alloy
            grades available, with full traceability documentation for
            automotive supply chains.
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

