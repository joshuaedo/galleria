/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "joshuaedo.sirv.com", "res.cloudinary.com", "lh3.googleusercontent.com"],
  }
}

export default nextConfig
