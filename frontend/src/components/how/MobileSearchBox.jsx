import React, {useState} from 'react';
import TopRated from '../properties/TopRated';
import { IoSearchOutline } from "react-icons/io5";
import { Drawer } from '@mui/material';
const MobileSearchBox = ({state, setState}) => {
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const anchor = 'right'; // Set your desired anchor position (e.g., 'right', 'left', 'top', 'bottom')
    
  return (
    <div>
        lol
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
      <div className='w-[22.5rem] exo mb-6 h-fit rounded-md overflow-hidden'>

        <div className='border'>
            <h1 className='p-[1rem] text-yellow-900 bg-slate-100'>Search</h1>

            <div className='mt-4 flex flex-row p-3'>
                <input placeholder='Search Category' className='px-3 py-3 border text-[14px] w-[100%]'/>
                <div className='bg-yellow-900 text-white w-12 flex items-center justify-center'>
                    <IoSearchOutline className=''/>
                </div>
                
            </div>
        </div>

        <div className='mt-7 border pb-3'>
            <h1 className='p-[1rem] text-yellow-900 bg-slate-100'>Archives</h1>

            <div className='grid text-slate-500 text-[15px] grid-cols-2 mt-4  gap-5 px-6'>
                <p>. 2019</p>
                <p>. 2020</p>
                <p>. 2021</p>
                <p>. 2022</p>
                <p>. 2023</p>
                <p>. 2024</p>
            </div>
        </div>

        <div className='mt-6'>
           <TopRated /> 
        </div>
        
      </div>
      </Drawer>
    </div>
  );
}

export default MobileSearchBox;
