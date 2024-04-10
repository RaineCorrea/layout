import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./TopBar.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ITopbarItem {
  title: string;
}

interface ITopBar {
  topBarItems: ITopbarItem[];
}

export function TopBar(props: ITopBar) {
  return (
    <div className={styles.container}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop
      >
        {props.topBarItems.map((topBarItem, index) => (
          <SwiperSlide key={index}>
            <div className={styles.topBar}>
              <a href="#" className={styles.topBarLink}>
                {topBarItem.title}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
