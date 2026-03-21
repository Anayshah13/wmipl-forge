import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.westernaluminium.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: 'https://www.westernaluminium.com/#about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.westernaluminium.com/#products', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.westernaluminium.com/#infrastructure', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://www.westernaluminium.com/#management', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://www.westernaluminium.com/#clients', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.westernaluminium.com/#csr', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://www.westernaluminium.com/#export', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.westernaluminium.com/#certifications', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://www.westernaluminium.com/#contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://www.westernaluminium.com/certifications', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
  ]
}
