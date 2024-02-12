import React, { useEffect, useState } from 'react';
import  {DataTableDemo2}  from '@/components/admin/table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminOrder } from '@/action/order';
import { CircularProgress } from '@mui/material';



const menu = [
    'All',
    'Active',
    'In active',
    'Declined',
    
]
const Orders = () => {
  const dispatch = useDispatch()
    const [currentMenu, setCurrentMenu] = useState('All')
useEffect(() => {
  // dispatch(getAdminOrder('65a0fc46a3cd4f366e7a3c52'))
}, [])
const {loading, details} = useSelector((state) => state?.getAdminOrders)
console.log(details)
  return (
    <div className="exo md:pt-0 pb-8 w-[100%] px-[1rem] md:px-[2%] flex justify-end">



      <div className=' mt-5 md:mt-12 w-[100%]'>

        {
          loading ? <div className='flex justify-center'>
            <CircularProgress />
          </div>
        :
            <DataTableDemo2 data={details}/>
        }
      </div>
    </div>
  );
}

export default Orders;
