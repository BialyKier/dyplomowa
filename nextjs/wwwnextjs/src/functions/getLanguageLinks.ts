import { DataExtended } from "@/types/types";


export const getLanguageLinks = (pageData: DataExtended | undefined | null) =>{

    
    const links = {
        pl: "/",
        en: "/en",
    };

    if (!pageData?.data) return links;

    const { localizations, locale, slug } = pageData.data;


    if(locale === 'pl'){
        links.pl = slug === 'home' ? '/' : `/${slug}`;

        if(localizations && localizations?.locale === 'en'){
            links.en = slug === 'home' ? '/en' : `/en/${slug}`;
        }
        
    }

    else if(locale === 'en') {

    }
    
}