import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";

export default async function Home() {




  
  const banner = await fetch(`http://srv-strapi:1337/api/pages?filters[slug]=home&populate=*`);
  const dataBanner = await banner.json();
  
  const PUBLIC_STRAPI_URL = 'http://localhost:1337'; 
  const publicImageUrl = PUBLIC_STRAPI_URL  + dataBanner.data[0].banner.url;
  


  return (
    <>
    {/* <Hero/> */}
    <div className={styles.page}>
     <h1>Jesteś w h1</h1>

     <Image
       src={publicImageUrl} 
       alt={dataBanner.data[0].banner.alternativeText || ""}
       width={dataBanner.data[0].banner.width}  
       height={dataBanner.data[0].banner.height}
          unoptimized={true} 
     />   
    </div>
    </>
  );
}
