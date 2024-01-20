import path from 'path';
import React from 'react';
import { FaHouseChimneyCrack } from "react-icons/fa6"
import { useLocation } from 'react-router-dom';
const BreadCrumb = (showSlide) => {
    const location = useLocation()
    const pathname = location.pathname.split('/')

    console.log(pathname[pathname.length - 1])
    // const data = sessionStorage.getItem("adminInfo");
    // const adminInfoObject = JSON.parse(data);

    // console.log(adminInfoObject)
  return (
    <div className={`w-[100%] bg-slate-900 z-[999] border-slate-500 md:z-[0] exo ml-auto px-[1rem] md:px-[2%] md:relative shadow-md h-[3rem] justify-center md:h-[5rem] flex flex-col md:flex-row md:items-center md:justify-between  `}>
      <div className='text-slate-400 hidden md:flex flex-col'>
        <h1 className='text-xl font-[600] uppercase'>{pathname[pathname.length - 1].split('-').join(' ')}</h1>
        <p className='text-[14px]'>Multikar Admin Panel</p>
      </div>

      <div className='flex flex-row items-center gap-3 text-slate-500 text-[14px]'>
      <FaHouseChimneyCrack className='text-white text-[17px]'/>
      {/* /
      <p>Sales</p>
      /
      <p>Transactions</p> */}

{
  pathname.map((item, index) => (
    index !== 0 && <h1 key={index}> / {item}</h1>
  ))
}
      </div>
    </div>
  );
}

export default BreadCrumb;
