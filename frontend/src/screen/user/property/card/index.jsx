// @ts-nocheck
import React from "react"
import amenities from "@/data/amenities"
import { Rating } from "@mui/material"
import Input from '@/components/Input'
import AvailabilityCalendar from "@/components/AvailabilityCalendar"
// @ts-nocheck
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { tourSchema, contactAgentSchema } from '@/schemas'
import { useFormik } from 'formik'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Checkbox from '@/components/Checkbox'
import { getNext7Days } from '@/components/utils'
// const DetailTopCard = ({ detail }) => {
//   return (
//     <div className="mb-6">
//       <div className="flex flex-col lg:flex-row lg:justify-between px-[1.25rem] sm:px-[10%]">
//         <div className="flex flex-col sm:flex-row gap-5">
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/2202/2202108.png"
//             className="w-28"
//           />
//           <div>
//             <div className="relative z-10 gap-4 flex items-start text-[7px] text-white">
//               {!detail?.featured && (
//                 <h1 className="px-2 py-[2px] rounded-sm bg-red-500">
//                   FEATURED
//                 </h1>
//               )}

//               {detail.featured && (
//                 <h1 className="px-2 py-[2px] rounded-sm bg-blue-500">
//                   TOP RATED
//                 </h1>
//               )}
//             </div>
//             <p className="mt-3 text-sky-500 text-[15px]">
//               {detail.property_type}
//             </p>
//             <h1 className="text-slate-600 text-[26px] font-[600]">
//               {detail.property_name}
//             </h1>

//             <div className="mt-3 flex flex-row gap-3 items-center text-[15px]">
//               <img src="/send-mail.png" className="w-4" />
//               <p className="text-slate-500">
//                 {detail.property_location.country},{' '}
//                 {detail.property_location.state},{' '}
//                 {detail.property_location.city}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-12 lg:mt-0">
//           <p className="text-[25px] font-[600] text-slate-600">
//             {detail.pricing}
//             <span className="text-[16px] font-[500] text-slate-500">
//               / night
//             </span>
//           </p>

//           <div className="flex flex-row items-center gap-4 mt-2">
//             <Rating name="read-only" size="small" value={4} readOnly />
//             <p className="text-[14px] text-slate-500">5 review</p>
//           </div>

//           <div className="flex flex-row gap-12 mt-3 text-slate-500 text-[14px]">
//             <div className="flex flex-row items-center gap-3">
//               <img src="/heart.png" className="w-4" />
//               <p>Saved</p>
//             </div>
//             <div className="flex flex-row items-center gap-3">
//               <img src="/virus.png" className="w-4" />
//               <p>Report Property</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
const AboutProperty = ({ detail }) => {
    return (
      <div className="my-6">
        <h1 className="text-slate-700 text-[15px] font-[600]">About Property</h1>
        <p className="mt-3 text-slate-500 text-[13px] leading-6">
          {detail.property_description}
        </p>
        <div className=" mt-7">
          <h1 className="text-slate-700 text-[15px] font-[600]">
            Property Details
          </h1>
  
          <div className="w-full mt-4">
            <table className="border-collapse w-full text-start text-[13px] ...">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-white border-r-gray-300 pl-5 text-start  text-slate-600 py-3 w-6/12">
                    Accommodation
                  </th>
                  <th className="text-start pl-5 text-gray-500 font-[500]">
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
  
  const Amenities = ({detail}) => {
    return (
      <div className="my-6">
        <h1 className="text-slate-700 text-[15px] font-[600]">Amenities</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {detail.property_amenities.map((item, index) => (
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
    // console.log(detail)
    const convertDate = dateString => {
      if(dateString) {
        const dateObject = new Date(dateString)
  
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
      const formattedDate = dateObject.toLocaleDateString('en-GB', options)
      return formattedDate
      } return;
    }
  
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
  
          <button className="border bg-red-500 text-white w-fit text-[13px] px-5 py-3">
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


  const ContactAgent = () => {
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
    return(
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
                    <div className="col-span-2">
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
                      field={contactAgentFormik.getFieldProps('termsAndConditions')}
                      form={{
                        errors: contactAgentFormik.errors.termsAndConditions,
                        touched: contactAgentFormik.touched.termsAndConditions,
                      }}
                      id="termsAndConditions"
                    />

                    <button
                      type="submit"
                      className="flex flex-row gap-4 items-center border py-3 text-white bg-slate-800 justify-center"
                    >
                      Send Message <IoIosArrowRoundForward />
                    </button>
                  </form>
                </div>
    )
  }




const TourRequest = () => {
    const [selectedTourDate, setSelectedDateTour] = useState(0)

        // Formik instance for tour form
  const tourFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      termsAndConditions: false,
      selectedDate: getNext7Days()[0],
    },
    validationSchema: tourSchema,
    onSubmit: values => {
      // Handle tour form submission
      console.log('Tour Form Values:', values)
    },
  })
// console.log(getNext7Days()[0])


    return (
      <div className="mt-6 border pb-6 p-[1rem]">
      <h1 className="font-[600]">Property Tour</h1>

      <div className="gap-3 grid grid-cols-3 justify-evenly mt-6">
        {/* {getNext7Days().map((item, index) => (
          <div
            key={index}
            onClick={() => {
              console.log(item)
              tourFormik.values.selectedDate = item
            }}
            className={`${tourFormik.values.selectedDate.dateOfMonth == item.dateOfMonth ? 'bg-slate-600 border shadow-xl text-white' : 'bg-slate-200 text-slate-500'} cursor-pointer hover:border-b hover:border-t border-slate-500 py-6 text-[14px]  text-center`}
          >
            <p className="text-[12px]">{item.dayOfWeek}</p>
            <h1 className="text-black my-1 font-[600] text-[16px]">
              {item.dateOfMonth}
            </h1>
            <p className="text-[12px]">{item.monthOfYear}</p>
          </div>
        ))} */}

{getNext7Days().map((item, index) => (
  <div
    key={index}
    onClick={() => {
      // console.log(item);
      tourFormik.setFieldValue('selectedDate', item);
    }}
    className={`${
      tourFormik.values.selectedDate.dateOfMonth === item.dateOfMonth
        ? 'bg-slate-600 border shadow-xl text-white'
        : 'bg-slate-200 text-slate-500'
    } cursor-pointer hover:border-b hover:border-t border-slate-500 py-6 text-[14px] text-center`}
  >
    <p className="text-[12px]">{item.dayOfWeek}</p>
    <h1 className="text-black my-1 font-[600] text-[16px]">
      {item.dateOfMonth}
    </h1>
    <p className="text-[12px]">{item.monthOfYear}</p>
  </div>
))}
      </div>

      <h1 className="font-[600] mt-12">Tour Type</h1>
      <div className="mt-4 flex flex-row gap-5 text-[14px] text-slate-600 font-[600]">
        <p>In Person</p>
        <p>Video Chat</p>
      </div>
      <form className="flex flex-col md:grid grid-cols-2 lg:flex gap-6 mt-4">
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
        <button type="submit" className="border w-fit px-6 py-3 bg-slate-700 text-white text-[13px]">REQUEST TOUR</button>
      </form>
    </div>
    )
  }
  export {
    // DetailTopCard,
    AboutProperty,
    Reviews, Terms, Availability, Amenities, Nearby, ContactAgent, TourRequest
  }