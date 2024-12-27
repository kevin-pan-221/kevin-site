// filepath: /Users/kevinpan/projects/kevin-website/next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true, // This is necessary for static export
  },
  output: 'export', // Enable static export
};

export default nextConfig;