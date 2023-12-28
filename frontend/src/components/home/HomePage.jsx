import React, {useState, useEffect} from 'react';
// import Logo from './Logo';
import TopBar from './TopBar';
import MenuBar from './MenuBar';
// import Swiper from './Swiper'
import Slider from './slider';
import DropDown from './Dropdown';
import Calendar from './Calendar';
import dayjs from 'dayjs';
import FilterOptions from './FilterOptions';
import AvailableCard from './AvailableCard';
const HomePage = () => {
    const [currentSwiper, setCurrentSwiper] = useState(1);
    const [selectedLocation, setSelectedLocation] = useState("Select a Location");
    const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
    const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
    const locations = ["Lekki", "Ikoyi", "Ajah", "Banana Island"];
    const [checkInDate, setCheckInDate] = useState(dayjs("2022-04-17"));
    const [checkOutDate, setCheckOutDate] = useState(dayjs("2022-04-17"));
    const [adults, setAdults] = useState(1);
    const [childrens, setChildrens] = useState("");
    const [infants, setInfants] = useState("");
  
    useEffect(() => {
      const updateState = () => {
        setCurrentSwiper((prevCount) => (prevCount < 3 ? prevCount + 1 : 1));
      };
  
      const intervalId = setInterval(updateState, 5500);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  
    const options = [
      {
        id: 1,
        p: "Start Your Day In",
        h1: "Birmingham",
        link: "/",
      },
      {
        id: 2,
        p: "Luxury House In",
        h1: "Beautiful Forest",
        link: "/",
      },
      {
        id: 3,
        p: "Enjoy Your Holiday In",
        h1: "United Emirates",
        link: "/",
      },
    ];
  
  
    useEffect(() => {
      if(checkInDate != '' ) {
        setShowCheckInCalendar(false)
      }
    }, [checkInDate])
    // console.log(checkInDate?.$d)
    const checkinDate = checkInDate?.$d.toDateString();
  return (
    <div className="relative w-[100vw] exo border-red-500 h-[67.5rem] md:h-[65rem] justify-center lg:justify-start lg:h-[55rem] flex items-center lg:px-[2rem]">
    {/* <img src='data:image/jpeg;base64,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' 
/> */}
    {/* <Swiper /> */}
    <Slider />

    <div className="md:h-[50rem] h-[61rem] md:bottom-20 lg:bottom-0 w-[90%] lg:w-[33.5rem] bg-white z-[30] relative p-7 rounded-md">
      <p className="text-yellow-900">Find Exoctic & Affordable.</p>
      <h1 className="text-yellow-600 text-xl my-2">Hotel Rooms Instantly</h1>
      <div className="mt-5">
        <DropDown
          data={locations}
          state={selectedLocation}
          setState={setSelectedLocation}
        />
      </div>

      <div className="flex  h-[6rem] md:h-[3.75rem] mt-5  flex-col md:flex-row">
        <div className="w-[100%] md:w-2/5 border flex  py-2 md:py-0 flex-col justify-center md:rounded-l-md">
          <p className="text-[13px] mx-4 text-gray-500" onClick={() => (setShowCheckInCalendar(true), setCheckOutDate(false))}>Check-In:</p>
          
          <h1 className="text-[15px] text-gray-500 px-4 cursor-text">{checkInDate !== '' ? checkinDate : 'Date'}</h1>
        </div>
        <div className="md:w-3/5 w-[100%] flex flex-row">
          <div className="w-9/12  md:mt-0 md:w-4/6 border py-2 md:py-0 flex flex-col  justify-center">
            <p className="text-[13px] mx-4 text-gray-500" onClick={() => (setShowCheckInCalendar(false), setCheckOutDate(true))}>Check-Out:</p>
            <h1 className="text-[15px] text-gray-500 px-4 cursor-text" >
              {/* {checkOutDate !== '' ? checkoutDate : 'Date'} */}
              Date
            </h1>
            {/* <input placeholder='Date' className='w-[100%] placeholder:text-[16px]'/> */}
          </div>
          <div className="w-3/12 md:w-2/6  md:mt-0 border py-2 md:py-0 flex items-center justify-center md:rounded-r-md">
            <img src="/calendar.png" className="w-6" />
          </div>
        </div>
      </div>
      <div className="absolute z-[100] border mt-2 drop-shadow-md rounded-md">
        {showCheckInCalendar && (
          <Calendar value={checkInDate} setValue={setCheckInDate}/>
        )}
        {showCheckInCalendar && (
          <Calendar value={checkOutDate} setValue={setCheckOutDate}/>
        )}
      </div>

      <div className="mt-10">
        <h1 className="text-yellow-900">Guests</h1>
        <div className="mt-4">
          <FilterOptions value={adults} setValue={setAdults} type="adult" />
        </div>
        <div className="mt-4">
          <FilterOptions
            value={childrens}
            setValue={setChildrens}
            type="children"
          />
        </div>
        <div className="mt-4">
          <FilterOptions
            value={infants}
            setValue={setInfants}
            type="infant"
          />
        </div>
      </div>

      <div className="mt-8">
        <h1>Room Type</h1>
        <div className="flex flex-row justify-between mt-4 hover:border cursor-pointer border-white border-b-yellow-500 hover:shadow-sm py-1 items-center">
          <div className="flex flex-row gap-3 ">
            <img src="/suitcase.png" alt="suitcase" className="w-8 mr-8" />
            <h1>Private Room</h1>
            <p>(58,150)</p>
          </div>
          <div className="border w-6 h-6 rounded-full">
            <img src="/checked.png" alt="checked" className="w-[100%]" />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-4 hover:border cursor-pointer border-white border-b-yellow-500 hover:shadow-sm py-1 items-center">
          <div className="flex flex-row gap-3">
            <img src="/meeting.png" alt="suitcase" className="h-9 mr-8" />
            <h1>Sared Room</h1>
            <p>(18,550)</p>
          </div>
          <div className="border w-6 h-6 rounded-full">
            {/* <img src='/checked.png' alt="checked" className='w-5'/> */}
          </div>
        </div>
        <div className="flex flex-row justify-between mt-4 hover:border cursor-pointer border-white border-b-yellow-500 hover:shadow-sm py-1 items-center">
          <div className="flex flex-row gap-3">
            <img src="/bungalow.png" alt="suitcase" className="w-8 mr-8" />
            <h1>Entire Place</h1>
            <p>(8,150)</p>
          </div>
          <div className="border w-6 h-6 rounded-full">
            {/* <img src='/checked.png' alt="checked" className='w-5'/> */}
          </div>
        </div>

      </div>
      {/* <Dropdown state={location} setState={setLocation} data={locations} label='locations'/> */}
    </div>
          
    <div className="hidden exo md:flex flex-row absolute bottom-0 right-0 z-[10] justify-end items-end">
      {options.map((item) => (
        <div
          key={item.id}
          className={`py-3 px-4  ${
            currentSwiper === item.id ? "width-in " : "width-out-in"
          } bg-white border w-[17.5rem] ${
            item.id === 3 && "hidden 2xl:flex flex-col"
          }`}
        >
          <p className="text-yellow-300 text-[16px]">0{item.id}.</p>
          <p className="text-yellow-500 text-[20px]">{item.p}</p>
          <h1 className="mt-2 text-3xl text-yellow-900 font-[600]">
            {item.h1}
          </h1>
          {currentSwiper === item.id && (
            <button className="hover:text-yellow-500 hover:bg-white mt-6 border border-yellow-500 px-5 py-2 text-white bg-yellow-500 rounded-md">
              Start Exploring
            </button>
          )}
        </div>
      ))}
    </div>

    {/* <AvailableCard /> */}
    
  </div>
  );
}

export default HomePage;
