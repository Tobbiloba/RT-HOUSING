import React from 'react';

const FacilitiesCard = ({item}) => {
  return (
    <div className='flex flex-row items-center gap-4'>
        <div className='border-dashed border-4 p-2 rounded-full'>
            <div className='bg-yellow-100 w-20 flex items-center justify-center rounded-full h-20  border-yellow-10'>
        <img src={item.img} className='w-10 h-10'/>
      </div>
        </div>
      
      <div>
        <h1 className='text-2xl text-yellow-900'>{item.title}</h1>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default FacilitiesCard;
