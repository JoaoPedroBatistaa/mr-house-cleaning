import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.container} id="Home">
        <div className={styles.rightContainer}>
          <img
            src="/who.jpg"
            alt="M&R Home Cleaning Services - Trusted cleaning company since 2016"
          />
        </div>

        <div className={styles.leftContainer}>
          <p className={styles.title}>Who we are</p>

          <p className={styles.description}>
            Since 2016, M&R Home Cleaning Services has been the trusted choice
            for residential and commercial cleaning services in the Tampa Bay Area.
            Founded with the mission to deliver unparalleled quality and a touch
            of elegance in every service, we've become an essential part of our
            customers' lives. Our commitment to excellence has made us one of the
            most reliable cleaning companies serving Tampa, St. Petersburg,
            Clearwater, and surrounding communities.
          </p>

          <p className={styles.subtitle}>Our Mission</p>

          <p className={styles.description}>
            At M&R Home Cleaning Services, our mission is simple: to provide a
            more comfortable, worry-free life for our customers through
            high-quality cleaning services. We believe that a clean home is the
            foundation of a happy, healthy lifestyle, and we're dedicated to
            making that a reality for every client we serve.
          </p>

          <p className={styles.subtitle}>Why Choose M&R?</p>

          <p className={styles.description}>
            With years of experience serving the Tampa Bay Area, we understand
            the unique needs of our local community. Our professional team is
            fully insured, bonded, and trained to deliver exceptional results
            every time. We use eco-friendly cleaning products when requested and
            always respect your home and privacy.
          </p>
        </div>
      </div>
    </>
  );
}
