import Link from "next/link";
import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.container} id="Home">
        <div className={styles.leftContainer}>
          <h1 className={styles.title}>
            Professional <span>House Cleaning</span> Services in Jacksonville, FL{" "}
          </h1>

          <p className={styles.description}>
            Your trusted choice for professional house cleaning services in Jacksonville, FL! We provide residential and commercial cleaning
            solutions you can count on. We proudly serve Jacksonville, Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra, Orange Park, and surrounding areas.
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
