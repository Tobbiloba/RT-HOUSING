// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Input from '@/components/Input'
import Dropdown from '../../../components/common/dropdown/Dropdown'
import Textarea from '@/components/common/textarea/Textarea'
import { Slider } from '@mui/material'
import Calendar from '../../../components/common/calendar/Calendar'
import { startOfToday, startOfTomorrow } from 'date-fns'
import Box from '../../../components/common/box/Box'
import Dropzone from '../../../components/common/dropzone/Dropzone'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Clear, createProperty } from '../../../action/property'
import { IoMdCloseCircle } from 'react-icons/io'
import { styled } from '@mui/system'
import { useMediaQuery } from 'react-responsive'
import { createPropertySchema } from '@/schemas'
import { AgentCard } from '@/cards'
import { useFormik } from 'formik'
import { options, numbers } from '@/components/data'
import { handleAmmenitiesCheckboxChange } from '@/utils'
import amenities from '@/data/amenities'
import { getAgent } from '@/action/employee'
import Spinner from '@/components/common/spinner/Spinner'

const UpdateProperty = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let today = startOfToday()
  let tomorrow = startOfTomorrow()
  const { id } = useParams()

  const { details } = useSelector(state => state?.propertyDetail)
  const { status, loading } = useSelector(state => state.createProperty)
  const { agent, agentLoader } = useSelector(state => state.agent)
  console.log(status)

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

  const valuetext = value => {
    return `${value}°C`
  }

  const DarkSlider = styled(Slider)({
    color: '#0f172a', // Change 'red' to your desired color
  })

  const isMobile = useMediaQuery({ maxWidth: 999 })
  const isDesktop = useMediaQuery({ minWidth: 999 })

  const onSubmit = async values => {
    if (id) {
      console.log('')
    } else {
      dispatch(createProperty(values))
    }
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue, // Access setFieldValue function from useFormik
  } = useFormik({
    initialValues: {
      propertyName: 'Lekki cottagedo',
      propertyDescription: 'diwldbw;e9 owie weic eru rco rvioe lvj rvlj lejv er lvj ervlje rvrbvjer verjv r',
      propertyType: 'Apartment',
      bathrooms: 1,
      bedrooms: 2,
      floors: 2,
      garages: 2,
      adults: 3,
      children: 4,
      infants: 3,
      pricing: '50000',
      address: 'NO 6 lucky fibre',
      country: 'Nigeria',
      state: 'Lagos',
      city: 'Ikorodu',
      postalCode: '102222',
      images: [],
      amenities: [],
      availableFromDate: today,
      availableTillDate: tomorrow,
      unavailableFromDate: null, // Set to your initial value
      unavailableTillDate: null, // Set to your initial value
      reasonForUnavailability: '',
      propertySize: [0, 70],
      propertyOccupiedFromDate: '', // Set to your initial value
      propertyOccupiedTillDate: '', // Set to your initial value
      isUnavailable: false,
      agent: {},
    },
    onSubmit,
    validationSchema: createPropertySchema,
  })
  console.log(errors)
  useEffect(() => {
    // dispatch(getPropertyDetailById(id))
    dispatch(getAgent())
  }, [])
  useEffect(() => {
    if (details && id) {
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
      values.images = details.property_information.property_images
      values.amenities = details.property_information.property_amenities
      values.address = details.property_information.property_location.address
      values.country = details.property_information.property_location.country
      values.state = details.property_information.property_location.state
      values.city = details.property_information.property_location.city
      values.postalCode =
        details.property_information.property_location.postal_code
      values.propertySize = details.property_information.property_size
      values.property_smoking_policy =
        details.property_information.property_policy.smoking_policy
      values.property_dog_policy =
        details.property_information.property_policy.pet_policy
    }
  }, [details])
  useEffect(() => {
    if (status == 'successful') {
      dispatch(Clear())
      navigate('/admin/properties')
    }
  }, [status])

  return (
    <div>
      <form
        className={`exo md:p-4 flex ${
          isMobile ? 'flex-col' : 'flex-row px-[5%]'
        } gap-12`}
        onSubmit={handleSubmit}
      >
        <div className={`${isDesktop && 'w-8/12'} `}>
          <div className="bg-slate-900 px-[1rem] py-[2rem] shadow-md">
            <h1 className="text-slate-400 text-[15px]">
              Property Details
            </h1>
            <div className="md:grid flex flex-col grid-cols-1 md:grid-cols-2 gap-10 mt-8">
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

          <div className="mt-12 px-[1rem] py-[2rem] bg-slate-900  shadow-md">
            <h1 className="text-slate-400 text-[15px]">
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
                  multiple
                />
              </div>
            </div>
          </div>

          <div className="mt-12 px-[1rem] py-[2rem] shadow-md bg-slate-900">
            <div className="my-5  w-[100%] col-span-2">
              <h1 className="text-slate-400 text-[15px]">
                Available Ammenities
              </h1>
              <div className=" mt-8 flex flex-row flex-wrap gap-x-6 gap-y-3">
                {amenities.map(item => (
                  <div className="flex gap-4" key={item.id}>
                    <p
                      onClick={() =>
                        handleAmmenitiesCheckboxChange({
                          item: item.name,
                          values,
                          setFieldValue,
                        })
                      }
                      className={`text-[15px] text-white cursor-pointer ${
                        values.amenities.includes(item.name)
                          ? 'bg-slate-00 '
                          : 'border'
                      } hover:bg-slate-300 px-4 py-1`}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
              {errors.amenities && touched.amenities && (
                <p className="text-[13px] mt-3 text-white">
                  {errors.amenities}
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          className={`${
            isDesktop ? 'w-4/12' : 'mt-16'
          }   grid grid-cols-1 gap-12 h-fit`}
        >
          <div className="mt-0 shadow-md h-fit bg-slate-900 py-[2rem] px-[1rem]">
            <h1 className="text-slate-400 text-[15px]">
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

          <div className="p-[1.5rem] h-fit shadow-md bg-slate-900 flex flex-col gap-6">
            <h1 className="text-slate-400 text-[15px]">
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

          <div className="p-[1.5rem] h-fit shadow-md bg-slate-900 flex flex-col gap-6">
            <h1 className="text-slate-400 text-[15px]">
              Property Agent
            </h1>

            {agentLoader ? (
              <div className="py-5 flex justify-center item-center">
                <Spinner />
              </div>
            ) : agent && agent.length > 0 ? (
              <div className="flex flex-col gap-2">
                {agent.map((item, index) => (
                  <AgentCard
                    key={index}
                    item={item}
                    values={values.agent}
                    setFieldValue={setFieldValue}
                  />
                ))}
              </div>
            ) : (
              ''
            )}

            {errors.agent && touched.agent && <p>{errors.agent}</p>}
          </div>
          <div className="p-[1.5rem] shadow-md bg-slate-900 h-fit">
            <h1 className="text-slate-400 text-[15px]">Selected Amenities</h1>

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
                    You havent selected any amenity
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 flex text-[14px] flex-row justify-between">
              <button
                className="w-6/12 py-3 bg-slate-700 text-white shadow-md"
                // onClick={validateForm}
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <div className="flex flex-row gap-4 item-center justify-center">
                    <Spinner /> Loading
                  </div>
                ) : !loading && id ? (
                  ' Update Property'
                ) : (
                  'Create Property'
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateProperty
