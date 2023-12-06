import styles from "./styles.module.scss";

export default function Power() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>
          VOCÊ ACHA QUE TEM USADO TODO O <span>PODER DO DIGITAL</span> AO SEU
          FAVOR?{" "}
        </p>

        <hr className={styles.separetor} />

        <p className={styles.description}>
          Se a resposta for não, estamos aqui para te ajudar. Nossa agência foi
          criada para ajudar empreendedores a aumentarem suas vendas e nunca
          pararem de crescer. <br /> <br /> Estamos aqui para mudar
          completamente o posicionamento da sua empresa dentro do mercado
          digital, aumentar o seu faturamento mensal e fazer sua empresa crescer
          exponencialmente.
        </p>
      </div>
    </>
  );
}
