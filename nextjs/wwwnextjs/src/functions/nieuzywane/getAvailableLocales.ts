import { RoutingConfig } from "@/middleware";

export const getAvailableLocales = async (): Promise<string[]> => {    
    try{
        const url = `${process.env.PRIVATE_STRAPI_URL}/api/i18n/locales`;
        const res = await fetch(url, {
            cache: 'no-store',
            signal: AbortSignal.timeout(1500),
        });
        if(!res.ok){
            throw new Error(`Strapi Locales Error: ${res.status}`);
        }
        const data = await res.json() as {code: string}[];
        return data.map(x => x.code);
    } catch(error){
        console.warn('[LOCALES FETCH DIRECT] Błąd pobierania, zwracam fallback z configu.');
        return [RoutingConfig.defaultLocale];
    }
}