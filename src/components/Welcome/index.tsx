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
            You deserve a spotless home that s worry-free. At M&R, we re
            dedicated to making that a reality for you.{" "}
          </p>
        </div>

        <div className={styles.rightContainer}>
          <img src="/welcome.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
