import React, { useState } from 'react';
import './dropdown.css'; // Import your CSS file for styling
import { IoIosArrowDown } from "react-icons/io";
const Dropdown = ({state, setState, data, height, label}) => {
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionChange = (option) => {
    setState(option);
    setDropdownOpen(false);
  };

  // console.log(state)

  return (
    <div className="relative exo text-[13px] w-[100%]">
      <label className="absolute z-10 -top-3 left-4 px-2 bg-slate-900 text-white">{label}:</label>
      <div className="dropdown w-[100%] border-[2px] border-white h-[3rem]">
        <div
          className={`items-center px-3 cursor-pointer text-white  h-[100%] flex flex-row justify-between text-[13px]`}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          {state}
          {
            options != '' &&
          
        <IoIosArrowDown className='w-5 h-5'/>
}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list z-50">
            {data.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionChange(option)}
                className='border cursor-pointer hover:bg-slate-500 hover:text-white relative -z-50'
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
