import React, { useState } from 'react';
import Dropdown from '../home/Dropdown';
const places = [
    'Ikorodu',
    'Lekki',
    'V I',
    'Banana Island'
]
const Banner = () => {
    const [place, setPlace] = useState('Where You Want To Stay')
  return (
    <div className='w-[100%] exo relative h-[35rem] md:h-[26rem] pb-[1rem] items-center px-[5%]  flex flex-col justify-end'>
        <div className='absolute w-[100%] left-0 h-[25.5rem] md:h-[20.5rem] lg:h-[22.5rem] top-0'>
        <img src='http://amentotech.com/htmls/tenanto/images/slider-imgs/banner-img.jpg' 
      className='h-[100%] w-auto object-cover'/>
      <div className='overlay absolute top-0 z-10 w-[100%] h-[100%]'></div>
        </div>


      <div className='container relative h-fit z-10 text-start bordr w-[100%] md:w-[100%] lg:max-w-[80rem] '>
              <div >
            <h1 className='text-[36px] md:text-[48px] lg:text-[64px] font-[600] text-white'>Searched Best Result</h1>

            <p className='text-white mt-4'>Main Search &gt; Result</p>
        </div>

        <div className='grid shadow-md two-tone-background p-[.5rem] rounded-md mt-8 grid-cols-1 bg- md:grid-cols-2 lg:grid-cols-4 text-[15px] text-gray-500'>
            <div className='h-[4rem] bg-white lg:rounded-tl-md md:rounded-bl-md'>
                <Dropdown data={places} state={place} setState={setPlace} height='h-[4rem] border lg:rounded-l-md md:rounded-tl-md rounded-t-md'/>
            </div>
            
            <h1 className='flex items-center border bg-white md:rounded-tr-md lg:rounded-none px-[1rem] h-[4rem] justify-between cursor-pointer'>In <img src='/down-arrow.png' className='w-5 h-5'/></h1>
            <h1 className='flex items-center border bg-white px-[1rem] md:rounded-bl-md lg:rounded-none h-[4rem] justify-between cursor-pointer'>Out <img src='/down-arrow.png' className='w-5 h-5'/></h1>
            <button className='flex items-center hover:border text-white h-[4rem] justify-center bg-slate-400 hover:bg-white rounded-b-md md:rounded-b-none hover:text-slate-400  lg:rounded-tr-md md:rounded-br-md'>Search Now</button>
        </div>
      </div>
  
    </div>
  );
}

export default Banner;
