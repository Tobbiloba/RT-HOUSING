// @ts-nocheck
import React, {useState} from 'react';
import {IoEyeSharp} from 'react-icons/io5'
import {BsFillEyeSlashFill} from 'react-icons/bs'
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
    id
}) => {

  const [visible, setVisible] = useState(false)

  // const handleInputChange = (e) => {
  //   setValue(e.target.value);
  // };


  return (
    <div className={`px-3 w-[100%]  py-1 rounded-sm ${style}`}>
      <p className={`text-slate-500 ${smallText || 'text-[13px]'}`}>{label}</p>
      <div className='flex flex-row items-center gap-1'>
        <input placeholder={placeholder} value={value} id={id} onChange={handleChange} type={type === 'password' && visible === false ? 'password' : 'text'}
        //  onChange={handleInputChange}
          className={`bg-inherit py-1 fill-none ${bigText || 'text-[13px]'} text-black w-[100%] ${error ? 'bg-red-50 border border-red-500' : 'bg-slate-100'} py-3 pl-3 outline-none`}/>
        {type === 'password' && value !== '' && <div>
          {
            visible  ? <IoEyeSharp className="borde cursor-pointer text-[18px]" onClick={() => setVisible(!visible)}/> : <BsFillEyeSlashFill className="borde cursor-pointer text-[18px] text-slate-500" onClick={() => setVisible(!visible)}/>
          }
        </div>
        }
        
      </div>
      {error && <p className=' text-red-600 text-[12px] py-[3px]'>{error}</p>}
    </div>
  );
}

export default Input;