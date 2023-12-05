import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./loading.json";
import styles from "./styles.module.scss";

export default function Form() {
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>
          Preencha o formulário para ter nossa equipe atuando na sua empresa:{" "}
        </p>

        <hr className={styles.separetor} />

        <div className={styles.formContent}>
          <div className={styles.leftForm}>
            <input
              type="text"
              placeholder="Qual o seu nome?"
              className={styles.inputField}
            />

            <input
              type="text"
              placeholder="Seu telefone com DDD"
              className={styles.inputField}
            />

            <select className={styles.selectField}>
              <option value="" disabled selected>
                Qual o seu segmento?
              </option>
              <option value="Educação">Educação</option>
              <option value="Serviço">Serviço</option>
              <option value="E-commerce">E-commerce</option>
              <option value="SAAS">SAAS</option>
              <option value="Energia Solar">Energia Solar</option>
              <option value="Turismo">Turismo</option>
              <option value="Food Service">Food Service</option>
              <option value="Franquia">Franquia</option>
              <option value="Indústria">Indústria</option>
              <option value="Finanças">Finanças</option>
              <option value="Varejo">Varejo</option>
              <option value="Imobiliária">Imobiliária</option>
              <option value="Telecom">Telecom</option>
              <option value="Outro">Outro</option>
            </select>

            <select className={styles.selectField}>
              <option
                value="Qual faturamento mensal da sua empresa?"
                disabled
                selected
              >
                Qual faturamento mensal da sua empresa?
              </option>
              <option value="Até 20 mil">Até 20 mil</option>
              <option value="De 21 mil à 50 mil">De 21 mil à 50 mil</option>
              <option value="De 51 mil à 70 mil">De 51 mil à 70 mil</option>
              <option value="De 71 mil à 100 mil">De 71 mil à 100 mil</option>
              <option value="De 101 mil a 400 mil">De 101 mil a 400 mil</option>
              <option value="De 401 mil à 1 milhão">
                De 401 mil à 1 milhão
              </option>
              <option value="De 1 à 4 milhões">De 1 à 4 milhões</option>
              <option value="De 4 à 16 milhões">De 4 à 16 milhões</option>
              <option value="De 16 à 64 milhões">De 16 à 64 milhões</option>
              <option value="Mais de 64 milhões">Mais de 64 milhões</option>
            </select>
          </div>
          <div className={styles.rightForm}>
            <input
              type="mail"
              placeholder="Seu E-mail"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Qual o nome da sua empresa?"
              className={styles.inputField}
            />

            <select className={styles.selectField}>
              <option value="Quantos Funcionários você tem?" disabled selected>
                Quantos Funcionários você tem?
              </option>
              <option value="00 - 01">00 - 01</option>
              <option value="02 - 10">02 - 10</option>
              <option value="11 - 20">11 - 20</option>
              <option value="21 - 50">21 - 50</option>
              <option value="51 - 100">51 - 100</option>
              <option value="+ 100">+ 100</option>
            </select>

            <div className={styles.submitButton} onClick={handleClick}>
              {loading ? (
                <Lottie options={defaultOptions} height={100} width={100} />
              ) : (
                <p>CONTRATAR NOSSA EMPRESA</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
