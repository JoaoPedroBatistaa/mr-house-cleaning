import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.container} id="Home">
        <div className={styles.rightContainer}>
          <img src="/who.jpg" alt="" />
        </div>

        <div className={styles.leftContainer}>
          <p className={styles.title}>Who we are</p>

          <p className={styles.description}>
            Since 2016, M&R has been the trusted choice for residential cleaning
            services in the region. Founded with the mission to deliver
            unparalleled quality and a touch of elegance in every service, we've
            become an essential part of our customers' lives.
          </p>

          <p className={styles.subtitle}>Our mission</p>

          <p className={styles.description}>
            At M&R, our mission is simple: to provide a more comfortable,
            worry-free life for our customers through high-quality cleaning
            services.
          </p>
        </div>
      </div>
    </>
  );
}
