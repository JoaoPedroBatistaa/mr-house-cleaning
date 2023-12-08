import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Link href={"/#Home"}>
            <p className={styles.navItem}>Home</p>
          </Link>
          <Link href={"/#About"}>
            <p className={styles.navItem}>Sobre nós</p>
          </Link>
          <Link href={"/#Form"}>
            <p className={styles.navItem}>Entrar em contato</p>
          </Link>
        </div>

        <img src="/logo.svg" alt="Next Weave logo" className={styles.logo} />

        <Link href={"/#Form"}>
          <button className={styles.ctaButton}>CONTRATAR NOSSA EMPRESA</button>
        </Link>
      </div>
    </>
  );
}
