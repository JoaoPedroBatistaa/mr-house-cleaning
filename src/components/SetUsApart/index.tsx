import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.container} id="Home">
        <div className={styles.rightContainer}>
          <img src="/set-us-apart.jpg" alt="" />
        </div>

        <div className={styles.leftContainer}>
          <p className={styles.title}>What Sets Us Apart</p>

          <p className={styles.subtitle}>Unmatched Quality: </p>

          <p className={styles.description}>
            We're committed to the highest standards of quality in every service
            we offer.
          </p>

          <p className={styles.subtitle}>Professional Team: </p>

          <p className={styles.description}>
            Our team is trained, experienced, and dedicated to exceeding your
            expectations.
          </p>

          <p className={styles.subtitle}>Convenience: </p>

          <p className={styles.description}>
            Schedule cleaning services according to your agenda, ensuring a
            stress-free experience.
          </p>

          <p className={styles.subtitle}>Transparency: </p>

          <p className={styles.description}>
            Our prices are fair and transparent, with no unpleasant surprises
          </p>
        </div>
      </div>
    </>
  );
}
