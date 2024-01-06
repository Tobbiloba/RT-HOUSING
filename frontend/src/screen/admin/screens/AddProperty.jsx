import React, { useEffect, useState } from "react";
import Stepper from "../../../components/admin/stepper/Stepper";
import Input from "../../../components/input/Input";
import Dropdown from "../../../components/admin/dropdown/Dropdown";
import Textarea from "../../../components/textarea/Textarea";
import { Slider } from "@mui/material";
import { toast } from "react-toastify";
import Calendar from "../../../components/Calendar";
import { startOfToday, startOfTomorrow } from "date-fns";
import Box from "../../../components/admin/box/Box";
import Dropzone from "../../../components/admin/dropzone/Dropzone";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { createProperty } from "../../../action/property";
const AddProperty = () => {
  const dispatch = useDispatch()
  let today = startOfToday();
  let tomorrow = startOfTomorrow();
  const [property_name, setProperty_name] = useState("");
  const [property_type, setProperty_type] = useState("All");
  const [property_description, setProperty_description] = useState("");
  const [property_bedrooms, setProperty_bedrooms] = useState(0);
  const [property_bathroom, setProperty_bathroom] = useState(0);
  const [property_size, setProperty_size] = useState([20, 70]);
  const [property_amenities, setProperty_amenities] = useState([]);
  const [property_images, setProperty_images] = useState([]);
  const [property_state, setProperty_state] = useState("");
  const [property_country, setProperty_country] = useState("");
  const [property_city, setProperty_city] = useState("");
  const [property_dog_policy, setProperty_dog_policy] = useState(false);
  const [property_smoking_policy, setProperty_smoking_policy] = useState(false);
  const [property_pricing, setProperty_pricing] = useState("");
  const [reason, setReason] = useState('')
  const [property_availability_from_date, setProperty_availability_from_date] =
    useState(today);
  const [
    show_Property_availability_from_date,
    set_Show_Property_availability_from_date,
  ] = useState(false);
  const [
    property_unavailability_from_date,
    setProperty_unavailability_from_date,
  ] = useState(tomorrow);
  const [
    show_Property_unavailability_from_date,
    set_Show_Property_unavailability_from_date,
  ] = useState(false);
  const [property_availability_till_date, setProperty_availability_till_date] =
    useState(tomorrow);
  const [
    show_Property_availability_till_date,
    set_Show_Property_availability_till_date,
  ] = useState(false);
  const [
    property_unavailability_till_date,
    setProperty_unavailability_till_date,
  ] = useState(tomorrow);
  const [
    show_Property_unavailability_till_date,
    set_Show_Property_unavailability_till_date,
  ] = useState(false);
  const [property_occupied_from_date, setProperty_occupied_from_date] =
    useState("");
  const [
    show_property_occupied_from_date,
    set_Show_Property_occupied_from_date,
  ] = useState(false);
  const [property_occupied_till_date, setProperty_occupied_till_date] =
    useState("");
  const [
    show_property_occupied_till_date,
    set_Show_Property_occupied_till_date,
  ] = useState(false);
  const [property_children, setProperty_children] = useState(0);
  const [property_adults, setProperty_adults] = useState(0);
  const [property_infants, setProperty_infants] = useState(0);
  const steps = ["Property Info", "Availability", "Upload Images"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(true);

  const options = [
    "Apartment",
    "Villa",
    "Farmhouse",
    "Condos",
    "Townhouse",
    "Duplex",
    "Studio",
    "Chalet",
  ];

  const numbers = [1, 2, 3, 4, 5, 6];

  const add_ons = [
    { name: "Airport Transportation", price: 50 },
    { name: "Car Rental", price: 75 },
    { name: "Fresh Groceries", price: 30 },
    { name: "Driver", price: 60 },
    { name: "Medical Representative", price: 45 },
    { name: "Masseurs", price: 80 },
    { name: "Personal Chef or Catering", price: 100 },
    { name: "Concierge Service", price: 55 },
    { name: "Local Recommendations or Guidebooks", price: 25 },
    { name: "Fitness Facilities or Gym Access", price: 70 },
    { name: "High-Speed Internet", price: 40 },
    { name: "Desk and Office Space", price: 65 },
    { name: "Streaming Services (Netflix, Hulu, etc.)", price: 35 },
    { name: "Smart Home Features (Smart Locks, Thermostat)", price: 90 },
    { name: "Board Games or Gaming Console", price: 50 },
    { name: "Swimming Pool or Hot Tub", price: 120 },
    { name: "Bicycles or Sports Equipment", price: 55 },
    { name: "Barbecue Grill or Outdoor Kitchen", price: 80 },
    { name: "Event Space or Banquet Hall", price: 150 },
    { name: "Celebration Decorations", price: 30 },
    { name: "Specialized Services for Events", price: 100 },
    { name: "Wheelchair Accessibility", price: 40 },
    { name: "Elevator or Ground-Floor Access", price: 50 },
    { name: "Security System", price: 80 },
    { name: "Safe for Valuables", price: 30 },
    { name: "Local Experience or Guided Tours", price: 60 },
    { name: "Community Events or Workshops", price: 25 },
    { name: "Pet-Friendly Accommodations", price: 45 },
    { name: "Pet Supplies (Bowls, Beds)", price: 20 },
  ];

  const ammenitiesList = [
    "WI-FI",
    "Air Conditioning",
    "TV Cable",
    "Swimming Pool",
    "Barbecue Area",
    "Sauna",
    "Dish Washer",
    "Gym",
    "Laundry",
    "Parking",
    "Pet-friendly",
    "Security System",
    "Balcony",
    "Fireplace",
    "Elevator",
    "Playground",
    "Tennis Court",
    "Basketball Court",
    "Football (Soccer) Field",
    "Jacuzzi",
    "Conference Room",
    "Concierge Service",
    "Library",
    "Movie Theater",
    "Business Center",
    "Yoga Studio",
    "Roof Deck",
    "Game Room",
    "Bike Storage",
    "Electric Car Charging Stations",
    "Guest Suites",
    "Golf Course Access",
    "Dry Cleaning Service",
    "Valet Parking",
    "Sky Lounge",
    "Parcel Lockers",
    "Art Studio",
    "Community Garden",
    "Sun Deck",
    "Ping Pong Table",
    "Karaoke Room",
    "Volleyball Court",
    "Badminton Court",
    "Hiking Trails",
    "Bowling Alley",
    "Mini Golf",
    "Fishing Pond",
    "Snooker/Pool Table",
    "Darts",
    "Ice Skating Rink",
    "Rock Climbing Wall",
    "Waterfront Access",
    "Surf Simulator",
    "Meditation Room",
    "Tech Hub",
    "Virtual Reality Room",
  ];

  const handleSizeChange = (event, newValue) => {
    setProperty_size(newValue);
    // console.log(newValue);
  };

  const handleAmmenitiesCheckboxChange = (item) => {
    // Check if the item is already in the state
    if (property_amenities.includes(item)) {
      // If yes, remove it
      setProperty_amenities(property_amenities.filter((type) => type !== item));
    } else {
      // If not, add it
      setProperty_amenities([...property_amenities, item]);
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }



  const validateStepOne = () => {
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
    ];
  
    if (currentStep === 1 && requiredFields.some(field => !eval(field))) {
      toast.info("You must fill in all forms", { /* toast options */ });
      return;
    }
  
    if (currentStep === 1 && property_amenities <= 2) {
      toast.info("You must select at least 3 amenities", { /* toast options */ });
      return;
    }
  
    if (currentStep === 1) {
      // Additional validation logic if needed
      setCurrentStep(prev => prev + 1);
      toast.info("You have successfully added property information", { /* toast options */ });
    }
  };
  
  const validateStepTwo = () => {
    if (currentStep === 2) {
      if (!isUnavailable && !reason) {
        toast.info("You need to have a reason", { /* toast options */ });
        return;
      }
  
      else {
        setCurrentStep(prev => prev + 1);
        toast.info("You have successfully added property availability date", { /* toast options */ });
        return;
      }
    }
  };

  const validateStepThree = () => {
    if (currentStep === 3) {
      if (!property_images || property_images.length < 3) {
        console.log('Image not enough');
        toast.info("You need to upload at least 5 images", { /* toast options */ });
        return;
      } else {
        const id = '6596e220f0dcce3853b161c3';
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
            city: property_city
          },
          pricing: property_pricing,
          property_policy: {
            pet_policy: property_dog_policy,
            smoking_policy: property_smoking_policy
          },
          availability: {
            available_date_from: property_availability_from_date,
            available_date_till: property_availability_till_date,
            unavailable_date_from: isUnavailable ? '' : property_unavailability_from_date,
            unavailable_date_till: isUnavailable ? '' : property_occupied_till_date,
            occupied_date_from: property_occupied_from_date || [],
            occupied_date_till: property_occupied_till_date || [],
          },
          guest: {
            maximum_adults: property_adults,
            maximum_children: property_children,
            maximum_infants: property_infants,
          }
        }


        // console.log(id, property_information)
        dispatch(createProperty(
          id,
          property_information
        ))
        // toast.success("You have successfully added your property", { /* toast options */ });
        return;
      }
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      validateStepOne();
    } else if (currentStep === 2) {
      validateStepTwo();
    } else if (currentStep === 3) {
      validateStepThree();
    }

   


   

   
  };

