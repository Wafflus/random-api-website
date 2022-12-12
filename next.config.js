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
      }, {
        protocol: 'https',
        hostname: 'origin-east-01-drupal-fishwatch.woc.noaa.gov'
      }
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
