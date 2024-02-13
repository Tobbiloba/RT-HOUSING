import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TopRatedCard = ({ item }) => {
  return (
    <Link
      to={`/property-detail/${encodeURIComponent(item._id)}`}
      className="flex flex-row gap-4 exo border items-center"
    >
      <img
        src={item.property_information.property_images[0]}
        className="w-20 h-20"
      />
      <div className="flex-1">
        <p className="text-slate-500 text-[13px]">
          {item.property_information.property_type}
        </p>
        {/* <h1 className='text-[14px] flex-nowrap text-ellipsis w-[100%] text-slate-900'>{item.name}</h1> */}
        <h1 className="text-[15px] overflow-hidden whitespace-nowrap text-ellipsis w-[90%] text-slate-900">
          {item.property_information.property_name}
        </h1>
        <p className="text-[14px]">
          {item.price}{' '}
          <span className="text-[13px] text-slate-500">
            ₦{item.property_information.pricing}/ night
          </span>
        </p>
      </div>
    </Link>
  )
}
{
  /* <Link to={`/property-detail/${encodeURIComponent(item._id)}`}></Link> */
}
const TopRatedLoader = () => {
  return (
    <div className="flex flex-row gap-4 exo">
      <div className="w-20 h-20 bg-slate-400 animate-pulse"></div>
      <div className="flex-1 flex-col justify-between flex">
        <div className="w-[60%] h-4 animate-pulse bg-slate-400"></div>
        <div className="w-[100%] h-4 animate-pulse bg-slate-400"></div>
        <div className="w-[80%] h-4 animate-pulse bg-slate-400"></div>
      </div>
    </div>
  )
}
const TopRated = () => {
  // const [data, setData]
  const { properties, loading } = useSelector(state => state?.allProperties)
  // console.log(properties[0].property_information.pricing)
  // const loading= false
  const data = [
    {
      id: 1,
      type: 'Apartment',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-08.jpg',
      name: 'Mountain Retreat Room',
    },
    {
      id: 2,
      type: 'Condo',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-11.jpg',
      name: 'Balsam Fir Bungalow Suite',
    },
    {
      id: 3,
      type: 'Apartment',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-08.jpg',
      name: 'Portland-Plush Seperate Retreat',
    },
    {
      id: 4,
      type: 'Apartment',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-08.jpg',
      name: 'Balsam Fir Bungalow Suite    ',
    },
    {
      id: 5,
      type: 'Condo',
      price: 320,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-11.jpg',
      name: 'Portland-Plush Seperate Retreat',
    },
    {
      id: 6,
      type: 'Apartment',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-08.jpg',
      name: 'Mountain Retreat Room',
    },
  ]
  return (
    <div className="w-[22.5rem] exo mb-6 h-fit exo overflow-hidden border pb-6">
      <h1 className="p-[1rem] text-slate-900 bg-slate-100">
        Top Rated Listings
      </h1>
      {loading ? (
        <div className="mt-6 flex flex-col gap-5 px-6">
          {[1, 2, 3, 4].map(item => (
            <TopRatedLoader key={item} />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-5 px-6">
          {properties &&
            properties
              .filter(item => item.isTopRated)
              .slice(0, 4) // Take only the first 4 items
              .map(item => {
                console.log(item)
                return <TopRatedCard key={item.id} item={item} />
              })}
        </div>
      )}
    </div>
  )
}

export default TopRated
