/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_USER: process.env.NEXT_PUBLIC_USER,
    NEXT_PUBLIC_PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
    BASE_URL:'http://localhost:3000',
  }
}

module.exports = nextConfig
