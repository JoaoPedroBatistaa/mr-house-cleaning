import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footer}>
          <img src="/logoFooter.svg" alt="Logo" />

          <p>© 2024 M&R Home Cleaning Services - All rights reserved</p>
          <a
            href="https://www.instagram.com/mrhomeservices.jax1/profilecard/?igsh=aWNzZWN2b20yZzI1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/pioCou4Vue4QUfEJ/?mibextid=JRoKGi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Facebook
          </a>
        </div>
      </div>
    </>
  );
}
