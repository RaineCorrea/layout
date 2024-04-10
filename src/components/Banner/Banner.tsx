import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./Banner.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { PromotionsBanners } from "../PromotionsBanners/PromotionsBanners";
import promotionBannerDesktop from "../assets/svg/promotionBannerDesktop.svg";
import promotionBannerMobile from "../assets/svg/promotionBannerMobile.svg";

export function Banner() {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop
      >
        <SwiperSlide>
          <PromotionsBanners
            imgMobile={promotionBannerMobile}
            imgDesktop={promotionBannerDesktop}
            title={"Promoções de Outono"}
            subTitle={
              "Confiras os melhores looks para combinar com você nesse Outono"
            }
            textButton={"Conferir"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionsBanners
            imgMobile={promotionBannerMobile}
            imgDesktop={promotionBannerDesktop}
            title={"Promoções de Outono"}
            subTitle={
              "Confiras os melhores looks para combinar com você nesse Outono"
            }
            textButton={"Conferir"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionsBanners
            imgMobile={promotionBannerMobile}
            imgDesktop={promotionBannerDesktop}
            title={"Promoções de Outono"}
            subTitle={
              "Confiras os melhores looks para combinar com você nesse Outono"
            }
            textButton={"Conferir"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionsBanners
            imgMobile={promotionBannerMobile}
            imgDesktop={promotionBannerDesktop}
            title={"Promoções de Outono"}
            subTitle={
              "Confiras os melhores looks para combinar com você nesse Outono"
            }
            textButton={"Conferir"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
