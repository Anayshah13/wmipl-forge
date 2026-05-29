// app/applications/aerosol-cans/page.tsx
// Targets: "aluminium slugs for aerosol cans", "monobloc aerosol can manufacturing",
// "aerosol can material", "perfume can slug supplier India"

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
} from "../../components/PageShell";
import {
  SITE_URL,
  ORGANIZATION_JSONLD,
  breadcrumbJsonLd,
  faqJsonLd,
} from "../../../lib/seo";

const PAGE_URL = `${SITE_URL}/applications/aerosol-cans`;

export const metadata: Metadata = {
  title:
    "Aluminium Slugs for Aerosol Cans | Monobloc Aerosol Can Material Supplier India",
  description:
    "Aluminium slugs for monobloc aerosol can manufacturing — perfumes, deodorants, sanitizers, hair sprays, pharma sprays. 99.7% pure aluminium, custom dome profiles. India's largest aluminium slug manufacturer.",
  keywords: [
    "aluminium slugs for aerosol cans",
    "monobloc aerosol can manufacturing",
    "aerosol can material India",
    "perfume can aluminium slugs",
    "deodorant can manufacturer",
    "aluminium slug supplier aerosol India",
    "impact extrusion aerosol cans",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Aluminium Slugs for Aerosol Cans | Western Metal Industries",
    description:
      "Engineered aluminium slugs for monobloc aerosol can production. Perfumes, deodorants, sanitizers, hair sprays.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "Which aluminium grade is best for aerosol can manufacturing?",
    a: "EN AW-1050A is the global standard for aerosol cans, offering the right balance of ductility (for impact extrusion) and strength (for pressure containment). EN AW-1070A may be used for higher-purity applications such as pharmaceutical metered-dose inhalers. Both grades are produced by Western Metal Industries at 99.7% purity.",
  },
  {
    q: "What pressure ratings can aluminium aerosol cans achieve?",
    a: "Standard monobloc aluminium aerosol cans are rated for 6–15 bar working pressure with burst-pressure testing required at 1.5× rated pressure. The slug profile (domed or tapered), wall thickness and alloy choice together determine the achievable pressure rating.",
  },
  {
    q: "Can aluminium aerosol cans be recycled?",
    a: "Yes. Aluminium aerosol cans are infinitely recyclable and one of the most sustainable packaging formats available. The monobloc construction (single material, no liners required for most contents) makes them easier to recycle than steel cans or laminated tubes.",
  },
  {
    q: "What is the difference between a monobloc and a three-piece aerosol can?",
    a: "A monobloc aluminium aerosol can is produced from a single slug in one impact-extrusion stroke — there are no side seams or base seams. A three-piece (typically steel) can has a body, a base and a top welded together. Monobloc cans are lighter, leak-resistant, and preferred for premium personal-care and pharma applications.",
  },
  {
    q: "Do you supply slugs for export-grade aerosol cans?",
    a: "Yes. We supply Indian and overseas can manufacturers whose cans are exported globally, including to markets with stringent compliance requirements (US DOT, EU TPED, UN dangerous-goods packaging). Our slugs are produced to dimensional and metallurgical specifications that enable our customers to meet these compliance regimes downstream.",
  },
];

