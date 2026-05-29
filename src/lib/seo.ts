import type { Metadata } from "next";

export const SITE_URL = "https://www.westernaluminium.com";
export const SITE_NAME = "Western Metal Industries Pvt. Ltd.";
export const SITE_SHORT = "Western Metal Industries";
/** Matches on-page copy (Hero, About, Why WMIPL). */
export const MARKET_SHARE = "75%";

export const CORE_KEYWORDS = [
  "aluminium slugs",
  "aluminum slugs",
  "aluminium slugs India",
  "aluminium slug manufacturer India",
  "aluminium slug supplier India",
  "aluminium slugs Pune",
  "aluminium slugs Mumbai",
  "aluminium India",
  "aluminium slug exporter India",
  "plain aluminium slugs",
  "perforated aluminium slugs",
  "domed aluminium slugs",
  "impact extrusion slugs",
  "aluminium slug Pune Maharashtra",
  "WMIPL",
  "Western Metal Industries",
] as const;

const OG_IMAGE = "/og-image.jpg";

export type BreadcrumbItem = { name: string; url: string };
export type FaqItem = { q: string; a: string };

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = OG_IMAGE,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const canonical =
    path === "/" ? SITE_URL : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const mergedKeywords = [...new Set([...CORE_KEYWORDS, ...keywords])];

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${SITE_SHORT}`,
      description,
      url: canonical,
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${SITE_SHORT} — aluminium slug manufacturer, Pune, India`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT}`,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Western Metal Industries — Aluminium Slug Manufacturer Pune",
    template: "%s | Western Metal Industries — Aluminium Slug Manufacturer Pune",
  },
  description: `India's leading aluminium slug manufacturer (${MARKET_SHARE} domestic market share). ISO-certified plain, perforated & domed slugs from Pune — supplying Mumbai, India & 50+ export markets. Request a quote.`,
  keywords: [...CORE_KEYWORDS],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Western Metal Industries — Aluminium Slug Manufacturer Pune",
    description: `India's largest aluminium slug manufacturer. ${MARKET_SHARE} market share. Plain, perforated & domed slugs. ISO 9001 certified. Pune factory; supplies Mumbai & exports worldwide.`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Western Metal Industries — aluminium slugs manufacturer Pune India",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Metal Industries — Aluminium Slug Manufacturer",
    description: `Plain, perforated & domed aluminium slugs. ${MARKET_SHARE} India market share. ISO certified. Pune manufacturing; Mumbai & global delivery.`,
    images: [{ url: OG_IMAGE, alt: "Western Metal Industries — aluminium slugs India" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  category: "manufacturing",
  icons: {
    icon: "/blue_bold.png",
    shortcut: "/blue_bold.png",
    apple: "/blue_bold.png",
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["WMIPL", "Western Aluminium", "Western Metal Industries"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 200,
    height: 60,
  },
  image: `${SITE_URL}/og-image.jpg`,
  description: `India's largest manufacturer of aluminium slugs with ${MARKET_SHARE} domestic market share. Plain, perforated and domed aluminium slugs for aerosol, pharmaceutical, cosmetic, food packaging and automotive impact extrusion. ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified. Founded 1978.`,
  foundingDate: "1978",
  slogan: "India's #1 Aluminium Slug Manufacturer",
  telephone: "+91-20-26870164",
  email: "western@westernaluminium.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "251/1 A, B Hadapsar Industrial Estate",
    addressLocality: "Hadapsar, Pune",
    addressRegion: "Maharashtra",
    postalCode: "411013",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5018,
    longitude: 73.9252,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-20-26870164",
    contactType: "customer service",
    email: "western@westernaluminium.com",
    areaServed: ["IN", "Worldwide"],
    availableLanguage: ["English", "Hindi"],
  },
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "AdministrativeArea", name: "Maharashtra" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Bangladesh" },
    { "@type": "Country", name: "South Africa" },
    { "@type": "Country", name: "New Zealand" },
  ],
  knowsAbout: [
    "Aluminium slug manufacturing",
    "Aluminium slugs India",
    "Impact extrusion blanks",
    "Plain aluminium slugs",
    "Perforated aluminium slugs",
    "Domed aluminium slugs",
    "Aerosol can slugs",
    "Collapsible tube slugs",
    "Aluminium packaging",
  ],
  hasCredential: [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ISO 45001:2018",
    "One-Star Export House",
  ],
  sameAs: [
    "https://www.linkedin.com/company/western-metal-industries-pvt.ltd",
  ],
};

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Official website of Western Metal Industries — India's largest aluminium slug manufacturer in Pune, supplying Mumbai, India and export markets.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

