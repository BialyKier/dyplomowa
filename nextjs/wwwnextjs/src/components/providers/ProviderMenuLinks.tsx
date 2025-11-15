
"use client";

import { PageItem } from "@/types/types";
import { createContext } from "react";

type ProviderMenuLinksContextType = {

    initialLinks: PageItem[],
}

export const ProviderMenuLinksContext = createContext<ProviderMenuLinksContextType | null>(null);


type ProviderMenuLinksType = Readonly<{
    children: React.ReactNode,
  
}> & ProviderMenuLinksContextType;


export const ProviderMenuLinks = ({children, initialLinks} : ProviderMenuLinksType ) => {

    const insertValue = {
        initialLinks,
    }
    
    return (
        <ProviderMenuLinksContext.Provider value={insertValue}>
            {children}
        </ProviderMenuLinksContext.Provider>
    );
}