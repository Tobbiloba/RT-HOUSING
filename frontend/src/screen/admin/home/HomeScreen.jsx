// @ts-nocheck
import React, { useEffect } from 'react'
import PieChart from '@/components/admin/chart/PieChart'
import TotalRevenue from '@/components/admin/chart/TotalRevenue'
import PropertyReferrals from '@/components/admin/chart/PropertyReferrals'
// import '@/components/chatbot/chatbot.css'
import { getAdminInfo } from '@/action/admin'

import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
const DashboardBoxLoader = () => {
  return (
    <div className="h-[7.5rem]  shadow-white/40 shadow-sm flex justify-between items-center px-[2rem]">
      <div className="">
        <div className="w-24 h-3 bg-slate-500 animate-pulse"></div>
        <div className="w-12 h-8 bg-slate-500 animate-pulse mt-4"></div>
      </div>
      <div className="w-20 h-[4rem] bg-slate-500 animate-pulse"></div>
    </div>
  )
}
const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAdminInfo())
  }, [])

  const { detail, loading } = useSelector(state => state?.getAdminInfo)
  console.log(detail)
  // const loading = false
  console.log(loading)
  return (
    <div className="md:py-4 relative px-[1rem] py-1  md:px-[1%] exo overflow-hidden  w-[100%] h-[100%]">
      <h1 className="text-white text-xl mt-4 md:mt-6">Dashboard</h1>

      {loading ? (
        <div className="mt-12 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4, 5].map(index => (
            <DashboardBoxLoader key={index} />
          ))}
        </div>
      ) : detail && (
        <div className="mt-12 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {' '}
          {/* <div className=" w-[100%]">
            <PieChart
              title="Properties for Sale"
              value={684}
              series={[75, 25]}
              colors={['#275be8', '#c4e8ef']}
            />
          </div>
          <div className=" w-[100%]">
            <PieChart
              title="Properties for Rent"
              value={550}
              series={[60, 40]}
              colors={['#275be8', '#c4e8ef']}
            />
          </div>
          <div className=" w-[100%]">
            <PieChart
              title="Total customers"
              value={5684}
              series={[75, 25]}
              colors={['#275be8', '#c4e8ef']}
            />
          </div>
          <div className=" w-[100%]">
            <PieChart
              title="Properties for Cities"
              value={555}
              series={[75, 25]}
              colors={['#275be8', '#c4e8ef']}
            />
          </div> */}
           <PieChart
                      title="PROPERTIES"
                      value={detail.propertyCount}
                      series={[detail.propertyCount, 100]}
                      colors={['black', 'black']}
                      bg="#64748b"
                    />
                    <PieChart
                      title="EMPLOYEE"
                      value={detail.user.employee.length}
                      series={[detail.user.employee.length, 100]}
                      colors={['black', 'white']}
                      bg="#64748b"
                    />
                    <PieChart
                      title="ORDERS"
                      value={detail.orderCount}
                      series={[detail.orderCount, 105]}
                      colors={['black', 'white']}
                      bg="#64748b"
                    />
                    <PieChart
                      title="COUPONS"
                      value={detail.couponCount}
                      series={[detail.couponCount, 100]}
                      colors={['black', 'white']}
                      bg="#64748b"
                    />
                    <PieChart
                      title="NOTIFICATIONS"
                      value={detail.notificationCount}
                      series={[detail.notificationCount, 100]}
                      colors={['black', 'white']}
                      bg="#64748b"
                    />
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-5 mt-20 w-[100%]">
        <TotalRevenue />
        <PropertyReferrals />
      </div>
    </div>
  )
}

export default Home
