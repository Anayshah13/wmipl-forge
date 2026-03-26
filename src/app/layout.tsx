import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// ─── Structured Data ────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization", "ManufacturingBusiness"],
  "name": "Western Metal Industries Pvt. Ltd.",
  "alternateName": ["WMIPL", "Western Aluminium", "Western Metal Industries"],
  "url": "https://www.westernaluminium.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.westernaluminium.com/logo.png",
    "width": 200,
    "height": 60
  },
  "image": "https://www.westernaluminium.com/og-image.jpg",
  "description": "India's largest manufacturer of aluminium slugs with 70% market share. Producing plain, perforated and domed aluminium slugs for aerosol, pharmaceutical, cosmetic and food packaging industries. ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified. Founded 1978.",
  "foundingDate": "1978",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 400,
    "unitText": "employees"
  },
  "telephone": "+91-20-26870164",
  "email": "western@westernaluminium.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "251/1 A, B Hadapsar Industrial Estate",
    "addressLocality": "Hadapsar, Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411013",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5018,
    "longitude": 73.9252
  },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Bangladesh" },
    { "@type": "Country", "name": "South Africa" },
    { "@type": "Country", "name": "New Zealand" }
  ],
  "knowsAbout": [
    "Aluminium Slug Manufacturing",
    "Impact Extrusion",
    "Aluminium Collapsible Tubes",
    "Monobloc Aerosol Cans",
    "Aluminium Packaging"
  ],
  "hasCredential": [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ISO 45001:2018",
    "One-Star Export House"
  ],
  "slogan": "India's #1 Aluminium Slug Manufacturer",
  "sameAs": []
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Aluminium Slugs",
  "description": "Precision-engineered aluminium slugs for impact extrusion. Available in three variants: plain (without center hole) for cans and bottles, perforated (with center hole) for collapsible pharmaceutical and cosmetic tubes, and domed/taper for monobloc aerosol cans. Diameter range 9.8mm to 135.8mm. 99.7% pure aluminium.",
  "brand": {
    "@type": "Brand",
    "name": "Western Metal Industries"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Western Metal Industries Pvt. Ltd.",
    "url": "https://www.westernaluminium.com"
  },
  "material": "99.7% pure aluminium",
  "category": "Industrial Aluminium Components",
  "countryOfOrigin": "IN",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Purity",
      "value": "99.7% pure aluminium"
    },
    {
      "@type": "PropertyValue",
      "name": "Diameter Range",
      "value": "9.8mm to 135.8mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Thickness Range",
      "value": "2mm to 15.4mm"
    },
    {
      "@type": "PropertyValue",
      "name": "Annual Capacity",
      "value": "35,000 MT"
    },
    {
      "@type": "PropertyValue",
      "name": "Variants",
      "value": "Without Center Hole (Plain), With Center Hole (Perforated), Domed / Taper"
    }
  ],
  "hasCertification": [
    {
      "@type": "Certification",
      "name": "ISO 9001:2015",
      "certificationStatus": "Active",
      "issuedBy": { "@type": "Organization", "name": "Bureau Veritas" }
    },
    {
      "@type": "Certification",
      "name": "ISO 14001:2015",
      "certificationStatus": "Active"
    },
    {
      "@type": "Certification",
      "name": "ISO 45001:2018",
      "certificationStatus": "Active"
    }
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "areaServed": "Worldwide",
    "priceCurrency": "INR",
    "businessFunction": "https://schema.org/Sell",
    "seller": {
      "@type": "Organization",
      "name": "Western Metal Industries Pvt. Ltd.",
      "url": "https://www.westernaluminium.com"
    }
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Western Metal Industries Pvt. Ltd.",
  "url": "https://www.westernaluminium.com",
  "description": "Official website of Western Metal Industries — India's largest aluminium slug manufacturer.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.westernaluminium.com/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://www.westernaluminium.com"),

  title: {
    // Keyword-first title for stronger ranking signal
    default: "Aluminium Slug Manufacturer India | Western Metal Industries",
    template: "%s | Western Metal Industries",
  },

  description:
    "Western Metal Industries — India's largest aluminium slug manufacturer with 70% market share. Plain, perforated & domed slugs for aerosol, pharma & cosmetic industries. ISO certified. Exporting since 1985.",

  keywords: [
    // Core product keywords
    "aluminium slug manufacturer India",
    "aluminium slug supplier India",
    "aluminium slug manufacturer Pune",
    "aluminium slugs manufacturer",
    "impact extrusion aluminium slugs",
    // Product variants
    "aluminium slug without center hole",
    "plain aluminium slugs",
    "aluminium slug with center hole",
    "perforated aluminium slugs",
    "domed aluminium slugs",
    "taper aluminium slugs",
    // Application keywords
    "aluminium slugs for aerosol cans",
    "aluminium slugs for pharmaceutical tubes",
    "aluminium slugs for cosmetic tubes",
    "aluminium collapsible tube slugs",
    "monobloc aerosol can slugs",
    // Quality/spec keywords
    "99.7 pure aluminium slugs",
    "ISO certified aluminium manufacturer",
    "high purity aluminium slugs",
    // Export/brand keywords
    "aluminium slug exporter India",
    "WMIPL",
    "Western Metal Industries",
    "Western Metal Industries Pune",
    // Long-tail B2B keywords
    "largest aluminium slug manufacturer India",
    "aluminium slug supplier UAE",
    "aluminium slug manufacturer 35000 MT capacity",
  ],

  authors: [{ name: "Western Metal Industries Pvt. Ltd." }],
  creator: "Western Metal Industries Pvt. Ltd.",
  publisher: "Western Metal Industries Pvt. Ltd.",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.westernaluminium.com",
    siteName: "Western Metal Industries Pvt. Ltd.",
    // Keyword-first OG title for social sharing
    title: "Aluminium Slug Manufacturer India | Western Metal Industries",
    description:
      "India's largest aluminium slug manufacturer with 70% market share. Supplying Cipla, L'Oréal, GSK, Sun Pharma and 50+ global brands. ISO certified. 45+ years of excellence from Pune.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Western Metal Industries — Aluminium Slug Manufacturer, Pune, India",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aluminium Slug Manufacturer India | Western Metal Industries",
    description:
      "India's largest aluminium slug manufacturer. 70% market share. Plain, perforated & domed slugs. ISO certified. Exporting globally since 1985.",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Western Metal Industries — Aluminium Slug Manufacturer, Pune, India",
      },
    ],
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

  alternates: {
    canonical: "https://www.westernaluminium.com",
  },

  category: "manufacturing",

  verification: {
    // Replace with your actual Google Search Console verification code
    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },

  icons: {
    icon: "/blue_bold.png",
    shortcut: "/blue_bold.png",
    apple: "/blue_bold.png",
  },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Organization schema — helps Google understand your business entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Product schema — enables rich product results in Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        {/* WebSite schema — enables Google Sitelinks search box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
