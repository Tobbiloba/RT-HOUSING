// @ts-nocheck
import { getPropertyByType } from '@/action/property'
import React, { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { FaBath } from 'react-icons/fa'
import { IoBedSharp } from 'react-icons/io5'
import { SlSizeActual } from 'react-icons/sl'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FaLocationDot } from 'react-icons/fa6'
import { FreeMode, Pagination } from 'swiper/modules'
const LazyLoadedImage = lazy(() => import('../../LazyLoadedImage'))
const SwiperContainer = () => {
  const one = useMediaQuery({ maxWidth: 508 })
  const two = useMediaQuery({ maxWidth: 788 })
  const three = useMediaQuery({ maxWidth: 920 })
  const four = useMediaQuery({ minWidth: 1024 })



  const {properties} = useSelector(state => state.propertyType)
  return (
    <>
      <Swiper
        slidesPerView={one ? 1 : two ? 2 : three ? 3 : four && 4}
        spaceBetween={30}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper pb-[2rem]"
      >

        {properties && properties.map((property, index) => {
          return (
            <SwiperSlide
              key={index}
              className="hover:border-b hover:shadow-md border-slate-500 "
            >
              <div className="relative  max-h-[15rem] overflow-hidden">
               

                <div className="w-[100%] h-[15rem]">
                  <Suspense
                    fallback={<div className="h-[15rem] w-[100%]"></div>}
                  >
                    <LazyLoadedImage src={property.property_information.property_images[0]} className=" " />
                  </Suspense>
                </div>
                <div className="w-[100%] h-[100%] z-[50] bg-black/50 absolute top-0 left-0"></div>
              </div>

              <div className=" p-[1.25rem] py-[2rem]">
                <p className="text-[18px] font-[600]">
                  {property.property_information.pricing}{' '}
                  <span className="text-slate-500 text-[13px]">
                    / night
                  </span>
                </p>

                <div className="flex flex-row mt-3 gap-4 items-center justify-between">
                  <p className="text-[16px] gap-3 items-center  flex flex-row">
                    <FaBath className="text-slate-500" />
                    {property.property_information.property_no_bathrooms}
                  </p>
                  <p className="text-[16px] gap-3 items-center  flex flex-row">
                    <IoBedSharp className="text-slate-500" />
                    {property.property_information.property_no_bedrooms}
                  </p>
                  <p className="text-[16px] gap-3 items-center  flex flex-row">
                    <SlSizeActual className="text-slate-500" />
                    {property.property_information.property_size}
                  </p>
                </div>

                <div className="flex mt-4 flex-row items-center gap-3">
                  <FaLocationDot className="text-slate-500" />
                  <h1 className="text-[16px]">{property.property_information.property_location.city}</h1>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

const Categories = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPropertyByType('Apartment'))
  }, [])

  

  return (
    <div className="flex items-center justify-center exo bg-gray-100 h-fit py-6 lg:py-12 ">
      <div className="md:container px-[1rem] flex-col w-[100%] flex">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="font-[600] lg:text-5xl text-slate-500 md:tex-4xl text-3xl">
              Discover Our Featured <br /> Properties
            </h1>
            <p className="mt-2 text-[15px] font-[600] text-slate-700">
              Discover best deals for your future house
            </p>
          </div>

          <button className="border px-8 w-fit mt-4 md:mt-0 py-2 text-slate-700 border-slate-700 text-[15px]">
            See More
          </button>
        </div>

        <div className="mt-7 ">
          <SwiperContainer />
        </div>
      </div>
    </div>
  )
}

export default Categories
