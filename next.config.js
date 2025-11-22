/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // SEO optimization
  compress: true,
  poweredByHeader: false,
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  // Turbopack root configuration
  turbopack: {
    root: __dirname,
  },
  // Redirects for common typos/old URLs
  async redirects() {
    return [
      {
        source: '/terms-and-condition',
        destination: '/terms-and-conditions',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

