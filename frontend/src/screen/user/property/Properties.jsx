// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Banner from '../../../components/properties/Banner'
import FilterOption from '../../../components/properties/FilterOptions'
import MobileFilterOption from '../../../components/properties/MobileFilterOption'
import TopRated from '../../../components/properties/TopRated'
import PropertiesList from '../../../components/properties/PropertiesList'
import SortByOptions from '../../../components/properties/SortByOptions'
import Footer from '../../../components/Footer/Footer'
import { useMediaQuery } from 'react-responsive'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProperties } from '@/action/property'
import { fetchPropertyType } from '@/action/type'
import PropertyLocationCard from '@/components/common/propertyCard/PropertyLocationCard'
const LoadingCard = ({ viewMode }) => {
  return (
    <div
      className={`w-[100%] flex flex-col bricolage md:flex-row   ${
        viewMode === 'flex' ? '' : 'sm:flex-row md:flex-col'
      }`}
    >
      <div
        className={`${
          viewMode === 'flex'
            ? 'w-[100%] md:w-5/12'
            : 'w-[100%] sm:w-5/12 md:w-[100%]'
        } h-[17.5rem] bg-slate-300 animate-pulse `}
      ></div>
      <div
        className={`${
          viewMode === 'flex'
            ? 'w-[100%] md:w-7/12'
            : 'w-[100%] sm:w-7/12 md:w-[100%]'
        } h-[17.5rem]  flex flex-col justify-between `}
      >
        <div className="px-4 py-4">
          <div className=" flex flex-row justify-between">
            <div className="flex flex-col gap-3">
              <div className="w-24  h-4 bg-slate-300  animate-pulse"></div>
              <div className="w-48  h-5 bg-slate-300  animate-pulse"></div>
              <div className="w-36  h-4 bg-slate-300 animate-pulse"></div>
              <div className="w-44  h-4 bg-slate-300  animate-pulse"></div>
            </div>
            <div className="w-20 h-20 bg-slate-300 animate-pulse"></div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3">
            <div className="w-40 h-4 bg-slate-300 animate-pulse"></div>
            <div className="w-40 h-4 bg-slate-300 animate-pulse"></div>
            <div className="w-40 h-4 bg-slate-300 animate-pulse"></div>
            <div className="w-40 h-4 bg-slate-300 animate-pulse"></div>
          </div>
        </div>
        <div className="bg-slate-300 h-10"></div>
      </div>
    </div>
  )
}
const Properties = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() => {
    dispatch(getAllProperties())
    dispatch(fetchPropertyType())
  }, [])

  const { properties, loading } = useSelector(state => state.allProperties)

  useEffect(() => {
    if (properties) {
      setData(properties)
    }
  }, [properties])

  // console.log(properties)
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  const [viewMode, setViewMode] = useState('flex')
  const [showProperty, setShowProperty] = useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setShowProperty({ ...showProperty, [anchor]: open })
  }

  const isMobile = useMediaQuery({ maxWidth: 1270 })
  const isDesktop = useMediaQuery({ minWidth: 1271 })

  return (
    <div className="exo flex flex-col items-center justify-center">
      <Banner />
      <div className="flex flex-row mt-16 container justify-center px-[1rem]">
        <div className="w-[100%] max-w-[55rem] flex-1">
          <SortByOptions
            viewMode={viewMode}
            setViewMode={setViewMode}
            toggleFilterOptions={toggleDrawer}
            filterState={showProperty}
            count={properties?.length}
          />
          {loading ? (
            <div
              className={`grid ${
                viewMode == 'flex'
                  ? 'grid-cols-1 gap-y-12'
                  : 'grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 '
              } mt-8`}
            >
              {Array.from({ length: 18 }).map((_, index) => (
                <div className="w-[100%] border" key={index}>
                  <LoadingCard viewMode={viewMode} />
                </div>
              ))}
            </div>
          ) : !loading && properties && properties.length > 0 && data ? (
            <div className="w-[100%] flex items-end justify-center">
              <PropertiesList viewMode={viewMode} properties={data} />
            </div>
          ) : (
            !loading &&
            !properties && (
              <div className="h-40 w-[100%] mx-0 flex items-center justify-center">
                <h1 className="text-slate-500">No property to show</h1>
              </div>
            )
          )}
        </div>
        {isDesktop && (
          <div className="hidden lg:flex flex-col pl-4">
            <FilterOption data={data} setData={setData} />
            <TopRated />
          </div>
        )}
      </div>
      {isMobile && (
        <div className="">
          <MobileFilterOption state={showProperty} setState={setShowProperty} />
        </div>
      )}
      {/* <Map /> */}
      <div className="w-[100%] items-center mt-8 justify-center px-[1rem] md:px-[4%] flex flex-col gap-20">
        <PropertyLocationCard title="Apartment" />
        <PropertyLocationCard title="Condo" />
        <PropertyLocationCard title="Duplex" />
      </div>
    </div>
  )
}

export default Properties