export const HOME_PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Aluminium Slugs",
  description:
    "Precision-engineered aluminium slugs for impact extrusion: plain (without center hole), perforated (with center hole), and domed/taper for monobloc aerosol cans. Diameter 9.8–135.8 mm. 99.7% pure aluminium. Manufactured in Pune, India.",
  brand: { "@type": "Brand", name: "Western Metal Industries" },
  manufacturer: { "@id": `${SITE_URL}/#organization` },
  material: "99.7% pure aluminium (EN AW-1070A / EN AW-1050A)",
  category: "Industrial Aluminium Components",
  countryOfOrigin: "IN",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Purity", value: "99.7% pure aluminium" },
    { "@type": "PropertyValue", name: "Diameter range", value: "9.8 mm – 135.8 mm" },
    { "@type": "PropertyValue", name: "Thickness range", value: "2 mm – 15.4 mm" },
    { "@type": "PropertyValue", name: "Variants", value: "Plain, Perforated, Domed / Taper" },
    { "@type": "PropertyValue", name: "Manufacturing location", value: "Pune, Maharashtra, India" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    areaServed: ["India", "Mumbai", "Pune", "Worldwide"],
    priceCurrency: "INR",
    seller: { "@id": `${SITE_URL}/#organization` },
  },
};

export const HOME_FAQS: FaqItem[] = [
  {
    q: "Who is the largest aluminium slug manufacturer in India?",
    a: `Western Metal Industries Pvt. Ltd. (WMIPL) in Pune, Maharashtra, is India's largest aluminium slug manufacturer with approximately ${MARKET_SHARE} domestic market share, producing plain, perforated and domed slugs since 1978.`,
  },
  {
    q: "Where can I buy aluminium slugs in Pune or Mumbai?",
    a: "WMIPL manufactures aluminium slugs at Hadapsar Industrial Estate, Pune (411013), and supplies buyers across Pune, Mumbai, Maharashtra and pan-India, with export to 50+ countries.",
  },
  {
    q: "What types of aluminium slugs does WMIPL manufacture?",
    a: "We manufacture three variants: plain slugs without center hole (rigid containers and food packaging), perforated slugs with center hole (collapsible pharmaceutical and cosmetic tubes), and domed/taper slugs (monobloc aerosol cans).",
  },
  {
    q: "Are Western Metal Industries aluminium slugs ISO certified?",
    a: "Yes. Our facility is certified to ISO 9001:2015 (quality), ISO 14001:2015 (environment) and ISO 45001:2018 (occupational health & safety). Slugs conform to EN 570 and ISO 6506-4.",
  },
];

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export type ProductJsonLdInput = {
  name: string;
  description: string;
  image: string;
  url: string;
  sku?: string;
  category?: string;
  material?: string;
  diameterMin?: number;
  diameterMax?: number;
  thicknessMin?: number;
  thicknessMax?: number;
  applicationArea?: string[];
};

export function productJsonLd(input: ProductJsonLdInput) {
  const imageUrl = input.image.startsWith("http")
    ? input.image
    : `${SITE_URL}${input.image}`;

  const additionalProperty: Record<string, string>[] = [];

  if (input.diameterMin != null && input.diameterMax != null) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Diameter range",
      value: `${input.diameterMin} mm – ${input.diameterMax} mm`,
    });
  }

  if (input.thicknessMin != null && input.thicknessMax != null) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Thickness range",
      value: `${input.thicknessMin} mm – ${input.thicknessMax} mm`,
    });
  }

  if (input.material) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Material",
      value: input.material,
    });
  }

  if (input.applicationArea?.length) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Applications",
      value: input.applicationArea.join(", "),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    image: imageUrl,
    url: input.url,
    ...(input.sku ? { sku: input.sku } : {}),
    ...(input.category ? { category: input.category } : {}),
    brand: {
      "@type": "Brand",
      name: "Western Metal Industries",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    ...(additionalProperty.length > 0 ? { additionalProperty } : {}),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      areaServed: ["India", "Pune", "Mumbai"],
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

/** Static routes for sitemap generation. */
export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.75 },
  { path: "/why-us", changeFrequency: "monthly", priority: 0.75 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  {
    path: "/products/aluminium-slugs-plain-without-center-hole",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/products/aluminium-slugs-perforated-with-center-hole",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  { path: "/products/aluminium-slugs-domed-taper", changeFrequency: "monthly", priority: 0.9 },
  { path: "/applications", changeFrequency: "monthly", priority: 0.8 },
  { path: "/applications/aerosol-cans", changeFrequency: "monthly", priority: 0.8 },
  { path: "/applications/collapsible-tubes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/applications/food-packaging", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/applications/automotive-impact-extrusion",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/production-process", changeFrequency: "monthly", priority: 0.7 },
  { path: "/infrastructure", changeFrequency: "monthly", priority: 0.7 },
  { path: "/management", changeFrequency: "yearly", priority: 0.6 },
  { path: "/export", changeFrequency: "monthly", priority: 0.75 },
  { path: "/clients", changeFrequency: "monthly", priority: 0.65 },
  { path: "/csr", changeFrequency: "yearly", priority: 0.5 },
  { path: "/certificates", changeFrequency: "yearly", priority: 0.65 },
  { path: "/certifications", changeFrequency: "yearly", priority: 0.65 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.7 },
];
