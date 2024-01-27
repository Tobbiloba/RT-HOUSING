import React from 'react';


const TopRatedCard = ({item}) => {

  return(
    <div className='flex flex-row gap-4 exo'>
      <img src={item.img} className='w-20 h-20 rounded-md'/>
      <div>
        <p className='text-slate-500 text-[13px]'>{item.type}</p>
        {/* <h1 className='text-[14px] flex-nowrap text-ellipsis w-[100%] text-slate-900'>{item.name}</h1> */}
        <h1 className='text-[15px] overflow-hidden whitespace-nowrap text-ellipsis w-[90%] text-slate-900'>{item.name}</h1>
        <p className='text-[14px]'>${item.price} <span className='text-[13px] text-slate-500'>/ night</span></p>
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
    <div className="w-[22.5rem] exo mb-6 h-fit exo rounded-md overflow-hidden border pb-6">
    <h1 className="p-[1rem] text-slate-900 bg-slate-100">
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