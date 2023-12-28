import React, { useState } from 'react';
import Banner from '../components/properties/Banner';
import FilterOption from '../components/properties/FilterOptions';
import MobileFilterOption from '../components/properties/MobileFilterOption';

const Properties = () => {
  const [showProperty, setShowProperty] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setShowProperty({ ...showProperty, [anchor]: open });
  };

  const anchor = 'right'; 
  return (
    <div className=''>
      <Banner />
      <div className='hidden md:flex'>
        <FilterOption />
        
      </div>
      <div>
        <MobileFilterOption state={showProperty} setState={setShowProperty}/>
      </div>
      <p onClick={toggleDrawer(anchor, true)}>open</p>
    </div>
  );
}

export default Properties;
