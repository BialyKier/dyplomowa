
import React from "react";

import HomePage from "@/components/pages/HomePage";
import GenericPage from "@/components/pages/GenericPage";
import BlogPage from "@/components/pages/BlogPage";
import OnasPage from "@/components/pages/OnasPage";
import KontaktPage from "@/components/pages/KontaktPage";
import PostTemplate from "@/components/pages/PostTemplate";

import { PagePropsType } from "@/types/types";

import { notFound } from "next/navigation";
import { fetchPageData } from "@/functions/fetchPageData";

const WebPage = async ({params} : Readonly<{
  params: Promise<{ web?: string[] }>;
}>) => {


   const { web } = await params;
  // const slug = web?.join("/") || "home";
 const fetchedData  = await fetchPageData(web);

  if (!fetchedData) return notFound();
  if(!fetchedData.pageData) return notFound();

  // map slug : component
  const componentMap: Record<string, React.FC<PagePropsType>> = {

    // universal

    "home": HomePage,
    "blog": BlogPage,

    // pl
    
    "o-nas": OnasPage,
    "kontakt": KontaktPage,

    // en

    "about-us": OnasPage,
    "contact": KontaktPage
  };

  

  const Component = fetchedData.pageType == "page" ? componentMap[fetchedData.pageData.data.slug] || GenericPage : PostTemplate;


  const propsForComponent = {
      pageData: fetchedData.pageData,
      pageType: fetchedData.pageType || "page" 
  };
  return (
    <>
      
      <main>
        <Component contentData={propsForComponent}/>
      </main>
      
    </>
  );
};

export default WebPage;
