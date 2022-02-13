/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  loader: "imgix",
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
