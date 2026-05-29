// app/applications/page.tsx
// Index page for applications — links to all application landing pages.
// Targets: "aluminium slug applications", "impact extrusion applications India"

import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  PageHero,
  Section,
  CTABand,
  JsonLd,
} from "@/components/PageShell";
import {
  SITE_URL,
  ORGANIZATION_JSONLD,
  breadcrumbJsonLd,
} from "../../lib/seo";

export const metadata: Metadata = {
  title:
    "Aluminium Slug Applications | Aerosol, Tubes, Food, Automotive | WMI India",
  description:
    "Industries we serve with aluminium slugs: aerosol cans, collapsible tubes, food packaging, automotive impact extrusion. India's largest aluminium slug manufacturer.",
  keywords: [
    "aluminium slug applications",
    "impact extrusion applications India",
    "aluminium slugs uses",
    "aerosol cans manufacturer",
    "collapsible tube manufacturer India",
  ],
  alternates: { canonical: `${SITE_URL}/applications` },
};

const apps = [
  {
    slug: "aerosol-cans",
    title: "Aerosol Cans",
    description:
      "Monobloc aerosol cans for perfumes, deodorants, sanitizers, hair sprays, pharma sprays.",
    image: "/domed.png",
  },
  {
    slug: "collapsible-tubes",
    title: "Collapsible Tubes",
    description:
      "Pharmaceutical ointments, toothpaste, hair colour, cosmetic creams, industrial adhesives.",
    image: "/wchole.png",
  },
  {
    slug: "food-packaging",
    title: "Food Packaging",
    description:
      "Coffee cans, infant formula tins, food powder containers, concentrated food pastes.",
    image: "/wocenter.png",
  },
  {
    slug: "automotive-impact-extrusion",
    title: "Automotive Impact Extrusion",
    description:
      "Shock absorber tubes, fuel filter housings, airbag inflators, EV battery cells, capacitor cans.",
    image: "/wocenter.png",
  },
];

export default function ApplicationsIndex() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Applications", url: `${SITE_URL}/applications` },
  ]);

  return (
    <>
      <JsonLd data={[ORGANIZATION_JSONLD, breadcrumbs]} />

      <PageHero
        eyebrow="Industries We Serve"
        title="Aluminium Slug Applications"
        subtitle="From perfume bottles to EV battery cells — our aluminium slugs are the starting blank for the impact-extruded components our customers manufacture across four major industries."
        image="/cans.png"
        imageAlt="Aluminium slug applications across industries"
      />

      <Section>
        <Breadcrumbs
          trail={[{ name: "Home", href: "/" }, { name: "Applications" }]}
        />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/applications/${app.slug}`}
              className="group block rounded-lg overflow-hidden border border-slate-200 bg-white hover:border-[#173178] hover:shadow-xl transition"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#173178] mb-3 group-hover:underline">
                  {app.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {app.description}
                </p>
                <span className="inline-flex items-center text-[#173178] font-semibold">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
