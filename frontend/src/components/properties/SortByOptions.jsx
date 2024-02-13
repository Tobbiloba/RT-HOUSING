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
}) => {
  // const [viewMode, setViewMode] = useState('grid')
  const [useLocation, setUseLocation] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [sortBy, setSortBy] = useState('Sort By: ')

  const sortOptions = ['Sort By Date', 'Sort By Features']
  const anchor = 'right'
  return (
    <div className="p-3 flex flex-col exo md:flex-row gap-3 items- text-start">
      <p className="text-[14px] text-slate-400">
        12, 560 matches found for: "House" In "Manchester"
      </p>
      <div className="flex flex-row items-center gap-3 justify-end">
        <div>
          <Dropdown
            data={sortOptions}
            state={sortBy}
            setState={setSortBy}
            height="w-40 h-10 rounded-sm border"
          />
        </div>
        {/* {
            viewMode === 'grid' &&
        } */}
        <div
          className={`${viewMode === 'grid' ? 'bg-slate-500 text-white' : 'border text-gray-300'} cursor-pointer rounded-sm p-2`}
          onClick={() => setViewMode('grid')}
        >
          <BsGrid1X2 />
        </div>
        <div
          className={`${viewMode === 'flex' ? 'bg-slate-500 text-white' : 'border text-gray-300'} cursor-pointer rounded-sm p-2`}
          onClick={() => setViewMode('flex')}
        >
          <BsMenuButtonWide />
        </div>
        <div
          className={`${useLocation ? 'bg-slate-500 text-white' : 'border text-gray-300'} text-xl cursor-pointer rounded-sm p-2`}
          onClick={() => setUseLocation(!useLocation)}
        >
          <HiLocationMarker />
        </div>
        <div
          className={`${filterState.right ? 'bg-slate-500 text-white' : 'border text-gray-300'} text-xl cursor-pointer rounded-sm p-2 tablet:hidden`}
          onClick={toggleFilterOptions(anchor, true)}
        >
          <IoSettingsOutline />
        </div>
      </div>
    </div>
  )
}

export default SortByOptions
