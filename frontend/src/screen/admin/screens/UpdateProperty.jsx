// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Stepper from '../../../components/admin/stepper/Stepper'
// import Input from "../../../components/Input";
import Input from '@/components/Input'
import Dropdown from '../../../components/admin/dropdown/Dropdown'
import Textarea from '@/components/textarea/Textarea'
import { Slider } from '@mui/material'
import { toast } from 'react-toastify'
import Calendar from '../../../components/Calendar'
import { startOfToday, startOfTomorrow } from 'date-fns'
import Box from '../../../components/admin/box/Box'
import Dropzone from '../../../components/admin/dropzone/Dropzone'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Clear,
  createProperty,
  getPropertyDetailById,
} from '../../../action/property'
import { IoMdCloseCircle } from 'react-icons/io'
import { styled } from '@mui/system'
import { useMediaQuery } from 'react-responsive'
import { createPropertySchema } from '@/schemas'
import { AgentCard } from '@/cards'
import { useFormik } from 'formik'
import { ammenitiesList, add_ons, options, numbers } from '@/components/data'
import { handleAmmenitiesCheckboxChange } from '@/utils'
import amenities from '@/data/amenities'
const agentData = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Tobi Loba',
    email: 'tobiloba.tobi.com',
    role: 'Agent',
    phone: '07084557988',
  },
  {
    img: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Ruby Techme',
    email: 'rubytechme.ruby.com',
    role: 'Manager',
    phone: '07084557988',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Jessica Doe',
    email: 'jessdoe.doe.com',
    role: 'Agent',
    phone: '07084557988',
  },
]

