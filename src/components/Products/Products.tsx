import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { ProductCard } from "./ProductCards/ProductCards";
import { useFetch } from "../../hooks/useFetch";

import styles from "./Product.module.css";
interface IProductCards {
  id: string;
  imgProduct: string;
  colors: Array<string>;
  price: number;
  title: string;
  description: string;
}

export function Products() {
  const { data } = useFetch<IProductCards[]>("products");

  return (
    <div className={styles.container}>
      <h2 className={styles.productTitle}>As Mais Pedidas</h2>
      <Swiper
        wrapperClass={styles.swiperWrapper}
        slidesPerView={"auto"}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
          },
        }}
      >
        {data?.map((product) => (
          <SwiperSlide className={styles.swiperSlide} key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
