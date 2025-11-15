


export type PageItem = {
  id: number;
  tytul: string;
  slug: string;
  tresc: string;
  url: string;
};

export type DataBundleXYZ = {
    urlItems: PageItem[];
}

// Type [[...web]] - routing

export type WebProps = {
  params: Promise<{ 
    web: string[];
  }>;
};
 
// Types of function: getPageData.ts

export type GetPageDataType = {
    data: PageDataType[],
    meta: PageMetaType
}

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

export type PageDataType = {
    id: number,
    documentId: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    tytul: string,
    slug: string,
    tresc: string,
    zajawka: string,
    pozycja: number,
    banner: BannerType | null,
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
export type DataExtended = GetPageDataType & ExtendUrlType & {}

// Types of /pages

export type MyOwnPagesType = {
    bundle: DataExtended
}


export type HeroPropsType = {
    publicUrl: string,
    bannerData: BannerType
}