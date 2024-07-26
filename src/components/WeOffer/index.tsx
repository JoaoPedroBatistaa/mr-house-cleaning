import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.allContent}>
        <p className={styles.title}>What We Offer</p>

        <p className={styles.description}>
          At M&R, we offer a variety of services to meet your residential
          cleaning needs:
        </p>

        <div className={styles.container} id="Home">
          <div className={styles.leftContainer}>
            <img src="/regular.svg" alt="" />

            <p className={styles.subtitle}>Regular Cleaning</p>

            <p className={styles.description}>
              Clean kitchen, countertops, exterior of refrigerator, microwave,
              bedrooms, window sills, living and dining room, wash bathrooms,
              mop throughout the house, dust entire house, take out trash cans,
              dust baseboards throughout the house.
            </p>

            <img src="/regular-line.svg" alt="" />
          </div>

          <div className={styles.rightContainer}>
            <img src="/deep-icon.svg" alt="" />

            <p className={styles.subtitle}>Deep Cleaning</p>

            <p className={styles.description}>
              Kitchen cleaning including exterior of refrigerator and cabinets,
              countertops, microwave, all bedrooms, window sills, living and
              dining room, wash bathrooms, mop throughout the house, dust entire
              house, take out trash cans, clean baseboards throughout the house,
              cleaning of vents, interior doors, and frames.
            </p>

            <img src="/deep-line.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
