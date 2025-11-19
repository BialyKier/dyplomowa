
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
  const slug = web?.join("/") || "home";
 const contentData  = await fetchPageData(slug);

  if (!contentData) return notFound();

  // map slug : component
  const componentMap: Record<string, React.FC<PagePropsType>> = {
    "home": HomePage,
    "blog": BlogPage,
    "o-nas": OnasPage,
    "kontakt": KontaktPage,
  };

  const Component = contentData.pageType == "page" ? componentMap[slug] || GenericPage : PostTemplate;

  return (
    <>
      
      <main>
        <Component contentData={contentData}/>
      </main>
      
    </>
  );
};

export default WebPage;
