import Link from "next/link";
import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.container} id="Home">
        <div className={styles.leftContainer}>
          <p className={styles.title}>
            Next Weave, sua jornada de Sucesso começa aqui
          </p>

          <p className={styles.description}>
            Bem-vindo a Next Weave, um ambiente onde a inovação e excelência se
            unem para alavancar seu negócio. Nossa estratégia é composta por
            pilares baseados na criatividade, tecnologia avançada e o
            profissionalismo necessario para estruturar seu percurso rumo ao
            sucesso.
          </p>

          <div className={styles.buttonsContainer}>
            <Link href={"/#Form"}>
              <button className={styles.ctaButton}>CONTRATAR A NEXT</button>
            </Link>
            <Link href={"/#Services"}>
              <button className={styles.ourButton}>NOSSOS SERVIÇOS</button>
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
