import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./ProductDeals.module.css";

interface ICardProductsItem {
  icon?: string;
  title: string;
  subTitle: string;
}

interface ICardProducts {
  cardProductsItems: ICardProductsItem[];
}

export function ProductDeals(props: ICardProducts) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Por que comprar na Maeztra? </span>
      <div className={styles.content}>
        <Swiper
          wrapperClass={styles.swiperWrapper}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={20}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: "auto",
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
        >
          {props.cardProductsItems.map((cardProductsItem, index) => (
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.containerCard} key={index}>
                <img
                  className={styles.cardProductsItemImg}
                  src={cardProductsItem.icon}
                  alt=""
                  width="32"
                  height="32"
                />
                <div className={styles.containerText}>
                  <h2 className={styles.cardProductsItemTitle}>
                    {cardProductsItem.title}
                  </h2>
                  <span className={styles.cardProductsItemSubTitle}>
                    {cardProductsItem.subTitle}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
