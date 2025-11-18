"use client";

import parse from "html-react-parser";

import { useContext } from "react";
import { ProviderDataContext } from "../providers/ProviderData";

export const useGetContent = () => {
  const { pckg } = useContext(ProviderDataContext);

  return {
    banner: pckg.data.banner,
    tresc: parse(pckg.data.tresc),
    zajawka: parse(pckg.data.zajawka),
    tytul: pckg.data.tytul,
    public_banner_url: pckg.extended.banner.public_banner_url,
    pckg,
  };
};
