
'use client';
import { RoutingConfig } from "@/middleware";
import { SwitchLanguageType } from "@/types/types";
import vars from "@/vars/vars";
import Cookies from "js-cookie";
import Link from "next/link";


const SwitchLanguage = ({langItems } : {langItems:SwitchLanguageType | null | undefined}) =>{

    const displayLinks = langItems || {
        pl:`/pl`,
        en:`/${vars.slugprefix.en}`
    }
const handleLanguageChange = (lang: string) => {
    // Zapisujemy wybór na rok
    Cookies.set(RoutingConfig.cookieName, lang, { expires: 365 });
  };
    return(
        <>
        <Link href={displayLinks.pl}
              onClick={() => handleLanguageChange('pl')}>PL</Link>
        <span> | </span>
        <Link href={displayLinks.en}
              onClick={() => handleLanguageChange('en')}>EN</Link>
    
        
        </>
    )
}

export default SwitchLanguage;