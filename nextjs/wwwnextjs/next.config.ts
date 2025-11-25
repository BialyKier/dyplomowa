import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: "standalone",
  env: {
    PRIVATE_STRAPI_URL: process.env.PRIVATE_STRAPI_URL,
    PUBLIC_STRAPI_URL: process.env.PUBLIC_STRAPI_URL,
  },
images: {

    remotePatterns: [
        
     
         {
        protocol: 'http',
        hostname: process.env.PUBLIC_STRAPI_URL!, 
        port: '',
        pathname: '/uploads/**',
      },
       {
        protocol: 'http',
        hostname: process.env.PRIVATE_STRAPI_URL!, 
        port: '1337',
        pathname: '/uploads/**',
      },
       
    ],


    
  },
  
}


export default nextConfig;
