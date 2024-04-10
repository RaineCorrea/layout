import { useState } from "react";
import styles from "./FooterMenuMobile.module.css";

interface IFooterMenuMobile {
  title: string;
  subTitle: Array<string>;
}

export function FooterMenuMobile({ props }: { props: IFooterMenuMobile[] }) {
  const [accordionOpen, setAccordionOpen] = useState<boolean[]>(
    new Array(props.length).fill(false)
  );

  const toggleAccordion = (index: number) => {
    const newAccordionOpen = [...accordionOpen];
    newAccordionOpen[index] = !newAccordionOpen[index];
    setAccordionOpen(newAccordionOpen);
  };

  return (
    <div className={styles.container}>
      {props.map((item, index) => (
        <div className={styles.footerMobileWrapper} key={index}>
          <button
            className={styles.footerButton}
            onClick={() => toggleAccordion(index)}
          >
            <span className={styles.footerTitle}>{item.title}</span>
            {accordionOpen[index] ? (
              <span className={styles.footerIcon}>-</span>
            ) : (
              <span className={styles.footerIcon}>+</span>
            )}
          </button>
          <div
            className={`${styles.footerContent} ${
              accordionOpen[index]
                ? `${styles.footerActive}`
                : `${styles.footerHide}`
            }`}
          >
            {item.subTitle.map((item, index) => (
              <div className={styles.footerItem} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
