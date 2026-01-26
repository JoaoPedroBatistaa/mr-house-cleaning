import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.container} id="Home">
        <div className={styles.leftContainer}>
          <p className={styles.title}>
            <span>Welcome to</span> M&R Home Cleaning Services!{" "}
          </p>

          <p className={styles.description}>
            You deserve a spotless home that&apos;s worry-free. At M&R Home Cleaning
            Services, we&apos;re dedicated to making that a reality for you. Whether
            you need regular house cleaning, deep cleaning, move-in/move-out
            services, or post-construction cleaning, our professional team is
            here to help you maintain a clean, healthy living environment in Jacksonville, FL.
          </p>
        </div>

        <div className={styles.rightContainer}>
          <img
            src="/welcome.jpg"
            alt="Professional house cleaning services in Jacksonville, FL"
          />
        </div>
      </div>
    </>
  );
}
