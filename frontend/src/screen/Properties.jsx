import React, { useState, useEffect } from 'react';
import Banner from '../components/properties/Banner';
import FilterOption from '../components/properties/FilterOptions';
import MobileFilterOption from '../components/properties/MobileFilterOption';
import TopRated from '../components/properties/TopRated';
import PropertiesList from '../components/properties/PropertiesList';
import SortByOptions from '../components/properties/SortByOptions';
import Footer from '../components/home/Footer';
import { useMediaQuery } from 'react-responsive';
import BreadCrumb from '@/components/admin/breadcrumb/BreadCrumb';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from '@/action/property';
const Properties = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProperties())
  }, [])

  const {properties, loading} = useSelector((state) => state.allProperties)

  console.log(properties)
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [viewMode, setViewMode] = useState('flex')
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

  const isMobile = useMediaQuery({ maxWidth: 999 });
  const isDesktop = useMediaQuery({ minWidth: 999 });

  // const loading = true
  return (
    <div className=' flex flex-col items-center justify-center'>
      <Banner />
      <div className='flex flex-row mt-16 container justify-center px-[1rem] lg:mx-[5%] '>
        <div className=' w-[55rem]'>
          <SortByOptions viewMode={viewMode} setViewMode={setViewMode} toggleFilterOptions={toggleDrawer} filterState={showProperty} />
          {
            loading ? <div className='w-[100%] flex items-center justify-center mt-8'>
              <CircularProgress />
            </div> : !loading && properties &&
              <PropertiesList viewMode={viewMode} properties={properties}/>
           
          }
        </div>
        
        <div className='hidden lg:flex flex-col pl-4'>
          {
            isDesktop &&
          
        <FilterOption />
          }
        <TopRated />
      </div>
      </div>
      {
        isMobile && 
      
      <div className=''>
        <MobileFilterOption state={showProperty} setState={setShowProperty}/>
      </div>
}
      <div className='mt-6 border border-white border-t-gray-500'>
        <Footer />
      </div>
    </div>
  );
}

export default Properties;
