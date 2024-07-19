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
 
    // i18n: {
    //   locales: ['en', 'fr'],
    //   defaultLocale: 'en',
    // },
};

export default nextConfig;
