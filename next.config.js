const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withOptimizedImages = require('next-optimized-images');

// disabled is commented out for debugging

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages(withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development'
  },
}))

module.exports = nextConfig
