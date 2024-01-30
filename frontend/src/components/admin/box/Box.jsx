// @ts-nocheck
import React, {useState} from 'react';
import {IoEyeSharp} from 'react-icons/io5'
import {BsFillEyeSlashFill} from 'react-icons/bs'
import "./box.css"
const Input = ({label, value, setShowState, showState}) => {

  const [visible, setVisible] = useState(false)

  // const handleInputChange = (e) => {
  //   setValue(e.target.value);
  // };


  return (
    <div className={`px-3 w-[100%] py-1 rounded-sm`} onClick={() => setShowState(!showState)}>
      <p className={`text-slate-600 text-[14px]`}>{label}</p>
      <div className='flex flex-row items-center gap-1'>
        <h1 className={`bg-inherit fill-none mt-2 text-[14px] text-black w-[100%] bg-slate-100 py-3 pl-3 outline-none`}>{value}</h1>
      </div>
      {/* {error && <p className=' text-red-600 text-[12px] py-[3px]'>{error}</p>} */}
    </div>
  );
}

export default Input;