export default function AerosolCansApplicationPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Applications", url: `${SITE_URL}/applications` },
    { name: "Aerosol Cans", url: PAGE_URL },
  ]);

  return (
    <>
      <JsonLd
        data={[ORGANIZATION_JSONLD, breadcrumbs, faqJsonLd(faqs)]}
      />

      <PageHero
        eyebrow="Application"
        title="Aluminium Slugs for Aerosol Cans"
        subtitle="From perfumes and deodorants to pharmaceutical inhalers and household sprays — every monobloc aluminium aerosol can begins as a precision-engineered slug. We've supplied this industry for three decades."
        image="/domed.png"
        imageAlt="Aluminium aerosol cans manufactured from Western Metal Industries slugs"
      />

      <Section>
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Applications" },
            { name: "Aerosol Cans" },
          ]}
        />

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#173178] mt-0">
            The monobloc aluminium aerosol can — and the slug behind it
          </h2>
          <p>
            A modern aluminium aerosol can is a remarkable piece of
            engineering: a seamless, single-piece pressure vessel
            manufactured in seconds from a single slug of aluminium. The
            entire body, dome and base of the can are formed in one
            impact-extrusion stroke — no welds, no seams, no liner required
            for most contents.
          </p>
          <p>
            That manufacturing process places very specific demands on the
            starting slug. The aluminium must flow plastically and uniformly
            during extrusion, the dome must form without thinning, and the
            walls must be consistent enough to pass burst-pressure testing
            at 1.5× rated working pressure. A defect in the slug — an
            inclusion, an inconsistent grain, an out-of-spec dimension —
            becomes a defect in every can extruded from it.
          </p>

          <h3 className="text-xl font-bold text-[#173178] mt-8">
            Aerosol product categories we serve
          </h3>
          <p>
            Western Metal Industries supplies aluminium slugs to can
            manufacturers serving every major aerosol category:
          </p>
          <ul>
            <li>
              <strong>Personal care</strong> — body sprays, perfumes,
              deodorants, antiperspirants, hair sprays, hair mousses,
              shaving foams
            </li>
            <li>
              <strong>Pharmaceutical</strong> — metered-dose inhalers (MDIs)
              for respiratory medicines, topical anaesthetic sprays, antiseptic
              sprays
            </li>
            <li>
              <strong>Hygiene and sanitizers</strong> — alcohol-based hand
              sanitizers, surface disinfectants, fabric refreshers
            </li>
            <li>
              <strong>Household</strong> — air fresheners, insecticides, oven
              cleaners, furniture polish
            </li>
            <li>
              <strong>Food</strong> — whipped cream chargers, cooking sprays
              (in regions where aluminium is approved for food contact)
            </li>
            <li>
              <strong>Industrial and automotive</strong> — lubricant sprays,
              degreasers, paint sprays, contact cleaners
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#173178] mt-8">
            What aerosol can manufacturers ask of us
          </h3>
          <p>
            Aerosol can manufacturing is a high-volume, high-tolerance
            business. A modern impact extrusion press produces 150–250 cans
            per minute, running 24/7. Even a 0.5% defect rate becomes
            thousands of rejected cans per shift. That's why the slug
            specification is so unforgiving:
          </p>
          <ul>
            <li>
              Diameter tolerance within ±0.1 mm — to fit the extrusion die
              without play or jamming
            </li>
            <li>
              Thickness tolerance within ±0.05 mm — to produce consistent can
              wall thickness
            </li>
            <li>
              Uniform Brinell hardness across the slug — to extrude evenly
            </li>
            <li>
              Surface finish free of pits and rolling marks — to take
              downstream lacquering and printing
            </li>
            <li>
              Lot traceability — for regulatory compliance in pharma and
              export markets
            </li>
          </ul>
          <p>
            Our integrated manufacturing process — melting, casting, rolling,
            punching, annealing and finishing all under one roof at our
            Hadapsar and Bhandgaon plants — gives us the consistency our
            aerosol can customers depend on for uninterrupted production.
          </p>
        </div>
      </Section>

      <Section
        alt
        title="What we deliver to aerosol can manufacturers"
        subtitle="A short list, but every item matters in high-speed extrusion."
      >
        <FeatureGrid
          items={[
            {
              icon: "🎯",
              title: "Custom dome profiles",
              description:
                "Flat, conical, spherical and bespoke taper profiles produced from your can drawings.",
            },
            {
              icon: "💎",
              title: "99.7% pure aluminium",
              description:
                "EN AW-1050A primary aluminium — never secondary stock. Full chemical certificates per batch.",
            },
            {
              icon: "📏",
              title: "Tight dimensional tolerance",
              description:
                "Diameter ±0.1 mm, thickness ±0.05 mm. Engineered for high-speed extrusion lines.",
            },
            {
              icon: "🎨",
              title: "Decoration-ready surface",
              description:
                "Vibrated and tumbled finishes prepared for downstream lacquering, printing and anodising.",
            },
            {
              icon: "🌍",
              title: "Export-ready packaging",
              description:
                "VCI-lined cartons, fumigated pallets — surface protected through sea-freight transit.",
            },
            {
              icon: "📋",
              title: "Pharma-grade documentation",
              description:
                "Full lot traceability and chemical certificates required for pharmaceutical aerosol applications.",
            },
          ]}
        />
      </Section>

      <Section
        title="Recommended product"
        subtitle="For aerosol can manufacture, specify our Domed & Taper slugs."
      >
        <Link
          href="/products/aluminium-slugs-domed-taper"
          className="block p-8 rounded-lg border-2 border-[#173178] bg-blue-50 hover:bg-blue-100 transition"
        >
          <h3 className="text-2xl font-bold text-[#173178] mb-2">
            Domed & Taper Slugs →
          </h3>
          <p className="text-slate-700">
            Pre-shaped aluminium slugs engineered for monobloc aerosol can
            production. 9.8 – 135.8 mm diameter, custom dome profiles
            available. EN AW-1050A grade, 99.7% pure.
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

