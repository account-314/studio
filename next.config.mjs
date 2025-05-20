/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/studio',
  assetPrefix: '/studio/',
  images: {
    unoptimized: true,
  },
  // Add this to ensure styles are included
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // Disable image optimization
  images: {
    unoptimized: true,
    domains: ['localhost'],
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
