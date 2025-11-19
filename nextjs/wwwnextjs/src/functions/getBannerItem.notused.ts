import vars from "@/vars/vars";

type GetBannerItemType = {
  data: [
    {
      banner: {
        url: string;
        alternativeText: string;
        width: number;
        height: number;
      };
    }
  ];
};

type BannerType = {
  url: string;
  alternativeText: string;
  width: number;
  height: number;
};

type BannerTypeComplete = {
  public_url: string;
} & BannerType;

const getBannerItem = async (
  fetchUrl: string,
  PUBLIC_URL: string = process.env.PUBLIC_STRAPI_URL || vars.env.PUBLIC_STRAPI_URL,
): Promise<BannerTypeComplete | null> => {
  const res = await fetch(fetchUrl);

  if (!res.ok) {
    return null;
  }

  const resData: GetBannerItemType = await res.json();

  const path = resData.data?.[0]?.banner?.url;

  const output = resData.data?.[0]?.banner;

  const output_complete = { ...output, public_url: PUBLIC_URL + output?.url };

  return path ? output_complete : null;
};

export default getBannerItem;
