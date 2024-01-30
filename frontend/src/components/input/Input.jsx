import React from 'react';
import './input.css'
const Input = ({label, value, setValue, placeholder}) => {
  return (
    <div className="form w-[100%]">
    <input type="text" className="form__input text-black text-[14px] rounded-none"  value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
    <label  className="form__label text-[13px]">{label}</label>
  </div>
  );
}

export default Input;
