// @ts-nocheck
import React, { useState } from 'react'
import './Dropdown.css' // Import your CSS file for styling
import { IoIosArrowDown } from 'react-icons/io'
const Dropdown = ({ state, setState, data, height }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const options = ['Option 1', 'Option 2', 'Option 3']

  const handleOptionChange = option => {
    setState(option)
    setDropdownOpen(false)
  }

  return (
    <div className="dropdown-container exo text-[13px] w-[100%]">

      <div className="dropdown w-[100%] h-[100%]">
        <div
          className={`items-center px-3 cursor-pointer ${height ? `${height}` : 'h-10'}  flex flex-row justify-between text-gray-500 text-[13px]`}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          {state}

          {options != '' && (
           <IoIosArrowDown className="text-[17px]" />
          )}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list mt-[1px] text-slate-500 border max-h-[14rem] overflow-y-scroll">
            {data.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionChange(option)}
                className="hover:bg-slate-200 border-t border-slate-300"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown
