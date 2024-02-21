import React from 'react'
import { FaHouseChimneyCrack } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'

const BreadCrumb = () => {
  const location = useLocation()
  const pathname = location.pathname.split('/')
  // Define an interface for the data

  // Retrieve and parse data from sessionStorage
  // @ts-ignore
  const data = JSON.parse(sessionStorage.getItem('adminInfo'))
  return (
    <div
      className={`w-[100%] bg-slate-900 z-[999] border-slate-500 md:z-[0] exo ml-auto px-[1rem] md:px-[2%] md:relative shadow-md h-[3rem] justify-center md:h-[5rem] flex flex-col md:flex-row md:items-center md:justify-between  `}
    >
      <div className="text-slate-400 hidden md:flex flex-col">
        <h1 className="text-xl font-[600] uppercase">
          {pathname[2].split('-').join(' ')}
        </h1>
        <p className="text-[14px]">
          {data.firstname} {data.lastname} Admin Panel
        </p>
      </div>
      <div className="flex flex-row items-center gap-3 text-slate-500 text-[14px]">
        <FaHouseChimneyCrack className="text-white text-[17px]" />
        {pathname.map(
          (item, index) => index !== 0 && <h1 key={index}> / {item}</h1>,
        )}
      </div>
    </div>
  )
}

export default BreadCrumb
