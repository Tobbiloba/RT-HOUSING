import React from 'react';
import './input.css'
const Input = ({label, value, setValue}) => {
  return (
    <div className="form w-[100%]">
    <input type="text" className="form__input"  value={value} onChange={(e) => setValue(e.target.value)} />
    <label  className="form__label">{label}</label>
  </div>
  );
}

export default Input;
