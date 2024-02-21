// @ts-nocheck
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { useSelector } from 'react-redux'

const PropertyLoadingCard = () => {
  return (
    <div className="h-[17rem] text-white p-[1rem] pb-[2rem] flex flex-col justify-between border relative bg-slate-400 animate-pulse"></div>
  )
}
const PropertyLocationCard = ({ title }) => {
  const { properties, loading } = useSelector(state => state.allProperties)
  // console.log(properties[0].property_information)

  return (
    <div className="w-[100%] rubik text-slate-600 border-b pb-16">
      <h1 className="text-xl"> {title}</h1>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-4">
          {[1, 2, 3, 4].map(item => (
            <PropertyLoadingCard key={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-4">
          {properties &&
            properties
              .filter(item => item.property_information.property_type === title)
              .slice(0, 4) // Take only the first 4 items

              .map(item => (
                <div
                  key={item.id}
                  style={{
                    backgroundImage: `url(${item.property_information.property_images[0]})`,
                  }}
                  className="h-[17rem] text-white p-[1rem] pb-[2rem] flex flex-col justify-between border relative"
                >
                  <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-black/40"></div>
                  <div className="z-10 relative flex flex-row items-center justify-between">
                    <p className="text-[11px] h-6 flex items-center justify-center px-3 bg-slate-600">
                      {item.property_information.booking_status}
                    </p>
                    <p className="text-[13px]">
                      {item.property_information.property_images.length} Photos
                    </p>
                  </div>

                  <div className="flex flex-row justify-between items-end relative z-10">
                    <div className="text-white ">
                      <p className="text-[14px]">
                        ₦{item.property_information.pricing}
                      </p>
                      <p className="text-[13px]">
                        {item.property_information.property_no_bedrooms} Bedroom
                        apartment
                      </p>
                      <p className="text-[12px]">
                        {item.property_information.property_location.state},{' '}
                        {item.property_information.property_location.city}
                      </p>
                    </div>

                    <CiHeart className="text-[26px]" />
                  </div>
                </div>
              ))}
        </div>
      )}

      <h1 className="mt-7 text-slate-600">See all {title} </h1>
    </div>
  )
}

export default PropertyLocationCard
