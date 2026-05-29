// app/sitemap.ts
// Next.js App Router automatic sitemap. Place at app/sitemap.ts — Next.js will
// generate /sitemap.xml at build time. Merge with any existing sitemap entries.

import type { MetadataRoute } from "next";

const SITE_URL = "https://www.westernaluminium.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Homepage
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Products index
    {
      url: `${SITE_URL}/products`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Product pages
    {
      url: `${SITE_URL}/products/aluminium-slugs-plain-without-center-hole`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/products/aluminium-slugs-perforated-with-center-hole`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/products/aluminium-slugs-domed-taper`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Applications index
    {
      url: `${SITE_URL}/applications`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Application pages
    {
      url: `${SITE_URL}/applications/aerosol-cans`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/applications/collapsible-tubes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/applications/food-packaging`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/applications/automotive-impact-extrusion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
