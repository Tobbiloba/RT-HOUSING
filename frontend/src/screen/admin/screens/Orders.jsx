import React, { useState } from 'react';
import OrderTable from '../../../components/admin/table/Table';
// import { DataTable } from '../../../components/admin/table/Table';

const menu = [
    'All',
    'Active',
    'In active',
    'Declined',
    
]
const Orders = () => {
    const [currentMenu, setCurrentMenu] = useState('All')
  return (
    <div className="exo pt-0 pb-8">

        <div className='py-8 px-4 bg-slate-800 mt-0  md:px-[5%]'>
        <h1 className="text-white text-xl">All Orders</h1>

        <div className='flex flex-row gap-10 mt-8 text-white'>
            {
                menu.map((item, index) => (
                    <div key={index} className={` ${currentMenu == item && 'border-2'} text-[18px] p-1 cursor-pointer border-slate-800 border-b-slate-500` } onClick={() => setCurrentMenu(item)}>
                        <h1>{item}</h1>
                    </div>
                ))
            }
        </div>
        </div>



      <div className=' mt-16 px-4'>
            {/* <DataTable /> */}
            <OrderTable />
      </div>
    </div>
  );
}

export default Orders;
