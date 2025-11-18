"use client";

import { DataExtended } from "@/types/types";
import { createContext } from "react";

export type ProviderDataContextType = { pckg: DataExtended; };
export type ProviderDataType = {
  children: React.ReactNode;
  pckg: {
    data: DataExtended["data"];
    meta: DataExtended["meta"];
    extended: DataExtended["extended"];
  };
};

export const ProviderDataContext = createContext<ProviderDataContextType>(null!);

export const ProviderData = ({
  children,
  pckg: { data, meta, extended },
}: ProviderDataType) => {
  const insertValue = {
    pckg: {
      data,
      meta,
      extended,
    },
  };

  return (
    <ProviderDataContext.Provider value={insertValue}>
      {children}
    </ProviderDataContext.Provider>
  );
};
