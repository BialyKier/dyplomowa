
import React from "react";

import HomePage from "@/components/pages/HomePage";
import GenericPage from "@/components/pages/GenericPage";
import BlogPage from "@/components/pages/BlogPage";
import OnasPage from "@/components/pages/OnasPage";
import KontaktPage from "@/components/pages/KontaktPage";
import PostTemplate from "@/components/pages/PostTemplate";

import { PagePropsType } from "@/types/types";

import { notFound } from "next/navigation";
import { fetchPageData } from "@/functions/getPageData";
import { readFromUrl } from "@/functions/nieuzywane/readFromUrl";
import { getLanguageStatic } from "@/functions/getLanguageStatic";
import vars from "@/vars/vars";

import availableLocales from '../../../../src/config/locales.json'; // Dostosuj ścieżkę importu
// Dodaj to na górze pliku:
export const revalidate = 60; // Odświeżaj cache co 60 sekund (ISR)
export const dynamicParams = true; // Pozwól na nowe strony spoza listy builda
export async function generateStaticParams() {
  // --- 1. Pobieranie danych (Twój sprawdzony Parallel Fetch) ---
  const requests = availableLocales.map((lang) =>
    fetch(
      `http://cms.localhost/api/pages?locale=${lang}&pagination[pageSize]=100&fields[0]=slug&fields[1]=locale`,
      { cache: 'no-store' }
    ).then((res) => res.json())
  );

  const results = await Promise.all(requests);
  const allPages = results.flatMap((res: { data: any }) => res.data || []);

  // --- 2. Mapowanie (TUTAJ ZMIANA) ---
  return allPages.map((page: any) => {
    // Rozbijamy slug. Jeśli home -> pusta tablica []
    const slugSegments = page.slug === 'home' ? [] : page.slug.split('/');

    return {
      // Osobno zwracamy język, osobno ścieżkę
      lang: page.locale,      // Dla segmentu [lang]
      web: slugSegments       // Dla segmentu [[...web]] (bez języka!)
    };
  });
}

const WebPage = async ({params} : Readonly<{
  params: Promise<{ web?: string[],
    lang: string
   }>;
}>) => {

   const { web, lang } = await params;


  //  const pageSlug = web?.join('/') ?? 'home';
  const pageSlug = web && web.length > 0 ? web.join('/') : 'home';


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
