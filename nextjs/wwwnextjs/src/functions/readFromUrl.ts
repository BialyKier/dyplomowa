import vars from "@/vars/vars";

export const readFromUrl = (webParams : string[] | undefined) => {
    let pageLocale = vars.locale.pl;
    let pageSlug = vars.slug.home;

    if(webParams && webParams.length > 0){
        if(webParams[0] === vars.slugprefix.en){
            pageLocale = vars.locale.en;
            
            if(webParams.length > 1){
                pageSlug = webParams.slice(1).join('/');
            }    }
        else{
            pageSlug = webParams.join('/');
        }
    }
    return{
        pageLocale,
        pageSlug
    }
}