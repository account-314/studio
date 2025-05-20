/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/studio',
  assetPrefix: '/studio/',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