const navigate = useNavigate()
  const createProduct = useSelector((state) => state?.createProperty)
  console.log(createProduct)
  useEffect(() => {
    if(createProduct.status == "succeessful") {
      navigate('/admin-properties')
    }
  }, [createProduct])

  // console.log(property_availability_from_date)

  // console.log(property_availability_from_date.toLocaleDateString());
  return (
    <div className="exo p-4 md:px-[5%]">
      <h1 className="text-white text-xl">Add Property</h1>

      <div className="mt-12 h-fit">
        <div className="flex items-center justify-center">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            complete={complete}
          />
        </div>

        {/* <PropertyInfo /> */}

        {currentStep === 1 ? (
          <div className="mt-16 flex flex-col sm:grid grid-cols-2 gap-y-6 md:gap-y-16 gap-x-12">
            <div className="col-span-2 flex flex-col sm:flex-row gap-y-6 md:gap-y-16 gap-x-12">
              <Input
                value={property_name}
                setValue={setProperty_name}
                label="Property name"
              />
              {/* <div className="w-6/12"> */}
              <Dropdown
                label="Property Type"
                data={options}
                state={property_type}
                setState={setProperty_type}
              />
            </div>

            {/* </div> */}

            <Textarea
              value={property_description}
              setValue={setProperty_description}
              label="Property description"
            />
            {/* <input /> */}

            <div className="flex col-span-2 flex-col sm:flex-row gap-y-6 md:gap-y-16 gap-x-12">
              {/* <div className="w-6/12"> */}
              <Dropdown
                label="Bathrooms"
                data={numbers}
                state={property_bathroom}
                setState={setProperty_bathroom}
              />
              {/* </div> */}

              {/* <div className="w-6/12 border"> */}
              <Dropdown
                label="Bedrooms"
                data={numbers}
                state={property_bedrooms}
                setState={setProperty_bedrooms}
              />
              {/* </div> */}
            </div>

            <div className="col-span-2 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-16 gap-x-12">
              <Dropdown
                label="Adults"
                data={numbers}
                state={property_adults}
                setState={setProperty_adults}
              />
              <Dropdown
                label="Children (2 - 10) yrs"
                data={numbers}
                state={property_children}
                setState={setProperty_children}
              />
              <Dropdown
                label="Infants (0 - 2) yrs"
                data={numbers}
                state={property_infants}
                setState={setProperty_infants}
              />
            </div>
            {/* <Dropdown label="Bathrooms" data={numbers} state={property_bathroom} setState={setProperty_bathroom}/> */}

            <div className="col-span-2 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-16 gap-x-12">
              <Input
                value={property_country}
                setValue={setProperty_country}
                label="Country"
              />
              <Input
                value={property_state}
                setValue={setProperty_state}
                label="State"
              />
              <Input
                value={property_city}
                setValue={setProperty_city}
                label="City"
              />
            </div>

            <div className="col-span-2 grid sm:grid-cols-2 gap-y-6 md:gap-y-16 gap-x-12">
              <Input
                value={property_pricing}
                setValue={setProperty_pricing}
                label="Pricing /night"
              />

              <div>
                <h1 className="mb-5 text-white text-xl">Policies</h1>

                <div className="flex flex-row  gap-12">
                  <div className="flex flex-row gap-5 items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                      checked={property_dog_policy}
                      onChange={() =>
                        setProperty_dog_policy(!property_dog_policy)
                      }
                    />
                    <p className="text-[18px] text-white">Pets</p>
                  </div>
                  <div className="flex flex-row gap-5 items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                      checked={property_smoking_policy}
                      onChange={() =>
                        setProperty_smoking_policy(!property_smoking_policy)
                      }
                    />
                    <p className="text-[18px] text-white">Smoking</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="mb-5 text-white text-xl">Property Size</h1>
              <p className="text-slate-400 text-[16px] mb-2">
                {property_size[0] * 10} sq ft - {property_size[1] * 10} sq ft
              </p>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={property_size}
                onChange={handleSizeChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="primary"
              />
            </div>

            {/* <div className=""> */}
            <div className="my-6  w-[100%] col-span-2">
              <h1 className="text-slate-500 text-xl font-[600]">
                Available Ammenities
              </h1>
              <div className=" mt-5 flex flex-row flex-wrap gap-6">
                {ammenitiesList.map((item, index) => (
                  <div className="flex gap-4" key={index}>
                    <input
                      type="checkbox"
                      className="bg-blue-500"
                      onChange={() => handleAmmenitiesCheckboxChange(item)}
                      checked={property_amenities.includes(item)}
                      // disabled={!property_amenities.includes(item)}
                    />
                    <p className="text-[16px] text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* </div> */}
          </div>
        ) : currentStep === 2 ? (
          <div className="mt-16 flex flex-col sm:grid grid-cols-2 gap-y-6 md:gap-y-16 gap-x-12">
            <div className="relative">
              <div>
                <Box
                  label="Available from"
                  value={property_availability_from_date.toLocaleDateString()}
                  setShowState={set_Show_Property_availability_from_date}
                  showState={show_Property_availability_from_date}
                />
              </div>
              {show_Property_availability_from_date && (
                <div className="mt-4 absolute z-50">
                  <Calendar
                    selectedDay={property_availability_from_date}
                    setSelectedDay={setProperty_availability_from_date}
                    setShowCalendar={set_Show_Property_availability_from_date}
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <div>
                <Box
                  label="Available till"
                  value={property_availability_till_date.toLocaleDateString()}
                  setShowState={set_Show_Property_availability_till_date}
                  showState={show_Property_availability_till_date}
                />
              </div>
              {show_Property_availability_till_date && (
                <div className="mt-4 absolute">
                  <Calendar
                    selectedDay={property_availability_till_date}
                    setSelectedDay={setProperty_availability_till_date}
                    setShowCalendar={set_Show_Property_availability_till_date}
                  />
                </div>
              )}
            </div>

            {/* {isUnavailable && ( */}
              <div className="flex flex-row gap-5 items-center">
                <input
                  type="checkbox"
                  checked={!isUnavailable}
                  onChange={() => setIsUnavailable(!isUnavailable)}
                  className="w-5 h-5"
                />
                <h1 className="text-[17px] text-white">Set Unavailable date</h1>
              </div>
            {/* )} */}
            {!isUnavailable && (
              <div className="col-span-2 sm:grid grid-cols-2 gap-y-6 md:gap-y-16 gap-x-12">
                <div className="relative">
                  <div>
                    <Box
                      label="Unavailable from"
                      value={property_unavailability_from_date.toLocaleDateString()}
                      setShowState={set_Show_Property_unavailability_from_date}
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
                      setShowState={set_Show_Property_unavailability_till_date}
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
                {
                    !isUnavailable && <div>
                      <Input
                value={reason}
                setValue={setReason}
                label="Reason"
              />
                    </div>
                  }
              </div>
            )}
          </div>
        ) : currentStep === 3 ? (
          <div>
            <Dropzone images={property_images} setImages={setProperty_images}/>
          </div>
        ) : (
          ""
        )}

        {/* <input placeholder='Property name' className='outline-none bg-transparent border' type='text' value={property_name} onChange={() => setProperty_name(e.target.value)}/> */}
      </div>

      {!complete && (
        <div className="flex justify-end items-end mt-6">
          <button
            className="mt-1 text-[17px] uppercase tracking-wider font-bold text-neutral-500 border border-slate-600 border-primary rounded-sm py-3 px-6 hover:bg-primary hover:text-white transition-colors animate-bounce"
            onClick={handleNext}
          >
            {createProduct.loading ? 'Please wait...' : currentStep === steps.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProperty;
