import { ContentPageTypeType, DataExtended } from "@/types/types";
import getPageData from "./getPageData";
import { cache } from "react";

export const fetchPageData = cache(async (pageSlug: string, pageLocale: string) =>{



    let pageData : DataExtended | null = null;

  

    let pageType: ContentPageTypeType = "page";

  
    const reqQuery = `filters[slug]=${pageSlug}&locale=${pageLocale}&populate=*`;

    const [pageRes, postRes] = await Promise.all([
        getPageData(`/api/pages?${reqQuery}`),
        getPageData(`/api/posts?${reqQuery}`)
    ]);

    if (pageRes) {
        pageType = "page";
        pageData = pageRes;
    } else if (postRes) {
        pageType = "post";
        pageData = postRes;
    }


    return{
        pageData,
        pageType,
        pageLocale
    }
});