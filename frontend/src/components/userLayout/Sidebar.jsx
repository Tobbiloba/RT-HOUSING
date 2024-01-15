import React from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { BiListUl } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineLockOpen } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
const links = [
  {
    name: 'Dashboard',
    link: '/user/dashboard',
    icon: <HiMenuAlt1 />
  },
  {
    name: 'My Orders',
    link: '/user/orders',
    icon: <BiListUl />
    
  },
  {
    name: 'Update Profile',
    link: '/user/update-profile',
    icon: <IoPeopleOutline />
  },
  {
    name: 'Change Password',
    link: '/user/change-password',
    icon: <MdOutlineLockOpen />
  },
  {
    name: 'Logout',
    link: '/user/logout', // Update the link to the logout endpoint
    icon: <CiLogout />
  },
];

const Sidebar = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logging out...');
  };

  return (
    <div className='exo flex flex-col gap-5 h-fit bg-white shadow-md pb-4  lg:pb-6 pt-4 lg:pt-8 text-slate-500 px-6 lg:min-w-[17.5rem] xl:px-4 rounded-md'>
      {links.map((link, index) => (
        <div key={index} className=''>
          <a href={link.link} onClick={link.name === 'Logout' ? handleLogout : null} className='flex flex-row gap-6 cursor-pointer hover:bg-yellow-100 px-3 py-3 hover:text-yellow-900 rounded-md'>
            {/* <img src={link.icon} alt={link.name} className='w-5 h-5'/> */}
            <div className='text-[24px]'>
              {link.icon}
            </div>
            

            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;