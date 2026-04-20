/** @type {import('next').NextConfig} */
const nextConfig = {
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
