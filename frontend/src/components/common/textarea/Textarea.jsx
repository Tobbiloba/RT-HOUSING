// @ts-nocheck
import React from 'react'
import './textarea.css'
const Textarea = ({
  placeholder,
  label,
  value,
  style,
  handleChange,
  error,
  id,
}) => {
  return (
    <div className={`w-[100%]  py-1 rounded-sm ${style}`}>
      <p className={`text-slate-600 text-[14px]`}>{label}</p>
      <div className="flex flex-row items-center gap-1">
        <textarea
          placeholder={placeholder}
          value={value}
          id={id}
          onChange={handleChange}
          type="text"
          className={`bg-inherit py-1 fill-none text-[14px] mt-2 resize-x text-black min-w-[100%] h-[20rem] ${error ? 'bg-red-50 border border-red-500' : 'bg-slate-100'} py-3 pl-3 outline-none`}
        />
      </div>
      {error && <p className=" text-white text-[12px] py-[3px]">{error}</p>}
    </div>
  )
}

export default Textarea
