// app/products/page.tsx
// Products index — landing page that links to all product variants.
// Targets "aluminium slug products", "aluminium slug types", "aluminium slug variants India".

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumbs,
  PageHero,
  Section,
  CTABand,
  JsonLd,
} from "../components/PageShell";
import {
  SITE_URL,
  ORGANIZATION_JSONLD,
  breadcrumbJsonLd,
} from "../../lib/seo";

export const metadata: Metadata = {
  title:
    "Aluminium Slug Products | Plain, Perforated, Domed Slugs | Western Metal Industries",
  description:
    "Complete range of aluminium slugs manufactured in India — plain (without center hole), perforated (with center hole), and domed/taper slugs. 9.8mm to 135.8mm diameter, 99.7% pure aluminium. Largest manufacturer in India since 1978.",
  keywords: [
    "aluminium slugs India",
    "aluminium slug manufacturer",
    "aluminium slug types",
    "plain aluminium slugs",
    "perforated aluminium slugs",
    "domed aluminium slugs",
    "taper aluminium slugs",
    "aluminium slug supplier India",
    "aluminium slugs Pune",
  ],
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: "Aluminium Slug Products | Western Metal Industries",
    description:
      "Plain, perforated and domed aluminium slugs from India's largest manufacturer. 70% market share, ISO certified, exporting globally.",
    url: `${SITE_URL}/products`,
    type: "website",
    images: [`${SITE_URL}/wocenter.png`],
  },
};

const products = [
  {
    slug: "aluminium-slugs-plain-without-center-hole",
    name: "Plain Slugs (Without Center Hole)",
    short: "For rigid containers in food, pesticide and electronics industries.",
    image: "/wocenter.png",
    diameter: "9.8 – 135.8 mm",
    thickness: "2 – 15.4 mm",
    applications: ["Rigid containers", "Food packaging", "Pesticide containers"],
  },
  {
    slug: "aluminium-slugs-perforated-with-center-hole",
    name: "Perforated Slugs (With Center Hole)",
    short:
      "For collapsible tubes used in pharmaceutical and cosmetic industries.",
    image: "/wchole.png",
    diameter: "12.5 – 135.8 mm",
    thickness: "2 – 7 mm",
    applications: ["Collapsible tubes", "Pharma packaging", "Cosmetic tubes"],
  },
  {
    slug: "aluminium-slugs-domed-taper",
    name: "Domed / Taper Slugs",
    short:
      "Specialized shapes for monobloc aerosol cans — perfumes, deodorants, sanitizers.",
    image: "/domed.png",
    diameter: "9.8 – 135.8 mm",
    thickness: "2 – 15.4 mm",
    applications: ["Aerosol cans", "Deodorant cans", "Perfume bottles"],
  },
];

export default function ProductsIndex() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Products", url: `${SITE_URL}/products` },
  ]);

  return (
    <>
      <JsonLd data={[ORGANIZATION_JSONLD, breadcrumbs]} />

      <PageHero
        eyebrow="Product Portfolio"
        title="Aluminium Slug Products"
        subtitle="India's most comprehensive range of aluminium slugs — manufactured to international standards (EN 570, EN 573-3, ISO 6506-4) from 99.7% pure aluminium. Three core variants engineered for impact extrusion across pharmaceutical, food, cosmetic, aerosol and industrial applications."
        image="/wocenter.png"
        imageAlt="Aluminium slugs product range — Western Metal Industries Pune India"
      />

      <Section
        title="Our Aluminium Slug Range"
        subtitle="From 9.8 mm to 135.8 mm diameter — built to your specifications, delivered to 50+ countries."
      >
        <Breadcrumbs
          trail={[{ name: "Home", href: "/" }, { name: "Products" }]}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group block rounded-lg overflow-hidden border border-slate-200 bg-white hover:border-[#173178] hover:shadow-xl transition"
            >
              <div className="relative aspect-[4/3] bg-slate-50">
                <Image
                  src={p.image}
                  alt={`${p.name} — Western Metal Industries aluminium slug product`}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#173178] mb-2 group-hover:underline">
                  {p.name}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {p.short}
                </p>
                <dl className="text-sm space-y-1 mb-4">
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Diameter:</dt>
                    <dd className="text-slate-900 font-medium">
                      {p.diameter}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Thickness:</dt>
                    <dd className="text-slate-900 font-medium">
                      {p.thickness}
                    </dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.applications.map((a) => (
                    <span
                      key={a}
                      className="text-xs px-2 py-1 bg-blue-50 text-[#173178] rounded"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-[#173178] font-semibold text-sm">
                  View specifications →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        alt
        title="Why specify Western Metal Industries aluminium slugs"
        subtitle="Three decades as India's leading aluminium slug manufacturer — backed by ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certifications."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              k: "70%",
              v: "Market share in India's aluminium slug industry",
            },
            { k: "35,000 MT", v: "Installed annual production capacity" },
            { k: "99.7%", v: "Aluminium purity (EN AW 1070 / 1050)" },
            { k: "50+", v: "Export destinations served worldwide" },
          ].map((stat) => (
            <div
              key={stat.k}
              className="text-center p-6 bg-white rounded-lg border border-slate-200"
            >
              <div className="text-4xl font-bold text-[#173178] mb-2">
                {stat.k}
              </div>
              <div className="text-slate-600 text-sm">{stat.v}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
