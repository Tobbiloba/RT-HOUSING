// @ts-nocheck
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { HiOutlineHomeModern } from 'react-icons/hi2'
import { AiOutlineTags } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { RiCoupon2Line } from 'react-icons/ri'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { IoMdPersonAdd } from 'react-icons/io'
const Sidebar = ({ showSlide, setShowSlide }) => {
  const location = useLocation()
  const pathname = location.pathname.split('/')

  const navLinks = [
    {
      id: 1,
      title: 'Home',
      link: '/admin/dashboard',
      icon: <BsFillGrid1X2Fill />,
    },
    {
      id: 2,
      title: 'Properties',
      link: '/admin/properties',
      icon: <HiOutlineHomeModern />,
    },
    {
      id: 3,
      title: 'Orders',
      link: '/admin/orders',
      icon: <AiOutlineTags />,
    },
    // {
    //     id: 4,
    //     title: 'Transactions',
    //     link: '/admin/transactions',
    //     icon: <FaMoneyBillAlt />
    // },
    {
      id: 8,
      title: 'Payments',
      link: '/admin/payments',
      icon: <FaMoneyBillAlt />,
    },
    {
      id: 5,
      title: 'Coupons',
      link: '/admin/coupon',
      icon: <RiCoupon2Line />,
    },
    {
      id: 6,
      title: 'Employees',
      link: '/admin/employees',
      icon: <IoMdPersonAdd />,
    },
    {
      id: 7,
      title: 'My Profile',
      link: '/admin/profile',
      icon: <RxAvatar />,
    },
  ]

  // const userDetail = useSelector((state) => state?.userDetail)

  // const handleLogOut = () => {
  //   sessionStorage.clear()
  // }

  return (
    <div
      className={`h-[100vh] exo top-0 fixed z-[199] ${!showSlide ? 'sidebar-slide-out-in' : 'sidebar-slide-in'} py-4  bg-slate-900 flex flex-col justify-between`}
    >
      <div className="flex flex-col items-center mt-3">
        <Link to="/" className="flex justify-center">
          <h1 className={`flex ${!showSlide ? 'text-[18px]' : 'text-[24px]'} text-slate-400 flex-row pt-0 capitalized`}>
            Fe
            <div className={`rotate-12 ${!showSlide ? "w-[22px]" : "w-[30px]"} h-[60px] flex flex-col items-center justify-center`}>
              <div className="w-[10px] h-[10px]  bg-white mb-1"></div>
              <span className="text-white relative bottom-2">bt</span>
            </div>
            oS
          </h1>
        </Link>
        <div className="w-[80%] mt-[3rem] flex flex-col items-center gap-3">
          {navLinks.map(nav => {
            // console.log(`${nav.link.split('/')[2] || 'admin'}`, pathname[2])
            return (
              <Link
                to={nav.link}
                key={nav.id}
                className={`flex flex-row  items-center ${`${nav.link.split('/')[2] || 'admin'}` == `${pathname[2]}` ? 'bg-slate-600 text-white' : ''} text-white -full ${!showSlide ? 'h-[3rem]  w-[3rem]  justify-center items-center' : 'w-[100%] h-[50px] pl-4 gap-3 drop-shadow-xl'}`}
                onClick={() => setShowSlide(false)}
              >
                <div className="text-[22px] ">{nav.icon}</div>

                <h1
                  className={`font-roboto ${!showSlide ? 'hidden' : 'block'} text-[14px]`}
                >
                  {nav.title}
                </h1>
              </Link>
            )
          })}
        </div>
      </div>
      {/* <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-row">
         

          
        </div>
      </div> */}
    </div>
  )
}

export default Sidebar
