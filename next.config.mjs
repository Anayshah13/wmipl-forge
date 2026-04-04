/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'flagcdn.com' },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      ],
    }]
  },
}

export default nextConfig

// ============================================================
// next.config.js — westernaluminium.com
// Updated: April 2026
//
// PURPOSE: 301 permanent redirects from the old PHP-based site
// to the current Next.js single-page site.
//
// WHY THIS MATTERS:
//   Google still has old URLs like /contact-us.php in its index.
//   They currently return 403, burning crawl budget and creating
//   errors in Search Console. 301s tell Google these pages have
//   permanently moved, pass link equity to the new URL, and
//   clean up the index within a few crawl cycles.
//
// HOW TO VERIFY AFTER DEPLOY:
//   curl -I https://www.westernaluminium.com/contact-us.php
//   → Should return: HTTP/2 301 + Location: https://www.westernaluminium.com/
//
// SEARCH CONSOLE:
//   After deploying, go to GSC → Pages → Not found (404) or
//   Server error (5xx) and confirm the old PHP URLs clear within
//   2–4 weeks.
// ============================================================

/** @type {import('next').NextConfig} */
const nextConfig = {

  // ── 301 redirects from old PHP site ──────────────────────
  async redirects() {
    return [

      // ── Core pages ───────────────────────────────────────
      {
        source: "/contact-us.php",
        destination: "/",
        permanent: true,   // 301
      },
      {
        source: "/contact.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about-us.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },

      // ── Product pages ─────────────────────────────────────
      {
        source: "/products.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/products-aluminium-slugs.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/aluminium-slugs.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/aluminium-circles.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/aluminium-strips.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/product-details.php",
        destination: "/",
        permanent: true,
      },

      // ── Company pages ─────────────────────────────────────
      {
        source: "/infrastructure.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/facilities.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/quality.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/certifications.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/exports.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/global-reach.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/management.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/team.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gallery.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/news.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/enquiry.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/enquiry-form.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sitemap.php",
        destination: "/sitemap.xml",
        permanent: true,
      },

      // ── Wildcard catch-all: any remaining .php URL ────────
      // This catches any PHP page not explicitly listed above.
      // Next.js processes specific rules first, so this is only
      // a fallback and will not override the rules above.
      {
        source: "/:path*.php",
        destination: "/",
        permanent: true,
      },

      // ── HTTP → HTTPS (belt-and-suspenders) ───────────────
      // Note: this is usually handled at the hosting/CDN layer
      // (Vercel, Nginx, Cloudflare). Only uncomment this if your
      // host does NOT handle HTTP→HTTPS redirection automatically.
      //
      // {
      //   source: "http://www.westernaluminium.com/:path*",
      //   destination: "https://www.westernaluminium.com/:path*",
      //   permanent: true,
      // },

    ];
  },

  // ── Standard Next.js config (keep your existing values) ──
  images: {
    domains: ["www.westernaluminium.com", "flagcdn.com"],
  },

  // Enable React strict mode for better dev experience
  reactStrictMode: true,

};

module.exports = nextConfig;

