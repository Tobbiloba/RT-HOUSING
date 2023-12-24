import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperAnimation = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper lg:flex hidden"
      >
 <SwiperSlide style={{ backgroundImage: 'url("/img-02.jpg")' }} className='h-[70vh] w-[100vw]'>
        {/* Your slide content goes here */}
      </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/img-05.jpg")' }} className='h-[70vh] w-[100vw]'>Slide 2</SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'url("/img-08.jpg")' }} className='h-[70vh] w-[100vw]'>Slide 3</SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
export default SwiperAnimation;