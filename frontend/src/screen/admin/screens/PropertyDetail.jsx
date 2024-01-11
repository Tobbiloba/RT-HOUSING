import React, { useEffect } from "react";
import Carousel from "../../../components/details/Carousel";
import AvailabilityCalendar from "../../../components/AvailabilityCalendar";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { Rating } from "@mui/material";
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
    // guests: 4,
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
      "Fire Extinguisher",
      "First Aid",
    ],
    available_date_from: "06/01/2024",
    available_date_till: "09/01/2024",
    available: true,
    un_available_date_from: "10/01/2024",
    un_available_date_till: "17/01/2024",
    occupied_date_from: "03/01/2024",
    occupied_date_till: "05/01/2024",
  },
];

const DetailTopCard = ({ detail }) => {
  console.log(detail?.property_no_bathroom);
  return (
    <div className="mb-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-[1.25rem] sm:px-[5%] ">
        <div className="flex flex-col sm:flex-row gap-5">
          <img
            src={detail?.avatar}
            className="w-40 h-40 rounded-full bg-slate-600"
          />
          <div>
            {/* <div className="relative z-10 gap-4 flex items-start text-[12px] text-white">
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
            </div> */}
            <p className="mt-3 text-sky-500 font-[600] text-[15px]">
              {detail?.property_type}
            </p>
            <h1 className="text-sky-200 text-[28px] font-[600]">
              {detail?.property_name}
            </h1>

            <div className="mt-3 flex flex-row gap-3 items-center ">
              <img src="/send-mail.png" className="w-4" />
              <p className="text-slate-500">
                {detail.property_location?.country},{" "}
                {detail.property_location?.state}{" "}
                {detail.property_location?.city}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <p className="text-[24px] font-[600] text-slate-400">
            {detail.pricing}{" "}
            <span className="text-[16px] font-[500] text-slate-500">
              / night
            </span>
          </p>

          <div className="flex flex-row items-center gap-4 mt-2">
            <Rating name="read-only" size="small" value={4} readOnly />
            <p className="text-[14px] text-slate-500">
              100
              {/* {detail.reviews} review */}
            </p>
          </div>

          {/* <div className="flex flex-row gap-12 mt-3 text-slate-500">
            <div className="flex flex-row items-center gap-3">
              <img src="/heart.png" className="w-4" />
              <p>Saved</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <img src="/virus.png" className="w-4" />
              <p>Report Property</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const AboutProperty = ({propertyDetails}) => {
  console.log(propertyDetails)
  return (
    <div className="py-6 px-[5%]">
      <h1 className="text-slate-400 text-[17px] font-[600]">About Property</h1>
      <p className="mt-3 text-slate-500 text-[14px] leading-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempoer incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nrud exercitation ullamco laboris nisi ute aliquip ex ea
        commodo consequat duis auete irure dolor in reprehenderit in voluptate
        velit.
      </p>
      <div className=" mt-7">
        <h1 className="text-slate-400 text-[17px] font-[600]">
          Property Details
        </h1>

        <div className="w-full mt-6">
          <table class="border-collapse w-full text-start ...">
            <thead>
              <tr className="bg-slate-600">
                <th className="border border-slate-900 text-[15px] border-r-gray-300 pl-5 text-start  text-slate-100 py-3 w-6/12">
                  Accommodation
                </th>
                <th className="text-start pl-5 text-gray-100 text-[15px] font-[500]">
                  {detail[0].guests < 10 && "0"}
                  {detail[0].guests} Guests
                  {/* {propertyDetails} */}

                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-900 border-r-gray-300 pl-5 text-start  text-slate-100 py-3 font-[600] text-[15px]">
                  Bedrooms
                </td>
                <td className="text-start pl-5 text-[15px] text-gray-100 font-[500]">
                  {propertyDetails?.property_no_bedrooms}
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="border border-white  border-r-gray-300 pl-5 text-start text-[15px] text-slate-600 py-3 font-[600]">
                  Bathrooms
                </td>
                <td className="text-start pl-5 text-gray-500 text-[15px] font-[500]">
                {propertyDetails?.property_no_bathrooms}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-900 text-[15px]  border-r-gray-300 pl-5 text-start  text-slate-100 py-3 font-[600]">
                  Dimension
                </td>
                <td className="text-start pl-5 text-[15px] text-gray-100 font-[500]">
                  {propertyDetails?.property_size[0] || ''} x {propertyDetails?.property_size[1] || ''}Sq Ft
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="border border-white text-[15px] border-r-gray-300 pl-5 text-start  text-slate-600 py-3 font-[600]">
                  Type
                </td>
                <td className="text-start pl-5 text-[15px] text-gray-500 font-[500]">
                  {detail[0].type}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-900 text-[15px] border-r-gray-300 pl-5 text-start  text-slate-100 py-3 font-[600]">
                  Check-In Start @
                </td>
                <td className="text-start pl-5 text-[15px] text-gray-100 font-[500]">
                  {detail[0].check_in}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Amenities = ({ amenities }) => {
  // console.log(amenities)
  return (
    <div className="my-6 px-[5%]">
      <h1 className="text-slate-400 text-[17px] font-[600]">Amenities</h1>

      <div className="grid grid-cols-1 text-[15px] mt-5 sm:grid-cols-2 gap-8">
        {amenities.map((item, index) => (
          // <AmenitiesCard key={index} detail={item}/>itemitem
          <h1 key={index}>{item}</h1>
        ))}
      </div>
    </div>
  );
};

const Nearby = () => {
  return (
    <div className="my-12">
      <h1 className="text-slate-400 text-[17px] font-[600]">Nearby Locations</h1>
      <div className="w-[100%] bg-gray-600 h-[30rem] my-3 flex items-center justify-center">
        <h1 className="text-[17px]">Feature Not Available...</h1>
      </div>
    </div>
  );
};

const Availability = ({ dates }) => {
  // console.log(dates);

  const dateFormat = (inputDateString) => {
    if(!inputDateString) {
      return;
    }
    // Parse the input date string
    const inputDate = new Date(inputDateString);

    // Get the day, month, and year components
    const day = inputDate.getUTCDate();
    const month = inputDate.getUTCMonth() + 1; // Months are zero-based, so add 1
    const year = inputDate.getUTCFullYear();

    // Pad single-digit day and month with leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    // Construct the final formatted date string
    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  // console.log(dateFormat(dates.unavailable_date_from[0]))
  return (
    <div className="w-[100%] my-12">
      <h1 className="text-slate-400 text-[17px] font-[600]">Availability</h1>
      <p className="mt-3 text-slate-500 text-[14px] leading-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempoer incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nrud exercitation ullamco laboris nisi ute aliquip ex ea
        commodo consequat duis auete irure dolor in reprehenderit in voluptate
        velit.
      </p>

      <div className="mt-8 bg-slate-400 w-fit">
        <AvailabilityCalendar
        availableFromDate={dateFormat(dates?.available_date_from[0])}
        availableToDate={dateFormat(dates.available_date_till[0])}
        unavailableFromDate={dateFormat(dates.unavailable_date_from[0])}
        unavailableToDate={dateFormat(dates.unavailable_date_till[0])}
        occupiedDateFrom={dateFormat(dates.occupied_date_from[0])}
        occupiedDateTill={dateFormat(dates.occupied_date_till[0])}
        />
      </div>

      <div className="mt-10 flex flex-row gap-7">
        <div className="flex flex-row gap-3 items-center">
          <div className="w-4 h-4 bg-gray-500"></div>
          <p>Occupied</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-4 h-4 bg-green-500"></div>
          <p>Available</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-4 h-4 bg-red-500"></div>
          <p>Unavailable</p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="w-[100%] my-10 ">
      <h1 className="text-slate-400 text-[17px] font-[600]">100 Comments</h1>
      <div className="w-[100%] bg-gray-600 h-[30rem] my-3 flex items-center justify-center">
        <h1 className="text-[17px]">In Progress...</h1>
      </div>
    </div>
  );
};

const LoadingPulse = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-row gap-8 justify-end">
        <button className="border border-slate-600 px-6 w-36 h-12 text--600 bg-slate-800"></button>
        <button className="border border-sky-600 px-6 w-36 h-12 py-4 text--600 bg-sky-800"></button>
        <button className="border border-red-600 px-6 w-36 h-12 py-4 text--600 bg-red-800"></button>
      </div>

      <div className="flex mt-12 flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-row gap-6 flex-wrap items-center">
          <div className=" w-36 rounded-full h-36 bg-slate-800"></div>
          <div>
            <p className="bg-slate-800 w-36 h-8"></p>
            <p className="bg-slate-800 w-64 mt-3 h-10"></p>
            <p className="bg-slate-800 w-48 h-6 mt-3"></p>
          </div>
        </div>
        <div>
          <p className="bg-slate-800 w-40 h-12"></p>
          <p className="bg-slate-800 w-64 h-8 mt-3"></p>
          <p className="bg-slate-800 w-72 h-6 mt-3"></p>
        </div>
      </div>

      <div
        className="slide relative mt-16 container
              gap-4 grid grid-cols-1  md:grid-cols-2 md:grid--col
               h-[52rem]"
      >
        <div className="bg-slate-800 md:col-span-1 w-[100%] h-[100%] rounded-md object md:row-span-2"></div>
        <div className="bg-slate-800 md:col-span-1 w-[100%] h-[100%] rounded-md object"></div>
        <div className="bg-slate-800 md:row-span-2 w-[100%] h-[100%] rounded-md object"></div>
      </div>
      <div></div>
    </div>
  );
};
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyDetailById } from "../../../action/property";
const PropertyDetail = () => {
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();
  // console.log(encodeURIComponent(id));
  const loading = false
  const { 
    // loading,
     error } = useSelector((state) => state?.propertyDetail);
  // console.log(error)
  const propertyDetails = useSelector((state) => state?.propertyDetail);
  console.log(propertyDetails);
  // const loading = true
  useEffect(() => {
    // dispatch(getPropertyDetailById(id));
  }, []);
  return (
    <div className="text-white  p-[1rem] md:p-[2rem] exo w-[100%] overflow-hidden">
      {loading ? (
        <LoadingPulse />
      ) : propertyDetails ? (
        <div>
          <div className="flex flex-row flex-wrap gap-8 justify-end">
            <button className="border border-slate-600 px-4 text-[15px] py-2 h-fit text--600 bg-slate-800">
              De Activate Property
            </button>
            <button className="border border-sky-600 px-4 text-[15px] py-2 h-fit text--600 bg-sky-800">
              Edit Property
            </button>
            <button className="border border-red-600 px-4 text-[15px] py-2 h-fit text--600 bg-red-800">
              Delete Property
            </button>
          </div>

          <div className="mt-12">
            <DetailTopCard
              detail={propertyDetails?.details?.property_information}
            />
            <Carousel
              images={
                propertyDetails?.details?.property_information?.property_images
              }
            />

            <div className="flex mt-6 lg:mt-20 flex-row  justify-between ">
              <div className="">
                <div className="flex flex-row w-[100%] gap-x-8  py-4 flex-wrap  gap-y-2">
                  <Link
                    to="about-property"
                    smooth={true}
                    offset={20}
                    duration={500}
                  >
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-900 border-b-white cursor-pointer pb-4">
                      About
                    </span>
                  </Link>
                  <Link
                    to="amenities"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-900 border-b-white cursor-pointer pb-4">
                      Amenities Others
                    </span>
                  </Link>
                  <Link to="nearby" smooth={true} offset={-70} duration={500}>
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-900 border-b-white cursor-pointer pb-4">
                      Nearby
                    </span>
                  </Link>
                  <Link
                    to="availability"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-900 border-b-white cursor-pointer pb-4">
                      Availability
                    </span>
                  </Link>
                  <Link to="terms" smooth={true} offset={-70} duration={500}>
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-900 border-b-white cursor-pointer pb-4">
                      Terms & Rules
                    </span>
                  </Link>
                  <Link to="reviews" smooth={true} offset={-70} duration={500}>
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-900 border-b-white cursor-pointer pb-4">
                      Reviews
                    </span>
                  </Link>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col md:grid md:grid-cols-2 w-[100%] mt-6 gap-x-12 gap-y-6">
                    <Element name="about-property" className="element">
                      <AboutProperty id="about-property" propertyDetails={propertyDetails?.details?.property_information}/>
                    </Element>
                    <Element name="nearby" className="element">
                      <Nearby id="nearby" />
                    </Element>
                    <Element name="amenities" className="element">
                      <Amenities
                        id="amenities"
                        amenities={
                          propertyDetails?.details?.property_information
                            .property_amenities
                        }
                      />
                    </Element>

                    <Element name="availability" className="element">
                      <Availability
                        id="availability"
                        dates={
                          propertyDetails?.details?.property_information
                            .availability
                        }
                      />
                    </Element>
                    {/* <Element name="terms" className="element">
                  <Terms id="terms" />
                </Element> */}
                    <Element name="reviews" className="element col-span-2">
                      <Reviews id="reviews" />
                    </Element>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : <p>error</p>}
    </div>
  );
};

export default PropertyDetail;
