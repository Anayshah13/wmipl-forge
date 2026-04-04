// ============================================================
// FILE: app/seo-schemas.ts  (updated April 2026)
// Replace the organizationSchema and manufacturerSchema blocks
// in your existing seo-meta-tags.ts / seo-schemas.ts with
// the exports below. All other schemas remain unchanged.
// ============================================================

// ─── Organization schema (enriched with contacts) ─────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation"],
  "@id": "https://www.westernaluminium.com/#organization",
  "name": "Western Metal Industries Pvt. Ltd.",
  "alternateName": ["WMIPL", "Western Aluminium Industries", "Western Metal Industries"],
  "url": "https://www.westernaluminium.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.westernaluminium.com/logo2.png",
    "width": 400,
    "height": 100
  },
  "image": "https://www.westernaluminium.com/fact1.png",
  "description": "India's largest manufacturer of aluminium slugs with 70% domestic market share. Established in 1978, WMIPL produces pierced, rigid, and domed aluminium slugs for aerosol, pharma, FMCG, and automotive industries. ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified.",
  "foundingDate": "1978",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 400
  },

  // ── Primary address — Hadapsar Head Office ─────────────────
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "251/1 A & B, Hadapsar Industrial Estate",
    "addressLocality": "Hadapsar, Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411013",
    "addressCountry": "IN"
  },

  // ── Contact points ─────────────────────────────────────────
  "telephone": [
    "+91-20-26870164",
    "+91-20-26875054",
    "+91-20-29805054"
  ],
  "email": "western@westernaluminium.com",

  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-20-26870164",
      "contactType": "sales",
      "areaServed": ["IN", "AE", "SA", "ZA", "NZ", "BD"],
      "availableLanguage": ["English", "Hindi", "Marathi"],
      "email": "western@westernaluminium.com"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-20-29805054",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "exports",
      "email": "prashant@westernaluminium.com",
      "availableLanguage": "English",
      "areaServed": ["AE", "SA", "ZA", "NZ", "BD"]
    }
  ],

  // ── Certifications ──────────────────────────────────────────
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

  // ── Export markets ──────────────────────────────────────────
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "South Africa" },
    { "@type": "Country", "name": "New Zealand" },
    { "@type": "Country", "name": "Bangladesh" }
  ],

  // ── Directory profiles (sameAs signals authority to Google) ─
  "sameAs": [
    "https://www.indiamart.com/western-metal-industries-private-limited/",
    "https://www.indiamart.com/westernmetal-industries/",
    "https://www.alcirclebiz.com/profile/western-metal-industries-pvtltd-home",
    "https://www.tradeindia.com/western-metal-industries-pvt-ltd-412393/",
    "https://www.exportersindia.com/westernmetal/"
  ]
};


// ─── LocalBusiness schema — Hadapsar plant (head office) ──────
export const hadapsarPlantSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.westernaluminium.com/#hadapsar",
  "name": "Western Metal Industries Pvt. Ltd. — Hadapsar Plant",
  "image": "https://www.westernaluminium.com/hadapsar.jpg",
  "url": "https://www.westernaluminium.com",
  "telephone": "+91-20-26870164",
  "email": "western@westernaluminium.com",
  "priceRange": "Contact for quote",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Bank Transfer, RTGS, NEFT",
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
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "parentOrganization": {
    "@id": "https://www.westernaluminium.com/#organization"
  }
};


// ─── LocalBusiness schema — Bhandgaon plant ───────────────────
export const bhandgaonPlantSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.westernaluminium.com/#bhandgaon",
  "name": "Western Metal Industries Pvt. Ltd. — Bhandgaon Plant",
  "image": "https://www.westernaluminium.com/bhandgaon.jpg",
  "url": "https://www.westernaluminium.com",
  "telephone": "+91-20-29805054",
  "email": "western@westernaluminium.com",
  "priceRange": "Contact for quote",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "294 Khor Road, Bhandgaon, Pune-Solapur Road",
    "addressLocality": "Taluka Daund, Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "412214",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.3278,
    "longitude": 74.2400
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "parentOrganization": {
    "@id": "https://www.westernaluminium.com/#organization"
  }
};


// ============================================================
// HOW TO ADD BOTH PLANT SCHEMAS TO layout.tsx
// ============================================================
//
// import {
//   organizationSchema,
//   hadapsarPlantSchema,
//   bhandgaonPlantSchema,
//   productSchemas,
//   faqSchema,
//   breadcrumbSchema
// } from "./seo-schemas";
//
// In your <head> JSX:
//
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(hadapsarPlantSchema) }}
//   />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(bhandgaonPlantSchema) }}
//   />
//
// (productSchemas, faqSchema, breadcrumbSchema remain as before)
