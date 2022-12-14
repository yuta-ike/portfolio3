/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "development"
        ? undefined
        : {
            exclude: ["error"],
          },
  },
  experimental: {
    scrollRestoration: true,
    images: { allowFutureImage: true },
  },
}

module.exports = nextConfig
