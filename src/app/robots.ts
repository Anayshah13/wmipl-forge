import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Allow all crawlers including AI/search bots (GPTBot, ClaudeBot, etc.)
 * so the site can appear in ChatGPT, Perplexity, and similar tools.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
