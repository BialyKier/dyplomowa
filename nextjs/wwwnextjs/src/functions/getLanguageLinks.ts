import { DataExtended } from "@/types/types";



export const getLanguageLinks = (pageData: DataExtended | undefined | null) =>{

    
    const links = {
        pl: "/pl",
        en: "/en",
    };

    if (!pageData?.data) return links;

    const { localizations, locale, slug } = pageData.data;


    if(locale === 'pl'){
        links.pl = slug === 'home' ? '/pl' : `/pl/${slug}`;

        if(localizations && localizations?.locale === 'en'){
            links.en = localizations.slug === 'home' ? '/en' : `/en/${localizations.slug}`;
        }
        
    }

    else if(locale === 'en') {
        links.en = slug === 'home' ? '/en' : `/en/${slug}`;

        if(localizations && localizations?.locale === 'pl'){
            links.pl = localizations.slug === 'home' ? '/pl' : `/pl/${localizations.slug}`;
        }
    }

    return links;
    
}