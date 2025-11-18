import { PageMenuItem } from "@/types/types";

const getMenuItems = async (fetchUrl: string)  => {
  try {
    const res = await fetch(fetchUrl);

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
        url: x.slug === "home" ? "/" : `/${x.slug}`,
      };
    });
  } catch (error) {
    console.error("getPageData ERROR:", error);
    return null;
  }
};

export default getMenuItems;
