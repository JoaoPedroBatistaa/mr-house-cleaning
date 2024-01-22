import styles from "./styles.module.scss";

export default function Power() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>
          VOCÊ TEM USADO O <span>PODER DO DIGITAL</span> AO SEU FAVOR?{" "}
        </p>

        <hr className={styles.separetor} />

        <p className={styles.description}>
          Nossa agência foi criada para empreendedores. Eleve o seu faturamento
          de forma lucrativa e eficiente e nunca pare de crescer.
          <br />
          <br />
          Nosso foco é aprimorar o posicionamento da sua empresa dentro do seu
          nicho de mercado. Otimize os processos da sua empresa e aumente suas
          vendas reduzindo seus custos.
        </p>
      </div>
    </>
  );
}
