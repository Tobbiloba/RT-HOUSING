// @ts-nocheck
import React, { useEffect } from 'react'
import { OrderTable } from '@/components/table/OrderTable'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrder } from '@/action/order'
import { CircularProgress } from '@mui/material'
const UserOrders = () => {
  const dispatch = useDispatch()
  const { loading, details } = useSelector(state => state.getUserOrder)
  console.log(details)
  const data = JSON.parse(sessionStorage.getItem('userInfo'))

  useEffect(() => {
    dispatch(getUserOrder(data._id))
  }, [])
  return (
    <div className="bg-white exo p-3 rounded-md">
      <div className="mt-8">
        {loading ? (
          <div className="pb-[2rem] flex justify-center">
            <CircularProgress />
          </div>
        ) : !loading &&  details && details.length > 0 ? (
          <div>
            <h1 className="text-[16px] mb-4">All Orders</h1>
            <OrderTable orders={details} />
          </div>
        ) : (
           (
            <div className="flex items-center gap-4 flex-col justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10967/10967123.png"
                className="w-24"
              />
              <h1 className="text-[14px] mt-6">No order yet</h1>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default UserOrders
