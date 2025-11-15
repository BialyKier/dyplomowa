import { PageItem } from "@/types/types";

  
const getMenuItems = async (fetchUrl : string) => {
  
  const res = await fetch(fetchUrl);
  const resData = await res.json();
  const resItems : PageItem[] = resData.data;

  return resItems.map(x => {
      return {
        ...x,
        url: x.slug === 'home' ? '/' : `/${x.slug}`,
      }
  })
}

export default getMenuItems;