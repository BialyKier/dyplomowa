import Link from "next/link";
import styles from "./menu.module.css";

// Typ dla pojedynczego elementu
type PageItem = {
  id: number;
  Tytul: string;
  Slug: string;
  Zajawka: string;
  Tresc: string;
};

 const Menu = async () => {
  //fetch (dane ze strapi) - strony

  const res = await fetch('http://srv-strapi:1337/api/pages?sort=Pozycja:asc');
  const resData = await res.json();
  const items : PageItem[] = resData.data;


  return (
    <nav>
      <ul>
        {items.map(item => (
          <li key={item.id}><Link href={`/${item.Slug}`}>{item.Tytul}</Link></li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;



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