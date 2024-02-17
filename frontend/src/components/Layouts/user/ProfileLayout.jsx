// @ts-nocheck
import React from 'react'
import Sidebar from './Sidebar'

const ProfileLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center bg-slate-100 py-6 lg:py-12">
      <div className="md:container w-[100%] px-[1rem] md:my-12 flex flex-col lg:flex-row gap-12">
        <Sidebar />
        <div className="w-[100%]">{children}</div>
      </div>
    </div>
  )
}

export default ProfileLayout
