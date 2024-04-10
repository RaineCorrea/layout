import styles from "./MenuDesktop.module.css";

interface IMenuItemDesktop {
  link: string;
  iconImg?: string;
  titleLink: string;
  highlight?: boolean;
}

interface IMenuDesktop {
  menuItemsDesktop: IMenuItemDesktop[];
}

export function MenuDesktop(props: IMenuDesktop) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {props.menuItemsDesktop.map((menuItemDesktop, index) => (
          <a
            className={
              menuItemDesktop.highlight
                ? styles.menuItemHighlight
                : styles.menuItem
            }
            key={index}
            href={menuItemDesktop.link}
          >
            {menuItemDesktop.iconImg && (
              <img
                className={styles.iconMenuDesktop}
                src={menuItemDesktop.iconImg}
                alt={menuItemDesktop.titleLink}
              />
            )}
            {menuItemDesktop.titleLink}
          </a>
        ))}
      </div>
    </div>
  );
}
