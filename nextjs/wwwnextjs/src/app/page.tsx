import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
    <Hero/>
    <div className={styles.page}>
     <h1>Jesteś w h1</h1>
    </div>
    </>
  );
}
