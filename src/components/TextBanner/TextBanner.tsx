import { isMobile } from "react-device-detect";

import styles from "./TextBanner.module.css";

interface ITextBanner {
  title: string;
  subTitle: string;
  imgMobile: string;
  imgDesktop: string;
}

export function TextBanner(props: ITextBanner) {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerContentText}>
          <h2 className={styles.bannerText}>{props.title}</h2>
          <p className={styles.bannerSubTitle}>{props.subTitle}</p>
        </div>
        <div className={styles.containerImg}>
          <img
            src={isMobile ? props.imgMobile : props.imgDesktop}
            alt={props.title}
            className={styles.bannerTextImg}
          />
        </div>
      </div>
    </div>
  );
}
