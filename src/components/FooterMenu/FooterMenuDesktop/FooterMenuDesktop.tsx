import styles from "./FooterMenuDesktop.module.css";

interface IFooterMenuDesktop {
  title: string;
  subTitle: Array<string>;
}

export function FooterMenuDesktop({ props }: { props: IFooterMenuDesktop[] }) {
  return (
    <div className={styles.container}>
      {props.map((item, index) => (
        <ul key={index} className={styles.footerWrapper}>
          <h2 className={styles.footerMenuTitle}>{item.title}</h2>
          {item.subTitle.map((item, index) => (
            <li className={styles.footerMenuItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
