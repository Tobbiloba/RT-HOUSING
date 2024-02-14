import React, { useState, useEffect } from 'react'
// import MasonrySlider from '../details/MansorySlider';
import Carousel from '../components/details/Carousel'
import { Rating } from '@mui/material'
import PropertyOptions from '../components/details/PropertyOptions'
import amenities from '../data/amenities'
import { useDispatch, useSelector } from 'react-redux'
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
  // console.log(detail);
  return (
    <div className="mb-6">
      <div className="flex flex-col lg:flex-row lg:justify-between px-[1.25rem] sm:px-[10%]">
        <div className="flex flex-col sm:flex-row gap-5">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2202/2202108.png"
            className="w-28"
          />
          <div>
            <div className="relative z-10 gap-4 flex items-start text-[7px] text-white">
              {!detail?.featured && (
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
            <p className="mt-3 text-sky-500 text-[15px]">
              {detail.property_type}
            </p>
            <h1 className="text-slate-600 text-[26px] font-[600]">
              {detail.property_name}
            </h1>

            <div className="mt-3 flex flex-row gap-3 items-center text-[15px]">
              <img src="/send-mail.png" className="w-4" />
              <p className="text-slate-500">
                {detail.property_location.country},{' '}
                {detail.property_location.state},{' '}
                {detail.property_location.city}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <p className="text-[25px] font-[600] text-slate-600">
            {detail.pricing}
            <span className="text-[16px] font-[500] text-slate-500">
              / night
            </span>
          </p>

          <div className="flex flex-row items-center gap-4 mt-2">
            <Rating name="read-only" size="small" value={4} readOnly />
            <p className="text-[14px] text-slate-500">5 review</p>
          </div>

          <div className="flex flex-row gap-12 mt-3 text-slate-500 text-[14px]">
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
  )
}
import { IoSettingsOutline } from 'react-icons/io5'

const AboutProperty = ({ detail }) => {
  // console.log(detail)
  return (
    <div className="my-6">
      <h1 className="text-slate-700 text-[15px] font-[600]">About Property</h1>
      <p className="mt-3 text-slate-500 text-[13px] leading-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempoer incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nrud exercitation ullamco laboris nisi ute aliquip ex ea
        commodo consequat duis auete irure dolor in reprehenderit in voluptate
        velit.
      </p>
      <div className=" mt-7">
        <h1 className="text-slate-700 text-[15px] font-[600]">
          Property Details
        </h1>

        <div className="w-full mt-4">
          <table class="border-collapse w-full text-start text-[13px] ...">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-white border-r-gray-300 pl-5 text-start  text-slate-600 py-3 w-6/12">
                  Accommodation
                </th>
                <th className="text-start pl-5 text-gray-500 font-[500]">
                  {/* {detail[0].guests < 10 && "0"}
                  {detail[0].guests} Guests */}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white border-r-gray-300 pl-5 text-start  text-slate-600 py-3 font-[600]">
                  Bedrooms
                </td>
                <td className="text-start pl-5 text-gray-500 font-[500]">
                  {detail.property_no_bedrooms}
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="border border-white border-r-gray-300 pl-5 text-start  text-slate-600 py-3 font-[600]">
                  Bathrooms
                </td>
                <td className="text-start pl-5 text-gray-500 font-[500]">
                  {detail.property_no_bathrooms}
                </td>
              </tr>
              <tr>
                <td className="border border-white border-r-gray-300 pl-5 text-start  text-slate-600 py-3 font-[600]">
                  Dimension
                </td>
                <td className="text-start pl-5 text-gray-500 font-[500]">
                  {detail.property_size[0]} by {detail.property_size[1]} Sq Ft
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className="border border-white border-r-gray-300 pl-5 text-start  text-slate-600 py-3 font-[600]">
                  Type
                </td>
                <td className="text-start pl-5 text-gray-500 font-[500]">
                  {detail.property_type}
                </td>
              </tr>
              <tr>
                <td className="border border-white border-r-gray-300 pl-5 text-start  text-slate-600 py-3 font-[600]">
                  Check-In Start @
                </td>
                <td className="text-start pl-5 text-gray-500 font-[500]">
                  9:00 Am
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// console.log(amenities[0])

const AmenitiesCard = ({ detail }) => {
  // console.log(detail)

  return (
    <div>
      {amenities.map(
        item =>
          item.name === detail && (
            <div
              key={item.id}
              className="flex w-[100%] text-[12px] sm:max-w-[20rem] flex-row justify-between items-center"
            >
              <p className="text-slate-600 font-[600]">{item.name}</p>
              <img className="w-9 h-9" src={item.img} alt={item.name} />
            </div>
          ),
      )}
    </div>
  )
}

const Amenities = () => {
  return (
    <div className="my-6">
      <h1 className="text-slate-700 text-[15px] font-[600]">Amenities</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {detail[0].amenities.map((item, index) => (
          <AmenitiesCard key={index} detail={item} />
        ))}
      </div>
    </div>
  )
}

const Nearby = () => {
  return (
    <div className="my-12">
      <h1 className="text-slate-700 text-[15px] font-[600]">
        Nearby Locations
      </h1>
      <div className="w-[100%] bg-gray-200 h-[30rem] text-[13px] my-3 flex items-center justify-center">
        <h1 className="">Feature Not Available...</h1>
      </div>
    </div>
  )
}

const Availability = ({ detail }) => {
  console.log(detail.availability.available_date_from[0].split(''))
  const convertDate = dateString => {
    const dateObject = new Date(dateString)

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
    const formattedDate = dateObject.toLocaleDateString('en-GB', options)
    return formattedDate
  }

  // console.log(convertDate(detail.availability.available_date_from[0]))
  return (
    <div className="w-[100%] my-12">
      <h1 className="text-slate-700 text-[17px] font-[600]">Availability</h1>
      <p className="mt-3 text-slate-500 text-[13px] leading-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempoer incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nrud exercitation ullamco laboris nisi ute aliquip ex ea
        commodo consequat duis auete irure dolor in reprehenderit in voluptate
        velit.
      </p>

      <div className="mt-8">
        <AvailabilityCalendar
          availableFromDate={convertDate(
            detail.availability.available_date_from[0],
          )}
          availableToDate={convertDate(
            detail.availability.available_date_till[0],
          )}
          // unavailableFromDate={convertDate(
          //   detail.availability.unavailable_date_from[0],
          // )}
          // unavailableToDate={convertDate(
          //   detail.availability.unavailable_date_till[0],
          // )}
          // occupiedDateFrom={convertDate(
          //   detail.availability.occupied_date_from[0],
          // )}
          // occupiedDateTill={convertDate(
          //   detail.availability.occupied_date_till[0],
          // )}
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
  )
}

const Terms = () => {
  return (
    <div className="my-12 bg-gray-100 max-w-[50rem] px-4 py-12 flex flex-col md:flex-row gap-5">
      <img
        src="http://amentotech.com/htmls/tenanto/images/property-single/team-img.jpg"
        className="w-36 object-contain h-auto"
      />
      <div className="flex flex-col gap-3">
        <h1 className="text-slate-700 text-[15px] font-[600]">
          Terms & Conditions
        </h1>
        <p className="mt-3 text-slate-500 text-[13px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempoer incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nrud exercitation ullamco laboris nisi ute
          aliquip ex ea commodo consequat duis auete irure dolor in
          reprehenderit in voluptate velit.
        </p>

        <button className="border bg-red-500 text-white rounded-md w-fit text-[13px] px-5 py-3">
          Read More
        </button>
      </div>
    </div>
  )
}
const Reviews = () => {
  return (
    <div className="w-[100%] my-10">
      <h1 className="text-slate-700 text-[15px] font-[600]">100 Comments</h1>
      <div className="w-[100%] bg-gray-200 h-[30rem] my-3 flex items-center justify-center">
        <h1 className="text-[13px]">In Progress...</h1>
      </div>
    </div>
  )
}

// import { Link } from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll'
import AvailabilityCalendar from '../components/AvailabilityCalendar'
import Footer from '../components/home/Footer'
import { getPropertyDetailById } from '@/action/property'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { IoIosArrowDown } from 'react-icons/io'
import Input from '@/components/Input'
// import Textarea from "@/components/textarea/Textarea";
// import Textarea from "@/components/textarea/Textarea";
import { tourSchema, contactAgentSchema } from '@/schemas'
import { useFormik } from 'formik'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Checkbox from '@/components/Checkbox'
import Textarea from '@/components/textarea/Textarea'
import { getCurrentTime, getNext7Days } from '@/components/utils'
import dayjs from 'dayjs'
const PropertyDetails = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    // window.scrollTo(0, 0);
  }, [])
  const images = [
    'http://amentotech.com/htmls/tenanto/images/property-single/img-01.jpg',
    'http://amentotech.com/htmls/tenanto/images/property-single/img-02.jpg',
    'http://amentotech.com/htmls/tenanto/images/property-single/img-03.jpg',
    'http://amentotech.com/htmls/tenanto/images/property-single/img-01.jpg',
    'http://amentotech.com/htmls/tenanto/images/property-single/img-02.jpg',
    'http://amentotech.com/htmls/tenanto/images/property-single/img-03.jpg',
    'http://amentotech.com/htmls/tenanto/images/property-single/img-02.jpg',
    'http://amentotech.com/htmls/tenanto/images/property-single/img-03.jpg',
    // Add more image URLs as needed
  ]

  const [showProperty, setShowProperty] = useState({
    right: true,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setShowProperty({ ...showProperty, [anchor]: open })
  }

  const anchor = 'right'

  const { id } = useParams()
  // console.log(id)
  const dispatch = useDispatch()
  const { details, loading, error } = useSelector(state => state.propertyDetail)

  // console.log(details);
  useEffect(() => {
    // if(id) {
    dispatch(getPropertyDetailById(id))
    // }
  }, [])

 
  const [selectedTourDate, setSelectedDateTour] = useState(0)

  // Formik instance for contact agent form
  const contactAgentFormik = useFormik({
    initialValues: {
      name: '',
      message: '',
      email: '',
      phone: '',
      termsAndConditions: false,
    },
    validationSchema: contactAgentSchema,
    onSubmit: values => {
      // Handle contact agent form submission
      console.log('Contact Agent Form Values:', values)
    },
  })

  // Formik instance for tour form
  const tourFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: tourSchema,
    onSubmit: values => {
      // Handle tour form submission
      console.log('Tour Form Values:', values)
    },
  })

  console.log(details)
  return (
    <div className="bg-slate-50 pt-16 font-mono">
      {loading ? (
        <div className="h-[100vh] flex justify-center">
          <CircularProgress />
        </div>
      ) : !loading && details ? (
        <div>
          <Carousel images={details?.property_information.property_images} />
          {/* <div className="fixed top-0 right-0 z-50"> */}
          <PropertyOptions
            state={showProperty}
            setState={setShowProperty}
            item={details.property_information}
          />
          {/* </div> */}
          <div className="container mx-auto">
            <div className="w-[100%] mt-12 px-[1rem] flex items-end justify-end tablet:hidden">
              <div
                onClick={toggleDrawer(anchor, true)}
                className="border text-slate-500 cursor-pointer border-slate-500 w-10 flex items-center justify-center h-10 rounded-md text-[21px]"
              >
                <IoSettingsOutline />
              </div>
            </div>

            <div className="flex mt-4 lg:mt-20 flex-col lg:flex-row gap-16 justify-between px-[1rem] relative">
              <div className="">
                <div className="flex flex-row w-[100%] gap-x-8 border border-white border-b-gray-200 py-4 text-[14px] flex-wrap  gap-y-2">
                  <Link
                    to="about-property"
                    smooth={true}
                    offset={20}
                    duration={500}
                  >
                    <span className="text-slate-500 font-[600]">About</span>
                  </Link>
                  <Link
                    to="amenities"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className="text-slate-500 font-[600]">
                      Amenities Others
                    </span>
                  </Link>
                  <Link to="nearby" smooth={true} offset={-70} duration={500}>
                    <span className="text-slate-500 font-[600]">Nearby</span>
                  </Link>
                  <Link
                    to="availability"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className="text-slate-500 font-[600]">
                      Availability
                    </span>
                  </Link>
                  <Link to="terms" smooth={true} offset={-70} duration={500}>
                    <span className="text-slate-500 font-[600]">
                      Terms & Rules
                    </span>
                  </Link>
                  <Link to="reviews" smooth={true} offset={-70} duration={500}>
                    <span className="text-slate-500 font-[600]">Reviews</span>
                  </Link>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col w-[100%] text-[14px]">
                    <Element name="about-property" className="element">
                      <AboutProperty
                        id="about-property"
                        detail={details.property_information}
                      />
                    </Element>

                    <Element name="amenities" className="element ">
                      <Amenities id="amenities" />
                    </Element>
                    <Element name="nearby" className="element">
                      <Nearby id="nearby" />
                    </Element>
                    <Element name="availability" className="element">
                      <Availability
                        id="availability"
                        detail={details.property_information}
                      />
                    </Element>
                    <Element name="terms" className="element">
                      <Terms id="terms" />
                    </Element>
                  </div>
                </div>
              </div>
              <div className=" lg:w-4/12 min-w-[22.5rem] h-fit">
                <div className="border p-[1rem] pt-8 pb-12">
                  <h1 className="font-[600]">Contact an Agent</h1>

                  <div className="flex flex-row mt-2 justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <img
                        src="https://eliezergroup.com/wp-content/webp-express/webp-images/uploads/2021/08/How-To-Become-A-Facilities-Manager.jpg.webp"
                        className="w-28 h-24 object-cover rounded-md"
                      />

                      <div>
                        <h1 className="font-[600]">John Doe</h1>
                        <p className="text-[13px] text-slate-500">
                          Modern House
                        </p>
                        <p className="text-[14px]">001 234 5678</p>
                      </div>
                    </div>
                    <IoIosArrowDown className="text-slate-500" />
                  </div>

                  <form
                    onSubmit={contactAgentFormik.handleSubmit}
                    className="flex h-fit flex-col md:grid grid-cols-2 lg:flex gap-5 mt-6"
                  >
                    <Input
                      placeholder=""
                      type="text"
                      label="Name"
                      value={contactAgentFormik.values.name}
                      handleChange={contactAgentFormik.handleChange}
                      error={
                        contactAgentFormik.errors.name &&
                        contactAgentFormik.touched.name
                          ? contactAgentFormik.errors.name
                          : undefined
                      }
                      id="name"
                      // formType="custom"
                    />
                    <Input
                      placeholder=""
                      type="text"
                      label="Email"
                      value={contactAgentFormik.values.email}
                      handleChange={contactAgentFormik.handleChange}
                      error={
                        contactAgentFormik.errors.email &&
                        contactAgentFormik.touched.email
                          ? contactAgentFormik.errors.email
                          : undefined
                      }
                      id="email"
                      // formType="custom"
                    />
                    <Input
                      placeholder=""
                      type="text"
                      label="Phone"
                      value={contactAgentFormik.values.phone}
                      handleChange={contactAgentFormik.handleChange}
                      error={
                        contactAgentFormik.errors.phone &&
                        contactAgentFormik.touched.phone
                          ? contactAgentFormik.errors.phone
                          : undefined
                      }
                      id="phone"
                      // formType="custom"
                    />
                    <div className='col-span-2'>
                    <Input
                      placeholder=""
                      type="text"
                      label="Message"
                      value={contactAgentFormik.values.phone}
                      handleChange={contactAgentFormik.handleChange}
                      error={
                        contactAgentFormik.errors.phone &&
                        contactAgentFormik.touched.phone
                          ? contactAgentFormik.errors.phone
                          : undefined
                      }
                      id="phone"
                      inputType="textarea"
                      // formType="custom"
                    />
                    </div>
                    {/* <Textarea 

                    /> */}
                    <Checkbox
                      label="I agree to the terms and conditions"
                      field={tourFormik.getFieldProps('termsAndConditions')}
                      form={{
                        errors: tourFormik.errors.termsAndConditions,
                        touched: tourFormik.touched.termsAndConditions,
                      }}
                      id="termsAndConditions"
                    />
                    {/* <Input
        type="checkbox"
        label="Accept Terms and Conditions"
        checked={contactAgentFormik.values.termsAndConditions}
        handleChange={contactAgentFormik.handleChange}
        error={
          contactAgentFormik.errors.termsAndConditions &&
          contactAgentFormik.touched.termsAndConditions
            ? contactAgentFormik.errors.termsAndConditions
            : undefined
        }
        id="termsAndConditions"
      /> */}

                    {/* <div className="flex flex-row items-center gap-4">
                      <input type="checkbox" className="" />
                      <p className="text-[13px]">
                        I agree to the{" "}
                        <span className="font-[600] underline text-[14px]">
                          Terms and Conditions
                        </span>
                      </p>
                    </div> */}

                    <button
                      type="submit"
                      className="flex flex-row gap-4 items-center border py-3 text-white bg-slate-800 justify-center"
                    >
                      Send Message <IoIosArrowRoundForward />
                    </button>
                  </form>
                </div>

                <div className="mt-6 border pb-6 p-[1rem]">
                  <h1 className="font-[600]">Property Tour</h1>

                  <div className="gap-3 grid grid-cols-3 justify-evenly mt-6">
                    {getNext7Days().map((item, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedDateTour(index)}
                        className={`${index === selectedTourDate ? 'bg-slate-600 border shadow-xl text-white' : 'bg-slate-200 text-slate-500'} cursor-pointer hover:border-b hover:border-t border-slate-500 py-6 text-[14px]  text-center`}
                      >
                        <p className="text-[12px]">{item.dayOfWeek}</p>
                        <h1 className="text-black my-1 font-[600] text-[16px]">
                          {item.dateOfMonth}
                        </h1>
                        <p className="text-[12px]">{item.monthOfYear}</p>
                      </div>
                    ))}
                    {/* <div className="border-b-4 rounded-xl px-8 py-5 text-slate-500 text-[14px] text-center">
                      <p>Sat</p>
                      <h1 className="text-black font-[600] text-[16px]">13</h1>
                      <p>Jan</p>
                    </div>

                    

                    <div className="rounded-xl bg-slate-100 px-8 py-5 text-[14px] text-slate-500 text-center">
                      <p>Wed</p>
                      <h1 className="text-black font-[600] text-[16px]">17</h1>
                      <p>Jan</p>
                    </div> */}
                  </div>

                  <h1 className="font-[600] mt-12">Tour Type</h1>
                  <div className="mt-4 flex flex-row gap-5 text-[14px] text-slate-600 font-[600]">
                    <p>In Person</p>
                    <p>Video Chat</p>
                  </div>
                  <form className="flex flex-col md:grid grid-cols-2 lg:flex gap-6 mt-4">
                    {/* <Input
                      value={tourTime}
                      setValue={setTourTime}
                      label="Time"
                      placeholder=""
                    /> */}

                    <Input
                      placeholder=""
                      type="text"
                      label="Name"
                      value={tourFormik.values.name}
                      handleChange={tourFormik.values.name}
                      error={
                        tourFormik.values.name && tourFormik.values.name
                          ? tourFormik.values.name
                          : undefined
                      }
                      id="name"
                    />
                    <Input
                      placeholder=""
                      type="number"
                      label="Phone"
                      value={tourFormik.values.phone}
                      handleChange={tourFormik.values.phone}
                      error={
                        tourFormik.values.phone && tourFormik.values.phone
                          ? tourFormik.values.phone
                          : undefined
                      }
                      id="phone"
                    />

                    <Input
                      placeholder=""
                      type="text"
                      label="Email"
                      value={tourFormik.values.email}
                      handleChange={tourFormik.values.email}
                      error={
                        tourFormik.values.email && tourFormik.values.email
                          ? tourFormik.values.email
                          : undefined
                      }
                      id="email"
                    />
                    <button type='submit'>REQUEST TOUR</button>
                    {/* <form onSubmit={tourFormik.handleSubmit} className="flex flex-col gap-6 mt-6">
                    <Input
                      placeholder=""
                      type="text"
                      label="Name"
                      value={tourFormik.values.name}
                      handleChange={tourFormik.handleChange}
                      error={
                        tourFormik.errors.name && tourFormik.touched.name
                          ? tourFormik.errors.name
                          : undefined
                      }
                      id="name"
                    />
                    <Input
                      placeholder=""
                      type="text"
                      label="Email"
                      value={tourFormik.values.email}
                      handleChange={tourFormik.handleChange}
                      error={
                        tourFormik.errors.email && tourFormik.touched.email
                          ? tourFormik.errors.email
                          : undefined
                      }
                      id="email"
                    />
                    <Input
                      placeholder=""
                      type="text"
                      label="Phone"
                      value={tourFormik.values.phone}
                      handleChange={tourFormik.handleChange}
                      error={
                        tourFormik.errors.phone && tourFormik.touched.phone
                          ? tourFormik.errors.phone
                          : undefined
                      }
                      id="phone"
                    />
                    <Checkbox
                      label="I agree to the terms and conditions"
                      field={tourFormik.getFieldProps("termsAndConditions")}
                      form={{
                        errors: tourFormik.errors.termsAndConditions,
                        touched: tourFormik.touched.termsAndConditions,
                      }}
                    />
                

                    <button className="flex flex-row gap-4 items-center border py-3 text-white bg-slate-800 justify-center">
                      Send Message <IoIosArrowRoundForward />
                    </button>
                  </form> */}
                    {/* <Textarea
                      value={tourMessage}
                      setValue={setTourMessage}
                      label="Message"
                    /> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        !loading &&
        error && (
          <div className="h-[20rem] border">
            <p>There is a error</p>
          </div>
        )
      )}

      <Footer />
    </div>
  )
}

export default PropertyDetails
