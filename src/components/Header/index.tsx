import styles from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <p className={styles.navItem}>Home</p>
          <p className={styles.navItem}>Sobre nós</p>
          <p className={styles.navItem}>Entrar em contato</p>
        </div>

        <img src="/logo.svg" alt="Next Weave logo" className={styles.logo} />

        <button className={styles.ctaButton}>CONTRATAR NOSSA EMPRESA</button>
      </div>
    </>
  );
}
