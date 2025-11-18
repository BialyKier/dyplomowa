"use client";
import { ContentPageTypeType } from "@/types/types";
import { createContext} from "react";

export const PageTypeContext = createContext<string>(null!);

export const PageTypeProvider = ({
  contentPageType,
  children,
}: {
  contentPageType: ContentPageTypeType;
  children: React.ReactNode;
}) => {
  return (
    <PageTypeContext.Provider value={contentPageType}>
      {children}
    </PageTypeContext.Provider>
  );
};
