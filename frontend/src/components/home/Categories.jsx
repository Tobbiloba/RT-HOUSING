// @ts-nocheck
import { getPropertyByType } from "@/action/property";
import React, { useEffect, useState, slate, Suspense,lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { FaBath } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { SlSizeActual } from "react-icons/sl";

const properties = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    price: "$100,000",
    purpose: "sale",
    paymentPlan: "month",
    city: "Tranquil Countryside Estate",
    state: "New York",
    bedroom: "4",
    bathroom: "3",
    size: "78 m2",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    price: "$100,000",
    purpose: "rent",
    paymentPlan: "week",
    city: "Tranquil Countryside Estate",
    state: "New York",
    bedroom: "4",
    bathroom: "3",
    size: "78 m2",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    price: "$100,000",
    purpose: "sale",
    paymentPlan: "night",
    city: "Tranquil Countryside Estate",
    state: "New York",
    bedroom: "4",
    bathroom: "3",
    size: "78 m2",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    price: "$100,000",
    purpose: "rent",
    paymentPlan: "month",
    city: "Tranquil Countryside Estate",
    state: "New York",
    bedroom: "4",
    bathroom: "3",
    size: "78 m2",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    price: "$100,000",
    purpose: "sale",
    paymentPlan: "night",
    city: "Tranquil Countryside Estate",
    state: "New York",
    bedroom: "4",
    bathroom: "3",
    size: "78 m2",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    price: "$100,000",
    purpose: "sale",
    paymentPlan: "month",
    city: "Tranquil Countryside Estate",
    state: "New York",
    bedroom: "4",
    bathroom: "3",
    size: "78 m2",
  },
];
const categories = ["Residential", "Commercial", "Apartments", "Office Space"];

const CategoryCard = ({ property }) => {
  return <div className="w-[100%] rounded-xl p-2 bg-white"></div>;
};
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FaLocationDot } from "react-icons/fa6";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Item } from "@radix-ui/react-dropdown-menu";
// const slateLoadedImage = slate(() => import("../LazyLoadedImage"));
const LazyLoadedImage = lazy(() => import("../LazyLoadedImage"));
const SwiperContainer = () => {
  const one = useMediaQuery({ maxWidth: 508 });
  const two = useMediaQuery({ maxWidth: 788 });
  const three = useMediaQuery({ maxWidth: 920 });
  const four = useMediaQuery({ minWidth: 1024 });
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
        className="mySwiper"
      >
        {/* <SwiperSlide className="border">Slide 1</SwiperSlide>
        <SwiperSlide className="border">Slide 1</SwiperSlide>
        <SwiperSlide className="border">Slide 1</SwiperSlide>
        <SwiperSlide className="border">Slide 1</SwiperSlide>
        <SwiperSlide className="border">Slide 1</SwiperSlide> */}

        {properties.map((property, index) => {
          // console.log(property);
         
          return (
            <SwiperSlide key={index} className="hover:border-b hover:shadow-md border-slate-500 rounded-xl">
              <div className="relative  max-h-[15rem] overflow-hidden">
                {/* <img src={property.img} className="w-[100%] h-auto" /> */}
                {/* <slateLoadedImage
                  src={property.img}
                  className=" w-[100%] h-auto rounded-md"
                /> */}

                <div className="w-[100%]">
                <Suspense fallback={<div className="h-[15rem] w-[100%]"></div>}>
                <LazyLoadedImage
                  src={property.img}
                  className=" "
                />
              </Suspense>
                </div>
                <div className="w-[100%] h-[100%] z-[50] bg-black/50 absolute top-0 left-0"></div>
              </div>

              <div className=" p-[1.25rem] py-[2rem]">
                <p className="text-[18px] font-[600]">
                  {property.price}{" "}
                  <span className="text-slate-500 text-[13px]">
                    / {property.paymentPlan}
                  </span>
                </p>

                <div className="flex flex-row mt-3 gap-4 items-center justify-between">
                  <p className="text-[16px] gap-3 items-center  flex flex-row">
                    <FaBath className="text-slate-500" />
                    {property.bathroom}
                  </p>
                  <p className="text-[16px] gap-3 items-center  flex flex-row">
                    <IoBedSharp className="text-slate-500" />
                    {property.bedroom}
                  </p>
                  <p className="text-[16px] gap-3 items-center  flex flex-row">
                    <SlSizeActual className="text-slate-500" />
                    {property.size}
                  </p>
                </div>

                <div className="flex mt-4 flex-row items-center gap-3">
                  <FaLocationDot className="text-slate-500"/>
                  <h1 className="text-[16px]">{property.city}</h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Residential");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropertyByType("lol"));
  }, []);

  const property = useSelector((state) => state.propertyType);

  return (
    <div className="flex items-center justify-center exo bg-gray-100 h-fit py-6 lg:py-12 ">
      <div className="container flex-col flex">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="font-[600] lg:text-5xl text-slate-500 md:tex-4xl text-3xl">
              Discover Our Featured <br /> Properties
            </h1>
            <p className="mt-2 text-[15px] font-[600] text-slate-700">
              Discover best deals for your future house
            </p>
          </div>

          <button className="border px-8 py-2 text-slate-700 border-slate-700 text-[15px]">
            See More
          </button>
        </div>

        <div className="mt-7">
          <SwiperContainer />
        </div>
      </div>
    </div>
  );
};

export default Categories;
