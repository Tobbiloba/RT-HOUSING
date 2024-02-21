import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { BiListUl } from 'react-icons/bi'
import { IoPeopleOutline } from 'react-icons/io5'
import { MdOutlineLockOpen } from 'react-icons/md'
import { CiLogout } from 'react-icons/ci'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearAuth } from '@/action/auth'
const links = [
  {
    name: 'Dashboard',
    link: '/user/dashboard',
    icon: <HiMenuAlt1 />,
  },
  {
    name: 'My Orders',
    link: '/user/orders',
    icon: <BiListUl />,
  },
  {
    name: 'Update Profile',
    link: '/user/update-profile',
    icon: <IoPeopleOutline />,
  },
  {
    name: 'Change Password',
    link: '/user/change-password',
    icon: <MdOutlineLockOpen />,
  },
  {
    name: 'Logout',
    link: '/user/logout', // Update the link to the logout endpoint
    icon: <CiLogout />,
  },
]

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logging out...')
    sessionStorage.removeItem('userInfo');

    toast.success("Successfully logged out", {
      // toastId: customId,
      position: 'bottom-right',
      theme: 
      'colored',
    })
    dispatch(clearAuth())
    navigate("/")
  }
  const pathname = location.pathname.split('/')[2]

  return (
    <div className="exo flex flex-col gap-0 h-fit bg-white shadow-md pb-4  lg:pb-6 pt-4 lg:pt-6 text-slate-500 px-6 sm:w-[30rem] lg:min-w-[17.5rem] lg:max-w-[20rem] xl:px-4">
      {links.map((link, index) => {
        if (pathname == link.link.split('/')[1]) {
          console.log('match')
        }
        return (
          <div
            key={index}
            className={`${pathname === link.link.split('/')[2] ? 'bg-slate-500 text-white' : ''}`}
          >
{
  link.name != "Logout" ?             <Link
  to={link.link}
  
  className="flex flex-row gap-6 cursor-pointer hover:bg-slate-100 text-[13px] px-3 py-3 hover:text-slate-900"
>
  <div className="text-[20px]">{link.icon}</div>
  {link.name}
</Link> : <p  className="flex flex-row gap-6 cursor-pointer hover:bg-slate-100 text-[13px] px-3 py-3 hover:text-slate-900" onClick={handleLogout}>
<div className="text-[20px]">{link.icon}</div>
  {link.name}
</p>
}
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar
// onClick={link.name === 'Logout' ? handleLogout : null}