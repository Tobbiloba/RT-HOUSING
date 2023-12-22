import React from 'react';

const Logo = ({size}) => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <img src='/logo2.png' alt="Icon" className='w-[55px] h-[55px] md:w-[64px] md:h-[64px] lg:w-[70px] lg:h-[70px]'/>
      <div>
         <h1 
        //  style={{ fontSize: `${size/1.7}px`, fontFamily:'exo', fontWeight: '600' }} 
         className='text-amber-950 text-[18px] md:text-[24px] lg:text-[28px] font-[600]'>RT HOUSING</h1>
         <p 
        //  style={{ fontSize: `${size/5.5}px`, fontFamily:'exo' }}
          className='text-amber-800 text-[10px] md:text-[12px] lg:text-[14px]'>Your Key to Stress-Free Renting.</p>
      </div>
     
    </div>
  );
}

export default Logo;
