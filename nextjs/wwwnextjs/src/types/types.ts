


export type PageMenuItem = {
  id: number;
  tytul: string;
  slug: string;
  tresc: string;
  url: string;
};

export type ContentPageTypeType = "page" | "post";



export type BannerType = {
        id: number,
        documentId: string,
        name: string,
        alternativeText: string,
        caption: string,
        width: number,
        height: number,
        formats: FormatsInBannerType,
        hash: string,
        ext: string,
        mime: string,
        size: number,
        url: string,
        previewUrl: string,
        provider: string,
        provider_metadata: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }



export type PageMetaType = {
    pagination: {
        page: number,
        pageSize: number,
        pageCount: number,
        total: number
    }
}

export type FormatsInBannerType = {
    large: {
        ext: string,
        url: string,
        hash: string,
        mime: string,
        name: string,
        path: string,
        size: number,
        width: number,
        height: number,
        sizeInBytes: number
    },
    small: {
        ext: string,
        url: string
        hash: string,
        mime: string,
        name: string,
        path: string,
        size: number,
        width: number,
        height: number,
        sizeInBytes: number
    },
    medium: {
        ext: string,
        url: string,
        hash: string,
        mime: string,
        name: string,
        path: string,
        size: number,
        width: number,
        height: number,
        sizeInBytes: number
    },
    thumbnail: {
        ext: string,
        url: string,
        hash: string,
        mime: string,
        name: string,
        path: string,
        size: number,
        width: number,
        height: number,
        sizeInBytes: number
    }
}

export type ExtendUrlType = {
extended:{
        banner:{
            public_banner_url: string
        }
    }
}


// Types of /pages




export type HeroPropsType = {
    publicUrl: string,
    bannerData: BannerType,
    tytul: string
}










export type PageDataType = {
    
    id: number,
    documentId: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    tytul: string,
    slug: string,
    zajawka?: string,
    tresc: string,
    pozycja: number,
    banner: BannerType | null,
}

export type PageDataValidatedType = PageDataType & {
zajawka: string,
}

export type GetPageDataInType = {
    data: PageDataType[],
    meta: PageMetaType
}

export type GetPageDataOutType = {
    data: PageDataValidatedType,
    meta: PageMetaType
}

export type DataExtended = GetPageDataOutType & ExtendUrlType & {}