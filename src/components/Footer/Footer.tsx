import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerIconsSocial}>
        <a href="https://www.facebook.com/maeztraconsultoria">
          <img
            src="/src/components/assets/svg/iconFacebook.svg"
            alt="Icone Facebook"
          />
        </a>
        <a href="https://www.linkedin.com/company/maeztra/">
          <img
            src="/src/components/assets/svg/iconLinkedin.svg"
            alt="Icone Linkedin"
          />
        </a>
        <a href="https://www.instagram.com/maeztra_consultoria/">
          <img
            src="/src/components/assets/svg/iconInstagram.svg"
            alt="Icone Instagram"
          />
        </a>
        <a href="https://www.youtube.com/user/aQuatroDigital">
          <img
            src="/src/components/assets/svg/iconYoutube.svg"
            alt="Icone Youtube"
          />
        </a>
      </div>
      <div className={styles.footerIconCard}>
        <img src="/src/components/assets/svg/iconVisa.svg" alt="Icone Visa" />
        <img
          src="/src/components/assets/svg/iconMasterCard.svg"
          alt="Icone MasterCard"
        />
        <img src="/src/components/assets/svg/iconVisa.svg" alt="Icone Visa" />
        <img
          src="/src/components/assets/svg/iconMasterCard.svg"
          alt="Icone MasterCard"
        />
      </div>
      <div className={styles.footerLogo}>
        <div className={styles.footerVtex}>
          <span>Powered by</span>
          <img src="/src/components/assets/svg/iconVtex.svg" alt="Logo Vtex" />
        </div>
        <div className={styles.footerMaeztra}>
          <span>Developed by</span>
          <img
            src="/src/components/assets/svg/iconMaeztra.svg"
            alt="logo Maeztra"
          />
        </div>
      </div>
    </div>
  );
}
