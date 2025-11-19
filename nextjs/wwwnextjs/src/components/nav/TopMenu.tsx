import Link from "next/link";
import styles from "./topmenu.module.css";

import { PageMenuItem } from "@/types/types";

const TopMenu = ({menuItems}:{menuItems:PageMenuItem[]}) => {

  return (
    <nav className={styles.topmenu}>
      <ul>
        {menuItems.map((y) => (
          <li key={y.id}>
            <Link href={y.url}>{y.tytul}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopMenu;