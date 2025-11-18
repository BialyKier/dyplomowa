"use client";
import { createContext } from "react";

export const SlugContext = createContext<string>(null!);

export const SlugProvider = ({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) => {
  return <SlugContext.Provider value={slug}>{children}</SlugContext.Provider>;
};
