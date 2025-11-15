"use client";

import Link from "next/link";
import styles from "./topmenu.module.css";

import { useContext } from "react";
import { ProviderMenuLinksContext } from "../providers/ProviderMenuLinks";




const TopMenu = () => {

  const context = useContext(ProviderMenuLinksContext);
  const urlItems = context?.initialLinks ?? [];

  return (
    <nav className={styles.topmenu}>
      <ul>
        {urlItems.map(y => (
          <li key={y.id}><Link href={`${y.url}`}>{y.tytul}</Link></li>
        ))}
      </ul>
    </nav>
  );
}

export default TopMenu;



{/* <ul className={styles.menu}>
        <li>
          <a href="/">Stona główna</a>
        </li>
        <li>
          <a href="/o-nas">O nas</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
      </ul> */}