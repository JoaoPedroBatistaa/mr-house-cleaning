import { useState } from "react";
import InputMask from "react-input-mask";
import Lottie from "react-lottie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import animationData from "./loading.json";
import styles from "./styles.module.scss";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userSegment, setUserSegment] = useState("");
  const [companyRevenue, setCompanyRevenue] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");

  const [showUserNameError, setShowUserNameError] = useState(false);
  const [showUserPhoneError, setShowUserPhoneError] = useState(false);
  const [showUserSegmentError, setShowUserSegmentError] = useState(false);
  const [showCompanyRevenueError, setShowCompanyRevenueError] = useState(false);
  const [showUserEmailError, setShowUserEmailError] = useState(false);
  const [showCompanyNameError, setShowCompanyNameError] = useState(false);
  const [showEmployeeCountError, setShowEmployeeCountError] = useState(false);

  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = async () => {
    setShowUserNameError(!userName);
    setShowUserPhoneError(!userPhone);
    setShowUserSegmentError(!userSegment);
    setShowCompanyRevenueError(!companyRevenue);
    setShowUserEmailError(!userEmail);
    setShowCompanyNameError(!companyName);
    setShowEmployeeCountError(!employeeCount);

    if (
      userName &&
      userPhone &&
      userSegment &&
      companyRevenue &&
      userEmail &&
      companyName &&
      employeeCount
    ) {
      setLoading(true);
      try {
        const response = await fetch("/api/save-lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            userPhone,
            userSegment,
            companyRevenue,
            userEmail,
            companyName,
            employeeCount,
          }),
        });

        if (response.ok) {
          toast.success("Formulário enviado com sucesso!");

          setUserName("");
          setUserPhone("");
          setUserEmail("");
          setUserSegment("");
          setCompanyRevenue("");
          setCompanyName("");
          setEmployeeCount("");
        } else {
          toast.error("Erro ao enviar o formulário.");
        }
      } catch (error) {
        console.error("Erro de rede:", error);
        toast.error("Erro de rede ao tentar enviar o formulário.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <ToastContainer theme="dark"></ToastContainer>
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            {showUserNameError && (
              <p className={styles.required}>Este campo é obrigatório *</p>
            )}

            <InputMask
              mask="(99) 99999-9999"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              placeholder="Seu telefone com DDD"
              className={styles.inputField}
            />

            {showUserPhoneError && (
              <p className={styles.required}>Este campo é obrigatório *</p>
            )}

            <select
              className={styles.selectField}
              value={userSegment}
              onChange={(e) => setUserSegment(e.target.value)}
            >
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

            {showUserSegmentError && (
              <p className={styles.required}>Este campo é obrigatório *</p>
            )}

            <select
              className={styles.selectField}
              value={companyRevenue}
              onChange={(e) => setCompanyRevenue(e.target.value)}
            >
              {" "}
              <option value="" disabled selected>
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

            {showCompanyRevenueError && (
              <p className={styles.required}>Este campo é obrigatório *</p>
            )}
          </div>
          <div className={styles.rightForm}>
            <input
              type="email"
              placeholder="Seu E-mail"
              className={styles.inputField}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            {showUserEmailError && (
              <p className={styles.required}>Este campo é obrigatório *</p>
            )}

            <input
              type="text"
              placeholder="Qual o nome da sua empresa?"
              className={styles.inputField}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            {showCompanyNameError && (
              <p className={styles.required}>Este campo é obrigatório *</p>
            )}

            <select
              className={styles.selectField}
              value={employeeCount}
              onChange={(e) => setEmployeeCount(e.target.value)}
            >
              {" "}
              <option value="" disabled selected>
                Quantos Funcionários você tem?
              </option>
              <option value="00 - 01">00 - 01</option>
              <option value="02 - 10">02 - 10</option>
              <option value="11 - 20">11 - 20</option>
              <option value="21 - 50">21 - 50</option>
              <option value="51 - 100">51 - 100</option>
              <option value="+ 100">+ 100</option>
            </select>

            {showEmployeeCountError && (
              <p className={styles.required}>Este campo é obrigatório *</p>
            )}

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
