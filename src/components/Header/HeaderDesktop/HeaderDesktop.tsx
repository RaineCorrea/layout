import logo from "../assets/svg/logo-maeztra.svg";
import iconUser from "../assets/icons/iconUser.svg";
import iconWishlist from "../assets/icons/iconWishlist.svg";
import iconShoppingbag from "../assets/icons/iconShoppingbag.svg";

import styles from "./HeaderDesktop.module.css";

export function HeaderDesktop() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.containerLogo}>
            <img src={logo} alt="Logo Maeztra" />
          </div>
          <div className={styles.containerSearch}>
            <form className={styles.containerForm}>
              <input
                type="text"
                placeholder="O Que Você Busca?"
                className={styles.inputSearch}
              />
              <button type="submit" className={styles.buttonSearch}>
                Buscar
              </button>
            </form>
          </div>
          <div className={styles.containerLinks}>
            <a href="#">
              <img src={iconUser} alt="Ícone Minha Conta" />
              Minha Conta
            </a>
            <a href="#">
              <img src={iconWishlist} alt="Ícone Wishlist" />
              Wishlist
            </a>
            <a href="#" className={styles.shoppingBag}>
              <img src={iconShoppingbag} alt="Ícone Meu Carrinho" />
              Meu Carrinho
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
