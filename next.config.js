/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin/:path*', // User visits /admin/some-path
        destination: '/admin',   // They are served /admin, but the URL stays as /admin/some-path
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
