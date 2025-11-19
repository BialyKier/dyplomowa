import { ContentPageTypeType, DataExtended } from "@/types/types";
import getPageData from "./getPageData";
import vars from "@/vars/vars";

export const fetchPageData = async (webParams : string[] | undefined) =>{

    let pageLocale = vars.locale.pl;
    let pageSlug = vars.slug.home;

    if(webParams && webParams.length > 0){
        if(webParams[0] === vars.slugprefix.en){
            pageLocale = vars.locale.en;
            
            if(webParams.length > 1){
                pageSlug = webParams.slice(1).join('/');
            }
        }
        else{
            pageSlug = webParams.join('/');
        }
    }

    let pageData : DataExtended | null = null;

    pageData = await getPageData(`/api/pages?filters[slug]=${pageSlug}&locale=${pageLocale}&populate=*`);

    let pageType: ContentPageTypeType = "page";

    if (!pageData) {
        pageData = await getPageData(`/api/posts?filters[slug]=${pageSlug}&locale=${pageLocale}&populate=*`);
        pageType = "post";
    }




    return{
        pageData,
        pageType,
        pageLocale
    }
}