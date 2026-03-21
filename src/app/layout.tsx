import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "name": "Western Metal Industries Pvt. Ltd.",
  "alternateName": "WMIPL",
  "url": "https://www.westernaluminium.com",
  "logo": "https://www.westernaluminium.com/logo.png",
  "image": "https://www.westernaluminium.com/og-image.jpg",
  "description": "India's largest manufacturer of aluminium slugs with 70% market share. ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified. Founded 1978.",
  "foundingDate": "1978",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 400 },
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
  "areaServed": ["India","UAE","Saudi Arabia","Bangladesh","South Africa","New Zealand"],
  "hasCredential": ["ISO 9001:2015","ISO 14001:2015","ISO 45001:2018","One-Star Export House"],
  "sameAs": []
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Aluminium Slugs",
  "description": "Precision-engineered aluminium slugs for impact extrusion. Available without center hole, with center hole, and domed/taper variants. Diameter 9.8mm to 135.8mm. 99.7% pure aluminium.",
  "brand": { "@type": "Brand", "name": "Western Metal Industries" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Western Metal Industries Pvt. Ltd.",
    "url": "https://www.westernaluminium.com"
  },
  "material": "99.7% pure aluminium",
  "category": "Industrial Manufacturing Components",
  "countryOfOrigin": "IN",
  "hasCertification": [
    { "@type": "Certification", "name": "ISO 9001:2015", "certificationStatus": "Active" },
    { "@type": "Certification", "name": "ISO 14001:2015", "certificationStatus": "Active" },
    { "@type": "Certification", "name": "ISO 45001:2018", "certificationStatus": "Active" }
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "areaServed": "Worldwide",
    "seller": {
      "@type": "Organization",
      "name": "Western Metal Industries Pvt. Ltd."
    }
  }
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.westernaluminium.com'),
  title: {
    default: 'Western Metal Industries Pvt. Ltd. | Aluminium Slug Manufacturer India',
    template: '%s | Western Metal Industries'
  },
  description: "India's largest aluminium slug manufacturer commanding 70% market share. ISO 9001, 14001 & 45001 certified. Trusted by Cipla, L'Oréal, GSK & Sun Pharma. 45+ years of manufacturing excellence in Pune.",
  keywords: [
    'aluminium slug manufacturer India',
    'aluminium slug supplier',
    'impact extrusion aluminium slugs',
    'aluminium manufacturer Pune',
    'aluminium slug without center hole',
    'aluminium slug with center hole',
    'domed aluminium slugs',
    'WMIPL',
    'Western Metal Industries',
    'ISO certified aluminium manufacturer',
    'aluminium slug exporter India',
    '99.7 pure aluminium slugs'
  ],
  authors: [{ name: 'Western Metal Industries Pvt. Ltd.' }],
  creator: 'Western Metal Industries Pvt. Ltd.',
  publisher: 'Western Metal Industries Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.westernaluminium.com',
    siteName: 'Western Metal Industries Pvt. Ltd.',
    title: "Western Metal Industries | India's #1 Aluminium Slug Manufacturer",
    description: "India's largest aluminium slug manufacturer with 70% market share. Supplying Cipla, L'Oréal, GSK, Sun Pharma and 50+ global brands. ISO certified. 45+ years of excellence.",
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Western Metal Industries Pvt. Ltd. — Aluminium Slug Manufacturer Pune India'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Western Metal Industries | Aluminium Slug Manufacturer India',
    description: "India's largest aluminium slug manufacturer. 70% market share. ISO certified.",
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://www.westernaluminium.com'
  },
  category: 'manufacturing',
  verification: {
    google: 'ADD_GOOGLE_SEARCH_CONSOLE_CODE_HERE'
  },
  icons: {
    icon: '/blue_bold.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
