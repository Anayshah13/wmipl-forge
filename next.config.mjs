/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'flagcdn.com' },
      { protocol: 'https', hostname: 'www.westernaluminium.com' },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/contact-us.php', destination: '/', permanent: true },
      { source: '/contact.php', destination: '/', permanent: true },
      { source: '/about-us.php', destination: '/', permanent: true },
      { source: '/about.php', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/products.php', destination: '/', permanent: true },
      { source: '/products-aluminium-slugs.php', destination: '/', permanent: true },
      { source: '/aluminium-slugs.php', destination: '/', permanent: true },
      { source: '/aluminium-circles.php', destination: '/', permanent: true },
      { source: '/aluminium-strips.php', destination: '/', permanent: true },
      { source: '/product-details.php', destination: '/', permanent: true },
      { source: '/infrastructure.php', destination: '/', permanent: true },
      { source: '/facilities.php', destination: '/', permanent: true },
      { source: '/quality.php', destination: '/', permanent: true },
      { source: '/certifications.php', destination: '/', permanent: true },
      { source: '/exports.php', destination: '/', permanent: true },
      { source: '/global-reach.php', destination: '/', permanent: true },
      { source: '/management.php', destination: '/', permanent: true },
      { source: '/team.php', destination: '/', permanent: true },
      { source: '/gallery.php', destination: '/', permanent: true },
      { source: '/news.php', destination: '/', permanent: true },
      { source: '/enquiry.php', destination: '/', permanent: true },
      { source: '/enquiry-form.php', destination: '/', permanent: true },
      { source: '/sitemap.php', destination: '/sitemap.xml', permanent: true },
      { source: '/:path*.php', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
