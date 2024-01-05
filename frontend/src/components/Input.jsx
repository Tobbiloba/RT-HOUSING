import React, {useState} from 'react';
import {IoEyeSharp} from 'react-icons/io5'
import {BsFillEyeSlashFill} from 'react-icons/bs'
const Input = ({
    placeholder,
    type,
    label,
    value,
    setValue
}) => {

  const [visible, setVisible] = useState(false)

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <div className=' px-3 w-[100%] bg-gray-200 py-1 rounded-sm'>
      <p className='text-slate-500 text-[11px]'>{label}</p>
      <div className='flex flex-row items-center gap-1'>
        <input placeholder={placeholder} value={value} type={type === 'password' && visible === false ? 'password' : 'text'} onChange={handleInputChange} className='bg-inherit py-1 fill-none text-[13px] text-black w-[100%] outline-none'/>
        {type === 'password' && value !== '' && <div>
          {
            visible  ? <IoEyeSharp className="borde cursor-pointer text-[18px]" onClick={() => setVisible(!visible)}/> : <BsFillEyeSlashFill className="borde cursor-pointer text-[18px] text-slate-500" onClick={() => setVisible(!visible)}/>
          }
        </div>
        }
      </div>
    </div>
  );
}

export default Input;