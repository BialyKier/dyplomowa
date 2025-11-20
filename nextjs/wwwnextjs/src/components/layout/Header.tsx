import { PageMenuItem, SwitchLanguageType } from "@/types/types";
import TopMenu from "../nav/TopMenu";
import styles from "./header.module.css";
import SwitchLanguage from "../nav/SwitchLanguage";

export default function Header({menuItems,langItems}:{menuItems:PageMenuItem[], langItems:SwitchLanguageType}) {
  return (
    <header className={styles.header}>
      <TopMenu menuItems={menuItems} />
      <SwitchLanguage langItems={langItems}/>
    </header>
  );
}
