import { PageMenuItem } from "@/types/types";
import vars from "@/vars/vars";

type GetMenuItemsReturnType = PageMenuItem & { url: string; }

const getMenuItems = async (locale:string | undefined) : Promise<GetMenuItemsReturnType[] | null> =>  {
  try {

    const currentLocale = locale || vars.locale.pl;

    const baseUrl = process.env.PRIVATE_STRAPI_URL || vars.env.PRIVATE_STRAPI_URL;

    const queryParams = [
      `sort=pozycja:asc`,
      `locale=${currentLocale}`,
      `fields[0]=tytul`,
      `fields[1]=slug`,
      `fields[2]=pozycja`
    ].join('&');

    const fetchUrl = `${baseUrl}/api/pages?${queryParams}`;
    
    // Dodajemy revalidate, żeby menu nie cache'owało się na wieczność (np. co godzinę)
    // lub cache: 'no-store' jeśli chcesz mieć zawsze świeże
    const res = await fetch(fetchUrl, { next: { revalidate: 3600 } });

  // const fetchUrl = `${baseUrl}/api/pages?sort=pozycja:asc&locale=${locale}`;
  //   const res = await fetch(fetchUrl);

    if (!res.ok) {
      console.error("Fetch failed:", res.status, res.statusText);
      return null;
    }
    const resData = await res.json();

    if (!resData?.data) return null;
    const resItems: PageMenuItem[] = resData.data;

    return resItems.map((x) => {
      return {
        ...x,
        url: locale === vars.locale.en ? (x.slug === vars.slug.home ? `/${vars.slugprefix.en}` : `/${vars.slugprefix.en}/${x.slug}`) : (x.slug === vars.slug.home ? '/' : `/${x.slug}`),
      };
    });
  } catch (error) {
    console.error("getPageData ERROR:", error);
    return null;
  }
};

export default getMenuItems;
