import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Dropdown from "../home/Dropdown";
import Slider from "@mui/material/Slider";
import FilterOptions from "../home/FilterOptions";
import { useMediaQuery } from 'react-responsive';
import { startOfToday, startOfTomorrow } from "date-fns";
const FilterBox = ({ children, title }) => {
  const [showChildren, setShowChildren] = useState(true);
  return (
    <div className="border p-[1rem] text-[13px] bg-slate-50">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h1 className="text-yellow-900 text-[17px] font-[600]">{title}:</h1>
        {showChildren ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>

      {showChildren && (
        <div
          style={{
            height: showChildren ? "auto" : 0,
            overflow: "",
            transition: "height 3.3s ease-in-out",
          }}
          className="mt-4"
        >
          {children}
        </div>
      )}
    </div>
  );
};

function valuetext(value) {
  return `${value}°C`;
}

const PropertyOptionCard = ({ items }) => {
  let today = startOfToday()
  let tomorrow = startOfTomorrow()
  const [adults, setAdults] = useState("No. Of Adults");
  const [children, setChildren] = useState("No. Of Children (Ages 2-12)");
  const [infants, setInfants] = useState("No. Of Children (Ages 0-2)");
  const [roomType, setRoomType] = useState("Private Room");
  const [accomodationType, setAccomodationType] = useState([]);
  const [areaSize, setAreaSize] = useState([20, 70]);
  const [bathrooms, setBathrooms] = useState("Other");
  const [bedroom, setBedroom] = useState("Other");
  const [priceRange, setPriceRange] = useState([300, 1200]);
  const [amenities, setAmenities] = useState([]);
  const [addOns, setAddOns] = useState([{ name: "initialName", price: 0 }]);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  let [checkInDate, setCheckInDate] = useState(today);
  let [checkOutDate, setCheckOutDate] = useState(tomorrow);

  console.log(addOns)

  const numberOptions = [1, 2, 3, 4, 5];

  // console.log(items);
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
    // "Airport Transportation"
  ];

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

  // console.log(add_ons);

  const facility = [
    "Free Parking",
    "Beachside",
    "Markets",
    "Pharmacy",
    "Playground",
  ];

  const handleAccomodationCheckboxChange = (item) => {
    // Check if the item is already in the state
    if (accomodationType.includes(item)) {
      // If yes, remove it
      setAccomodationType(accomodationType.filter((type) => type !== item));
    } else {
      // If not, add it
      setAccomodationType([...accomodationType, item]);
    }
  };

  const handleAmmenitiesCheckboxChange = (item) => {
    // Check if the item is already in the state
    if (amenities.includes(item)) {
      // If yes, remove it
      setAmenities(amenities.filter((type) => type !== item));
    } else {
      // If not, add it
      setAmenities([...amenities, item]);
    }
  };

  // console.log(checkInDate)

  const handleAddOnsCheckboxChange = (name, price) => {
    // Check if the item is already in the state based on name
    const isItemInState = addOns.some((addOn) => addOn.name === name);

    if (isItemInState) {
      // If yes, remove it
      setAddOns(addOns.filter((addOn) => addOn.name !== name));
      console.log("removed", name);
    } else {
      // If not, add it with name and price
      setAddOns([...addOns, { name, price }]);
      console.log("added", name);
    }
  };
  const handleSizeChange = (event, newValue) => {
    setAreaSize(newValue);
    console.log(newValue);
  };
  // console.log(checkOutDate.toLocaleDateString())
  function calculateDayDifference(checkinDate, checkoutDate) {
    const [checkinDay, checkinMonth, checkinYear] = checkinDate.split('/').map(Number);
    const [checkoutDay, checkoutMonth, checkoutYear] = checkoutDate.split('/').map(Number);
  
    const checkin = new Date(checkinYear, checkinMonth - 1, checkinDay);
    const checkout = new Date(checkoutYear, checkoutMonth - 1, checkoutDay);
  
    if (checkout < checkin) {
      console.error("Error: Checkout date can't be before checkin date");
      return null;
    }
  
    const differenceInMilliseconds = checkout - checkin;
    const differenceInDays = Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000));
    console.log(differenceInDays)
    return differenceInDays;
  }

  // calculateDayDifference(checkInDate.toLocaleDateString(), checkOutDate.toLocaleDateString())



  const calculateTotalPrice = () => {
    return addOns.reduce((total, addOn) => total + addOn.price, 0) + (items.price * calculateDayDifference(checkInDate.toLocaleDateString(), checkOutDate.toLocaleDateString()));
  };

  return (
    <div className="">
      <div className="w-[22.5rem] exo mb-6 h-fit rounded-md overflow-hidden">
        <div>
          <FilterBox title="Pricing">
            <div>
              <h1 className="text-[26px] font-[600] text-slate-500">${calculateTotalPrice()} <span className="text-[16px] text-slate-500 font-[500]">/ for 03 nights</span></h1>

              <div className="flex flex-row justify-between items-center mt-5">
                      <p className="text-slate-600 text-[13px]">
                        {items.price} x {calculateDayDifference(checkInDate.toLocaleDateString(), checkOutDate.toLocaleDateString())} nights
                      </p>
      
                      <p className="font-[600] text-slate-600 text-[14px]">${items.price * calculateDayDifference(checkInDate.toLocaleDateString(), checkOutDate.toLocaleDateString())}</p>
                    </div>
              <div className="">
                {
                  addOns.map((itm, index) => (
                   <div>
                    {
                      index !== 0 &&  <div key={index} className="flex flex-row justify-between items-center mt-3">
                      <p className="text-slate-600 text-[13px]">
                        {itm.name} 
                      </p>
      
                      <p className="font-[600] text-slate-600 text-[14px]">${itm.price}</p>
                    </div>
                    }
                   </div>
                  ))
                }

                <div className="flex flex-row justify-between items-center mt-6 border border-x-slate-50 py-3">
                  <p className="text-slate-600 text-[13px]">Taxes & Fees</p>
                  <p className="font-[600] text-slate-600 text-[14px]">$320</p>
                </div>

                <div className="flex flex-row justify-between items-center mt-4 mb-2">
                  <p className="text-red-500 text-[13px]">Total</p>
                  <p className="font-[600] text-red-500 text-[14px]">${calculateTotalPrice()}</p>
                </div>
              </div>
              
            </div>
          </FilterBox>

          {/* <div className="flex  h-[6rem] md:h-[3.75rem] mt-5  flex-col md:flex-row"> */}
            {/* <div className="w-[100%] md:w-2/5 border flex  py-2 md:py-0 flex-col justify-center md:rounded-l-md">
              <p
                className="text-[13px] mx-4 text-gray-500"
                onClick={() => (
                  setShowCheckInCalendar(true), setCheckOutDate(false)
                )}
              >
                Check-In:
              </p>

              <h1 className="text-[15px] text-gray-500 px-4 cursor-text">
                {checkInDate !== "" ? checkInDate : "Date"}
              </h1>
            </div>
            <div className="md:w-3/5 w-[100%] flex flex-row">
              <div className="w-9/12  md:mt-0 md:w-4/6 border py-2 md:py-0 flex flex-col  justify-center">
                <p
                  className="text-[13px] mx-4 text-gray-500"
                  onClick={() => (
                    setShowCheckInCalendar(false), setCheckOutDate(true)
                  )}
                >
                  Check-Out:
                </p>
                <h1 className="text-[15px] text-gray-500 px-4 cursor-text">
                  Date
                </h1>
              </div>
              <div className="w-3/12 md:w-2/6  md:mt-0 border py-2 md:py-0 flex items-center justify-center md:rounded-r-md">
                <img src="/calendar.png" className="w-6" />
              </div>
            </div>
          </div> */}

<div className="my-6 px-3 relative">
            <h1 className="text-yellow-900 font-[600]">When To Check In?</h1>

            <div className="flex flex-row">
              <div className="w-2/5 border flex justify-center px-3 py-2 flex-col" onClick={() => (setShowCheckInCalendar(true), setShowCheckOutCalendar(false))}>
                <p className="text-[13px] text-slate-400">Check-In:</p>
                <h1 className="text-[15px] text-slate-600 cursor-text">{checkInDate.toLocaleDateString()}</h1>
              </div>
              <div className="w-2/5 border flex justify-center px-3 py-2 flex-col" onClick={() => (setShowCheckInCalendar(false), setShowCheckOutCalendar(true))}>
                <p className="text-[13px] text-slate-400">Check-Out:</p>
                <h1 className="text-[15px] text-slate-600 cursor-text">{checkOutDate.toLocaleDateString()}</h1>
              </div>

              <div className="w-1/5 border flex items-center justify-center">
                <img src="/calendar.png" className="w-5" />
              </div>
              
            </div>
            <div className="absolute z-[100]  drop-shadow-md rounded-md bg-white w-fit">
            {showCheckInCalendar && (
          <Calendar selectedDay={checkInDate} setSelectedDay={setCheckInDate} setShowCalendar={setShowCheckInCalendar}/>
        )}
            {showCheckOutCalendar && (
          <Calendar selectedDay={checkOutDate} setSelectedDay={setCheckOutDate}  setShowCalendar={setShowCheckOutCalendar}/>
        )}
          </div>
          </div>
          


            <div className="my-6 px-3">
            <h1 className="text-yellow-900 font-[600]">Guests</h1>


            <div className="mt-4">
              <div className="flex flex-row">
                <h1 className="w-7/12 border px-4 rounded-tl-md flex items-center text-[15px] font-[600] text-slate-600">Adults</h1>
                <p className="w-5/12 border px-4 py-3 border-l-white  rounded-tr-md text-[14px] text-slate-400">01</p>
              </div>
              <div className="flex flex-row">
                <h1 className="w-7/12 border px-4  flex items-center text-[15px] font-[600] text-slate-600">Children <span className="font-[500] text-[13px] text-slate-400 ml-2">(Age 2-12)</span></h1>
                <p className="w-5/12 border px-4 py-3 border-l-white   text-[14px] text-slate-400">01</p>
              </div>
              <div className="flex flex-row">
              <h1 className="w-7/12 border px-4 rounded-bl-md flex items-center text-[15px] font-[600] text-slate-600">Infants <span className="font-[500] text-[13px] text-slate-400 ml-2">(Age 0-2)</span></h1>
                <p className="w-5/12 border px-4 py-3 border-l-white  rounded-br-md text-[14px] text-slate-400">01</p>
              </div>
            </div>
            </div>


          <div className="my-6 px-3">
            <h1 className="text-yellow-900 font-[600]">Add-on Services</h1>
            <div className="grid mt-5 grid-cols-1 gap-3">
              {add_ons.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  <input
                    type="checkbox"
                    className="custom-checkbox bg-blue-500"
                    onChange={() =>
                      handleAddOnsCheckboxChange(item.name, item.price)
                    } // Assuming a fixed price of 50
                    checked={addOns.some((addOn) => addOn.name === item.name)}
                  />
                  <p className="text-[13px]">{item.name}</p>
                </div>
              ))}
            </div>
          </div>


          <div className="my-6 px-3">
            <h1 className="text-yellow-900 font-[600]">Available Ammenities</h1>
            <div className="grid mt-5 grid-cols-1 gap-3">
              {ammenitiesList.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  <input
                    type="checkbox"
                    className="bg-blue-500"
                    // onChange={() => handleAmmenitiesCheckboxChange(item)}
                    checked={items.amenities.includes(item)}
                    disabled={!items.amenities.includes(item)}
                  />
                  <p className="text-[13px]">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        <button className="border w-[100%] bg-yellow-500 text-white rounded-md py-3 mt-5">Book Now</button>
      </div>
    </div>
  );
};

import FilterOption from "../properties/FilterOptions";
import { Drawer } from "@mui/material";
import Calendar from "../Calendar";
export default function PropertyOptions({ state, setState, item }) {


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = "right"; // Set your desired anchor position (e.g., 'right', 'left', 'top', 'bottom')
  const isMobile = useMediaQuery({ maxWidth: 999 });
  const isDesktop = useMediaQuery({ minWidth: 999 });

  useEffect(() => {
    if(isDesktop) {
      toggleDrawer(anchor, false)
    }
  }, [isMobile, isDesktop])
  return (
    <div className="">
      {/* <button onClick={toggleDrawer(anchor, true)}>Open Filter</button> */}
      {
        isMobile &&
      
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <div style={{ width: "24.5rem" }} className="py-[1.5rem] pl-4 relative">
          <PropertyOptionCard items={item} />


          {/* <div className='w-6 h-6 rounded-full absolute bg-yellow-900 top-24  -left-1'></div> */}
        </div>
      </Drawer>
}

{
  isDesktop && <div style={{ width: "24.5rem" }} className="  pl-4 relative">
  <PropertyOptionCard items={item} /> </div>
}
    </div>
  );
}

// export default PropertyOptions;
