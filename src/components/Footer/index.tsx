import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footer}>
          <img src="/logoFooter.svg" alt="" />

          <p>© 2024 M&R Home Cleaning Services - All rights reserved</p>
          <p>Policy Privacy</p>
        </div>
      </div>
    </>
  );
}
