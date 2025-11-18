"use client";
import React, { useContext } from "react";

import HomePage from "@/components/pages/HomePage";
import GenericPage from "@/components/pages/GenericPage";
import BlogPage from "@/components/pages/BlogPage";
import OnasPage from "@/components/pages/OnasPage";
import KontaktPage from "@/components/pages/KontaktPage";
import PostTemplate from "@/components/pages/PostTemplate";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { SlugContext } from "@/components/providers/ProviderSlug";
import { PageTypeContext } from "@/components/providers/ProviderContentPageType";

const WebPage = () => {
  const slug = useContext(SlugContext);
  const ctype = useContext(PageTypeContext);

  // map slug : component
  const componentMap: Record<string, React.FC> = {
    "home": HomePage,
    "blog": BlogPage,
    "o-nas": OnasPage,
    "kontakt": KontaktPage,
  };

  const Component = ctype == "page" ? componentMap[slug] || GenericPage : PostTemplate;

  return (
    <>
      <Header />
      <main>
        <Component />
      </main>
      <Footer />
    </>
  );
};

export default WebPage;
