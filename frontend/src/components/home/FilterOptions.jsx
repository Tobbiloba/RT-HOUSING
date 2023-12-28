import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

const FilterOptions = ({type, value, setValue}) => {
  const [number, setSelectedNumber] = useState('Other')
  // const val = 'Select Option'
  const [val, setVal] = useState('Select Option')
  const numbers = ['4', '5', '6']

  useEffect(() => {
    if(value <=3) {
      setVal('Select Option')
    } else {
      setVal(value)
    }
  }, [value])
  return (
    <div className='md:flex md:flex-row flex-col   justify-between'>
      <h1 className='w-[100%] py-2 md:w-4/12 flex items-center flex-row text-gray-500 px-3'>{type === 'adult' ? 'Adults' : type === 'children' ? 'Childrens' : 'Infants'} {
        type === 'children' ? <p className='text-[10px] ml-2 text-gray-500'>(Ages 2 - 12)</p> : type === 'infant' ? <p className='text-[10px] ml-2 text-gray-500'>(Under 2)</p> : ''
      }</h1>
      
      <div className='md:w-4/12 w-[100%] justify-between flex flex-row'>
      <p className={`w-4/12 border h-10  cursor-pointer  flex items-center justify-center ${value === 1 ? 'bg-yellow-500  text-white' : 'hover:text-yellow-500 text-gray-400'}`} onClick={() => setValue(1)}>01</p>
      <p className={`w-4/12 border  h-10 cursor-pointer   flex items-center justify-center ${value === 2 ? 'bg-yellow-500  text-white' : 'hover:text-yellow-500 text-gray-400'}`} onClick={() => setValue(2)}>02</p>
      <p className={`w-4/12 border h-10  cursor-pointer   flex items-center justify-center ${value === 3 ? 'bg-yellow-500  text-white' : 'hover:text-yellow-500 text-gray-400'}`} onClick={() => setValue(3)}>03</p>
      </div>

      <div className='w-[100%] md:w-4/12'>
              <Dropdown data={numbers} state={val} setState={setValue}/>
      </div>

    </div>
  );
}

export default FilterOptions;
