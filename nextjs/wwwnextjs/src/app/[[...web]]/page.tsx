// /app/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';

import { notFound } from 'next/navigation';

import getPageData from '@/functions/getPageData';

import HomePage from '@/components/pages/HomePage';
import GenericPage from '@/components/pages/GenericPage';
import BlogPage from '@/components/pages/BlogPage';
import OnasPage from '@/components/pages/OnasPage';
import KontaktPage from '@/components/pages/KontaktPage';

import { WebProps } from '@/types/types';


const WebPage = async (props: WebProps) => {
  
  const {web} = await props.params;
  const slug = web?.join('/') || 'home';
  
  const generalData = await getPageData(`http://srv-strapi:1337/api/pages?filters[slug]=${slug}&populate=*`, process.env.PUBLIC_STRAPI_URL!);
  
  if (!generalData) return notFound();
  
  

// mapowanie slug : komponent
const componentMap: Record<string, React.FC<any>> = {
  'home': HomePage,
  'blog': BlogPage,
  'o-nas': OnasPage,
  'kontakt': KontaktPage
 
};

const Component = componentMap[slug] || GenericPage;



  // Dostęp do wartości slug: params.slug
  return (
    <>
      <Component bundle={generalData}/>
    </>
  );
};

export default WebPage;