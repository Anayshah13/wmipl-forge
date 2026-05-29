// app/applications/food-packaging/page.tsx
// Targets: "aluminium slugs for food packaging", "food-grade aluminium containers",
// "aluminium can food packaging India"

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

const PAGE_URL = `${SITE_URL}/applications/food-packaging`;

export const metadata: Metadata = {
  title:
    "Aluminium Slugs for Food Packaging | Food-Grade Aluminium Containers India",
  description:
    "Food-grade aluminium slugs for impact-extruded food containers — coffee cans, infant formula tins, food powder containers, condiment tubes. 99.7% pure aluminium with food-safe lubrication. Manufactured in India.",
  keywords: [
    "aluminium slugs for food packaging",
    "food-grade aluminium slugs",
    "aluminium food container manufacturer",
    "coffee can aluminium slugs",
    "infant formula can material",
    "food packaging aluminium India",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Aluminium Slugs for Food Packaging | Western Metal Industries",
    description:
      "Food-grade aluminium slugs for impact-extruded food containers and packaging.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "Is aluminium safe for direct food contact?",
    a: "Aluminium has been used safely for food packaging for over a century. Modern food-grade aluminium containers either rely on an internal protective lacquer (epoxy, phenolic, or BPA-NI alternatives) for acidic or salty foods, or are used uncoated for dry foods (coffee, milk powder, infant formula). The choice depends on the specific food chemistry. Our slugs are supplied with food-safe lubricants compatible with downstream lacquering operations.",
  },
  {
    q: "What food products are packaged in impact-extruded aluminium containers?",
    a: "Common food products in impact-extruded aluminium containers include coffee (whole bean and ground), infant formula and follow-on milk powders, premium tea, spices, food supplements, condensed milk, concentrated pastes (in collapsible tubes), confectionery and high-end gift packaging. The full aluminium barrier protects against oxygen, moisture and light — extending shelf life.",
  },
  {
    q: "What aluminium purity is used for food-grade slugs?",
    a: "We use 99.7% pure primary aluminium (EN AW-1050A or EN AW-1070A) for all food-grade slugs. The high purity ensures no migration of trace elements into the food product and is compatible with both lacquered and uncoated food container designs.",
  },
  {
    q: "Do food-grade aluminium containers need an internal coating?",
    a: "It depends on the food. Dry, non-acidic foods (coffee, milk powder, dry spices) often use uncoated aluminium. Acidic, salty or fatty foods typically require an internal food-safe lacquer to prevent any interaction between the aluminium and the food. The container manufacturer applies the coating after impact extrusion; the slug must be supplied with a surface finish compatible with downstream coating.",
  },
  {
    q: "Are aluminium food containers recyclable?",
    a: "Yes. Aluminium is infinitely recyclable with no loss of properties. An aluminium food container is one of the most recyclable food packaging formats — significantly more sustainable than laminated cartons or composite plastic containers, which are difficult or impossible to recycle in most municipal streams.",
  },
];

