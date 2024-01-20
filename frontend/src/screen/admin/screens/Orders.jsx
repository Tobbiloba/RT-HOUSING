import React, { useState } from 'react';
import  {DataTableDemo2}  from '@/components/admin/table/Table';




const menu = [
    'All',
    'Active',
    'In active',
    'Declined',
    
]
const Orders = () => {
    const [currentMenu, setCurrentMenu] = useState('All')
  return (
    <div className="exo md:pt-0 pb-8 w-[100%] px-[1rem] md:px-[2%] flex justify-end">



      <div className=' mt-5 md:mt-12 w-[100%]'>
            <DataTableDemo2 />
      </div>
    </div>
  );
}

export default Orders;
