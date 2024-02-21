// @ts-nocheck
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
const ProfileLayout = ({ children }) => {
  const data = JSON.parse(sessionStorage.getItem('userInfo'))
  const navigate = useNavigate()
  useEffect(() => {
    if(!data) {
      navigate("/")
    }
  }, [])

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