export default function FoodPackagingApplicationPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Applications", url: `${SITE_URL}/applications` },
    { name: "Food Packaging", url: PAGE_URL },
  ]);

  return (
    <>
      <JsonLd
        data={[ORGANIZATION_JSONLD, breadcrumbs, faqJsonLd(faqs)]}
      />

      <PageHero
        eyebrow="Application"
        title="Aluminium Slugs for Food Packaging"
        subtitle="From premium coffee cans and infant formula tins to concentrated food pastes — food-grade aluminium slugs engineered for the shelf life and safety standards demanded by global food brands."
        image="/wocenter.png"
        imageAlt="Food-grade aluminium containers and packaging from Western Metal Industries slugs"
      />

      <Section>
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Applications" },
            { name: "Food Packaging" },
          ]}
        />

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#173178] mt-0">
            Why aluminium is the format of choice for premium food packaging
          </h2>
          <p>
            Food packaging has three jobs: protect the product, communicate
            the brand and minimise environmental impact. Aluminium is one of
            the few materials that does all three well. The full barrier
            against oxygen, light and moisture extends shelf life
            dramatically — typically two to three times longer than plastic
            or laminated formats. The metal surface takes high-end printing
            and lacquering for premium brand presentation. And the material
            is infinitely recyclable in a way that composite formats simply
            are not.
          </p>
          <p>
            Impact-extruded aluminium food containers — made from our plain
            slugs — combine these benefits with the structural advantage of
            a seamless, one-piece construction. There are no side seams or
            base seams to fail, no welds to corrode, no laminate layers to
            delaminate over the product's shelf life.
          </p>

          <h3 className="text-xl font-bold text-[#173178] mt-8">
            Food categories packaged in impact-extruded aluminium
          </h3>
          <ul>
            <li>
              <strong>Coffee</strong> — whole bean and ground coffee cans
              where oxygen exclusion is critical to flavour retention
            </li>
            <li>
              <strong>Infant formula and follow-on milk powders</strong> —
              regulatory-grade packaging where moisture and oxygen barrier
              are non-negotiable
            </li>
            <li>
              <strong>Premium tea</strong> — specialty teas where light
              protection preserves the leaf
            </li>
            <li>
              <strong>Food supplements and protein powders</strong> — the
              same barrier requirements as infant formula
            </li>
            <li>
              <strong>Spices and herbs</strong> — premium-grade containers
              that prevent flavour loss
            </li>
            <li>
              <strong>Concentrated food pastes</strong> — tomato concentrate,
              anchovy paste, wasabi, harissa, in collapsible aluminium tubes
            </li>
            <li>
              <strong>Confectionery and gifting</strong> — high-end
              chocolate, biscuit and sweet packaging
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#173178] mt-8">
            What food packaging applications demand from the slug
          </h3>
          <p>
            Food packaging is a tightly regulated industry — particularly
            for infant formula and other categories under direct
            food-safety scrutiny. The slug specification must support both
            the food-safety regime and the commercial requirements of
            high-speed container production:
          </p>
          <ul>
            <li>
              99.7% pure primary aluminium with full chemical traceability
              for regulatory documentation
            </li>
            <li>
              Food-safe lubricants applied pre-extrusion (eco-friendly,
              compatible with downstream food contact)
            </li>
            <li>
              Surface finish prepared for internal lacquering — critical for
              the food-contact surface inside the finished container
            </li>
            <li>
              Dimensional consistency for high-speed extrusion lines
              producing thousands of containers per hour
            </li>
            <li>
              Batch documentation supporting food-safety audits (FSSAI,
              HACCP, BRC, FSSC 22000 and similar)
            </li>
          </ul>
        </div>
      </Section>

      <Section
        alt
        title="What we deliver to food packaging manufacturers"
      >
        <FeatureGrid
          items={[
            {
              icon: "🌾",
              title: "Food-grade purity",
              description:
                "99.7% pure primary aluminium — no recycled content. Full chemical certificates supporting food-safety audits.",
            },
            {
              icon: "🛢️",
              title: "Food-safe lubrication",
              description:
                "Eco-friendly food-safe lubricants applied pre-extrusion — compatible with all major food container coatings.",
            },
            {
              icon: "🎨",
              title: "Coating-ready surface",
              description:
                "Surface finish prepared for downstream internal lacquering — critical for acidic, salty or fatty food contact.",
            },
            {
              icon: "📋",
              title: "Audit-ready documentation",
              description:
                "ISO 9001:2015 quality system plus batch traceability supporting FSSAI, HACCP, BRC and FSSC 22000 audits at customer facilities.",
            },
            {
              icon: "♻️",
              title: "Sustainable supply",
              description:
                "ISO 14001:2015 environmental management plus 1.32 MW solar power — supports brand-owner sustainability commitments.",
            },
            {
              icon: "🌍",
              title: "Global supply chains",
              description:
                "Serving Indian and export food packaging customers — slugs reach can manufacturers across Asia, Africa, Middle East and Oceania.",
            },
          ]}
        />
      </Section>

      <Section
        title="Recommended product"
        subtitle="For impact-extruded food containers, specify our Plain slugs."
      >
        <Link
          href="/products/aluminium-slugs-plain-without-center-hole"
          className="block p-8 rounded-lg border-2 border-[#173178] bg-blue-50 hover:bg-blue-100 transition"
        >
          <h3 className="text-2xl font-bold text-[#173178] mb-2">
            Plain Slugs (Without Center Hole) →
          </h3>
          <p className="text-slate-700">
            Plain aluminium slugs for impact extrusion of seamless food
            containers. 9.8 – 135.8 mm diameter, EN AW-1050A grade, 99.7%
            pure, with food-safe lubrication available.
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

