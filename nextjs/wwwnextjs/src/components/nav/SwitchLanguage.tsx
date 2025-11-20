import { SwitchLanguageType } from "@/types/types";
import vars from "@/vars/vars";
import Link from "next/link";


const SwitchLanguage = ({langItems } : {langItems:SwitchLanguageType | null | undefined}) =>{

    const displayLinks = langItems || {
        pl:`/`,
        en:`/${vars.slugprefix.en}`
    }

    return(
        <>
        <Link href={displayLinks.pl}>PL</Link>
        <span> | </span>
        <Link href={displayLinks.en}>EN</Link>
    
        
        </>
    )
}

export default SwitchLanguage;