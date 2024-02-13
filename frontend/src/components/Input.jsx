// @ts-nocheck
import React, { useState } from 'react'
import { IoEyeSharp } from 'react-icons/io5'
import { BsFillEyeSlashFill } from 'react-icons/bs'
const Input = ({
  placeholder,
  type,
  label,
  value,
  // setValue,
  style,
  smallText,
  bigText,
  handleChange,
  error,
  id,
  formType,
  errorbg,
  inputType,
}) => {
  const [visible, setVisible] = useState(false)

  // const handleInputChange = (e) => {
  //   setValue(e.target.value);
  // };
  // console.log(formType)

  return (
    <>
      <div className={`w-[100%] rounded-sm ${style}`}>
        <p className={`text-slate-600 ${smallText || 'text-[14px]'}`}>
          {label}
        </p>
        <div className="flex flex-row items-center mt-2 gap-1  relative">
          {inputType == 'textarea' ? (
            <textarea
              placeholder={placeholder}
              value={value}
              id={id}
              onChange={handleChange}
              type="text"
              //  onChange={handleInputChange}
              className={`bg-inherit py-1 fill-none text-[14px] resize-x text-black min-w-[100%] h-[17.5rem] ${
                error ? 'bg-red-50 border border-red-500' : 'bg-slate-100'
              } py-3 pl-3 outline-none`}
            />
          ) : (
            <input
              placeholder={placeholder}
              value={value}
              id={id}
              onChange={handleChange}
              type={
                type === 'password' && visible === false ? 'password' : 'text'
              }
              //  onChange={handleInputChange}
              className={`bg-inherit fill-none h-[2.5rem] ${
                bigText || 'text-[14px]'
              } text-black w-[100%] ${
                error ? 'bg-red-50 border border-red-500' : 'bg-slate-100'
              } py-3 pl-3 outline-none`}
            />
          )}
          {type === 'password' && value !== '' && (
            <div>
              {visible ? (
                <IoEyeSharp
                  className="borde cursor-pointer text-[18px]"
                  onClick={() => setVisible(!visible)}
                />
              ) : (
                <BsFillEyeSlashFill
                  className="borde cursor-pointer text-[18px] text-slate-500"
                  onClick={() => setVisible(!visible)}
                />
              )}
            </div>
          )}
        </div>
        {/* <p className=" text-red-500 z-100 bottom-0  text-[12px] py-[3px]">lol</p> */}
        {error && (
          <p
            className={` ${errorbg ? 'text-red-500' : 'text-white'} text-[12px] py-[3px]`}
          >
            {error}
          </p>
        )}
      </div>
    </>
  )
}

export default Input
