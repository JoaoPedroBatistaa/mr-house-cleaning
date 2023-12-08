import styles from "./styles.module.scss";

export default function About() {
  return (
    <>
      <div className={styles.container} id="About">
        <p className={styles.title}>Sobre nós</p>

        <hr className={styles.separetor} />

        <p className={styles.description}>
          A Next Weave é uma agência completa de marketing especializada em
          acelerar negócios, atrair mais pessoas e ter uma estratégia montada
          para convertê-los em clientes. <br />
          <br /> Nós acreditamos em ideias e soluções criativas para qualquer
          problema dentro da sua empresa, através de pesquisas de mercado que
          nos guiam em tudo que fazemos.
        </p>

        <div className={styles.services}>
          <p>NOSSOS SERVIÇOS</p>

          <hr />

          <img src="/arrowServices.svg" alt="" />
        </div>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <p className={styles.metaValue}>R$ 6M</p>
            <p className={styles.metaDescription}>
              Em faturamento gerado para nossos clientes
            </p>
          </div>

          <div className={styles.metaItem}>
            <p className={styles.metaValue}>4 ANOS</p>
            <p className={styles.metaDescription}>
              De experiência no mercado digital{" "}
            </p>
          </div>

          <div className={styles.metaItem}>
            <p className={styles.metaValue}>+ 150</p>
            <p className={styles.metaDescription}>
              Sites e softwares criados funcionando em alto desempenho{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
