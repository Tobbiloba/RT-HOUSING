import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'

// import './styles.css';

// import required modules
import { EffectCreative } from 'swiper/modules'

const SliderSwiper = ({ images, viewMode }) => {
  return (
    <Swiper
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative]}
      // className={`slider  ${viewMode == 'flex' ? 'md:h-[20rem] xl:h-[20rem] md:max-w-[30rem] sm:max-w-[30rem] w-[100%] border lg:max-w-[40rem]' : 'max-h-[20rem]'} lg:h-[100%]  w-[100%] h-[100%] top-0 left-0 relative overflow-hidden`}
      className={`slider  ${viewMode == 'flex' ? '' : ''} h-[100%] border-sky-400 max-w-[90vw] w-[100%] border lg:max-w-[100%]`}
      // className="mySwiper overflow-hidden h-[100%]"
    >
      {images.map((img, index) => (
        <SwiperSlide className="" key={index}>
          <img
            src={img}
            className={`h-auto md:h-[100%] w-[100%] border ${viewMode == 'flex' ? '' : ''} `}
          />
        </SwiperSlide>
      ))}
      {/* <div className='max-w-[20rem]'> */}
      {/* {
            images.map((img, index) => (
                <SwiperSlide className='w-[100%] ' key={index}>
                    <img src={img} className={`h-[100%] ${viewMode == 'flex' ? 'md:h-[20rem] xl:h-[100%]' : ''} lg:h-[100%]  w-[100%] object-cover`}/>
                </SwiperSlide>
                
            ))
        } */}
      {/* </div> */}
    </Swiper>
  )
}

export default SliderSwiper