const UpdateProperty = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let today = startOfToday()
  let tomorrow = startOfTomorrow()
  const { id } = useParams()

  const { details } = useSelector(state => state?.propertyDetail)
  const { status, property } = useSelector(state => state.createProperty)

  const [
    show_Property_availability_from_date,
    set_Show_Property_availability_from_date,
  ] = useState(false)
  const [
    show_Property_availability_till_date,
    set_Show_Property_availability_till_date,
  ] = useState(false)

  const handleSizeChange = (event, newValue) => {
    setFieldValue('propertySize', newValue)
  }

  function valuetext(value) {
    return `${value}°C`
  }

  useEffect(() => {
    if (status == 'successful') {
      dispatch(Clear())
      navigate('/admin/properties')
    }
  }, [status])

  const DarkSlider = styled(Slider)({
    color: '#0f172a', // Change 'red' to your desired color
  })

  const isMobile = useMediaQuery({ maxWidth: 999 })
  const isDesktop = useMediaQuery({ minWidth: 999 })

  const onSubmit = async values => {
    if (id) {
    } else {
      // console.log('created')
      dispatch(createProperty('65a0fc46a3cd4f366e7a3c52', values))
    }
  }

  useEffect(() => {
    // dispatch(getPropertyDetailById(id))
  }, [])

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue, // Access setFieldValue function from useFormik
  } = useFormik({
    initialValues: {
      propertyName: 'Lekki Cottage',
      propertyDescription: 'Nice condo',
      propertyType: 'Apartment',
      bathrooms: 1,
      bedrooms: 1,
      floors: 1,
      garages: 1,
      adults: 1,
      children: 1,
      infants: 1,
      pricing: '50000',
      address: 'No 6 Oraka Street',
      country: 'Nigeria',
      state: 'Lagos state',
      city: 'Ikorodu',
      postalCode: '102222',
      images: ['ver', 'ver', 'ver', 'ver', 'ver', 'ver'],
      amenities: ['Swimming pool', 'Wifi', 'Garden'],
      availableFromDate: today,
      availableTillDate: tomorrow,
      unavailableFromDate: null, // Set to your initial value
      unavailableTillDate: null, // Set to your initial value
      reasonForUnavailability: '',
      propertySize: [0, 70],
      propertyOccupiedFromDate: '', // Set to your initial value
      propertyOccupiedTillDate: '', // Set to your initial value
      isUnavailable: false,
      agent: [],
    },
    onSubmit: values => {
      // same shape as initial values

      // console.log(values);
      onSubmit(values)
    },
    validationSchema: createPropertySchema,
  })

  const test = e => {
    e.preventDefault()
    // console.log(errors)
  }

  useEffect(() => {
    if (details && id) {
      // console.log(details.property_information.availability.available_date_from[0])
      values.propertyName = details.property_information.property_name
      values.propertyType = details.property_information.property_type
      values.propertyDescription =
        details.property_information.property_description
      values.bathrooms = details.property_information.property_no_bathrooms
      values.garages = details.property_information.property_no_bedrooms
      values.floors = details.property_information.property_no_bathrooms
      values.bedrooms = details.property_information.property_no_bedrooms
      values.adults = details.property_information.guest?.maximum_adults
      values.children = details.property_information.guest.maximum_children
      values.infants = details.property_information.guest.maximum_infants
      values.pricing = details.property_information.pricing
      setProperty_images(details.property_information.property_images)
      setProperty_amenities(details.property_information.property_amenities)
      values.address = details.property_information.property_location.address
      values.country = details.property_information.property_location.country
      values.state = details.property_information.property_location.state
      values.city = details.property_information.property_location.city
      values.postalCode =
        details.property_information.property_location.postal_code
      setProperty_size(details.property_information.property_size)
      values.property_smoking_policy =
        details.property_information.property_policy.smoking_policy
      values.property_dog_policy =
        details.property_information.property_policy.pet_policy
      // setProperty_availability_from_date(details.property_information.availability.available_date_from[0])
    }
  }, [details])

  // console.log(errors)
  return (
    <div>
      <form
        className={`exo p-4 flex ${
          isMobile ? 'flex-col' : 'flex-row px-[5%]'
        } gap-12`}
        onSubmit={handleSubmit}
      >
        <div className={`${isDesktop && 'w-8/12'} `}>
          <div className="bg-slate-500 px-[1rem] py-[2rem] shadow-md">
            <h1 className="text-slate-900 text-xl font-[600]">
              Property Details
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              <Input
                placeholder="Title"
                type="text"
                label="Property Title"
                value={values.propertyName}
                handleChange={handleChange}
                error={
                  errors.propertyName && touched.propertyName
                    ? errors.propertyName
                    : undefined
                }
                id="propertyName"
              />

              <Dropdown
                label="Property Type"
                data={options}
                field={{ name: 'propertyType', value: values.propertyType }}
                form={{ setFieldValue, handleBlur, values, errors, touched }}
                error={
                  errors.propertyType && touched.propertyType
                    ? errors.propertyType
                    : undefined
                }
              />
              <div className="col-span-2">
                <Textarea
                  placeholder="Property description"
                  type="text"
                  label="Property Description"
                  value={values.propertyDescription}
                  handleChange={handleChange}
                  error={
                    errors.propertyDescription && touched.propertyDescription
                      ? errors.propertyDescription
                      : undefined
                  }
                  id="propertyDescription"
                />
              </div>

              <Dropdown
                label="Bathrooms"
                data={numbers}
                field={{ name: 'bathrooms', value: values.bathrooms }}
                form={{ setFieldValue, handleBlur, values, errors, touched }}
                error={
                  errors.bathrooms && touched.bathrooms
                    ? errors.bathrooms
                    : undefined
                }
              />

              <Dropdown
                label="Bedrooms"
                data={numbers}
                field={{ name: 'bedrooms', value: values.bedrooms }}
                form={{ setFieldValue, handleBlur, values, errors, touched }}
                error={
                  errors.bedrooms && touched.bedrooms
                    ? errors.bedrooms
                    : undefined
                }
              />
              <Dropdown
                label="Floors"
                data={numbers}
                field={{ name: 'floors', value: values.floors }}
                form={{ setFieldValue, handleBlur, values, errors, touched }}
                error={
                  errors.floors && touched.floors ? errors.floors : undefined
                }
              />

              <Dropdown
                label="Garages"
                data={numbers}
                field={{ name: 'garages', value: values.garages }}
                form={{ setFieldValue, handleBlur, values, errors, touched }}
                error={
                  errors.garages && touched.garages ? errors.garages : undefined
                }
              />
              <div className="col-span-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Dropdown
                  label="No of adults"
                  data={numbers}
                  field={{ name: 'adults', value: values.adults }}
                  form={{ setFieldValue, handleBlur, values, errors, touched }}
                  error={
                    errors.adults && touched.adults ? errors.adults : undefined
                  }
                />
                <Dropdown
                  label="No of children"
                  data={numbers}
                  field={{ name: 'children', value: values.children }}
                  form={{ setFieldValue, handleBlur, values, errors, touched }}
                  error={
                    errors.children && touched.children
                      ? errors.children
                      : undefined
                  }
                />

                <Dropdown
                  label="Infants"
                  data={numbers}
                  field={{ name: 'infants', value: values.infants }}
                  form={{ setFieldValue, handleBlur, values, errors, touched }}
                  error={
                    errors.infants && touched.infants
                      ? errors.infants
                      : undefined
                  }
                />
              </div>

              <Input
                placeholder="ng"
                type="text"
                label="Pricing / night"
                value={values.pricing}
                handleChange={handleChange}
                error={
                  errors.pricing && touched.pricing ? errors.pricing : undefined
                }
                id="pricing"
              />

              <div className="flex flex-row  gap-12">
                <div className="flex flex-row gap-5 items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={values.property_dog_policy}
                    onChange={e => {
                      handleChange(e)
                      setFieldValue(
                        'property_dog_policy',
                        !values.property_dog_policy,
                      )
                    }}
                  />
                  <p className="text-[15px] text-white">Pets</p>
                </div>
                <div className="flex flex-row gap-5 items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={values.property_smoking_policy}
                    onChange={e => {
                      handleChange(e)
                      setFieldValue(
                        'property_smoking_policy',
                        !values.property_smoking_policy,
                      )
                    }}
                  />
                  <p className="text-[15px] text-white">Smoking</p>
                </div>
              </div>
              <div>
                <h1 className="mb-4 text-white text-[15px]">Property Size</h1>
                <p className="text-slate-400 text-[14px] mb-2"></p>

                <DarkSlider
                  getAriaLabel={() => 'Temperature range'}
                  value={values.propertySize}
                  onChange={handleSizeChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 px-[1rem] py-[2rem] bg-slate-500  shadow-md">
            <h1 className="text-slate-900 text-xl font-[600]">
              Property Image
            </h1>

            <div className="mt-8">
              <div className="w-[100%]">
                <Dropzone
                  field={{ name: 'images', value: values.images }}
                  form={{ setFieldValue, handleBlur, values, errors, touched }}
                  error={
                    errors.images && touched.images ? errors.images : undefined
                  }
                />
              </div>
            </div>
          </div>

          <div className="mt-12 px-[1rem] py-[2rem] shadow-md bg-slate-500">
            <div className="my-5  w-[100%] col-span-2">
              <h1 className="text-slate-900 text-xl font-[600]">
                Available Ammenities
              </h1>
              <div className=" mt-8 flex flex-row flex-wrap gap-x-6 gap-y-3">
                {amenities.map((item) => (
                  <div className="flex gap-4" key={item.id}>
                    <p
                      onClick={() =>
                        handleAmmenitiesCheckboxChange({
                          item: item.name,
                          values,
                          setFieldValue,
                        })
                      }
                      // onClick={() => handleAmmenitiesCheckboxChange(item, values={values}, setFieldValue={setFieldValue})}
                      className={`text-[15px] text-white cursor-pointer ${
                        values.amenities.includes(item.name)
                          ? 'bg-slate-900 '
                          : 'border'
                      } hover:bg-slate-300 px-4 py-1`}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            isDesktop ? 'w-4/12' : 'mt-16'
          }   grid grid-cols-1 gap-12 h-fit`}
        >
          <div className="mt-0 shadow-md h-fit bg-slate-500 py-[2rem] px-[1rem]">
            <h1 className="text-slate-900 text-xl font-[600]">
              Property Location
            </h1>
            <div className="col-span-2 mt-8 grid grid-cols-1 gap-4">
              <Input
                placeholder="Enter address"
                type="text"
                label="Address*"
                value={values.address}
                handleChange={handleChange}
                error={
                  errors.address && touched.address ? errors.address : undefined
                }
                touched={touched.address}
                id="address"
              />
              <Input
                placeholder="Enter country"
                type="text"
                label="Country"
                value={values.country}
                handleChange={handleChange}
                error={
                  errors.country && touched.country ? errors.country : undefined
                }
                touched={touched.country}
                id="country"
              />
              <Input
                placeholder="Enter state"
                type="text"
                label="State"
                value={values.state}
                handleChange={handleChange}
                error={errors.state && touched.state ? errors.state : undefined}
                touched={touched.state}
                id="state"
              />
              <Input
                placeholder="Enter city"
                type="text"
                label="City"
                value={values.city}
                handleChange={handleChange}
                error={errors.city && touched.city ? errors.city : undefined}
                touched={touched.city}
                id="city"
              />
              <Input
                placeholder="Enter postal code"
                type="text"
                label="Postal Code"
                value={values.postalCode}
                handleChange={handleChange}
                error={
                  errors.postalCode && touched.postalCode
                    ? errors.postalCode
                    : undefined
                }
                touched={touched.postalCode}
                id="postalCode"
              />
            </div>
          </div>

          <div className="p-[1.5rem] h-fit shadow-md bg-slate-500 flex flex-col gap-6">
            <h1 className="text-slate-900 text-xl font-[600]">
              Availability Date
            </h1>
            <div className="relative ">
              <div>
                <Box
                  label="Available from"
                  value={values.availableFromDate.toDateString()}
                  setShowState={set_Show_Property_availability_from_date}
                  showState={show_Property_availability_from_date}
                />
              </div>
              {show_Property_availability_from_date && (
                <div className="mt-4 absolute z-50">
                  <Calendar
                    selectedDay={values.availableFromDate}
                    setSelectedDay={setProperty_availability_from_date}
                    setShowCalendar={set_Show_Property_availability_from_date}
                    id="availableFromDate"
                    setFieldValue={setFieldValue}
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <div>
                <Box
                  label="Available till"
                  value={values.availableTillDate.toDateString()}
                  setShowState={set_Show_Property_availability_till_date}
                  showState={show_Property_availability_till_date}
                />
              </div>
              {show_Property_availability_till_date && (
                <div className="mt-4 absolute">
                  <Calendar
                    selectedDay={values.availableTillDate}
                    setShowCalendar={set_Show_Property_availability_till_date}
                    id="availableTillDate"
                    setFieldValue={setFieldValue}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="p-[1.5rem] h-fit shadow-md bg-slate-500 flex flex-col gap-6">
            <h1 className="text-slate-900 text-xl font-[600]">
              Property Agents
            </h1>

            <div className="flex flex-col gap-2">
              {agentData.map((item, index) => (
                <AgentCard
                  key={index}
                  item={item}
                  values={values.agent}
                  setFieldValue={setFieldValue}
                />
              ))}
            </div>
          </div>
          <div className="p-[1.5rem] shadow-md bg-slate-500 h-fit">
            <h1 className="text-slate-900 text-xl  font-[600]">Amenities</h1>

            <div>
              {values.amenities.length > 0 ? (
                <div className=" mt-5 flex flex-row flex-wrap gap-x-3 gap-y-3 border shadow-md p-[1rem]">
                  {values.amenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center text-[14px] justify-center gap-2 px-4 py-[6px] bg-slate-300"
                    >
                      {item}
                      <IoMdCloseCircle
                        className="text-slate-800 cursor-pointer text-[17px]"
                        onClick={() =>
                          handleAmmenitiesCheckboxChange({
                            item,
                            values,
                            setFieldValue,
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-[10rem] border mt-4  flex items-center justify-center">
                  <p className="text-[14px] text-white">
                    You haven't selected any amenity
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 flex text-[14px] flex-row justify-between">
              {/* <button className="w-5/12 bg-slate-700 text-white shadow-md" type="submit">
Discard
</button>  */}
              <button
                className="w-6/12 py-3 bg-slate-400 text-white shadow-md"
                // onClick={validateForm}
                type="submit"
              >
                {id ? ' Update Property' : 'Create Property'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateProperty

{
  /* <button className="w-5/12 bg-slate-700 text-white shadow-md">
Discard
</button> */
}
