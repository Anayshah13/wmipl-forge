// ============================================================
// FILE: app/layout.tsx  (or wherever your root layout is)
// Drop this Metadata export at the top of the file.
// Requires Next.js 13+ App Router with Metadata API.
// ============================================================

import type { Metadata } from "next";

// ─── Primary site metadata ───────────────────────────────────
export const metadata: Metadata = {
  // ── Title ──────────────────────────────────────────────────
  title: {
    default: "Aluminium Slug Manufacturer India | Western Metal Industries",
    template: "%s | Western Metal Industries Pvt. Ltd.",
  },

  // ── Meta description (155 chars) ───────────────────────────
  description:
    "India's largest aluminium slug manufacturer with 70% market share. ISO-certified producer of pierced slugs, rigid slugs & domed slugs for aerosol, pharma & FMCG industries. Exporting to UAE, Saudi Arabia, South Africa & more.",

  // ── Canonical & base URL ───────────────────────────────────
  metadataBase: new URL("https://www.westernaluminium.com"),
  alternates: {
    canonical: "/",
  },

  // ── Keywords (used by Bing & niche B2B crawlers) ───────────
  keywords: [
    "aluminium slug manufacturer India",
    "aluminium slug exporter India",
    "aluminium slug Pune",
    "pierced aluminium slug",
    "rigid aluminium slug",
    "domed aluminium slug",
    "aluminium slug for aerosol cans",
    "aluminium slug for collapsible tubes",
    "aluminium slug for monobloc bottles",
    "EN 570 aluminium slug",
    "ISO 6506-4 aluminium slug",
    "ENAW-1070A aluminium slug",
    "aluminium circles manufacturer India",
    "aluminium strips manufacturer Pune",
    "impact extrusion slugs",
    "Western Metal Industries",
    "WMIPL",
  ],

  // ── Robots ─────────────────────────────────────────────────
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

  // ── Open Graph (LinkedIn, WhatsApp, Facebook) ──────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.westernaluminium.com",
    siteName: "Western Metal Industries Pvt. Ltd.",
    title: "Aluminium Slug Manufacturer India | Western Metal Industries",
    description:
      "India's largest aluminium slug manufacturer with 70% domestic market share. ISO 9001:2015 certified. Supplying to aerosol, pharma, FMCG & automotive sectors worldwide.",
    images: [
      {
        url: "/og-image.jpg",            // place a 1200×630 image in /public/
        width: 1200,
        height: 630,
        alt: "Western Metal Industries — Aluminium Slug Manufacturer, Pune India",
      },
    ],
  },

  // ── Twitter / X card ───────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Aluminium Slug Manufacturer India | Western Metal Industries",
    description:
      "70% market share. ISO-certified. Aluminium slugs for aerosol cans, collapsible tubes & monobloc bottles. Exporting to UAE, KSA, South Africa, NZ & more.",
    images: ["/og-image.jpg"],
  },

  // ── Verification (fill in once Search Console / Bing WMT confirms) ──
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // yandex: "REPLACE_WITH_YANDEX_TOKEN",   // optional
    // bing: handled via BingSiteAuth.xml or meta tag separately
  },

  // ── App / PWA ──────────────────────────────────────────────
  applicationName: "Western Metal Industries",
  authors: [{ name: "Western Metal Industries Pvt. Ltd.", url: "https://www.westernaluminium.com" }],
  creator: "Western Metal Industries Pvt. Ltd.",
  publisher: "Western Metal Industries Pvt. Ltd.",

  // ── Geo tags (helps local & regional B2B crawlers) ─────────
  // Next.js doesn't have a built-in field; add via <head> in layout (see below)
};


// ============================================================
// JSON-LD STRUCTURED DATA
// Add these inside your root layout's <head> using <Script> or
// directly in the <head> JSX as <script type="application/ld+json">
// ============================================================

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation"],
  "@id": "https://www.westernaluminium.com/#organization",
  "name": "Western Metal Industries Pvt. Ltd.",
  "alternateName": ["WMIPL", "Western Aluminium", "Western Metal Industries"],
  "url": "https://www.westernaluminium.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.westernaluminium.com/logo2.png",
    "width": 400,
    "height": 100
  },
  "image": "https://www.westernaluminium.com/fact1.png",
  "description": "India's largest manufacturer of aluminium slugs with 70% domestic market share. Established in 1978, WMIPL produces pierced, rigid, and domed aluminium slugs for aerosol, pharma, FMCG, and automotive industries.",
  "foundingDate": "1978",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 400
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "251/1 A & B, Hadapsar Industrial Estate",
    "addressLocality": "Hadapsar, Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411013",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "areaServed": ["IN", "AE", "SA", "ZA", "NZ", "BD"],
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  ],
  "sameAs": [
    "https://www.indiamart.com/western-metal-industries-private-limited/",
    "https://www.indiamart.com/westernmetal-industries/",
    "https://www.alcirclebiz.com/profile/western-metal-industries-pvtltd-home",
    "https://www.tradeindia.com/western-metal-industries-pvt-ltd-412393/",
    "https://www.exportersindia.com/westernmetal/"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "ISO 9001:2015"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "ISO 14001:2015"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "ISO 45001:2018"
    }
  ],
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "South Africa" },
    { "@type": "Country", "name": "New Zealand" },
    { "@type": "Country", "name": "Bangladesh" }
  ]
};

export const manufacturerSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.westernaluminium.com/#localbusiness",
  "name": "Western Metal Industries Pvt. Ltd.",
  "image": "https://www.westernaluminium.com/hadapsar.jpg",
  "priceRange": "Contact for quote",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "251/1 A & B, Hadapsar Industrial Estate",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411013",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5073,
    "longitude": 73.9390
  },
  "url": "https://www.westernaluminium.com",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  }
};

