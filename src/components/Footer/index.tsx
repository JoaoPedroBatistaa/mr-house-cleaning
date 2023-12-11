import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>
          A NEXT WEAVE AGUARDA <span>SEU CONTATO!</span>
        </p>

        <hr className={styles.separetor} />

        <div className={styles.footer}>
          <div>
            <Link href={"/#Home"}>
              <p className={styles.description}>Home</p>
            </Link>
            <Link href={"/#Form"}>
              <p className={styles.description}>Formulário</p>
            </Link>
            <Link href={"/#About"}>
              <p className={styles.description}>Sobre Nós</p>
            </Link>
            <Link href={"/#Services"}>
              <p className={styles.description}>Nosso Trabalho</p>
            </Link>
          </div>

          <div>
            <Link href={"https://www.instagram.com/nextweave/"}>
              <p className={styles.description}>Instagram</p>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/jo%C3%A3o-pedro-batista-b92a0821b/"
              }
            >
              <p className={styles.description}>LinkedIn</p>
            </Link>
          </div>

          <div>
            <p className={styles.desc}>E-mail</p>
            <p className={styles.description}>nextweave@gmail.com</p>
            <p className={styles.desc}>WhatsApp</p>
            <p className={styles.description}>38 99962-4092</p>
          </div>

          <img src="/logFooter.png" alt="" />
        </div>

        <div className={styles.footerMobile}>
          <div className={styles.infosContent}>
            <div className={styles.leftInfo}>
              <div>
                <Link href={"/#Home"}>
                  <p className={styles.description}>Home</p>
                </Link>
                <Link href={"/#Form"}>
                  <p className={styles.description}>Formulário</p>
                </Link>
                <Link href={"/#About"}>
                  <p className={styles.description}>Sobre Nós</p>
                </Link>
                <Link href={"/#Services"}>
                  <p className={styles.description}>Nosso Trabalho</p>
                </Link>
              </div>

              <div>
                <Link href={"https://www.instagram.com/nextweave/"}>
                  <p className={styles.description}>Instagram</p>
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/jo%C3%A3o-pedro-batista-b92a0821b/"
                  }
                >
                  <p className={styles.description}>LinkedIn</p>
                </Link>
              </div>
            </div>

            <div className={styles.rightInfo}>
              <p className={styles.desc}>E-mail</p>
              <p className={styles.description}>nextweave@gmail.com</p>
              <p className={styles.desc}>WhatsApp</p>
              <p className={styles.description}>38 99962-4092</p>
            </div>
          </div>

          <img src="/logFooter.png" alt="" />
        </div>
      </div>
    </>
  );
}
