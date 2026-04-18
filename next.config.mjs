/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/start",
        destination: "/",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "pravah.agency" }],
        destination: "https://spanda.studio/pravah",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
