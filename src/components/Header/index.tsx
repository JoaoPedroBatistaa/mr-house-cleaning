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
                  Reviews
                </p>
              </Link>
              <Link href={"/#Services"}>
                <p className={styles.navItemS} onClick={toggleSidebar}>
                  FAQ
                </p>
              </Link>
              <Link href={"/#Form"}>
                <p className={styles.navItemS} onClick={toggleSidebar}>
                  Airbnb
                </p>
              </Link>
            </div>

            <Link href={"/#Form"}>
              <button className={styles.sideButton} onClick={toggleSidebar}>
                Get a free quote
              </button>
            </Link>
          </div>

          <div className={styles.rightSide} onClick={toggleSidebar}></div>
        </div>

        <img
          src="/menu.svg"
          alt=""
          className={styles.menu}
          onClick={toggleSidebar}
        />

        <img src="/logo.svg" alt="" className={styles.logo} />

        <div className={styles.nav}>
          <Link href={"/#Home"}>
            <p className={styles.navItem}>Home</p>
          </Link>
          <Link href={"/#About"}>
            <p className={styles.navItem}>Reviews</p>
          </Link>
          <Link href={"/#Form"}>
            <p className={styles.navItem}>FAQ</p>
          </Link>
          <Link href={"/#Form"}>
            <p className={styles.navItem}>Airbnb</p>
          </Link>
        </div>

        <Link href={"/#Form"}>
          <button className={styles.ctaButton}>Get a free quote</button>
        </Link>
      </div>
    </>
  );
}
