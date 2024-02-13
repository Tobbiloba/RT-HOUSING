import React, { useEffect, useState } from 'react'
import Stepper from '../../../components/admin/stepper/Stepper'
// import Input from "../../../components/Input";
import Dropdown from '../../../components/admin/dropdown/Dropdown'
// import Textarea from "../../../components/textarea/Textarea";
import { Slider } from '@mui/material'
import { toast } from 'react-toastify'
import Calendar from '../../../components/Calendar'
import { startOfToday, startOfTomorrow } from 'date-fns'
import Box from '../../../components/admin/box/Box'
import Dropzone from '../../../components/admin/dropzone/Dropzone'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Clear, createProperty } from '../../../action/property'
import { IoMdCloseCircle } from 'react-icons/io'
import { styled } from '@mui/system'
import DragDropFiles from '@/components/dropzone/Dropzone'
import { useMediaQuery } from 'react-responsive'
import Input from '@/components/Input'
import { useFormik } from 'formik'
import { createPropertySchema } from '@/schemas'
import Textarea from '@/components/textarea/Textarea'
const AddProperty = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let today = startOfToday()
  let tomorrow = startOfTomorrow()
  const [property_name, setProperty_name] = useState('')
  const [property_type, setProperty_type] = useState('All')
  const [property_description, setProperty_description] = useState('')
  const [property_bedrooms, setProperty_bedrooms] = useState(0)
  const [property_bathroom, setProperty_bathroom] = useState(0)
  const [property_size, setProperty_size] = useState([0, 70])
  const [property_amenities, setProperty_amenities] = useState([])
  const [property_images, setProperty_images] = useState([])
  const [property_state, setProperty_state] = useState('')
  const [property_country, setProperty_country] = useState('')
  const [property_city, setProperty_city] = useState('')
  const [property_address, setProperty_address] = useState('')
  const [property_postal, setProperty_postal] = useState('')
  const [property_dog_policy, setProperty_dog_policy] = useState(false)
  const [property_smoking_policy, setProperty_smoking_policy] = useState(false)
  const [property_pricing, setProperty_pricing] = useState('')
  const [reason, setReason] = useState('')
  // console.log(property_images)
  const [property_availability_from_date, setProperty_availability_from_date] =
    useState(today)
  const [
    show_Property_availability_from_date,
    set_Show_Property_availability_from_date,
  ] = useState(false)
  const [
    property_unavailability_from_date,
    setProperty_unavailability_from_date,
  ] = useState(tomorrow)
  const [
    show_Property_unavailability_from_date,
    set_Show_Property_unavailability_from_date,
  ] = useState(false)
  const [property_availability_till_date, setProperty_availability_till_date] =
    useState(tomorrow)
  const [
    show_Property_availability_till_date,
    set_Show_Property_availability_till_date,
  ] = useState(false)
  const [
    property_unavailability_till_date,
    setProperty_unavailability_till_date,
  ] = useState(tomorrow)
  const [
    show_Property_unavailability_till_date,
    set_Show_Property_unavailability_till_date,
  ] = useState(false)
  // @ts-ignore
  const [property_occupied_from_date, setProperty_occupied_from_date] =
    useState('')
  const [
    // @ts-ignore
    show_property_occupied_from_date,
    // @ts-ignore
    set_Show_Property_occupied_from_date,
  ] = useState(false)
  // @ts-ignore
  const [property_occupied_till_date, setProperty_occupied_till_date] =
    useState('')
  const [
    // @ts-ignore
    show_property_occupied_till_date,
    // @ts-ignore
    set_Show_Property_occupied_till_date,
  ] = useState(false)
  const [property_children, setProperty_children] = useState(0)
  const [property_adults, setProperty_adults] = useState(0)
  const [property_infants, setProperty_infants] = useState(0)
  const steps = ['Property Info', 'Availability', 'Upload Images']
  const [currentStep, setCurrentStep] = useState(1)
  // @ts-ignore
  const [complete, setComplete] = useState(false)
  const [isUnavailable, setIsUnavailable] = useState(true)

  const options = [
    'Apartment',
    'Villa',
    'Farmhouse',
    'Condos',
    'Townhouse',
    'Duplex',
    'Studio',
    'Chalet',
  ]

  const numbers = [1, 2, 3, 4, 5, 6]

  // @ts-ignore
  const add_ons = [
    { name: 'Airport Transportation', price: 50 },
    { name: 'Car Rental', price: 75 },
    { name: 'Fresh Groceries', price: 30 },
    { name: 'Driver', price: 60 },
    { name: 'Medical Representative', price: 45 },
    { name: 'Masseurs', price: 80 },
    { name: 'Personal Chef or Catering', price: 100 },
    { name: 'Concierge Service', price: 55 },
    { name: 'Local Recommendations or Guidebooks', price: 25 },
    { name: 'Fitness Facilities or Gym Access', price: 70 },
    { name: 'High-Speed Internet', price: 40 },
    { name: 'Desk and Office Space', price: 65 },
    { name: 'Streaming Services (Netflix, Hulu, etc.)', price: 35 },
    { name: 'Smart Home Features (Smart Locks, Thermostat)', price: 90 },
    { name: 'Board Games or Gaming Console', price: 50 },
    { name: 'Swimming Pool or Hot Tub', price: 120 },
    { name: 'Bicycles or Sports Equipment', price: 55 },
    { name: 'Barbecue Grill or Outdoor Kitchen', price: 80 },
    { name: 'Event Space or Banquet Hall', price: 150 },
    { name: 'Celebration Decorations', price: 30 },
    { name: 'Specialized Services for Events', price: 100 },
    { name: 'Wheelchair Accessibility', price: 40 },
    { name: 'Elevator or Ground-Floor Access', price: 50 },
    { name: 'Security System', price: 80 },
    { name: 'Safe for Valuables', price: 30 },
    { name: 'Local Experience or Guided Tours', price: 60 },
    { name: 'Community Events or Workshops', price: 25 },
    { name: 'Pet-Friendly Accommodations', price: 45 },
    { name: 'Pet Supplies (Bowls, Beds)', price: 20 },
  ]

  const ammenitiesList = [
    'WI-FI',
    'Air Conditioning',
    'TV Cable',
    'Swimming Pool',
    'Barbecue Area',
    'Sauna',
    'Dish Washer',
    'Gym',
    'Laundry',
    'Parking',
    'Pet-friendly',
    'Security System',
    'Balcony',
    'Fireplace',
    'Elevator',
    'Playground',
    'Tennis Court',
    'Basketball Court',
    'Football (Soccer) Field',
    'Jacuzzi',
    'Conference Room',
    'Concierge Service',
    'Library',
    'Movie Theater',
    'Business Center',
    'Yoga Studio',
    'Roof Deck',
    'Game Room',
    'Bike Storage',
    'Electric Car Charging Stations',
    'Guest Suites',
    'Golf Course Access',
    'Dry Cleaning Service',
    'Valet Parking',
    'Sky Lounge',
    'Parcel Lockers',
    'Art Studio',
    'Community Garden',
    'Sun Deck',
    'Ping Pong Table',
    'Karaoke Room',
    'Volleyball Court',
    'Badminton Court',
    'Hiking Trails',
    'Bowling Alley',
    'Mini Golf',
    'Fishing Pond',
    'Snooker/Pool Table',
    'Darts',
    'Ice Skating Rink',
    'Rock Climbing Wall',
    'Waterfront Access',
    'Surf Simulator',
    'Meditation Room',
    'Tech Hub',
    'Virtual Reality Room',
  ]

  // @ts-ignore
  const handleSizeChange = (event, newValue) => {
    setProperty_size(newValue)
    // console.log(newValue);
  }

  // @ts-ignore
  const handleAmmenitiesCheckboxChange = item => {
    // Check if the item is already in the state
    // @ts-ignore
    if (property_amenities.includes(item)) {
      // If yes, remove it
      setProperty_amenities(property_amenities.filter(type => type !== item))
    } else {
      // If not, add it
      // @ts-ignore
      setProperty_amenities([...property_amenities, item])
    }
  }

  // @ts-ignore
  function valuetext(value) {
    return `${value}°C`
  }

  const validateForm = () => {
    const requiredFields = [
      'property_amenities',
      'property_bathroom',
      'property_bedrooms',
      'property_name',
      'property_type',
      'property_description',
      'property_adults',
      'property_country',
      'property_city',
      'property_state',
      'property_pricing',
    ]

    if (requiredFields.some(field => !eval(field))) {
      toast.info('You must fill in all forms', {
        /* toast options */
      })
      return
    }

    if (property_amenities <= 2) {
      toast.info('You must select at least 3 amenities', {
        /* toast options */
      })
      return
    }

    if (!isUnavailable && !reason) {
      toast.info('You need to have a reason', {
        /* toast options */
      })
      return
    }

    if (!property_images || property_images.length < 3) {
      console.log('Image not enough')
      toast.info('You need to upload at least 5 images', {
        /* toast options */
      })
      return
    }

    // Additional validation logic if needed

    const id = '65a0fc46a3cd4f366e7a3c52'
    const property_information = {
      property_name: property_name,
      property_type: property_type,
      property_description: property_description,
      property_no_bedrooms: property_bedrooms,
      property_no_bathroom: property_bathroom,
      property_size: property_size,
      property_amenities: property_amenities,
      property_images: property_images,
      property_location: {
        country: property_country,
        state: property_state,
        city: property_city,
      },
      pricing: property_pricing,
      property_policy: {
        pet_policy: property_dog_policy,
        smoking_policy: property_smoking_policy,
      },
      availability: {
        available_date_from: property_availability_from_date,
        available_date_till: property_availability_till_date,
        unavailable_date_from: isUnavailable
          ? ''
          : property_unavailability_from_date,
        unavailable_date_till: isUnavailable ? '' : property_occupied_till_date,
        occupied_date_from: property_occupied_from_date || [],
        occupied_date_till: property_occupied_till_date || [],
      },
      guest: {
        maximum_adults: property_adults,
        maximum_children: property_children,
        maximum_infants: property_infants,
      },
    }

    // Dispatch action to create property
    // @ts-ignore
    dispatch(createProperty(id, property_information))
    console.log('all check passed')
    // toast.success("You have successfully added your property", { /* toast options */ });
  }
  const onSubmit = () => {
    console.log('lol')
  }
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
      propertyName: '',
      propertyDescription: '',
      propertyType: '',
      bathrooms: 1,
      bedrooms: 1,
      adults: 1,
      children: 0,
      infants: 0,
      pricing: '',
      address: '',
      country: '',
      state: '',
      city: '',
      postalCode: '',
      images: [],
      amenities: [],
      availableFromDate: today,
      availableTillDate: tomorrow,
      unavailableFromDate: tomorrow, // Set to your initial value
      unavailableTillDate: tomorrow, // Set to your initial value
      reasonForUnavailability: '',
      propertySize: [0, 70],
      propertyOccupiedFromDate: '', // Set to your initial value
      propertyOccupiedTillDate: '', // Set to your initial value
      isUnavailable: true,
    },
    // validationSchema: createPropertySchema,
    validationSchema: createPropertySchema,
    onSubmit,
  })

  console.log(values)
  const { status, property } = useSelector(state => state.createProperty)

  // useEffect(() => {
  //   if(status == 'successful') {
  //     dispatch(Clear())
  //     navigate('/admin/properties')
  //   }
  // }, [status])

  const DarkSlider = styled(Slider)({
    color: '#0f172a', // Change 'red' to your desired color
  })

  const isMobile = useMediaQuery({ maxWidth: 999 })
  const isDesktop = useMediaQuery({ minWidth: 999 })
  return (
    //     <div
    //       className={`exo p-4 flex ${
    //         isMobile ? "flex-col" : "flex-row px-[5%]"
    //       } gap-12`}
    //     >
    //       <div className={`${isDesktop && "w-8/12"}  rounded-md`}>

    //         <div className="bg-slate-500 px-[1rem] py-[2rem] rounded-md">
    //         <h1 className="text-slate-900 text-xl font-[600]">
    //               Property Details
    //             </h1>
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
    //            <Input
    //               placeholder="Title"
    //               type="text"
    //               label="Property Title"
    //               value={values.propertyName}
    //               handleChange={handleChange}
    //               error={
    //                 errors.propertyName && touched.propertyName
    //                   ? errors.propertyName
    //                   : undefined
    //               }
    //               id="propertyName"
    //             />

    //             <Dropdown
    //               label="Property Type"
    //               data={options}
    //               field={{ name: "propertyType", value: values.propertyType }}
    //               form={{ setFieldValue, handleBlur, values, errors, touched }}
    //               error={
    //                 errors.propertyType && touched.propertyType
    //                   ? errors.propertyType
    //                   : undefined
    //               }
    //             />

    // <div className="col-span-2">
    //               <Textarea
    //                 placeholder="Property description"
    //                 type="text"
    //                 label="Property Description"
    //                 value={values.propertyDescription}
    //                 handleChange={handleChange}
    //                 error={
    //                   errors.propertyDescription && touched.propertyDescription
    //                     ? errors.propertyDescription
    //                     : undefined
    //                 }
    //                 id="propertyDescription"
    //               />
    //             </div>
    //           {/* <div className="flex col-span-2 flex-col sm:flex-row gap-y-6 md:gap-y-16 gap-x-12"> */}
    //           {/* <div className="w-6/12"> */}
    //           {/* <// @ts-ignore
    //           Dropdown
    //             label="Bathrooms"
    //             data={numbers}
    //             state={property_bathroom}
    //             setState={setProperty_bathroom}
    //           /> */}
    //           {/* </div> */}

    //           {/* <div className="w-6/12 border"> */}
    //           {/* <// @ts-ignore
    //           Dropdown
    //             label="Bedrooms"
    //             data={numbers}
    //             state={property_bedrooms}
    //             setState={setProperty_bedrooms}
    //           /> */}
    //           {/* </div> */}

    //           <Dropdown
    //               label="Bathrooms"
    //               data={numbers}
    //               field={{ name: "bathrooms", value: values.bathrooms }}
    //               form={{ setFieldValue, handleBlur, values, errors, touched }}
    //               error={
    //                 errors.bathrooms && touched.bathrooms
    //                   ? errors.bathrooms
    //                   : undefined
    //               }
    //             />

    //             <Dropdown
    //               label="Bedrooms"
    //               data={numbers}
    //               field={{ name: "bedrooms", value: values.bedrooms }}
    //               form={{ setFieldValue, handleBlur, values, errors, touched }}
    //               error={
    //                 errors.bedrooms && touched.bedrooms
    //                   ? errors.bedrooms
    //                   : undefined
    //               }
    //             />

    //           {/* <div className="col-span-2 grid grid-cols-3 gap-12">
    //             <// @ts-ignore
    //             Dropdown
    //               label="Adults"
    //               data={numbers}
    //               state={property_adults}
    //               setState={setProperty_adults}
    //             />
    //             <// @ts-ignore
    //             Dropdown
    //               label="Children (2 - 10) yrs"
    //               data={numbers}
    //               state={property_children}
    //               setState={setProperty_children}
    //             />
    //             <// @ts-ignore
    //             Dropdown
    //               label="Infants (0 - 2) yrs"
    //               data={numbers}
    //               state={property_infants}
    //               setState={setProperty_infants}
    //             />
    //           </div> */}

    // <div className="col-span-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    //               <Dropdown
    //                 label="No of adults"
    //                 data={numbers}
    //                 field={{ name: "adults", value: values.adults }}
    //                 form={{ setFieldValue, handleBlur, values, errors, touched }}
    //                 error={
    //                   errors.adults && touched.adults
    //                     ? errors.adults
    //                     : undefined
    //                 }
    //               />
    //               <Dropdown
    //                 label="No of children"
    //                 data={numbers}
    //                 field={{ name: "children", value: values.children }}
    //                 form={{ setFieldValue, handleBlur, values, errors, touched }}
    //                 error={
    //                   errors.children && touched.children
    //                     ? errors.children
    //                     : undefined
    //                 }
    //               />

    //               <Dropdown
    //                 label="Infants"
    //                 data={numbers}
    //                 field={{ name: "infants", value: values.infants }}
    //                 form={{ setFieldValue, handleBlur, values, errors, touched }}
    //                 error={
    //                   errors.infants && touched.infants
    //                     ? errors.infants
    //                     : undefined
    //                 }
    //               />
    //             </div>
    //             <Input
    //               placeholder="ng"
    //               type="text"
    //               label="Pricing / night"
    //               value={values.pricing}
    //               handleChange={handleChange}
    //               error={
    //                 errors.pricing && touched.pricing ? errors.pricing : undefined
    //               }
    //               id="pricing"
    //             />

    //           {/* <Input
    //           value={property_pricing}
    //           setValue={setProperty_pricing}
    //           label="Pricing /night"
    //         /> */}

    //         {/* <div className="flex flex-row  gap-12">
    //           <div className="flex flex-row gap-5 items-center">
    //             <input
    //               type="checkbox"
    //               className="w-4 h-4"
    //               checked={property_dog_policy}
    //               onChange={() => setProperty_dog_policy(!property_dog_policy)}
    //             />
    //             <p className="text-[15px] text-white">Pets</p>
    //           </div>
    //           <div className="flex flex-row gap-5 items-center">
    //             <input
    //               type="checkbox"
    //               className="w-4 h-4"
    //               checked={property_smoking_policy}
    //               onChange={() =>
    //                 setProperty_smoking_policy(!property_smoking_policy)
    //               }
    //             />
    //             <p className="text-[15px] text-white">Smoking</p>
    //           </div>
    //         </div> */}

    // <div className="flex flex-row  gap-12">
    //               <div className="flex flex-row gap-5 items-center">
    //                 <input
    //                   type="checkbox"
    //                   className="w-4 h-4"
    //                   checked={values.property_dog_policy}
    //                   onChange={(e) => {
    //                     handleChange(e);
    //                     setFieldValue(
    //                       "property_dog_policy",
    //                       !values.property_dog_policy
    //                     );
    //                   }}
    //                 />
    //                 <p className="text-[15px] text-white">Pets</p>
    //               </div>
    //               <div className="flex flex-row gap-5 items-center">
    //                 <input
    //                   type="checkbox"
    //                   className="w-4 h-4"
    //                   checked={values.property_smoking_policy}
    //                   onChange={(e) => {
    //                     handleChange(e);
    //                     setFieldValue(
    //                       "property_smoking_policy",
    //                       !values.property_smoking_policy
    //                     );
    //                   }}
    //                 />
    //                 <p className="text-[15px] text-white">Smoking</p>
    //               </div>
    //             </div>

    //           {/* <div>
    //           <h1 className="mb-4 text-white text-[15px]">Property Size</h1>
    //           <p className="text-slate-400 text-[14px] mb-2">
    //             {property_size[0] * 10} sq ft - {property_size[1] * 10} sq ft
    //           </p>
    //           <DarkSlider
    //             getAriaLabel={() => "Temperature range"}
    //             value={property_size}
    //             onChange={handleSizeChange}
    //             valueLabelDisplay="auto"
    //             getAriaValueText={valuetext}
    //           />
    //         </div> */}

    // <div>
    //               <h1 className="mb-4 text-white text-[15px]">Property Size</h1>
    //               <p className="text-slate-400 text-[14px] mb-2">
    //                 {/* {values.property_size[0] * 10} sq ft - {values.property_size[1] * 10} sq ft */}
    //               </p>

    //               <DarkSlider
    //                 getAriaLabel={() => "Temperature range"}
    //                 value={property_size}
    //                 onChange={handleSizeChange}
    //                 valueLabelDisplay="auto"
    //                 getAriaValueText={valuetext}
    //               />
    //             </div>

    //         </div>

    //       </div>

    //       <div className="mt-12 px-[1rem] py-[2rem] bg-slate-500  shadow-md">
    //           <h1 className="text-slate-900 text-xl font-[600]">Property Image</h1>

    //           <div className="mt-8">
    //             <div className="w-[100%]">
    //               <Dropzone
    //                 images={property_images}
    //                 setImages={setProperty_images}
    //               />
    //             </div>
    //           </div>
    //         </div>

    //       <div className="mt-12 shadow-md border border-slate-600 bg-slate-500 py-[2rem] px-[1rem] rounded-md">
    //         <h1 className="text-slate-900 text-xl font-[600]">
    //               Available Ammenities
    //             </h1>
    //          <div className="col-span-2 mt-8 grid grid-cols-3 gap-12">
    //             <Input
    //               value={property_address}
    //               setValue={setProperty_address}
    //               label="Address*"
    //             />
    //             <Input
    //               value={property_country}
    //               setValue={setProperty_country}
    //               label="Country"
    //             />
    //             <Input
    //               value={property_state}
    //               setValue={setProperty_state}
    //               label="State"
    //             />
    //             <Input
    //               value={property_city}
    //               setValue={setProperty_city}
    //               label="City"
    //             />
    //             <Input
    //               value={property_postal}
    //               setValue={setProperty_postal}
    //               label="Postal code"
    //             />

    //           </div>

    //           {/* <div className="col-span-2 grid sm:grid-cols-2 gap-y-6 md:gap-y-16 gap-x-12"> */}

    //           {/* </div> */}
    //         </div>
    //         <div className="mt-12 px-[1rem] py-[2rem] bg-slate-500 rounded-md shadow-md">
    //           <h1 className="text-slate-900 text-xl font-[600]">Property Image</h1>
    //           {/* </div> */}

    //           {/* <> */}

    //             <div className="mt-8">
    //               <div className="w-[100%]">
    //                 {/* <DragDropFiles setState={setProperty_images} /> */}
    //                 <Dropzone images={property_images} setImages={setProperty_images}/>
    //               </div>

    //               {/* <div>
    //                 {property_images.length > 0 ? (
    //                   <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-8 items-center">
    //                     {property_images.map((url, index) => {
    //                       console.log(url)
    //                       return (

    //                         <img
    //                           key={index}
    //                           src={url}
    //                           alt={`Uploaded Image ${index}`}
    //                           style={{ objectFit: "contain" }}
    //                           className="w-[100%] h-auto rounded-md"
    //                         />
    //                         // <img key={index} src={url} alt={`Uploaded Image ${index}`} className="w-28 h-28 object-cover"/>
    //                       );
    //                     })}
    //                   </div>
    //                 ) : (
    //                   <div></div>
    //                 )}
    //               </div> */}
    //             </div>
    //           {/* </> */}
    //           {/* <div className=""> */}

    //       </div>

    //       <div className="mt-12 px-[1rem] py-[2rem] rounded-md bg-slate-500">
    //         <div className="my-5  w-[100%] col-span-2">
    //             <h1 className="text-slate-900 text-xl font-[600]">
    //               Available Ammenities
    //             </h1>
    //             <div className=" mt-8 flex flex-row flex-wrap gap-x-6 gap-y-3">
    //               {ammenitiesList.map((item, index) => (
    //                 <div className="flex gap-4" key={index}>
    //                   {/* <input
    //                     type="checkbox"
    //                     className="bg-blue-500"
    //                     onChange={() => handleAmmenitiesCheckboxChange(item)}
    //                     // @ts-ignore
    //                     checked={property_amenities.includes(item)}
    //                     // disabled={!property_amenities.includes(item)}
    //                   /> */}
    //                   <p
    //                     onClick={() => handleAmmenitiesCheckboxChange(item)}
    //                     className={`text-[15px] text-white cursor-pointer ${
    //                       property_amenities.includes(item)
    //                         ? "bg-slate-900 "
    //                         : "border"
    //                     } hover:bg-slate-300 px-4 py-1 rounded-full`}
    //                   >
    //                     {item}
    //                   </p>

    //                   {/* <p className={`text-[16px] text-white  ${property_amenities.includes(item) ? '' : ''}`}>{item}</p> */}
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //       </div>
    //       </div>

    //       <div
    //         className={`${
    //           isDesktop ? "w-4/12" : "mt-16"
    //         }  p-[1.5rem] h-fit bg-slate-500 rounded-md grid grid-cols-1 gap-8`}
    //       >
    //         {/* <div className="mt-2 grid grid-cols-1 gap-10"> */}
    //         <div className="relative">
    //           <div>
    //             <Box
    //               label="Available from"
    //               value={property_availability_from_date.toLocaleDateString()}
    //               setShowState={set_Show_Property_availability_from_date}
    //               showState={show_Property_availability_from_date}
    //             />
    //           </div>
    //           {show_Property_availability_from_date && (
    //             <div className="mt-4 absolute z-50">
    //               <Calendar
    //                 selectedDay={property_availability_from_date}
    //                 setSelectedDay={setProperty_availability_from_date}
    //                 setShowCalendar={set_Show_Property_availability_from_date}
    //               />
    //             </div>
    //           )}
    //         </div>

    //         <div className="relative">
    //           <div>
    //             <Box
    //               label="Available till"
    //               value={property_availability_till_date.toLocaleDateString()}
    //               setShowState={set_Show_Property_availability_till_date}
    //               showState={show_Property_availability_till_date}
    //             />
    //           </div>
    //           {show_Property_availability_till_date && (
    //             <div className="mt-4 absolute">
    //               <Calendar
    //                 selectedDay={property_availability_till_date}
    //                 setSelectedDay={setProperty_availability_till_date}
    //                 setShowCalendar={set_Show_Property_availability_till_date}
    //               />
    //             </div>
    //           )}
    //         </div>

    //         {/* {isUnavailable && ( */}
    //         <div className="flex flex-row gap-5 items-center">
    //           <input
    //             type="checkbox"
    //             checked={!isUnavailable}
    //             onChange={() => setIsUnavailable(!isUnavailable)}
    //             className="w-4 h-4"
    //           />
    //           <h1 className="text-[15px] text-white">Set Unavailable date</h1>
    //         </div>
    //         {/* )} */}

    //         <div>
    //         {!isUnavailable && (
    //           <div className="col-span-2 gap-8 grid grid-cols-1">
    //             <div className="relative">
    //               <div>
    //                 <Box
    //                   label="Unavailable from"
    //                   value={property_unavailability_from_date.toLocaleDateString()}
    //                   setShowState={set_Show_Property_unavailability_from_date}
    //                   showState={show_Property_unavailability_from_date}
    //                 />
    //               </div>
    //               {show_Property_unavailability_from_date && (
    //                 <div className="mt-4 absolute z-50">
    //                   <Calendar
    //                     selectedDay={property_unavailability_from_date}
    //                     setSelectedDay={setProperty_unavailability_from_date}
    //                     setShowCalendar={set_Show_Property_unavailability_from_date}
    //                   />
    //                 </div>
    //               )}
    //             </div>

    //             <div className="relative">
    //               <div>
    //                 <Box
    //                   label="Available from"
    //                   value={property_unavailability_till_date.toLocaleDateString()}
    //                   setShowState={set_Show_Property_unavailability_till_date}
    //                   showState={show_Property_unavailability_till_date}
    //                 />
    //               </div>
    //               {show_Property_unavailability_till_date && (
    //                 <div className="mt-4 absolute z-50">
    //                   <Calendar
    //                     selectedDay={property_unavailability_till_date}
    //                     setSelectedDay={setProperty_unavailability_till_date}
    //                     setShowCalendar={set_Show_Property_unavailability_till_date}
    //                   />
    //                 </div>
    //               )}
    //             </div>
    //             {!isUnavailable && (
    //               <div>
    //                 <Input value={reason} setValue={setReason} label="Reason" />
    //               </div>
    //             )}
    //           </div>
    //         )}
    //         </div>
    //         <div>
    //         <h1 className="text-slate-900 text-xl  font-[600]">Amenities</h1>

    //         <div>
    //           {property_amenities.length > 0 ? (
    //             <div className=" mt-5 flex flex-row flex-wrap gap-x-3 gap-y-3 border rounded-md p-[1rem]">
    //               {property_amenities.map((item, index) => (
    //                 <div
    //                   key={index}
    //                   className="flex flex-row items-center text-[14px] justify-center gap-2 px-4 py-1 rounded-full bg-slate-300"
    //                 >
    //                   {item}
    //                   <IoMdCloseCircle
    //                     className="text-slate-800 cursor-pointer"
    //                     onClick={() => handleAmmenitiesCheckboxChange(item)}
    //                   />
    //                 </div>
    //               ))}
    //             </div>
    //           ) : (
    //             <div className="h-[10rem] border mt-4 rounded-md flex items-center justify-center">
    //               <p className="text-[14px]">You haven't selected any amenity</p>
    //             </div>
    //           )}
    //         </div>

    //         <div className="mt-12 flex flex-row justify-between">
    //           <button className="w-5/12 bg-slate-700 text-white rounded-xl">Discard</button>
    //           <button className="w-6/12 py-3 bg-slate-400 text-white rounded-xl" onClick={validateForm}>Create Property</button>
    //         </div>
    //       </div>
    //       </div>
    //     </div>

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
                <p className="text-slate-400 text-[14px] mb-2">
                  {/* {values.property_size[0] * 10} sq ft - {values.property_size[1] * 10} sq ft */}
                </p>

                <DarkSlider
                  getAriaLabel={() => 'Temperature range'}
                  value={property_size}
                  onChange={handleSizeChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </div>
            </div>
          </div>

          {/* <div className="mt-12 shadow-md border border-slate-600 bg-slate-500 py-[2rem] px-[1rem]">
      <h1 className="text-slate-900 text-xl font-[600]">
        Property Location
      </h1>
      <div className="col-span-2 mt-8 grid grid-cols-3 gap-12">
        <Input
          placeholder="Enter address"
          type="text"
          label="Address*"
          value={values.property_address}
          handleChange={handleChange}
          error={
            errors.property_address && touched.property_address
              ? errors.property_address
              : undefined
          }
          touched={touched.property_address}
          id="property_address"
        />
        <Input
          placeholder="Enter country"
          type="text"
          label="Country"
          value={values.property_country}
          handleChange={handleChange}
          error={
            errors.property_country && touched.property_country
              ? errors.property_country
              : undefined
          }
          touched={touched.property_country}
          id="property_country"
        />
        <Input
          placeholder="Enter state"
          type="text"
          label="State"
          value={values.property_state}
          handleChange={handleChange}
          error={
            errors.property_state && touched.property_state
              ? errors.property_state
              : undefined
          }
          touched={touched.property_state}
          id="property_state"
        />
        <Input
          placeholder="Enter city"
          type="text"
          label="City"
          value={values.property_city}
          handleChange={handleChange}
          error={
            errors.property_city && touched.property_city
              ? errors.property_city
              : undefined
          }
          touched={touched.property_city}
          id="property_city"
        />
        <Input
          placeholder="Enter postal code"
          type="text"
          label="Postal Code"
          value={values.property_postal}
          handleChange={handleChange}
          error={
            errors.property_postal && touched.property_postal
              ? errors.property_postal
              : undefined
          }
          touched={touched.property_postal}
          id="property_postal"
        />
      </div>
    </div> */}
          <div className="mt-12 px-[1rem] py-[2rem] bg-slate-500  shadow-md">
            <h1 className="text-slate-900 text-xl font-[600]">
              Property Image
            </h1>

            <div className="mt-8">
              <div className="w-[100%]">
                <Dropzone
                  images={property_images}
                  setImages={setProperty_images}
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
                {ammenitiesList.map((item, index) => (
                  <div className="flex gap-4" key={index}>
                    <p
                      onClick={() => handleAmmenitiesCheckboxChange(item)}
                      className={`text-[15px] text-white cursor-pointer ${
                        property_amenities.includes(item)
                          ? 'bg-slate-900 '
                          : 'border'
                      } hover:bg-slate-300 px-4 py-1`}
                    >
                      {item}
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

            {/* {isUnavailable && ( */}
            <div className="flex flex-row gap-5 my-3 items-center">
              <input
                type="checkbox"
                checked={!isUnavailable}
                onChange={() => setIsUnavailable(!isUnavailable)}
                className="w-4 h-4"
              />
              <h1 className="text-[15px] text-white">Set Unavailable date</h1>
            </div>
            {/* )} */}

            <div>
              {!isUnavailable && (
                <div className="col-span-2 gap-8 grid grid-cols-1">
                  <div className="relative">
                    <div>
                      <Box
                        label="Unavailable from"
                        value={property_unavailability_from_date.toLocaleDateString()}
                        setShowState={
                          set_Show_Property_unavailability_from_date
                        }
                        showState={show_Property_unavailability_from_date}
                      />
                    </div>
                    {show_Property_unavailability_from_date && (
                      <div className="mt-4 absolute z-50">
                        <Calendar
                          selectedDay={property_unavailability_from_date}
                          setSelectedDay={setProperty_unavailability_from_date}
                          setShowCalendar={
                            set_Show_Property_unavailability_from_date
                          }
                        />
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <div>
                      <Box
                        label="Available from"
                        value={property_unavailability_till_date.toLocaleDateString()}
                        setShowState={
                          set_Show_Property_unavailability_till_date
                        }
                        showState={show_Property_unavailability_till_date}
                      />
                    </div>
                    {show_Property_unavailability_till_date && (
                      <div className="mt-4 absolute z-50">
                        <Calendar
                          selectedDay={property_unavailability_till_date}
                          setSelectedDay={setProperty_unavailability_till_date}
                          setShowCalendar={
                            set_Show_Property_unavailability_till_date
                          }
                        />
                      </div>
                    )}
                  </div>
                  {!isUnavailable && (
                    <div>
                      <Input
                        value={reason}
                        setValue={setReason}
                        label="Reason"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="p-[1.5rem] shadow-md bg-slate-500 h-fit">
            <h1 className="text-slate-900 text-xl  font-[600]">Amenities</h1>

            <div>
              {property_amenities.length > 0 ? (
                <div className=" mt-5 flex flex-row flex-wrap gap-x-3 gap-y-3 border shadow-md p-[1rem]">
                  {property_amenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center text-[14px] justify-center gap-2 px-4 py-[6px] bg-slate-300"
                    >
                      {item}
                      <IoMdCloseCircle
                        className="text-slate-800 cursor-pointer text-[17px]"
                        onClick={() => handleAmmenitiesCheckboxChange(item)}
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
              <button className="w-5/12 bg-slate-700 text-white shadow-md">
                Discard
              </button>
              <button
                className="w-6/12 py-3 bg-slate-400 text-white shadow-md"
                // onClick={validateForm}
                type="submit"
              >
                Create Property
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddProperty
