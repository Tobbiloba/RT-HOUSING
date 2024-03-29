// @ts-nocheck
import React, { useEffect } from 'react'
import Carousel from '../../../components/common/details/Carousel'
import AvailabilityCalendar from '@/components/common/calendar/AvailabilityCalendar'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import { Rating } from '@mui/material'
import {
  AboutProperty,
  Terms,
  Nearby,
  Availability,
  Amenities,
} from '@/components/common/card'

const detail = [
  {
    id: 5,
    featured: true,
    top_rated: true,
    type: 'Villa',
    name: 'Exquisite Lakeside Villa',
    star: 5,
    reviews: 150,
    bedroom: 4,
    guests: 8,
    location: '101 Serenity Lane, Rome, Italy',
    avatar: 'https://cdn-icons-png.flaticon.com/128/2202/2202108.png',
    saved: true,

    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoer incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nrud exercitation ullamco laboris nisi ute aliquip ex ea commodo consequat duis auete irure dolor in reprehenderit in voluptate velit.',
    // guests: 4,
    bedrooms: 3,
    bathrooms: 3,
    children: 3,
    infants: 2,
    adults: 4,
    dimension: 1200,
    check_in: '9:00 am',
    price: 640,
    other_expenses: [
      {
        id: 1,
        expense: 'Car Rental',
        price: 50,
      },
      {
        id: 2,
        expense: 'Fresh Grocereis',
        price: 50,
      },
      {
        id: 3,
        expense: 'Medical Representative',
        price: 50,
      },
    ],
    amenities: [
      'WI-FI',
      'Air Conditioning',
      'TV Cable',
      'Dish Washer',
      'Laundry',
      'Fire Extinguisher',
      'First Aid',
    ],
    available_date_from: '06/01/2024',
    available_date_till: '09/01/2024',
    available: true,
    un_available_date_from: '10/01/2024',
    un_available_date_till: '17/01/2024',
    occupied_date_from: '03/01/2024',
    occupied_date_till: '05/01/2024',
  },
]

const DetailTopCard = ({ detail }) => {
  console.log(detail?.property_no_bathroom)
  return (
    <div className="mb-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-[1.25rem] sm:px-[5%] md:px-[2%] ">
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
                {detail?.property_location?.country},{' '}
                {detail?.property_location?.state}{' '}
                {detail?.property_location?.city}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <p className="text-[24px] font-[600] text-slate-400">
            {detail?.pricing}{' '}
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
  )
}

const Reviews = () => {
  return (
    <div className="w-[100%] my-10 ">
      <h1 className="text-slate-400 text-[17px] font-[600]">100 Comments</h1>
      <div className="w-[100%] bg-gray-600 h-[30rem] my-3 flex items-center justify-center">
        <h1 className="text-[17px]">In Progress...</h1>
      </div>
    </div>
  )
}

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
  )
}
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPropertyDetailById } from '../../../action/property'
import { getUserActiveOrder } from '@/action/order'
const PropertyDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  console.log(id)
  const dispatch = useDispatch()
  // console.log(encodeURIComponent(id));
  // const loading = false
  const { loading, error } = useSelector(state => state?.propertyDetail)
  // console.log(error)
  const propertyDetails = useSelector(state => state?.propertyDetail)
  // const {order} = useSelector((state) => state.activeUserOrder)
  // console.log(order)
  // const loading = true
  useEffect(() => {
    dispatch(getPropertyDetailById(id))
    // dispatch(getUserActiveOrder('65ca388cf1369640b78fbeb5', id))
  }, [])
  console.log(propertyDetails?.details?.property_information.property_amenities)
  return (
    <div className="text-white  p-[1rem] md:p-[2rem] exo w-[100%] overflow-hidden">
      {loading ? (
        <LoadingPulse />
      ) : propertyDetails?.details ? (
        <div>
          <div className="flex flex-row flex-wrap gap-8 justify-end">
            <button className="border border-slate-600 px-4 text-[15px] py-2 h-fit text--600 bg-slate-800">
              De Activate Property
            </button>
            <button
              className="border border-sky-600 px-4 text-[15px] py-2 h-fit text--600 bg-sky-800"
              onClick={() => navigate(`/admin/properties-update/${id}`)}
            >
              Edit Property
            </button>
            <button className="border border-red-600 px-4 text-[15px] py-2 h-fit text--600 bg-red-800">
              Delete Property
            </button>
          </div>

          <div className="mt-12">
            {/* <DetailTopCard
              detail={propertyDetails?.details?.property_information}
            /> */}
            <Carousel
              images={
                propertyDetails?.details?.property_information?.property_images
              }
            />

            <div className="flex border mt-6 lg:mt-20 flex-row w-[100%] justify-between ">
              <div className="w-[100%]">
                <div className="flex flex-row border w-[100%] gap-x-8  py-4 flex-wrap  gap-y-2">
                  <Link
                    to="about-property"
                    smooth={true}
                    offset={20}
                    duration={500}
                  >
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-600 border-b-white cursor-pointer pb-4">
                      About
                    </span>
                  </Link>
                  <Link
                    to="amenities"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-600 border-b-white cursor-pointer pb-4">
                      Amenities Others
                    </span>
                  </Link>
                  <Link to="nearby" smooth={true} offset={-70} duration={500}>
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-600 border-b-white cursor-pointer pb-4">
                      Nearby
                    </span>
                  </Link>
                  <Link
                    to="availability"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-600 border-b-white cursor-pointer pb-4">
                      Availability
                    </span>
                  </Link>
                  <Link to="terms" smooth={true} offset={-70} duration={500}>
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-600 border-b-white cursor-pointer pb-4">
                      Terms & Rules
                    </span>
                  </Link>
                  <Link to="reviews" smooth={true} offset={-70} duration={500}>
                    <span className="text-slate-300 text-[17px] hover:border-2 border-slate-600 border-b-white cursor-pointer pb-4">
                      Reviews
                    </span>
                  </Link>
                </div>

                <div className="flex flex-col border w-[100%]">
                  <div className="flex flex-col md:grid md:grid-cols-2 w-[100%] mt-6 gap-x-12 gap-y-6">
                    <Element name="about-property" className="element">
                      <AboutProperty
                        id="about-property"
                        detail={propertyDetails?.details?.property_information}
                      />
                    </Element>
                    <Element name="nearby" className="element">
                      <Nearby id="nearby" />
                    </Element>
                    <Element name="amenities" className="element">
                      <Amenities
                        id="amenities"
                        detail={propertyDetails?.details?.property_information}
                        white
                      />
                    </Element>

                    <Element name="availability" className="element">
                      <Availability
                        id="availability"
                        detail={propertyDetails?.details?.property_information}
                      />
                    </Element>
                    <Element name="terms" className="element ">
                      <Terms id="terms" />
                    </Element>
                    <Element name="reviews" className="element col-span-2">
                      <Reviews id="reviews" />
                    </Element>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>error</p>
      )}
    </div>
  )
}

export default PropertyDetail
