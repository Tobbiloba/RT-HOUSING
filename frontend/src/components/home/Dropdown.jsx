import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file for styling

const Dropdown = ({state, setState, data, height}) => {
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionChange = (option) => {
    setState(option);
    setDropdownOpen(false);
  };

  // console.log(state)

  return (
    <div className="dropdown-container exo text-[13px] w-[100%]">
      {/* <label htmlFor="dropdown">Select an option:</label> */}
      <div className="dropdown w-[100%] h-[100%]">
        <div
          className={`items-center px-3 cursor-pointer ${height ? `${height}` : 'h-10'}  flex flex-row justify-between text-gray-500 text-[13px]`}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          {state}

          {
            options != '' &&
          
        //   <span className="down-button">&#9660;</span>
        <img src='/down-arrow.png' className='w-5 h-5'/>
}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list">
            {data.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionChange(option)}
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
