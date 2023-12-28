// import React, { useState } from 'react';
// import './Dropdown.css'; // Import your CSS file for styling

// const DropDown = () => {
//   const [selectedOption, setSelectedOption] = useState('Option 1');
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="dropdown-container">
//       <label htmlFor="dropdown">Select an option:</label>
//       <div className="dropdown">
//         <div
//           className="dropdown-header"
//           onClick={() => setDropdownOpen(!isDropdownOpen)}
//         >
//           {selectedOption}
//         </div>
//         {isDropdownOpen && (
//           <ul className="dropdown-list">
//             {options.map((option) => (
//               <li
//                 key={option}
//                 onClick={() => handleOptionChange(option)}
//               >
//                 {option}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DropDown;






import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file for styling

const Dropdown = ({state, setState, data}) => {
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionChange = (option) => {
    setState(option);
    setDropdownOpen(false);
  };

  return (
    <div className="dropdown-container exo w-[100%]">
      {/* <label htmlFor="dropdown">Select an option:</label> */}
      <div className="dropdown w-[100%]">
        <div
          className="dropdown-header border flex flex-row justify-between text-gray-500 text-[14px]"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          {state}

          {
            options != '' &&
          
        //   <span className="down-button">&#9660;</span>
        <img src='/down-arrow.png' className='w-5'/>
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
