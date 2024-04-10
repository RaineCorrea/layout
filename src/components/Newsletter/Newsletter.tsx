import styles from "./Newsletter.module.css";

export function Newsletter() {
  return (
    <div className={styles.container}>
      <div className={styles.newletterContainer}>
        <h2 className={styles.newsletterTitle}>Recebe Nossa Newsletter</h2>
        <div className={styles.newsletterContent}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className={styles.newsletterInput}
          />
          <button className={styles.newsletterButton}>enviar</button>
        </div>
      </div>
    </div>
  );
}
