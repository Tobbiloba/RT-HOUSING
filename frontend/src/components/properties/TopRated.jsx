import React from 'react';


const TopRatedCard = ({item}) => {

  return(
    <div className='flex flex-row gap-4 exo'>
      <img src={item.img} className='w-20 h-20 rounded-md'/>
      <div>
        <p className='text-yellow-500'>{item.type}</p>
        {/* <h1 className='font-[600] flex-nowrap text-ellipsis w-[100%] text-yellow-900'>{item.name}</h1> */}
        <h1 className='font-[600] overflow-hidden whitespace-nowrap text-ellipsis w-[90%] text-yellow-900'>{item.name}</h1>
        <p>${item.price} <span className='text-[15px] text-slate-500'>/ night</span></p>
      </div>
    </div>
  )
}
const TopRated = () => {
  const data = [
    {
      id: 1,
      type: 'Apartment',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-08.jpg',
      name: 'Mountain Retreat Room'
    },
    {
      id: 2,
      type: 'Condo',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-11.jpg',
      name: 'Balsam Fir Bungalow Suite'
    },
    {
      id: 3,
      type: 'Apartment',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-08.jpg',
      name: 'Portland-Plush Seperate Retreat'
    },
    {
      id: 4,
      type: 'Apartment',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-08.jpg',
      name: 'Balsam Fir Bungalow Suite    '
    },
    {
      id: 5,
      type: 'Condo',
      price: 320,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-11.jpg',
      name: 'Portland-Plush Seperate Retreat'
    },
    {
      id: 6,
      type: 'Apartment',
      price: 420,
      img: 'http://amentotech.com/htmls/tenanto/images/featured-img/listing/img-08.jpg',
      name: 'Mountain Retreat Room'
    },
  ]
  return (
    <div className="w-[22.5rem] exo mb-6 h-fit rounded-md overflow-hidden border pb-6">
    <h1 className="border p-[1rem] text-yellow-900 font-[600] bg-slate-100">
      Top Rated Listings
    </h1>
      <div className='mt-6 flex flex-col gap-5 px-6'>
        {
          data.map((item) => (
            <TopRatedCard key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  );
}

export default TopRated;