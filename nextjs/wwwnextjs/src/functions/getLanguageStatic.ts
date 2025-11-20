import { LanguageDefaultType } from '@/components/languages/types/types';

import 'server-only';



const languageStatic = {
    pl: () => import('@/components/languages/pl').then(module => module.pl),
    en: () => import('@/components/languages/en').then(module => module.en),
}

type AllowedLocalesType = keyof typeof languageStatic;
export const getLanguageStatic = async (pageLocale: string) :Promise<LanguageDefaultType> =>{
   
    const load = languageStatic[pageLocale as AllowedLocalesType] || languageStatic.pl;
    return load();
}