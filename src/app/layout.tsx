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
  // Explicit contact point for improved rich snippets
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-20-26870164",
    contactType: "customer service",
    email: "western@westernaluminium.com",
    areaServed: "Worldwide"
  },
  slogan: "India's #1 Aluminium Slug Manufacturer",
  sameAs: [
    "https://www.linkedin.com/company/western-metal-industries-pvt.ltd"
  ]
};

// Breadcrumb structured data for main navigation routes
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.westernaluminium.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: "https://www.westernaluminium.com/products"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contact",
      item: "https://www.westernaluminium.com/contact"
    }
  ]
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
    // Keyword-rich default title and template
    default: "Western Metal Industries — Aluminium Slug Manufacturer Pune",
    template: "%s | Western Metal Industries — Aluminium Slug Manufacturer Pune",
  },

  // Compelling default meta description with keywords and CTA
  description:
    "Explore Western Metal Industries—India's leading aluminium slug manufacturer with 70% market share. ISO certified plain & domed slugs. Request a quote today!",

  keywords: [
    // Requested keywords
    "aluminium slug manufacturer India",
    "aluminium slug Pune",
    "impact extrusion blank",
    "collapsible tube slug",
    "aerosol can slug",
    "plain slug manufacturer",
    "domed slug supplier",
    "aluminium slug exporter India",
    "ISO certified aluminium manufacturer",
    // Clients & Marquee Suppliers
    "Cipla",
    "L'Oréal",
    "Fogg",
    "Sun Pharma",
    "Dr. Reddy's",
    "Park Avenue",
    "GSK",
    "Wild Stone",
    "Ranbaxy",
    "Vedanta",
    "NALCO",
    "Hindalco",
    "IndianOil",
    // Core product keywords
    "aluminium slug supplier India",
    "aluminium slugs manufacturer",
    "impact extrusion aluminium slugs",
    // Long-tail B2B keywords
    "WMIPL",
    "Western Metal Industries",
  ],

  authors: [{ name: "Western Metal Industries Pvt. Ltd." }],
  creator: "Western Metal Industries Pvt. Ltd.",
  publisher: "Western Metal Industries Pvt. Ltd.",

  // Full Open Graph tags
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.westernaluminium.com",
    siteName: "Western Metal Industries Pvt. Ltd.",
    title: "Western Metal Industries — Aluminium Slug Manufacturer Pune",
    description:
      "India's largest aluminium slug manufacturer with 70% market share. Supplying Cipla, L'Oréal, GSK, Sun Pharma and 50+ global brands. ISO certified.",
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

  // Twitter card meta tags
  twitter: {
    card: "summary_large_image",
    title: "Western Metal Industries — Aluminium Slug Manufacturer",
    description:
      "India's largest aluminium slug manufacturer. 70% market share. Plain, perforated & domed slugs. ISO certified. Exporting globally.",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Western Metal Industries — Aluminium Slug Manufacturer, Pune, India",
      },
    ],
  },

  robots: {
    // Ensures search engines will crawl and index the site
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
        {/* Performance hints: Preconnect and DNS prefetch for third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

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
        {/* Breadcrumb schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body>
        <Providers>
          {/* Semantic HTML landmark element */}
          <main aria-label="Main content">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

import { playfair, sourceSans, sourceSerif } from '@/lib/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${sourceSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
