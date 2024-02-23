// @ts-nocheck
import React from 'react'
import amenities from '@/data/amenities'
import Input from '@/components/Input'
import AvailabilityCalendar from '@/components/common/calendar/AvailabilityCalendar'
// @ts-nocheck
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { convertDate } from '@/components/utils'
import { useParams } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { tourSchema, contactAgentSchema } from '@/schemas'
import { useFormik } from 'formik'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Checkbox from '@/components/common/checkbox/Checkbox'
import { getNext7Days } from '@/components/utils'
import { contactAgent, requestTour } from '@/action/message'
import Spinner from '../spinner/Spinner'
import { clear } from '@/action/employee'

const AboutProperty = ({ detail, isUser }) => {
  return (
    <div className="my-6">
      <h1 className={`${isUser ? "text-slate-700" :"text-white"} text-[16px] mb-4 font-[600]`}>About Property</h1>
      <p className={`mt-3 ${isUser ? "text-slate-500" :"text-slate-300"} text-[13px] leading-6`}>
        {detail.property_description}
      </p>
      <div className=" mt-7">
        <h1 className={`${isUser ? "text-slate-700" :"text-white"} text-[16px] mb-4 font-[600]`}>
          Property Details
        </h1>

        <div className="w-full mt-4">
          <table className="border-collapse w-full text-start text-[13px] ...">
            <thead>
              <tr className="bg-slate-100">
                <th className={`border ${isUser ? "border-white border-r-gray-300" : "border-slate-800 border-r-gray-300"}  pl-5 text-start  text-slate-600 py-3 w-6/12`}>
                  Accommodation
                </th>
                <th className="text-start pl-5 text-gray-500 font-[500]"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`border ${isUser ? "border-white border-r-gray-300" : "border-slate-800 border-r-gray-300"} pl-5 text-start  text-slate-600 py-3 font-[600]`}>
                  Bedrooms
                </td>
                <td className="text-start pl-5 text-gray-500 font-[500]">
                  {detail.property_no_bedrooms}
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className={`border ${isUser ? "border-white border-r-gray-300" : "border-slate-800 border-r-gray-300"} pl-5 text-start  text-slate-600 py-3 font-[600]`}>
                  Bathrooms
                </td>
                <td className="text-start pl-5 text-gray-500 font-[500]">
                  {detail.property_no_bathrooms}
                </td>
              </tr>
              <tr>
                <td className={`border ${isUser ? "border-white border-r-gray-300" : "border-slate-800 border-r-gray-300"} pl-5 text-start  text-slate-600 py-3 font-[600]`}>
                  Dimension
                </td>
                <td className="text-start pl-5 text-gray-500 font-[500]">
                  {detail.property_size[0]} by {detail.property_size[1]} Sq Ft
                </td>
              </tr>
              <tr className="bg-slate-100">
                <td className={`border ${isUser ? "border-white border-r-gray-300" : "border-slate-800 border-r-gray-300"} pl-5 text-start  text-slate-600 py-3 font-[600]`}>
                  Type
                </td>
                <td className="text-start pl-5 text-gray-500 font-[500]">
                  {detail.property_type}
                </td>
              </tr>
              <tr>
                <td className={`border ${isUser ? "border-white border-r-gray-300" : "border-slate-800 border-r-gray-300"} pl-5 text-start  text-slate-600 py-3 font-[600]`}>
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

const AmenitiesCard = ({ detail, isUser }) => {
  return (
    <div>
      {amenities.map(
        item =>
          item.name === detail && (
            <div
              key={item.id}
              className="flex w-[100%] text-[13px] sm:max-w-[20rem] flex-row justify-between items-center"
            >
              <p className={` ${isUser ? "text-slate-600" : "text-slate-300"} font-[600]`}>{item.name}</p>
              <img className="w-9 h-9" src={item.img} alt={item.name} />
            </div>
          ),
      )}
    </div>
  )
}

const Amenities = ({ detail, isUser }) => {
  return (
    <div className="my-6">
      <h1 className={`${isUser ? "text-slate-700" :"text-white"} text-[16px] mb-4 font-[600]`}>Amenities</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {detail.property_amenities.map((item, index) => (
          <AmenitiesCard key={index} detail={item} isUser={isUser}/>
        ))}
      </div>
    </div>
  )
}

const Nearby = ({isUser}) => {
  return (
    <div className="my-12">
      <h1 className={`${isUser ? "text-slate-700" :"text-white"} text-[16px] mb-4 font-[600]`}>
        Nearby Locations
      </h1>
      <div className="w-[100%] bg-gray-200 h-[30rem] text-[13px] my-3 flex items-center justify-center">
        <h1 className="">Feature Not Available...</h1>
      </div>
    </div>
  )
}

const Availability = ({ detail, isUser }) => {


  return (
    <div className="w-[100%] my-12">
      <h1 className={`${isUser ? "text-slate-700" :"text-white"} text-[16px] mb-4 font-[600]`}>Availability</h1>
      <p className={`mt-3 ${isUser ? "text-slate-500" :"text-slate-300"} text-[13px] leading-6`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempoer incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nrud exercitation ullamco laboris nisi ute aliquip ex ea
        commodo consequat duis auete irure dolor in reprehenderit in voluptate
        velit.
      </p>

      <div className="mt-8 bg-slate-700 w-fit">
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

const Terms = ({isUser}) => {
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
    const { id } = useParams()
    const dispatch = useDispatch()
    const { details
      , loading
     } = useSelector(state => state.propertyDetail)
    const { tourLoading, status} = useSelector((state) => state?.contactAgent)
    const onSubmit = () => {
      dispatch(contactAgent(values, id))
    
    }
  // Formik instance for contact agent form
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleReset,
    setValues,
    getFieldProps
  } = useFormik({
    initialValues: {
      username: '',
      message: '',
      email: '',
      phone: '',
      termsAndConditions: false,
    },
    validationSchema: contactAgentSchema,
    onSubmit: () => {
      // Handle contact agent form submission
      onSubmit()
    },
  })
console.log(details?.agent[0].img)
  useEffect(() => {
    if (status) {
      setValues(prevValues => ({
        ...prevValues,
        name: "",
        message: "",
        email: "",
        phone: "",
      }));

      handleReset()
      dispatch(clear())
    }
  }, [status]);
  // const loading = true
  return (
    <div className="border p-[1rem] pt-8 pb-12">
      <h1 className="font-[600]">Contact an Agent</h1>

      {
        loading ? <div className='flex pt-6 pb-4 justify-center'>
          <Spinner />
        </div>: <div className="flex flex-row mt-2 justify-between">
        <div className="flex flex-row gap-6 items-center">
          <img
            src={details?.agent[0]?.img}
            className="w-28 h-24 object-cover"
          />

          <div>
            <h1 className="font-[600]">{details?.agent[0]?.username}</h1>
            <p className="text-[13px] text-slate-500">Modern House</p>
            <p className="text-[14px]">{details?.agent[0]?.phone_no}</p>
          </div>
        </div>
        <IoIosArrowDown className="text-slate-500" />
      </div>
      }

      <form
        onSubmit={handleSubmit}
        className="flex h-fit flex-col md:grid grid-cols-2 lg:flex gap-5 mt-6"
      >
        <Input
          placeholder=""
          type="text"
          label="Name"
          value={values.username}
          handleChange={handleChange}
          error={
            errors.username && touched.username
              ? errors.username
              : undefined
          }
          id="username"
          errorbg
        />
        <Input
          placeholder=""
          type="text"
          label="Email"
          value={values.email}
          handleChange={handleChange}
          error={
            errors.email && touched.email
              ? errors.email
              : undefined
          }
          id="email"
          errorbg
        />
        <Input
          placeholder=""
          type="text"
          label="Phone"
          value={values.phone}
          handleChange={handleChange}
          error={
            errors.phone && touched.phone
              ? errors.phone
              : undefined
          }
          id="phone"
          errorbg
        />
        <div className="col-span-2">
          <Input
            placeholder=""
            type="text"
            label="Message"
            value={values.message}
            handleChange={handleChange}
            error={
              errors.message &&
              touched.message
                ? errors.message
                : undefined
            }
            id="message"
            inputType="textarea"
            errorbg
          />
        </div>
        <Checkbox
          label="I agree to the terms and conditions"
          field={getFieldProps('termsAndConditions')}
          form={{
            errors: errors.termsAndConditions,
            touched: touched.termsAndConditions,
          }}
          id="termsAndConditions"
        />

<button
        disabled={tourLoading}
          type="submit"
          className={`flex flex-row gap-4 items-center border py-3 text-white bg-slate-800 justify-center ${tourLoading && "cursor-not-allowed"}`}
        >{
          tourLoading ? <div className='w-[100%] flex  gap-5 items-center justify-center'>
            <Spinner />
            <p>Please wait...</p>
          </div>: <div className='flex flex-row gap-6 items-center'>
          Send Message <IoIosArrowRoundForward />
          </div>
        }
        </button>
      </form>
    </div>
  )
}



const TourRequest = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
 
  const { loading, status} = useSelector((state) => state?.requestTour)
  const onSubmit = () => {
    console.log(values)
  
    dispatch(requestTour(values, id))
  }
  // Formik instance for tour form
  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue, 
    handleSubmit,
    handleReset,
    setValues
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      // termsAndConditions: false,
      tourDate: getNext7Days()[0],
      additionalNote: ""
    },
    validationSchema: tourSchema,
    onSubmit: () => {
      // Handle tour form submission
      console.log('Tour Form Values:', values)
      onSubmit()
    },
  })
  useEffect(() => {
    if (status) {
      setValues(prevValues => ({
        ...prevValues,
        additionalNote: "",
        email: "",
        username: "",
        phone: "",
      }));
      handleReset()

      dispatch(clear())
    }
  }, [status]);
  return (
    <div className="mt-6 border pb-6 p-[1rem]">
      <h1 className="font-[600]">Property Tour</h1>
      <div className="gap-3 grid grid-cols-3 justify-evenly mt-6">
        {getNext7Days().map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setFieldValue('tourDate', item)
            }}
            className={`${
            values.tourDate.dateOfMonth === item.dateOfMonth
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
      <form className="flex flex-col md:grid grid-cols-2 lg:flex gap-6 mt-4" onSubmit={handleSubmit}>
        <Input
          placeholder=""
          type="text"
          label="Username"
          value={values.username}
          handleChange={handleChange}
          error={
            errors.username && touched.username
              ? errors.username
              : undefined
          }
          id="username"
          errorbg
        />
        <Input
          placeholder=""
          type="number"
          label="Phone"
          value={values.phone}
          handleChange={handleChange}
          error={
            errors.phone && touched.phone
              ? errors.phone
              : undefined
          }
          id="phone"
          errorbg
        />

        <Input
          placeholder=""
          type="text"
          label="Email"
          value={values.email}
          handleChange={handleChange}
          error={
            errors.email && touched.email
              ? errors.email
              : undefined
          }
          id="email"
          errorbg
        />
        <div className="col-span-2">
          <Input
            placeholder=""
            type="text"
            label="Additional Note"
            value={values.additionalNote}
            handleChange={handleChange}
            error={
              errors.additionalNote &&
              touched.additionalNote
                ? errors.mesadditionalNotesage
                : undefined
            }
            id="additionalNote"
            inputType="textarea"
            errorbg
          />
        </div>
        <button
        disabled={loading}
          type="submit"
          className={`border w-fit px-6 py-3 bg-slate-700 text-white text-[13px] ${loading && "cursor-not-allowed"}`}
        >{
          loading ? <div className='w-[100%] flex  gap-5 items-center'>
            <Spinner />
            <p>Please wait...</p>
          </div>: 'REQUEST TOUR'
        }
        </button>
      </form>
    </div>
  )
}
export {
  AboutProperty,
  Reviews,
  Terms,
  Availability,
  Amenities,
  Nearby,
  ContactAgent,
  TourRequest,
}
