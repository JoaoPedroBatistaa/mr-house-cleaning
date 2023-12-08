import styles from "./styles.module.scss";

export default function Contract() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.attention}>
          <div className={styles.attentionHeader}>
            <div className={styles.subTitleContainer}>
              <img src="/lamp.svg" alt="" />
              <p className={styles.subTitle}>
                AGORA, <span>ATENÇÃO!</span>
              </p>
            </div>

            <hr />
          </div>

          <div className={styles.attentionBody}>
            <div className={styles.leftAttention}>
              <p className={styles.title}>
                O QUE PRECISO PARA <span>CONTRATAR A NEXT WEAVE?</span>
              </p>
            </div>

            <div className={styles.rightAttention}>
              <p className={styles.description}>
                Muito simples, basta clicar no botão abaixo e preencher o
                formulário para que nossa equipe de especialistas entre em
                contato com você.
              </p>

              <button className={styles.ctaButton}>
                CONTRATAR NOSSA EMPRESA
              </button>
            </div>
          </div>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.attentionDown}>
              <div className={styles.attentionHeader}>
                <p className={styles.title}>
                  CANCELE <span>QUANDO QUISER!</span>
                </p>
              </div>

              <div className={styles.attentionBodyDown}>
                <p className={styles.description}>
                  A Next Weave isenta o seu risco removendo a multa. <br />
                  <br /> Se por algum motivo fora do comum, você não estiver
                  satisfeito com os nossos serviços de marketing, você pode
                  cancelar quando quiser sem pagar um centavo sequer pela
                  rescisão contratual, desde que cumprido o aviso prévio.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.attentionDown}>
              <div className={styles.attentionHeader}>
                <img src="/lg.png" alt="" />
              </div>

              <div className={styles.attentionBodyDown}>
                <p className={styles.description}>
                  Como parceiro da Next Weave, você tem até 30 dias para
                  solicitar a troca dos profissionais que te atendem. <br />
                  <br /> Sua satisfação é completa e assegurada. <br />
                </p>

                <button className={styles.ctaButton}>
                  CONTRATAR NOSSA EMPRESA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
