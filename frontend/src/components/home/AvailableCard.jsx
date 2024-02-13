import React from 'react'

const AvailableCard = () => {
  return (
    <div className=" exo flex items-center justify-center py-8 my-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:flex flex-row  w-[95vw] sm:w-[80vw] max-w-[70rem] justify-between border items-center px-12 py-12 shadow-md">
        <div className="">
          <p className="lg:text-5xl text-3xl text-slate-400">5</p>
          <h1 className="text-slate-900 mt-1">BED ROOM</h1>
        </div>
        <div className="relative lg:left-8">
          <p className="lg:text-5xl text-3xl text-slate-400">2</p>
          <h1 className="text-slate-900 mt-1">FULL BATHS</h1>
        </div>
        <div className="relative lg:left-8">
          <p className="lg:text-5xl text-3xl text-slate-400">4</p>
          <h1 className="text-slate-900 mt-1">HALF BATHS</h1>
        </div>
        <div className="relative lg:left-8">
          <p className="lg:text-5xl text-3xl text-slate-400">2</p>
          <h1 className="text-slate-900 mt-1">CAR PARKING</h1>
        </div>
        <div className="relative lg:left-8">
          <p className="lg:text-5xl text-3xl text-slate-400">6,382</p>
          <h1 className="text-slate-900 mt-1">SQUARE FEET</h1>
        </div>

        <div className="relative bg-slate-500 lg:left-24 px-4 sm:px-6 py-3 text-center text-white sm:text-xl">
          <p>Take A Tour</p>
        </div>
      </div>
    </div>
  )
}

export default AvailableCard
