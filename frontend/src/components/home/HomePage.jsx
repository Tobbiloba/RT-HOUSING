// @ts-nocheck
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

    <Slider />

    <div className="md:h-[50rem] h-[61rem] md:bottom-20 lg:bottom-0 w-[90%] lg:w-[33.5rem] bg-white z-[30] relative p-7 rounded-md">
      <p className="text-slate-900">Find Exoctic & Affordable.</p>
      <h1 className="text-slate-600 text-xl my-2">Hotel Rooms Instantly</h1>
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
             Date
            </h1>
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
        <h1 className="text-slate-900">Guests</h1>
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
        <div className="flex flex-row justify-between mt-4 hover:border cursor-pointer border-white border-b-slate-500 hover:shadow-sm py-1 items-center">
          <div className="flex flex-row gap-3 ">
            <img src="/suitcase.png" alt="suitcase" className="w-8 mr-8" />
            <h1>Private Room</h1>
            <p>(58,150)</p>
          </div>
          <div className="border w-6 h-6 rounded-full">
            <img src="/checked.png" alt="checked" className="w-[100%]" />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-4 hover:border cursor-pointer border-white border-b-slate-500 hover:shadow-sm py-1 items-center">
          <div className="flex flex-row gap-3">
            <img src="/meeting.png" alt="suitcase" className="h-9 mr-8" />
            <h1>Sared Room</h1>
            <p>(18,550)</p>
          </div>
          <div className="border w-6 h-6 rounded-full">
            {/* <img src='/checked.png' alt="checked" className='w-5'/> */}
          </div>
        </div>
        <div className="flex flex-row justify-between mt-4 hover:border cursor-pointer border-white border-b-slate-500 hover:shadow-sm py-1 items-center">
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
          <p className="text-slate-300 text-[16px]">0{item.id}.</p>
          <p className="text-slate-500 text-[20px]">{item.p}</p>
          <h1 className="mt-2 text-3xl text-slate-900 font-[600]">
            {item.h1}
          </h1>
          {currentSwiper === item.id && (
            <button className="hover:text-slate-500 hover:bg-white mt-6 border border-slate-500 px-5 py-2 text-white bg-slate-500">
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
