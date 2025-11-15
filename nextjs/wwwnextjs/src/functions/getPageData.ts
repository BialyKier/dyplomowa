import { DataExtended, GetPageDataType, PageDataType, PageMetaType } from "@/types/types";


const pageDataValidate = (x : PageDataType) : PageDataType => {
   return {
        ...x,
        tresc: x.tresc ?? "",
        banner: x.banner ? {
            ...x.banner,
            alternativeText: x.banner.alternativeText ?? ""
        } : null
  };
}

const pageMetaValidate = (x : PageMetaType) : PageMetaType => {
    return{
        pagination: x.pagination ?? {
            page: 1,
            pageSize: 25,
            pageCount: 1,
            total: 1
        }
    }
}

const getPageData = async (fetchUrl: string, PUBLIC_URL: string = process.env.PUBLIC_STRAPI_URL ||
    'http://localhost:1337') : Promise<DataExtended | null> => {

    const res = await fetch(fetchUrl);

    if (!res.ok) return null;

    const resData : GetPageDataType = await res.json();

    if (!resData.data?.[0]) return null;


    const dataValidated = pageDataValidate(resData.data[0]);
    const metaValidated = pageMetaValidate(resData.meta);


    const public_banner_url = resData?.data?.[0]?.banner?.url ? PUBLIC_URL+resData?.data?.[0]?.banner?.url : "";

    const resDataExtended : DataExtended = { data: [dataValidated], meta: {...metaValidated}, extended:{banner:{public_banner_url}}}

    return resDataExtended;

}





export default getPageData;








// type GetBannerItemType = {
//     data:[
//         {
//             banner:{
//                 url: string,
//                 alternativeText: string,
//                 width: number,
//                 height: number,
//             }
//         }
//     ]
// }

// type BannerType = {
//                 url: string,
//                 alternativeText: string,
//                 width: number,
//                 height: number,
// }

// type BannerTypeComplete = {
//     public_url: string
// } & BannerType
