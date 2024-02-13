import React, { useState } from 'react'
// import Button from '@material-ui/core/Button';
// import Drawer from '@material-ui/core/Drawer';
import FilterOption from './FilterOptions'
import { Drawer } from '@mui/material'
import TopRated from './TopRated'
import { useLocation } from 'react-router-dom'
export default function MobileFilterOption({ state, setState }) {
  //   const [state, setState] = useState({
  //     right: false,
  //   });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const anchor = 'right' // Set your desired anchor position (e.g., 'right', 'left', 'top', 'bottom')

  return (
    <div className="">
      {/* <button onClick={toggleDrawer(anchor, true)}>Open Filter</button> */}
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <div style={{ width: '24.5rem' }} className="py-[1.5rem] pl-4 relative">
          <FilterOption />
          <TopRated />

          {/* <div className='w-6 h-6 rounded-full absolute bg-slate-900 top-24  -left-1'></div> */}
        </div>
      </Drawer>
    </div>
  )
}
