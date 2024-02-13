import React from 'react'

const FacilitiesCard = ({ item }) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="border-dashed border-4 p-2 rounded-full">
        <div className="bg-slate-100 w-16 flex items-center justify-center rounded-full h-16  border-slate-10">
          <img src={item.img} className="w-9 h-9" />
        </div>
      </div>

      <div>
        <h1 className="text-2xl text-slate-900">{item.title}</h1>
        <p>{item.text}</p>
      </div>
    </div>
  )
}

export default FacilitiesCard
