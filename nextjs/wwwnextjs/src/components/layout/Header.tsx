import TopMenu from "../nav/TopMenu";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <TopMenu />
    </header>
  );
}
