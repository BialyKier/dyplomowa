import { ContentPageTypeType, DataExtended } from "@/types/types";
import getPageData from "./getPageData";

export const fetchPageData = async (slug: string) =>{

//     let locale = 'pl'; // Domyślny
//   let actualSlug = slugArray.join('/'); // Domyślny slug


/*
// 1. Wykrywanie języka w URL
  if (slugArray[0] === 'en') {
    locale = 'en';
    // Usuwamy 'en' z tablicy, żeby dostać czysty slug (np. 'about-us')
    // Jeśli to sama strona główna '/en', to slug będzie pusty -> 'home'
    const slugParts = slugArray.slice(1); 
    actualSlug = slugParts.length > 0 ? slugParts.join('/') : 'home';
  } else {
    // Dla polskiego, jeśli tablica jest pusta lub ['home'], to home
    actualSlug = slugArray.length > 0 ? slugArray.join('/') : 'home';
  }

  // 2. Zapytanie do Strapi z parametrem locale
  // Dodajemy populate=localizations, żeby wiedzieć jak linkować do drugiego języka!
  const endpoint = `/api/pages?filters[slug]=${actualSlug}&locale=${locale}&populate[localizations][populate]=true&populate[banner]=true...`;
*/

    let pageData : DataExtended | null = null;

  pageData = await getPageData(`/api/pages?filters[slug]=${slug}&populate=*`);

  let pageType: ContentPageTypeType = "page";

  if (!pageData) {
    pageData = await getPageData(`/api/posts?filters[slug]=${slug}&populate=*`);
    pageType = "post";
  }

  if(!pageData) return null;


  return{
    pageData,
    pageType
  }
}