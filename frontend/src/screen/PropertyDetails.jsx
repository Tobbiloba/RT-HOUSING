import React, { useState } from "react";
// import MasonrySlider from '../details/MansorySlider';
import Carousel from "../components/details/Carousel";
import { Rating } from "@mui/material";
import PropertyOptions from "../components/details/PropertyOptions";

const detail = [
  {
    id: 5,
    featured: true,
    top_rated: true,
    type: "Villa",
    name: "Exquisite Lakeside Villa",
    star: 5,
    reviews: 150,
    bedroom: 4,
    guests: 8,
    location: "101 Serenity Lane, Rome, Italy",
    avatar: "https://cdn-icons-png.flaticon.com/128/2202/2202108.png",
    saved: true,

    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoer incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nrud exercitation ullamco laboris nisi ute aliquip ex ea commodo consequat duis auete irure dolor in reprehenderit in voluptate velit.",
    guests: 4,
    bedrooms: 3,
    bathrooms: 3,
    children: 3,
    infants: 2,
    adults: 4,
    dimension: 1200,
    check_in: "9:00 am",
    price: 640,
    other_expenses: [
      {
        id: 1,
        expense: "Car Rental",
        price: 50,
      },
      {
        id: 2,
        expense: "Fresh Grocereis",
        price: 50,
      },
      {
        id: 3,
        expense: "Medical Representative",
        price: 50,
      },
    ],
    amenities: [
      "WI-FI",
      "Air Conditioning",
      "TV Cable",
      "Dish Washer",
      "Laundry",
      "Loft",
      "Airport",
    ],

    add_ons: [
      "Car Rental",
      "Fresh Groceries",
      "Fitness Facilities or Gym Access",
      "High-Speed Internet",
      "Barbecue Grill or Outdoor Kitchen",
      "Event Space or Banquet Hall",
      "Community Events or Workshops",
      "Pet-Friendly Accommodations",
    ],
  },
];

