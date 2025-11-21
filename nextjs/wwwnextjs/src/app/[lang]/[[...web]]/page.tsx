
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
import { readFromUrl } from "@/functions/readFromUrl";
import { getLanguageStatic } from "@/functions/getLanguageStatic";




const WebPage = async ({params} : Readonly<{
  params: Promise<{ web?: string[],
    lang: string
   }>;
}>) => {

   const { web, lang } = await params;


   const pageSlug = web?.join('/') ?? 'home';


  // const slug = web?.join("/") || "home";
  // const rfurl = readFromUrl(web, lang);


  const [fetchedData,languageStatic] = await Promise.all([
    // fetchPageData(rfurl.pageSlug, rfurl.pageLocale),
    // getLanguageStatic(rfurl.pageLocale),
        fetchPageData(pageSlug, lang),
        getLanguageStatic(lang),
  ])


  // const fetchedData  = await fetchPageData(rfurl.pageSlug, rfurl.pageLocale);

  if(!fetchedData?.pageData) return notFound();


  // map slug : page component
  const componentMapPageTemplates: Record<string, React.FC<PagePropsType>> = {
    "home": HomePage,
    "blog": BlogPage,
    "about": OnasPage,
    "contact": KontaktPage,
    "default": GenericPage,
  };

  // map slug : post component
  const componentMapPostTemplates: Record<string, React.FC<PagePropsType>> = {
    "default": PostTemplate,
  };

  const layout = fetchedData?.pageData.data.template || "default";

  const Component = fetchedData.pageType == "page" ? componentMapPageTemplates[layout] || GenericPage :
                                                     componentMapPostTemplates[layout] || PostTemplate;


  const propsForComponent = { pageData: fetchedData.pageData, pageType: fetchedData.pageType || "page" , languageStatic};

  return (
    <>
      
      <main>
        <Component contentData={propsForComponent}/>
      </main>
      
    </>
  );
};

export default WebPage;
