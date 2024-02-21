import React, { useEffect, useState } from 'react'
import { DataTableDemo2 } from '@/components/table/Table'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminOrder } from '@/action/order'
import { CircularProgress } from '@mui/material'
import { clear } from '@/action/employee'

// const menu = ['All', 'Active', 'In active', 'Declined']
const Orders = () => {
  const dispatch = useDispatch()
  // const [currentMenu, setCurrentMenu] = useState('All')
  const {status} = useSelector((state) => state.updateOrderStatus)
  // console.log(status)
  useEffect(() => {
    if(status ) {
      dispatch(getAdminOrder())
      dispatch(clear())
    }
  }, [status])
  // updateOrderStatus  
  useEffect(() => {
    dispatch(getAdminOrder())
  }, [])
  const { loading, details } = useSelector(state => state?.getAdminOrders)
  // console.log(details[0]._id)
  return (
    <div className="exo md:pt-0 pb-8 w-[100%] px-[1rem] md:px-[2%] flex justify-end">
      <div className=" mt-5 md:mt-12 w-[100%]">
        {loading ? (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        ) : details && details.length > 0 ? (
          <DataTableDemo2 data={details} />
        ) : (
          <p className="text-white text-center">No order yet</p>
        )}
      </div>
    </div>
  )
}

export default Orders