const DetailTopCard = ({ detail }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col lg:flex-row lg:justify-between px-[1.25rem] sm:px-[10%]">
        <div className="flex flex-col sm:flex-row gap-5">
          <img src={detail.avatar} className="w-32" />
          <div>
            <div className="relative z-10 gap-4 flex items-start text-[12px] text-white">
              {detail.featured && (
                <h1 className="px-2 py-[2px] rounded-sm bg-red-500">
                  FEATURED
                </h1>
              )}

              {detail.featured && (
                <h1 className="px-2 py-[2px] rounded-sm bg-blue-500">
                  TOP RATED
                </h1>
              )}
            </div>
            <p className="mt-3 text-sky-500 font-[600] text-[17px]">
              {detail.type}
            </p>
            <h1 className="text-yellow-900 text-[26px] font-[600]">
              {detail.name}
            </h1>

            <div className="mt-3 flex flex-row gap-3 items-center ">
              <img src="/send-mail.png" className="w-4" />
              <p className="text-slate-500">{detail.location}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <p className="text-[26px] font-[600] text-yellow-900">
            {detail.price}{" "}
            <span className="text-[16px] font-[500] text-slate-500">
              / night
            </span>
          </p>

          <div className="flex flex-row items-center gap-4 mt-2">
            <Rating
              name="read-only"
              size="small"
              value={detail.star}
              readOnly
            />
            <p className="text-[14px] text-slate-500">
              {detail.reviews} review
            </p>
          </div>

          <div className="flex flex-row gap-12 mt-3 text-slate-500">
            <div className="flex flex-row items-center gap-3">
              <img src="/heart.png" className="w-4" />
              <p>Saved</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <img src="/virus.png" className="w-4" />
              <p>Report Property</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import { IoSettingsOutline } from "react-icons/io5";

const AboutProperty = () => {
  return <div className="my-6">
    <h1 className="text-slate-700 text-[19px] font-[600]">About Property</h1>
    <p className="mt-3 text-slate-500 text-[15px] leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoer incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nrud exercitation ullamco laboris nisi ute aliquip ex ea commodo consequat duis auete irure dolor in reprehenderit in voluptate velit.
</p>  </div>;
};

const Amenities = () => {
  return <div className="w-[100%] bg-yellowgray-500 h-[80vh]">amenities</div>;
};

const Nearby = () => {
  return <div className="w-[100%] bg-sky-500 h-[80vh]">amenities</div>;
};

const Availability = () => {
  return <div className="w-[100%] bg-blue-500 h-[80vh]">amenities</div>;
};

const Terms = () => {
  return <div className="w-[100%] bg-red-500 h-[80vh]">amenities</div>;
};
const Reviews = () => {
  return <div className="w-[100%] bg-gray-500 h-[80vh]">amenities</div>;
};

// import { Link } from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
const PropertyDetails = () => {
  const images = [
    "http://amentotech.com/htmls/tenanto/images/property-single/img-01.jpg",
    "http://amentotech.com/htmls/tenanto/images/property-single/img-02.jpg",
    "http://amentotech.com/htmls/tenanto/images/property-single/img-03.jpg",
    "http://amentotech.com/htmls/tenanto/images/property-single/img-01.jpg",
    "http://amentotech.com/htmls/tenanto/images/property-single/img-02.jpg",
    "http://amentotech.com/htmls/tenanto/images/property-single/img-03.jpg",
    "http://amentotech.com/htmls/tenanto/images/property-single/img-02.jpg",
    "http://amentotech.com/htmls/tenanto/images/property-single/img-03.jpg",
    // Add more image URLs as needed
  ];

  const [showProperty, setShowProperty] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowProperty({ ...showProperty, [anchor]: open });
  };

  const anchor = "right";

  return (
    <div className="bg-slate-50 pt-16 exo">
      <DetailTopCard detail={detail[0]} />
      <Carousel images={images} />


      <div className="container mx-auto">
         <div className="w-[100%] mt-12 px-[1rem] flex items-end justify-end tablet:hidden">
        <div
          onClick={toggleDrawer(anchor, true)}
          className="border text-slate-500 cursor-pointer border-slate-500 w-10 flex items-center justify-center h-10 rounded-md text-[21px]"
        >
          <IoSettingsOutline />
        </div>
      </div>
      

     

      <div className="flex mt-6 lg:mt-20 flex-row  justify-between px-[1rem]">
        <div className="">
          <div className="flex flex-row w-[100%] gap-x-8 border border-white border-b-gray-200 py-4 flex-wrap  gap-y-2">
            <Link to="about-property" smooth={true} offset={20} duration={500}>
              <span className="text-slate-500 font-[600]">About</span>
            </Link>
            <Link to="amenities" smooth={true} offset={-70} duration={500}>
              <span className="text-slate-500 font-[600]">Amenities Others</span>
            </Link>
            <Link to="nearby" smooth={true} offset={-70} duration={500}>
              <span className="text-slate-500 font-[600]">Nearby</span>
            </Link>
            <Link to="availability" smooth={true} offset={-70} duration={500}>
              <span className="text-slate-500 font-[600]">Availability</span>
            </Link>
            <Link to="terms" smooth={true} offset={-70} duration={500}>
              <span className="text-slate-500 font-[600]">Terms & Rules</span>
            </Link>
            <Link to="reviews" smooth={true} offset={-70} duration={500}>
              <span className="text-slate-500 font-[600]">Reviews</span>
            </Link>
          </div>
        

        <div className="flex flex-col">
          <div className="flex flex-col w-[100%]">
            <Element name="about-property" className="element">
              <AboutProperty id="about-property" />
            </Element>

            <Element name="amenities" className="element">
              <Amenities id="amenities" />
            </Element>
            <Element name="nearby" className="element">
              <Nearby id="nearby" />
            </Element>
            <Element name="availability" className="element">
              <Availability id="availability" />
            </Element>
            <Element name="terms" className="element">
              <Terms id="terms" />
            </Element>
            <Element name="reviews" className="element">
              <Reviews id="reviews" />
            </Element>
          </div>
        </div>
        </div>
        <div>
          <PropertyOptions
            state={showProperty}
            setState={setShowProperty}
            item={detail[0]}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
