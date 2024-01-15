import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Dropdown from "../home/Dropdown";
import Slider from '@mui/material/Slider';
import FilterOptions from "../home/FilterOptions";
const FilterBox = ({ children, title }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div className="border p-[1rem] text-[13px]">
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={() => setShowChildren(!showChildren)}
      >
        <h1>{title}:</h1>
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


const FilterOption = () => {
  const [adults, setAdults] = useState("No. Of Adults");
  const [children, setChildren] = useState("No. Of Children (Ages 2-12)");
  const [infants, setInfants] = useState("No. Of Children (Ages 0-2)");
  const [roomType, setRoomType] = useState('Private Room');
  const [accomodationType, setAccomodationType] = useState([]);
  const [areaSize, setAreaSize] = useState([20, 70]);
  const [bathrooms, setBathrooms] = useState('Other');
  const [bedroom, setBedroom] = useState("Other");
  const [priceRange, setPriceRange] = useState([300, 1200]);
  const [amenities, setAmenities] = useState([]);
  const [facilities, setFacilities] = useState([]);




  const numberOptions = [1, 2, 3, 4, 5];

const room = [
  {
    id: 1,
    type: "Private Room",
    img: "/suitcase.png",
  },
  {
    id: 2,
    type: "Shared Room",
    img: "/meeting.png",
  },
  {
    id: 3,
    type: "Entire Place",
    img: "/bungalow.png",
  },
];
const accomodation = [
  'Apartment',
  'Condo',
  'Multi Family Space',
  'Single Family Space',
  'Farm',
  'Loft',
  'Villa',
  'Townhouse'
]

const ammenitiesList = [
  'WI-FI',
  'Air Conditioning',
  'TV Cable',
  'Swimming Pool',
  'Barbecue Area',
  'Sauna',
  'Dish Washer',
  // 'Sauna',
  'Gym',
  'Laundry'
]

const facility = [
  'Free Parking',
  'Beachside',
  'Markets',
  'Pharmacy',
  'Playground'
]


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

const handleFacilitiesCheckboxChange = (item) => {
  // Check if the item is already in the state
  if (facilities.includes(item)) {
    // If yes, remove it
    setFacilities(facilities.filter((type) => type !== item));
  } else {
    // If not, add it
    setFacilities([...facilities, item]);
  }
};
const handleSizeChange = (event, newValue) => {
  setAreaSize(newValue);
  console.log(newValue)
};

  return (
    <div className="">
      <div className="w-[22.5rem] exo mb-6 h-fit rounded-md overflow-hidden">
        <h1 className="border p-[1rem] text-yellow-900 font-[600] bg-slate-100">
          Narrow Your Search
        </h1>

        <div>
          <FilterBox title="Number Of Guests">
            <Dropdown state={adults} setState={setAdults} data={numberOptions}/>
            <Dropdown state={children} setState={setChildren} data={numberOptions}/>
            <Dropdown state={infants} setState={setInfants} data={numberOptions}/>
          </FilterBox>

          <FilterBox title="Room Type">
            <div className="flex flex-col">
              {
                room.map((item) => (
                  <div key={item.type} onClick={() => setRoomType(item.type)} className="flex text-[13px] px-3 border border-t-gray-100 border-  flex-row justify-between mt-4 cursor-pointer  hover:shadow-sm py-3 items-center">
                  <div className="flex flex-row gap-3">
                    <img src={item.img} alt="suitcase" className="w-8 mr-8" />
                    <h1>Private Room</h1>
                    <p>(58,150)</p>
                  </div>
                  <div className="border w-6 h-6 rounded-full">
                    {
                      roomType === item.type &&
                    
                    <img src="/checked.png" alt="checked" className="w-[100%]" />
}
                  </div>
                </div>
                ))
              }
            </div>
           
          </FilterBox>

          <FilterBox title="Accomodation Type">
            <div className="grid grid-cols-2 gap-3">
              {
              accomodation.map((item, index) => (
                <div className="flex gap-3">
                  <input type="checkbox" className="custom-checkbox"             onChange={() => handleAccomodationCheckboxChange(item)}
            checked={accomodationType.includes(item)}/>
                  <p className="text-[13px]">{item}</p>
                </div>
              ))
            }
            </div>
            
          </FilterBox>

          <FilterBox title="Area Size">
            <p className="text-slate-400 text-[14px] mb-2">{areaSize[0] * 10} sq ft - {areaSize[1] * 10} sq ft</p>
          <Slider
        getAriaLabel={() => 'Temperature range'}
        value={areaSize}
        onChange={handleSizeChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="primary"
      />
          </FilterBox>
          <FilterBox title="Number of Bedrooms">
            <FilterOptions type='' value={bedroom} setValue={setBedroom}/>
          </FilterBox>
          <FilterBox title="Number of Bathrooms">
            <FilterOptions type='' value={bathrooms} setValue={setBathrooms}/>
          </FilterBox>

                    <FilterBox title="Amenities">
            <div className="grid grid-cols-2 gap-3">
              {
              ammenitiesList.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  <input type="checkbox" className="custom-checkbox"             onChange={() => handleAmmenitiesCheckboxChange(item)}
            checked={amenities.includes(item)}/>
                  <p className="text-[13px]">{item}</p>
                </div>
              ))
            }
            </div>
            
          </FilterBox>

          <FilterBox title="Facilities">
            <div className="grid grid-cols-2 gap-3">
              {
              facility.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  <input type="checkbox" className="custom-checkbox"             onChange={() => handleFacilitiesCheckboxChange(item)}
            checked={facilities.includes(item)}/>
                  <p className="text-[13px]">{item}</p>
                </div>
              ))
            }
            </div>
            
          </FilterBox>

          <div className="px-4 py-10 bg-gray-100 text-center items-center justify-center flex flex-col">
            <p className="text-[15px] text-gray-500">Click "Apply Filter" button to get <br /> desired search result</p>
            <button className="mt-4 border-[3px] text-yellow-500 cursor-pointer border-yellow-500 hover:text-white hover:bg-yellow-500 px-10 py-3 rounded-md w-fit">Apply Filters</button>
            <button className="mt-4 text-sky-400">Reset All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOption;