/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    path: 'https://ariannoel.com',
    mongodburl: 'mongodb+srv://ariannoel:xkIDZb6tUyIXLUFd@cluster0.9uc6m.mongodb.net/ariannoel?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
