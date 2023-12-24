import React from 'react';

const Logo = ({size}) => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <img src='/logo2.png' alt="Icon" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[66px] lg:h-[66px]'/>
      <div>
         <h1 
        //  style={{ fontSize: `${size/2}px`, fontFamily:'exo', fontWeight: '600' }} 
         className='text-amber-950 text-[17px] md:text-[20px] lg:text-[24px] font-[600]'>RT HOUSING</h1>
         <p 
        //  style={{ fontSize: `${size/5.5}px`, fontFamily:'exo' }}
          className='text-amber-800 text-[8px] md:text-[10px] lg:text-[12px]'>Your Key to Stress-Free Renting.</p>
      </div>
     
    </div>
  );
}

export default Logo;
