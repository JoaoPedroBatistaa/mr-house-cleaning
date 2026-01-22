import Link from "next/link";
import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.container} id="Home">
        <div className={styles.leftContainer}>
          <p className={styles.title}>
            Professional <span>Cleaning</span> Services in your home{" "}
          </p>

          <p className={styles.description}>
            Your trusted choice for professional house cleaning services in the
            Tampa Bay Area! We provide residential and commercial cleaning
            solutions you can count on.
          </p>

          <div className={styles.buttonsContainer}>
            <Link href={"/#Form"}>
              <button className={styles.ctaButton}>Get a free quote</button>
            </Link>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.light}></div>
        </div>
      </div>
    </>
  );
}
