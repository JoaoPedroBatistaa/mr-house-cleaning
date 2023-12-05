import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <p className={styles.title}>
            Next Weave, a sua jornada de Sucesso começa aqui
          </p>

          <p className={styles.description}>
            Bem-vindo à Next Weave, onde a inovação se une à excelência para
            impulsionar seu negócio no cenário digital. Nossa fórmula única
            combina criatividade, tecnologia avançada e especialização para
            moldar sua jornada rumo ao sucesso online.
          </p>

          <div className={styles.buttonsContainer}>
            <button className={styles.ctaButton}>
              CONTRATAR NOSSA EMPRESA
            </button>
            <button className={styles.ourButton}>NOSSOS SERVIÇOS</button>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.light}></div>
        </div>
      </div>
    </>
  );
}
