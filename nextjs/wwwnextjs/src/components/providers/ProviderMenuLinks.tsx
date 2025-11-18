"use client";

import { PageMenuItem } from "@/types/types";
import { createContext } from "react";

export type ProviderMenuLinksContextType = {
  initialLinks: PageMenuItem[];
};
export type ProviderMenuLinksType = Readonly<{
  children: React.ReactNode;
}> & ProviderMenuLinksContextType;

export const ProviderMenuLinksContext =
  createContext<ProviderMenuLinksContextType | null>(null);

export const ProviderMenuLinks = ({
  children,
  initialLinks,
}: ProviderMenuLinksType) => {
  const insertValue = {
    initialLinks,
  };

  return (
    <ProviderMenuLinksContext.Provider value={insertValue}>
      {children}
    </ProviderMenuLinksContext.Provider>
  );
};
