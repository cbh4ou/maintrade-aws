const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withOptimizedImages = require('next-optimized-images')
const defaultTheme = require('tailwindcss/defaultTheme')

const { screens } = defaultTheme

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages(
  withPWA({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      runtimeCaching,
      disable: process.env.NODE_ENV === 'development',
    },
    publicRuntimeConfig: {
      breakpoints: screens,
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/portfolios',
          permanent: true,
        },
      ]
    },
    async rewrites() {
      return [
        {
          source: '/portfolios',
          destination: '/legacy/portfolios',
        },
      ]
    },
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      return {
        '/': { page: '/' },
      }
    },
  })
)

module.exports = nextConfig
