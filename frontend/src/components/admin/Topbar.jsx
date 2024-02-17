// @ts-nocheck
import React, { useEffect, useState } from 'react'
// import { IoMdSearch } from 'react-icons/io'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { FaRegBell } from 'react-icons/fa6'
import { LuMessageSquare } from 'react-icons/lu'
import { CiMenuKebab } from 'react-icons/ci'
// import Input from "../Input";
// import Input from '../Input'
import Notification from '../notification/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { getNotifications } from '@/action/notification'
const Topbar = ({ setShowSlide, showSlide }) => {
  const dispatch = useDispatch()
  // const [search, setSearch] = useState('')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    dispatch(getNotifications('65c77993a24964910729d98d'))
  }, [])
  const { notifications } = useSelector(state => state.getNotifications)
  // console.log(notifications)
  const data =  JSON.parse(sessionStorage.getItem('adminInfo'))

  // console.log(data.profile_img)
 
  return (
    <div
      className={` bg-slate-600 z-[499] md:z-[100] exo ml-auto px-[1rem] md:px-[2%] md: shadow-b-md h-fit md:h-[4.25rem] flex flex-col md:flex-row md:items-center justify-between  ${
        showSlide ? 'sidebar-slide-in-topbar' : 'sidebar-slide-out-in-topbar'
      }`}
    >
      <div className=" flex flex-row justify-between items-center h-[4.25rem]">
        <div
          className="cursor-pointer"
          onClick={() => (setShowSlide(!showSlide), setShowMobileMenu(false))}
        >
          <HiOutlineMenuAlt2 className="text-white text-[28px]" />
        </div>
        <div
          className="md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <CiMenuKebab className="text-white text-[28px]" />
        </div>
      </div>
      {showMobileMenu && (
        <div className="flex md:hidden  mb-4 mt-2 justify-end flex-col  items-center text-slate-100">
          <input
            placeholder="search"
            className="bg-slate-700 w-[100%] border-slate-500 border px-6 py-2 rounded-md"
          />
          <div className="flex relative flex-row gap-9 w-[100%] items-center justify-end mt-2">
            <div className="border-l-2  text-[15px] py-1 px-4 border-slate-500">
              EN
            </div>
            <div className="border-l-2 relative border-r-2 text-[18px] py-1 px-4 border-slate-500">
              <FaRegBell
                className="cursor-pointer"
                onClick={() => setShowNotification(!showNotification)}
              />
              {showNotification && <Notification />}
            </div>
            <div className="border-r-2 text-[20px] py-1 px-4 border-slate-500">
              <LuMessageSquare />
            </div>
            <div className="">
            {
            data.profile_img ? <img
            src={data.profile_img}
            className="w-12 h-12"
          /> : <p className='w-12 h-12 flex items-center justify-center bg-slate-800'>{data.lastname[0]}{data.firstname[0]}</p>
          }
            </div>
          </div>
        </div>
      )}
      <div className="hidden md:flex flex-row  items-center text-slate-300">
        <div className="border-l-2  text-[15px] py-1 px-4 border-slate-500">
          EN
        </div>
        <div className="border-l-2 relative border-r-2 text-[18px] py-1 px-4 border-slate-500">
          {/* {
            notifications && notifications.length > 0 && <span className="absolute bottom-0 right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-100 opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
          </span>
          } */}
          {notifications && notifications.length > 0 && (
            <>
              {notifications.some(
                notification => notification.status === 'unread',
              ) && (
                <span className="absolute bottom-0 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-100 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
                </span>
              )}
            </>
          )}
          <FaRegBell
            className="text-[15px] cursor-pointer"
            onClick={() => setShowNotification(!showNotification)}
          />

          {showNotification && <Notification />}
        </div>
        <div className="ml-4">
          {
            data.profile_img ? <img
            src={data.profile_img}
            className="w-12 h-12"
          /> : <p className='w-12 h-12 flex items-center justify-center bg-slate-800'>{data.lastname[0]}{data.firstname[0]}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Topbar
