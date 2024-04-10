import { useEffect, useState } from "react";
import modalImg from "../assets/svg/modalImg.svg";
import iconSend from "../assets/svg/iconSend.svg";
import iconMail from "../assets/svg/iconMail.svg";
import styles from "./Modal.module.css";

export function Modal() {
  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setTimeout(() => {
      setModal(!modal);
    }, 4000);
  }, []);

  return (
    <>
      {modal ? (
        <div className={styles.modalWrapper} onClick={modalToggle}>
          <div
            className={styles.modal}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div onClick={modalToggle} className={styles.modalButtonClose}>
              Fechar
            </div>
            <div className={styles.modalLeft}>
              <img className={styles.modalImage} src={modalImg} alt="" />
            </div>
            <div className={styles.modalRight}>
              <img src={iconMail} alt="" width="28" height="30" />
              <div className={styles.modalTextContent}>
                <h3 className={styles.modalTitle}>BEM VINDO À MAEZTRA</h3>
                <h2 className={styles.modalText}>
                  Receba em Primeira mão <br />
                  <span className={styles.modalTextSpan}>
                    desconto e ofertas exclusivas
                  </span>
                </h2>
              </div>
              <input
                className={styles.modalInput}
                type="email"
                placeholder="Digite seu e-mail"
              />
              <div className={styles.modalButton}>
                enviar
                <img src={iconSend} alt="" width="12" height="20" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
