import styles from "./styles.module.scss";

export default function About() {
  return (
    <>
      <div className={styles.container} id="About">
        <p className={styles.title}>Sobre nós</p>

        <hr className={styles.separetor} />

        <p className={styles.description}>
          A Next Weave é uma agência de marketing completa, especializada em
          impulsionar negócios ao atrair um maior número de leads por meio de
          uma estratégia focada na conversão eficiente destes em clientes.{" "}
          <br />
          <br /> Nós acreditamos em ideias e soluções criativas para superar os
          desafios dentro da sua empresa, com decisões baseadas por pesquisas de
          mercado que guiam todas as nossas ações, garantindo uma abordagem
          fundamentada em dados para cada situação.
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
