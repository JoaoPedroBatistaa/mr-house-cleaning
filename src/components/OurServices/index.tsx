import styles from "./styles.module.scss";

export default function OurServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.subTitleContainer}>
            <img src="/lamp.svg" alt="" />
            <p className={styles.subTitle}>NOSSO TRABALHO</p>
          </div>

          <p className={styles.title}>
            O QUE <span>NÓS FAZEMOS?</span>
          </p>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.service}>
            <div className={styles.subTitleContainer}>
              <img src="/lamp.svg" alt="" />
              <p className={styles.subTitle}>01</p>
            </div>

            <p className={styles.titleService}>Sites de Alto Desempenho</p>

            <p className={styles.descriptionService}>
              Tenha um site para o seu negócio com alto desempenhoe
              esteticamente impecável.
            </p>

            <hr className={styles.serviceSeparetor} />
          </div>

          <div className={styles.service}>
            <div className={styles.subTitleContainer}>
              <img src="/lamp.svg" alt="" />
              <p className={styles.subTitle}>02</p>
            </div>

            <p className={styles.titleService}>
              Soluções de Software Personalizadas
            </p>

            <p className={styles.descriptionService}>
              Oferecemos desenvolvimento de software sob medida para impulsionar
              a eficiência e inovação do seu negócio.
            </p>

            <hr className={styles.serviceSeparetor} />
          </div>

          <div className={styles.service}>
            <div className={styles.subTitleContainer}>
              <img src="/lamp.svg" alt="" />
              <p className={styles.subTitle}>03</p>
            </div>

            <p className={styles.titleService}>
              Estratégia de Marketing Personalizada{" "}
            </p>

            <p className={styles.descriptionService}>
              Use o marketing para atrair ainda mais clientes para o seunegócio
              e aumentar o seu faturamento mensal.
            </p>

            <hr className={styles.serviceSeparetor} />
          </div>

          <div className={styles.service}>
            <div className={styles.subTitleContainer}>
              <img src="/lamp.svg" alt="" />
              <p className={styles.subTitle}>04</p>
            </div>

            <p className={styles.titleService}>
              Gestão de Mídias Sociais Estratégicas{" "}
            </p>

            <p className={styles.descriptionService}>
              Use as redes sociais para melhorar o seu posicionamento no mercado
              e crescer sua empresa.
            </p>

            <hr className={styles.serviceSeparetor} />
          </div>

          <div className={styles.service}>
            <div className={styles.subTitleContainer}>
              <img src="/lamp.svg" alt="" />
              <p className={styles.subTitle}>05</p>
            </div>

            <p className={styles.titleService}>Gestão de tráfego </p>

            <p className={styles.descriptionService}>
              Conecte-se com seus clientes com mais facilidade e aumente o seu
              faturamento mensal.
            </p>

            <hr className={styles.serviceSeparetor} />
          </div>

          <div className={styles.service}>
            <div className={styles.subTitleContainer}>
              <img src="/lamp.svg" alt="" />
              <p className={styles.subTitle}>06</p>
            </div>

            <p className={styles.titleService}>
              Campanhas Publicitárias Impactantes
            </p>

            <p className={styles.descriptionService}>
              Crie campanhas publicitárias favorecendo o posicionamento,
              branding e faturamento do seu negócio.
            </p>

            <hr className={styles.serviceSeparetor} />
          </div>
        </div>
      </div>
    </>
  );
}
