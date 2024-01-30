// import React, { useState } from 'react';
// import './dropdown.css'; // Import your CSS file for styling
// import { IoIosArrowDown } from "react-icons/io";
// const Dropdown = ({state, setState, data, height, label}) => {
//   const [selectedOption, setSelectedOption] = useState('Select an option');
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   const handleOptionChange = (option) => {
//     setState(option);
//     setDropdownOpen(false);
//   };

//   // console.log(state)

//   return (
//     <div className="relative exo text-[13px] w-[100%]">
//       <label className="absolute z-10 -top-3 left-4 px-2 bg-slate-900 text-white">{label}:</label>
//       <div className="dropdown w-[100%] border-[2px] rounded-md border-white h-[3rem]">
//         <div
//           className={`items-center px-3 cursor-pointer text-white  h-[100%] flex flex-row justify-between text-[13px]`}
//           onClick={() => setDropdownOpen(!isDropdownOpen)}
//         >
//           {state}
//           {
//             options != '' &&
          
//         <IoIosArrowDown className='w-5 h-5'/>
// }
//         </div>
//         {isDropdownOpen && (
//           <ul className="dropdown-list z-50">
//             {data.map((option, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleOptionChange(option)}
//                 className='border cursor-pointer hover:bg-slate-500 hover:text-white relative -z-50'
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

// export default Dropdown;













import React, { useState } from 'react';
import './dropdown.css'; // Import your CSS file for styling
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ field, form, data, height, label, error }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options = data; // You can use the data prop directly

  const handleOptionChange = (option) => {
    form.setFieldValue(field.name, option);
    setDropdownOpen(false);
  };

  return (
    <div className="relative exo flex flex-col justify-start text-[13px] w-[100%]">
      <label className="text-[14px] z-10  px-2  text-slate-600">{label}:</label>
      <div className="dropdown w-[100%] h-[3rem] mt-2">
        <div
          className={`bg-inherit fill-none flex text-slate-600 flex-row justify-between text-[14px] w-[100%]  ${error ? 'bg-red-50 border border-red-500' : 'bg-slate-100'} py-3 px-3 outline-none cursor-pointer`}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          {field.value}
          {options !== '' && <IoIosArrowDown className='w-5 h-5' />}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list z-50 w-[100%]">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionChange(option)}
                className='border-b cursor-pointer hover:bg-slate-500 hover:text-white relative -z-50'
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <div className="text-white text-[13px] mt-1">{error}</div>}
    </div>
  );
};

export default Dropdown;
