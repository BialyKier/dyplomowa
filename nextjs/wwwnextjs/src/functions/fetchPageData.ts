import { ContentPageTypeType, DataExtended } from "@/types/types";
import getPageData from "./getPageData";
import vars from "@/vars/vars";

export const fetchPageData = async (pageSlug: string, pageLocale: string) =>{

    // let pageLocale = vars.locale.pl;
    // let pageSlug = vars.slug.home;

    // if(webParams && webParams.length > 0){
    //     if(webParams[0] === vars.slugprefix.en){
    //         pageLocale = vars.locale.en;
            
    //         if(webParams.length > 1){
    //             pageSlug = webParams.slice(1).join('/');
    //         }
    //     }
    //     else{
    //         pageSlug = webParams.join('/');
    //     }
    // }

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
}