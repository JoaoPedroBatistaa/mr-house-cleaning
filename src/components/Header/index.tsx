import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={isSidebarVisible ? styles.sideBar : styles.sideBarHidden}
        >
          <div className={styles.leftSide}>
            <img src="/close.svg" alt="" onClick={toggleSidebar} />

            <div className={styles.sideNav}>
              <Link href={"/#Home"}>
                <p className={styles.navItemS} onClick={toggleSidebar}>
                  Home
                </p>
              </Link>
              <Link href={"/#About"}>
                <p className={styles.navItemS} onClick={toggleSidebar}>
                  Sobre Nós
                </p>
              </Link>
              <Link href={"/#Services"}>
                <p className={styles.navItemS} onClick={toggleSidebar}>
                  Nosso Trabalho
                </p>
              </Link>
              <Link href={"/#Form"}>
                <p className={styles.navItemS} onClick={toggleSidebar}>
                  Entrar em Contato
                </p>
              </Link>
            </div>

            <Link href={"/#Form"}>
              <button className={styles.sideButton} onClick={toggleSidebar}>
                CONTRATAR NOSSA EMPRESA
              </button>
            </Link>
          </div>

          <div className={styles.rightSide} onClick={toggleSidebar}></div>
        </div>

        <div className={styles.nav}>
          <Link href={"/#Home"}>
            <p className={styles.navItem}>Home</p>
          </Link>
          <Link href={"/#About"}>
            <p className={styles.navItem}>Sobre Nós</p>
          </Link>
          <Link href={"/#Form"}>
            <p className={styles.navItem}>Entrar em Contato</p>
          </Link>
        </div>

        <img
          src="/menu.svg"
          alt=""
          className={styles.menu}
          onClick={toggleSidebar}
        />

        <img src="/logo.svg" alt="Next Weave logo" className={styles.logo} />

        <Link href={"/#Form"}>
          <button className={styles.ctaButton}>CONTRATAR NOSSA EMPRESA</button>
        </Link>
      </div>
    </>
  );
}
