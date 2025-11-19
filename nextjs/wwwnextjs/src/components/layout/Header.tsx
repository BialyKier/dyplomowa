import { PageMenuItem } from "@/types/types";
import TopMenu from "../nav/TopMenu";
import styles from "./header.module.css";

export default function Header({menuItems}:{menuItems:PageMenuItem[]}) {
  return (
    <header className={styles.header}>
      <TopMenu menuItems={menuItems} />
    </header>
  );
}
