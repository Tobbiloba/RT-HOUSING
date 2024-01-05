import React from 'react';
import './box.css'
const Box = ({label, value, setShowState, showState}) => {
    console.log(showState)
  return (
    <div className="form w-[100%] bg-" onClick={() => setShowState(!showState)}>
    {/* <input type="text" className="form__input"  value={value} disabled /> */}
    <h1 className="form__input">{value}</h1>
    <label className="form__label">{label}</label>
  </div>
  );
}

export default Box;
