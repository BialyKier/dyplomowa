


export type PageMenuItem = {
  id: number;
  tytul: string;
  slug: string;
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
export type SingleFormatInBannerType = {
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

export type FormatsInBannerType = {
    large: SingleFormatInBannerType,
    small: SingleFormatInBannerType,
    medium: SingleFormatInBannerType,
    thumbnail: SingleFormatInBannerType
}

export type ExtendUrlType = {
extended:{
        banner:{
            public_banner_url: string
        }
    }
}


export type HeroPropsType = {
    publicUrl: string,
    bannerData: BannerType,
    tytul: string
}




export type LocalizationsObjectType = 
    {
        id: number,
        documentId: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        locale: string,
        tytul: string,
        slug: string,
        pozycja:number,
        tresc: string,
    }

    export type LocalizationsType = LocalizationsObjectType[]





export type PageDataType = {
    
    id: number,
    documentId: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    tytul: string,
    slug: string,
    zajawka?: string,
    tresc: string | null,
    pozycja: number,
    locale: string,
    banner: BannerType | null,
    localizations: LocalizationsType | [],
    template: string | null
}

export type PageDataValidatedType = Omit<PageDataType,'zajawka' | 'localizations'> & {
tresc: string,
zajawka: string,
localizations: LocalizationsObjectType | null
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

export type PagePropsType = {contentData:{pageData: DataExtended; pageType: ContentPageTypeType;}}