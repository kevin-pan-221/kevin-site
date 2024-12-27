/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kevin-site/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/kevin-site' : '',
  images: {
    unoptimized: true, // This is necessary for static export
  },
  output: 'export', // Enable static export
};

export default nextConfig;