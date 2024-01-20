// @ts-nocheck
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
const properties = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
    price: '$100,000',
    purpose: 'sale',
    paymentPlan: 'month',
    city: 'Tranquil Countryside Estate',
    state: 'New York',
    bedroom: '4',
    bathroom: '3',
    size: '78 m2'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
    price: '$100,000',
    purpose: 'rent',
    paymentPlan: 'week',
    city: 'Tranquil Countryside Estate',
    state: 'New York',
    bedroom: '4',
    bathroom: '3',
    size: '78 m2'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
    price: '$100,000',
    purpose: 'sale',
    paymentPlan: 'night',
    city: 'Tranquil Countryside Estate',
    state: 'New York',
    bedroom: '4',
    bathroom: '3',
    size: '78 m2'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
    price: '$100,000',
    purpose: 'rent',
    paymentPlan: 'month',
    city: 'Tranquil Countryside Estate',
    state: 'New York',
    bedroom: '4',
    bathroom: '3',
    size: '78 m2'
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
    price: '$100,000',
    purpose: 'sale',
    paymentPlan: 'night',
    city: 'Tranquil Countryside Estate',
    state: 'New York',
    bedroom: '4',
    bathroom: '3',
    size: '78 m2'
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
    price: '$100,000',
    purpose: 'sale',
    paymentPlan: 'month',
    city: 'Tranquil Countryside Estate',
    state: 'New York',
    bedroom: '4',
    bathroom: '3',
    size: '78 m2'
  },
]
const categories = [
  'Residential', 'Commercial', 'Apartments', 'Office Space'
]

const CategoryCard = ({property}) => {
  return (
    <div className="w-[100%] rounded-xl p-2 bg-white">
      <div className="w-[100%] rounded-xl max-h-[20rem] relative overflow-hidden">
        <img src={property.img} className=" "/>

        <p className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[14px] ${property.purpose == 'sale' ? 'bg-white text-slate-500' : 'bg-slate-500 text-white'}`}>{property.purpose == 'sale' ? 'For Sale' : 'For rent'}</p>
      </div>
      <div className="mt-8 px-[1.5rem]">
        <h1 className="text-2xl font-[600] text-slate-600">{property.price} <span className="text-[17px] text-slate-500 font-[500]">/ per {property.duration}</span></h1>
        <p className="mt-3 text-slate-500 font-[600]">{property.city}</p>
        <p className="mt-3 text-slate-400 font-[600]">{property.state}</p>

        <div className="flex flex-wrap gap-y-5 border-t py-6 mt-6 flex-row justify-between items-center">
          <p className="border py-2 px-4 bg-slate-200 rounded-full text-[14px]">{property.bathroom} bathrooms</p>
          <p className="border py-2 px-4 bg-slate-200 rounded-full text-[14px]">{property.bedroom} bedroom</p>
          <p className="border py-2 px-4 bg-slate-200 rounded-full text-[14px]">{property.size}</p>
        </div>
      </div>
    </div>
  )
}

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Residential');
  const isMobile = useMediaQuery({ maxWidth: 768 });


  return (
    <div className="flex exo bg-gray-100 h-fit py-6 lg:py-12">
      <div className="mt-24 flex-col b container mx-auto md:items-center exo justify-center flex">
        <h1 className="text-4xl text-slate-700 font-[600]">Find the category for you</h1>
        <p className="mt-4 text-[15px] text-center text-slate-400">
          Lorem ipsum dolor sit amet consecteur adipsinfr fieowineod  dwoidnw dweodinwejkw edowidewdeodn
        </p>

        <div className="border-[1rem] w-fit rounded-xl border-white bg-white mt-16 flex flex-col md:flex-row flex-wrap gap-[1rem] ">
          {categories.map((category, index) => (
            <p
              key={index}
              className={`px-16 py-4 rounded-xl ${category === selectedCategory ? 'bg-black text-white' : 'bg-slate-100'}`}
            >
              {category}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 mt-12 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {isMobile
            ? properties.slice(0, 3).map((property) => (
                <div key={property.id} className="">
                  <CategoryCard property={property} />
                </div>
              ))
            : properties.map((property) => (
                <div key={property.id} className="">
                  <CategoryCard property={property} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
