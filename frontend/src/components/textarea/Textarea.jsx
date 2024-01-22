import React from 'react';
import './textarea.css'
const Textarea = ({label, value, setValue}) => {
  return (
<div className="form max-w-[100%] w-[100%] md:w-[40rem] h-[100%]  min-h-[15rem] col-span-2">
    <textarea type="text" className="form__input resize-x  rounded-md"  value={value} onChange={(e) => setValue(e.target.value)} />
    <label className="form__label">{label}</label>
  </div>
  );
}

export default Textarea;
