/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'random.dog'
      }, {
        protocol: 'https',
        hostname: 'cdn.shibe.online'
      }, {
        protocol: 'https',
        hostname: 'randomfox.ca'
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/random-pictures',
        permanent: true,
      },
    ]
  },
}
