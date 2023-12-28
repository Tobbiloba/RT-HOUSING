


import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import FilterOption from './FilterOptions';

export default function MobileFilterOption({state, setState}) {
//   const [state, setState] = useState({
//     right: false,
//   });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = 'right'; // Set your desired anchor position (e.g., 'right', 'left', 'top', 'bottom')

  return (
    <div>
      {/* <button onClick={toggleDrawer(anchor, true)}>Open Filter</button> */}
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>

        <div style={{ width: '24.5rem' }} className='py-[1.5rem]'>
            <FilterOption />
        </div>
      </Drawer>
    </div>
  );
}
