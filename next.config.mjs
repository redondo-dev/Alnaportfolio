/** @type {import('next').NextConfig} */


// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      },
   
     
    ],
  },
};

export default nextConfig;
