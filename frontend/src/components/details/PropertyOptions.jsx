import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Dropdown from "../home/Dropdown";
import Slider from "@mui/material/Slider";
import FilterOptions from "../home/FilterOptions";
import { useMediaQuery } from "react-responsive";
import { startOfToday, startOfTomorrow } from "date-fns";
const FilterBox = ({ children, title }) => {
  const [showChildren, setShowChildren] = useState(true);
  return (
    <div className="border p-[1rem] text-[13px] bg-slate-100">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h1 className="text-slate-900 text-[14px]">{title}:</h1>
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
  console.log(items);
  let today = startOfToday();
  let tomorrow = startOfTomorrow();
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

  console.log(addOns);

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
    const [checkinDay, checkinMonth, checkinYear] = checkinDate
      .split("/")
      .map(Number);
    const [checkoutDay, checkoutMonth, checkoutYear] = checkoutDate
      .split("/")
      .map(Number);

    const checkin = new Date(checkinYear, checkinMonth - 1, checkinDay);
    const checkout = new Date(checkoutYear, checkoutMonth - 1, checkoutDay);

    if (checkout < checkin) {
      console.error("Error: Checkout date can't be before checkin date");
      return null;
    }

    const differenceInMilliseconds = checkout - checkin;
    const differenceInDays = Math.floor(
      differenceInMilliseconds / (24 * 60 * 60 * 1000)
    );
    console.log(differenceInDays);
    return differenceInDays;
  }

  // calculateDayDifference(checkInDate.toLocaleDateString(), checkOutDate.toLocaleDateString())

  const calculateTotalPrice = () => {
    return (
      addOns.reduce((total, addOn) => total + addOn.price, 0) +
      items.pricing *
        calculateDayDifference(
          checkInDate.toLocaleDateString(),
          checkOutDate.toLocaleDateString()
        )
    );
  };

  return (
    <div className="">
      <div className="w-[22.5rem] exo mb-6 h-fit overflow-hidden">
        <div className="flex flex-col gap-6">
          <FilterBox title="Pricing">
            <div>
              <h1 className="text-[20px]  text-slate-500">
                ${calculateTotalPrice()}{" "}
                <span className="text-[14px] text-slate-500 font-[500]">
                  / for 0
                  {calculateDayDifference(
                    checkInDate.toLocaleDateString(),
                    checkOutDate.toLocaleDateString()
                  )}{" "}
                  nights
                </span>
              </h1>

              <div className="flex flex-row justify-between items-center mt-5">
                <p className="text-slate-500 text-[13px]">
                  {items.price} x{" "}
                  {calculateDayDifference(
                    checkInDate.toLocaleDateString(),
                    checkOutDate.toLocaleDateString()
                  )}{" "}
                  nights
                </p>

                <p className="font-[600] text-slate-600 text-[14px]">
                  $
                  {items.pricing *
                    calculateDayDifference(
                      checkInDate.toLocaleDateString(),
                      checkOutDate.toLocaleDateString()
                    )}
                </p>
              </div>
              <div className="">
                {addOns.map((itm, index) => (
                  <div>
                    {index !== 0 && (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center mt-3"
                      >
                        <p className="text-slate-600 text-[13px]">{itm.name}</p>

                        <p className=" text-slate-600 text-[14px]">
                          ${itm.price}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex flex-row justify-between items-center mt-6 border border-x-slate-50 py-3">
                  <p className="text-slate-600 text-[13px]">Taxes & Fees</p>
                  <p className="font-[600] text-slate-600 text-[14px]">
                    ${calculateTotalPrice() * 0.05}
                  </p>
                </div>

                <div className="flex flex-row justify-between items-center mt-4 mb-2">
                  <p className="text-red-500 text-[13px]">Total</p>
                  <p className="font-[600] text-red-500 text-[14px]">
                    ${calculateTotalPrice()}
                  </p>
                </div>
              </div>
            </div>
          </FilterBox>



      <FilterBox title="Date">
      <div className="my- px-3 relative">
            <h1 className="text-slate-900 text-[13px]">When To Check In?</h1>

            <div className="flex flex-col mt-3">
              <div
                className=" border-b flex justify-center px-2 py-2 flex-col"
                onClick={() => (
                  setShowCheckInCalendar(true), setShowCheckOutCalendar(false)
                )}
              >
                <p className="text-[13px] text-slate-500">Check-In:</p>
                <h1 className="text-[14px] text-slate-600 cursor-text">
                  {checkInDate.toLocaleDateString()}
                </h1>
              </div>
              <div
                className=" border-b flex justify-center px-2 py-2 flex-col"
                onClick={() => (
                  setShowCheckOutCalendar(true), setShowCheckInCalendar(false)
                )}
              >
                <p className="text-[13px] text-slate-500">Check-Out:</p>
                <h1 className="text-[14px] text-slate-600 cursor-text">
                  {checkOutDate.toLocaleDateString()}
                </h1>
              </div>

              {/* <div className=" border flex items-center justify-center">
                <img src="/calendar.png" className="w-5" />
              </div> */}
            </div>
            <div className="absolute z-[100]  drop-shadow-md rounded-md bg-white w-fit">
              {showCheckInCalendar && (
                <Calendar
                  selectedDay={checkInDate}
                  setSelectedDay={setCheckInDate}
                  setShowCalendar={setShowCheckInCalendar}
                />
              )}
              {showCheckOutCalendar && (
                <Calendar
                  selectedDay={checkOutDate}
                  setSelectedDay={setCheckOutDate}
                  setShowCalendar={setShowCheckOutCalendar}
                />
              )}
            </div>
          </div>
      </FilterBox>

         <FilterBox title="Guests">
         <div className="my-6 px-3">
            {/* <h1 className="text-slate-900">Guests</h1> */}

            <div className="mt-4">
              <div className="flex flex-row">
                <h1 className="w-7/12 border px-4 flex items-center text-[13px] text-slate-600">
                  Adults
                </h1>
                <p className="w-5/12 border px-4 py-3 border-l-slate-600  rounded-tr-md text-[13px] text-slate-400">
                  01
                </p>
              </div>
              <div className="flex flex-row">
                <h1 className="w-7/12 border px-4  flex items-center text-[13px] text-slate-600">
                  Children{" "}
                  <span className="font-[500] text-[12px] text-slate-400 ml-2">
                    (Age 2-12)
                  </span>
                </h1>
                <p className="w-5/12 border px-4 py-3 border-l-slate-600   text-[13px] text-slate-400">
                  01
                </p>
              </div>
              <div className="flex flex-row">
                <h1 className="w-7/12 border px-4 rounded-bl-md flex items-center text-[13px] text-slate-600">
                  Infants{" "}
                  <span className="font-[500] text-[12px] text-slate-400 ml-2">
                    (Age 0-2)
                  </span>
                </h1>
                <p className="w-5/12 border px-4 py-3 border-l-slate-600 text-[13px] text-slate-400">
                  01
                </p>
              </div>
            </div>
          </div>
         </FilterBox>

          <FilterBox title="Add-on Services">
          <div className="my-6 px-3">
            {/* <h1 className="text-slate-900 font-[600]">Add-on Services</h1> */}
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
          </FilterBox>

          <FilterBox title="Available Amenitites">
          <div className="my-6 px-3">
            {/* <h1 className="text-slate-900 font-[600]">Available Ammenities</h1> */}
            <div className="mt-5 flex flex-row flex-wrap gap-3">
              {ammenitiesList.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  {/* <input
                    type="checkbox"
                    className="bg-blue-500"
                    // onChange={() => handleAmmenitiesCheckboxChange(item)}
                    checked={items.property_amenities.includes(item)}
                    disabled={!items.property_amenities.includes(item)}
                  /> */}
                  <p className="text-[13px] px-3 py-1 bg-slate-600 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
          </FilterBox>
          <div className="flex gap-5 items-center">
            <input type="checkbox" className=""/>
            <p className="text-slate-600 text-[13px]">I agree to the terms and condition</p>
          </div>
        </div>
        <button className="border w-[100%] bg-slate-500 text-white py-3 mt-5">
          Book Now
        </button>
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
    if (isDesktop) {
      // toggleDrawer(anchor, false)
    }
  }, [isMobile, isDesktop]);
  return (
    <div className="border bg-slate-100 z-50">
      {/* <button onClick={toggleDrawer(anchor, true)}>Open Filter</button> */}
      {/* {
        isMobile && */}

      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <div style={{ width: "25rem" }} className="py-[1.5rem] flex justify-center relative">
          <PropertyOptionCard items={item} />

          {/* <div className='w-6 h-6 rounded-full absolute bg-slate-900 top-24  -left-1'></div> */}
        </div>
      </Drawer>
      {/* } */}

      {/* {
  isDesktop && <div style={{ width: "24.5rem" }} className="  pl-4 relative">
  <PropertyOptionCard items={item} /> </div>
} */}
    </div>
  );
}

// export default PropertyOptions;
