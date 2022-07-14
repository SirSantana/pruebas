/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    BASE_URL:'http://localhost:3000',
  }
}

module.exports = nextConfig
