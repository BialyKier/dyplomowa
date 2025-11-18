import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //  reactStrictMode: false,
images: {

    remotePatterns: [
        
     
         {
        protocol: 'http',
        hostname: 'localhost', 
        port: '1337',
        pathname: '/uploads/**',
      },
       {
        protocol: 'http',
        hostname: 'srv-strapi', 
        port: '1337',
        pathname: '/uploads/**',
      },
       
    ],


    
  },
  
}


export default nextConfig;
