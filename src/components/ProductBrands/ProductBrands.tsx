import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./ProductBrands.module.css";

interface IProductBrandsItem {
  productBrandsImg: string;
}

interface IProductBrands {
  productBrandText: string;
  productsBrandsItems: IProductBrandsItem[];
}

export function ProductBrands(props: IProductBrands) {
  return (
    <div className={styles.container}>
      <h2 className={styles.productBrandText}>{props.productBrandText}</h2>
      <div className={styles.content}>
        <Swiper
          wrapperClass={styles.swiperWrapper}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={20}
          loop
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
        >
          {props.productsBrandsItems.map((productsBrandsItem, index) => (
            <SwiperSlide className={styles.swiperSlide}>
              <div key={index}>
                <img
                  className={styles.productBrandsImg}
                  src={productsBrandsItem.productBrandsImg}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
