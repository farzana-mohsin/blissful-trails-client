import Slide from "./Slide";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className='w-full mb-10 lg:mb-14 rounded-xl'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image='https://i.ibb.co/9wSvdtF/LvnaUGF.jpg'
            text='Your Journey Begins'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image='https://i.ibb.co/vvFWZb4/6346831-orig.jpg'
            text='Treat yourself with a journey to your inner self'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image='https://i.ibb.co/NsCDyz7/1630132810-18.jpg'
            text='Dare To Explore'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image='https://i.ibb.co/0X5RStK/1-a92-GOsmt-F8ja-XFduh-WLPgw.jpg'
            text='Book a memorable tour at great price'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
