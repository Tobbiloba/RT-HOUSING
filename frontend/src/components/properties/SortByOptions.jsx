// @ts-nocheck
import React, { useState } from 'react'
import { BsMenuButtonWide, BsGrid1X2 } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'
import Dropdown from '../home/Dropdown'
{
  /* <BsMenuButtonWide /> */
}
const SortByOptions = ({
  filterState,
  toggleFilterOptions,
  viewMode,
  setViewMode,
  count
}) => {
  // const [viewMode, setViewMode] = useState('grid')
  const [useLocation, setUseLocation] = useState(false)
  const [sortBy, setSortBy] = useState('Sort By: ')

  const sortOptions = ['Sort By Date', 'Sort By Features']
  const anchor = 'right'
  return (
    <div className="p-3 flex flex-col exo md:flex-row gap-3 items- text-start">
      <p className="text-[14px] text-slate-400 flex items-center">
        {count} match(es) found for: 
      </p>
      <div className="flex flex-row items-center gap-3 justify-end">
        <div>
          <Dropdown
            data={sortOptions}
            state={sortBy}
            setState={setSortBy}
            height="w-40 h-10 rounded-md border"
          />
        </div>
        {/* {
            viewMode === 'grid' &&
        } */}
        <div
          className={`rounded-md ${viewMode === 'grid' ? 'bg-slate-500 text-white' : 'border text-gray-300'} cursor-pointer p-2`}
          onClick={() => setViewMode('grid')}
        >
          <BsGrid1X2 />
        </div>
        <div
          className={`rounded-md  ${viewMode === 'flex' ? 'bg-slate-500 text-white' : 'border text-gray-300'} cursor-pointer p-2`}
          onClick={() => setViewMode('flex')}
        >
          <BsMenuButtonWide />
        </div>
        <div
          className={`rounded-md  ${useLocation ? 'bg-slate-500 text-white' : 'border text-gray-300'} text-xl cursor-pointer p-2`}
          onClick={() => setUseLocation(!useLocation)}
        >
          <HiLocationMarker />
        </div>
        <div
          className={`rounded-md  ${filterState.right ? 'bg-slate-500 text-white' : 'border text-gray-300'} text-xl cursor-pointer p-2 tablet:hidden`}
          onClick={toggleFilterOptions(anchor, true)}
        >
          <IoSettingsOutline />
        </div>
      </div>
    </div>
  )
}

export default SortByOptions
