import { useState } from "react";
import logo from "../assets/svg/logo-maeztra.svg";
import iconShoppingbag from "../assets/icons/iconShoppingbag.svg";
import iconSearch from "../assets/icons/iconSearch.svg";
import styles from "./HeaderMobile.module.css";
import { MenuMobile } from "../../Menu/MenuMobile/MenuMobile";
import { menuItemsMobile } from "../../../mocks/menuItemsMobile";

export function HeaderMobile() {
  const [inputVisible, setInputVisible] = useState(false);

  const handleSearchButtonClick = () => {
    setInputVisible((prevVisible) => !prevVisible);
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <MenuMobile menuItems={menuItemsMobile} />
          <div className={styles.containerLogo}>
            <img src={logo} alt="Logo Maeztra" />
          </div>
          <div className={styles.containerSearch}>
            <form className={styles.containerForm}>
              <button
                className={styles.buttonSearch}
                onClick={handleSearchButtonClick}
              >
                <img src={iconSearch} alt="Ícone de Pesquisa" />
              </button>
            </form>
          </div>
          <div className={styles.containerLinks}>
            <a href="#" className={styles.shoppingBag}>
              <img src={iconShoppingbag} alt="Ícone Meu Carrinho" />
            </a>
          </div>
        </div>
        <div>
          {inputVisible && (
            <input
              type="text"
              placeholder="O Que Você Busca?"
              className={styles.inputSearch}
            />
          )}
        </div>
      </div>
    </header>
  );
}
