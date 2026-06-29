/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Mohd_Aziz_portflio',
  assetPrefix: '/Mohd_Aziz_portflio/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig