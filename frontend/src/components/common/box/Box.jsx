// @ts-nocheck
import React
from 'react'
import './box.css'
const Input = ({ label, value, setShowState, showState }) => {

  return (
    <div
      className={` w-[100%] py-1 rounded-sm`}
      onClick={() => setShowState(!showState)}
    >
      <p className={`text-slate-600 text-[14px]`}>{label}</p>
      <div className="flex flex-row items-center gap-1">
        <h1
          className={`bg-inherit fill-none mt-2 text-[14px] text-black w-[100%] bg-slate-100 py-3 pl-3 outline-none`}
        >
          {value}
        </h1>
      </div>
    </div>
  )
}

export default Input
