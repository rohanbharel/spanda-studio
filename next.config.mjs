/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/start",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
