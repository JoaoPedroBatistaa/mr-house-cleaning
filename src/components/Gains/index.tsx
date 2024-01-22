import { useState } from "react";
import styles from "./styles.module.scss";

export default function Gains() {
  const [isActiveCopywriter, setIsActiveCopywriter] = useState(false);
  const [isActiveDesigner, setIsActiveDesigner] = useState(false);
  const [isActiveGestor, setIsActiveGestor] = useState(false);
  const [isActiveEstrategista, setIsActiveEstrategista] = useState(false);
  const [isActiveEngenheiro, setIsActiveEngenheiro] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>
            É POSSÍVEL CRESCER <span>SEM A NEXT WEAVE?</span>
          </p>

          <img src="/titleLamp.svg" alt="" />
        </div>

        <hr className={styles.separetor} />

        <div className={styles.infoContainer}>
          <div className={styles.leftContainer}>
            <p className={styles.description}>
              Para ter uma equipe própria na sua empresa para fazer o mesmo
              trabalho da Next, seriam necessários ao menos 5 funcionários.
              <br />
              <br /> <span>• </span> Um Copywriter;
              <br />
              <br /> <span>• </span> Um Designer Gráfico;
              <br />
              <br /> <span>• </span> Um Gestor de Tráfego;
              <br />
              <br /> <span>• </span> Um Estrategista Digital;
              <br />
              <br /> <span>• </span> Um Engenheiro de Software; <br />
              <br /> A Next consegue suprir esses custos. A nossa equipe conta
              com profissionais especializados em cada uma das áreas listadas,
              fazendo você poupar dinheiro, tempo e estresse.
            </p>
          </div>

          <div className={styles.rightContainer}>
            <div
              className={
                isActiveCopywriter
                  ? `${styles.professional} ${styles.active}`
                  : styles.professional
              }
            >
              <div
                className={styles.professionalHeader}
                onClick={() => setIsActiveCopywriter(!isActiveCopywriter)}
              >
                <p className={styles.professionalTitle}>Copywriter</p>
                <img src="/downArrow.svg" alt="" />
              </div>
              <p className={styles.descriptionProf}>
                Copywriting é o processo de produção de textos persuasivos para
                ações de Marketing e Vendas, como o conteúdo de emails, sites,
                catálogos, anúncios e cartas de vendas. O profissional
                responsável pelo desenvolvimento do texto é
              </p>
            </div>

            <div
              className={
                isActiveDesigner
                  ? `${styles.professional} ${styles.active}`
                  : styles.professional
              }
            >
              <div
                className={styles.professionalHeader}
                onClick={() => setIsActiveDesigner(!isActiveDesigner)}
              >
                <p className={styles.professionalTitle}>Designer Gráfico</p>
                <img src="/downArrow.svg" alt="" />
              </div>
              <p className={styles.descriptionProf}>
                Nossos designers são arquitetos visuais, traduzindo a essência
                da sua marca em designs memoráveis, estrategicamente planejados
                para contar sua história e superar a concorrência. Eles se
                mantêm atualizados com as tendências de design e focam em
                resultados, garantindo uma presença visual poderosa que
                impulsiona o sucesso da sua empresa.
              </p>
            </div>

            <div
              className={
                isActiveGestor
                  ? `${styles.professional} ${styles.active}`
                  : styles.professional
              }
            >
              <div
                className={styles.professionalHeader}
                onClick={() => setIsActiveGestor(!isActiveGestor)}
              >
                <p className={styles.professionalTitle}>Gestor de Tráfego</p>
                <img src="/downArrow.svg" alt="" />
              </div>
              <p className={styles.descriptionProf}>
                Gestores de tráfego são os maestros do sucesso digital,
                direcionando visitantes qualificados para seu site, otimizando
                campanhas com foco em ROI e acompanhando as tendências do
                mercado para impulsionar o crescimento da sua empresa no
                ambiente online. Confie neles para conquistar resultados
                notáveis.
              </p>
            </div>

            <div
              className={
                isActiveEstrategista
                  ? `${styles.professional} ${styles.active}`
                  : styles.professional
              }
            >
              <div
                className={styles.professionalHeader}
                onClick={() => setIsActiveEstrategista(!isActiveEstrategista)}
              >
                <p className={styles.professionalTitle}>Estrategista Digital</p>
                <img src="/downArrow.svg" alt="" />
              </div>
              <p className={styles.descriptionProf}>
                Um estrategista digital é o cérebro por trás da presença online
                de sua empresa. Eles não apenas definem uma estratégia, mas
                criam um mapa direcionando para o sucesso digital. Compreendem
                profundamente sua marca e público-alvo, traçando um caminho
                claro para aumentar a visibilidade, o envolvimento e a conversão
                em todos os canais digitais
              </p>
            </div>

            <div
              className={
                isActiveEngenheiro
                  ? `${styles.professional} ${styles.active}`
                  : styles.professional
              }
            >
              <div
                className={styles.professionalHeader}
                onClick={() => setIsActiveEngenheiro(!isActiveEngenheiro)}
              >
                <p className={styles.professionalTitle}>
                  Engenheiro de Software
                </p>
                <img src="/downArrow.svg" alt="" />
              </div>
              <p className={styles.descriptionProf}>
                Um engenheiro de software é o arquiteto das soluções
                tecnológicas de uma empresa. Eles projetam e estruturam sistemas
                complexos, traduzindo necessidades de negócios em tecnologia
                eficiente. Com expertise em engenharia de software, eles são
                fundamentais para construir aplicações seguras, escaláveis e
                alinhadas aos objetivos estratégicos, impulsionando a inovação e
                a competitividade no mercado digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
