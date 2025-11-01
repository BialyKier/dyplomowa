import { NextPage } from "next";
import styles from "../page.module.css";
import { FC } from "react";

type PageProps = {
    params:{
        slug:string[];
    }
}

 const Slug: NextPage<PageProps> = async ( {params} ) => {

 const { slug }= await params;



  return (
    <div className={styles.page}>


     <h1>Jesteś na stronie {slug}</h1>
     
    </div>
  );
}

export default Slug;