import React, { useState } from 'react'
import Dropdown from '../home/Dropdown'
import { IoIosArrowDown } from 'react-icons/io'
const places = ['Ikorodu', 'Lekki', 'V I', 'Banana Island']
const Banner = () => {
  const [place, setPlace] = useState('Where You Want To Stay')
  return (
    <div className="w-[100%] exo relative h-[35rem] md:h-[26rem] pb-[1rem] items-center px-[1rem] md:px-[2rem] lg:px-[7.5%]  flex flex-col justify-end">
      <div className="absolute w-[100%] left-0 h-[26.5rem] md:h-[21rem] lg:h-[22.75rem] top-0">
        <img
          src="http://amentotech.com/htmls/tenanto/images/slider-imgs/banner-img.jpg"
          className="h-[100%] w-auto object-cover"
        />
        <div className="overlay absolute top-0 z-10 w-[100%] h-[100%]"></div>
      </div>

      <div className="md:container relative h-fit z-10 text-start w-[100%] md:w-[100%] lg:max-w-[80rem] ">
        <div>
          <h1 className="text-[36px] md:text-[44px] lg:text-[60px] font-[600] text-white">
            Searched Best Result
          </h1>

          <p className="text-white mt-4">Main Search &gt; Result</p>
        </div>

        <div
          style={{
            background: 'linear-gradient(to bottom, white 50%, #cbd5e1 50%)',
          }}
          className="grid shadow-md two-tone-background p-[.5rem] rounded-md mt-8 grid-cols-1 bg- md:grid-cols-2 lg:grid-cols-4 text-[15px] text-gray-500"
        >
          <div className="h-[3.5rem] bg-white text-[14px]">
            <Dropdown
              data={places}
              state={place}
              setState={setPlace}
              height="h-[3.5rem] border "
            />
          </div>

          <h1 className="flex items-center text-[14px] border bg-white  px-[1rem] h-[3.5rem] justify-between cursor-pointer">
            In <IoIosArrowDown className="text-[17px]" />
          </h1>
          <h1 className="flex items-center border text-[14px] bg-white px-[1rem] h-[3.5rem] justify-between cursor-pointer">
            Out <IoIosArrowDown className="text-[17px]" />
          </h1>
          <button className="flex items-center cursor-not-allowed hover:border text-[14px] text-white h-[3.5rem] justify-center bg-slate-400 hover:bg-white hover:text-slate-400">
            Search Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