// ── Product schemas (one per slug type) ──────────────────────

export const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aluminium Slug Without Centre Hole (Plain Slug)",
    "description": "High-purity 99.7% aluminium plain slugs (rigid slugs) for impact extrusion of rigid containers. Used in food, pesticide, electronics, and aerosol industries. Conforms to EN 570, EN 573-3, ISO 6506-4 standards.",
    "image": "https://www.westernaluminium.com/wocenter.png",
    "brand": {
      "@type": "Brand",
      "name": "Western Metal Industries"
    },
    "manufacturer": {
      "@id": "https://www.westernaluminium.com/#organization"
    },
    "material": "Aluminium alloy ENAW-1050A / ENAW-1070A",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Diameter range", "value": "9.8 mm – 135.8 mm" },
      { "@type": "PropertyValue", "name": "Thickness range", "value": "2 mm – 15.4 mm" },
      { "@type": "PropertyValue", "name": "Standard", "value": "EN 570, EN 573-3, ISO 6506-4" },
      { "@type": "PropertyValue", "name": "Surface finish", "value": "Plain / Vibrated" },
      { "@type": "PropertyValue", "name": "Purity", "value": "99.7% minimum aluminium" }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@id": "https://www.westernaluminium.com/#organization" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aluminium Slug With Centre Hole (Pierced Slug)",
    "description": "Precision-pierced aluminium slugs for collapsible tube manufacturing in pharmaceutical and cosmetic industries. Tight tolerances for hygienic, non-toxic, tamper-evident tubes.",
    "image": "https://www.westernaluminium.com/wchole.png",
    "brand": { "@type": "Brand", "name": "Western Metal Industries" },
    "manufacturer": { "@id": "https://www.westernaluminium.com/#organization" },
    "material": "Aluminium alloy ENAW-1070A",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Diameter range", "value": "12.5 mm – 135.8 mm" },
      { "@type": "PropertyValue", "name": "Thickness range", "value": "2 mm – 7 mm" },
      { "@type": "PropertyValue", "name": "Standard", "value": "EN 570, EN 573-3, ISO 6506-4" }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@id": "https://www.westernaluminium.com/#organization" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Domed / Taper Aluminium Slug (Monobloc Aerosol Slug)",
    "description": "Specialised domed and taper aluminium slugs engineered for monobloc aerosol can manufacturing. Used for perfumes, deodorants, and sanitizers. High-pressure integrity for pressurized products.",
    "image": "https://www.westernaluminium.com/domed.png",
    "brand": { "@type": "Brand", "name": "Western Metal Industries" },
    "manufacturer": { "@id": "https://www.westernaluminium.com/#organization" },
    "material": "Aluminium alloy ENAW-1070A",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Diameter range", "value": "9.8 mm – 135.8 mm" },
      { "@type": "PropertyValue", "name": "Thickness range", "value": "2 mm – 15.4 mm" },
      { "@type": "PropertyValue", "name": "Application", "value": "Monobloc aerosol cans, perfume bottles, deodorant cans" }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@id": "https://www.westernaluminium.com/#organization" }
    }
  }
];

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.westernaluminium.com"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an aluminium slug?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An aluminium slug is a precisely cut disc of high-purity aluminium used as the starting material for impact extrusion processes. It is formed into finished products such as aerosol cans, collapsible tubes, monobloc bottles, and capacitor housings."
      }
    },
    {
      "@type": "Question",
      "name": "What aluminium alloys does Western Metal Industries use for slugs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use 99.7% pure aluminium conforming to ENAW-1070A for collapsible tubes and ENAW-1050A for aerosol cans and rigid containers. All slugs meet EN 570, EN 573-3, and ISO 6506-4 standards."
      }
    },
    {
      "@type": "Question",
      "name": "What is the diameter and thickness range available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our plain and domed slugs range from 9.8 mm to 135.8 mm in diameter and 2 mm to 15.4 mm in thickness. Pierced (centre-hole) slugs range from 12.5 mm to 135.8 mm diameter and 2 mm to 7 mm thickness."
      }
    },
    {
      "@type": "Question",
      "name": "Does Western Metal Industries export aluminium slugs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We are a registered export house and supply aluminium slugs to the UAE, Saudi Arabia, South Africa, New Zealand, Bangladesh, and other countries worldwide."
      }
    },
    {
      "@type": "Question",
      "name": "What certifications does Western Metal Industries hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Western Metal Industries Pvt. Ltd. is certified to ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health & Safety)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the installed production capacity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our total installed capacity is 35,000 MT per annum across two manufacturing plants located at Hadapsar, Pune and Bhandgaon (approximately 50 km from Pune on the Pune–Solapur highway)."
      }
    }
  ]
};


// ============================================================
// HOW TO USE IN app/layout.tsx
// ============================================================
//
// import Script from "next/script";
// import { organizationSchema, manufacturerSchema, productSchemas, faqSchema, breadcrumbSchema } from "./seo-schemas"; // adjust path
//
// export { metadata } from "./seo-schemas";
//
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Geo tags — no native Next.js Metadata field */}
//         <meta name="geo.region" content="IN-MH" />
//         <meta name="geo.placename" content="Pune, Maharashtra, India" />
//         <meta name="geo.position" content="18.5073;73.9390" />
//         <meta name="ICBM" content="18.5073, 73.9390" />
//
//         {/* JSON-LD blocks */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturerSchema) }}
//         />
//         {productSchemas.map((schema, i) => (
//           <script
//             key={i}
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//           />
//         ))}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//         />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
