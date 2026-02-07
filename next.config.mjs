/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removed the unsupported 'eslint' key that caused the warning
};

export default nextConfig;
