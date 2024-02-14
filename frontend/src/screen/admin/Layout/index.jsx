import React, { useEffect, useState } from 'react'
import Sidebar from '@/components/admin/Sidebar'
import './index.css'
import { useMediaQuery } from 'react-responsive'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import Loading from '../../../components/Loading'
import Topbar from '@/components/admin/Topbar'
import BreadCrumb from '@/components/admin/breadcrumb/BreadCrumb'
const AdminLayout = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.state)
  const pathname = location.pathname.split('/')
  const [toggleOpen, setToggleOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 769 })

  const data = sessionStorage.getItem('adminInfo')

  // console.log(data);

  // encodeURI('woienweubwiuebwpiueb')
  useEffect(() => {
    setLoading(true)
    // if (!data) {
    //   navigate("/admin/login");
    // } else {
    //   navigate("/admin");
    // }

    if (!data) {
      navigate("/admin/login", { replace: true });
    }

    setLoading(false)
  }, [data])
  console.log(JSON.parse(data))

  // useEffect((toggleOpen))

  useEffect(() => {}, [toggleOpen])

  const handleToggleOpen = () => {}
  console.log(pathname[pathname.length - 1])
  return (
    <div className="max-w-[100vw] exo overflow-x-hidden">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : data ? (
        <div className="flex flex-row bg-slate-900 gap-2">
          <div
            className={`${
              !toggleOpen ? 'sidebar-slide-out-in' : 'sidebar-slide-in '
            } h-[100vh]`}
          >
            <Sidebar setShowSlide={setToggleOpen} showSlide={toggleOpen} />
          </div>

          <div
            className={`h-fit bg-slate-600 mx-2 my-4 overflow-x-hidden relative flex flex-col items-end  min-h-[100vh] ${
              toggleOpen
                ? 'sidebar-slide-in-topbar'
                : 'sidebar-slide-out-in-topbar '
            }`}
          >
            <Topbar setShowSlide={setToggleOpen} showSlide={toggleOpen} />

            <div className="md:mt-[0rem] mt-[0rem] w-[100%]">
              {pathname[pathname.length - 1] != 'admin' && (
                <BreadCrumb showSlide={toggleOpen} />
              )}
              {/* {
              !JSON.parse(data).isActivated &&    <div className=" bg-red-600 md:text-center py-2 text-white text-[13px] flex gap-5 px-[1rem] justify-center md:items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/2592/2592317.png" className="w-5 h-5"/>
          <h1>To secure your account, please verify your email by clicking the activation link in your inbox. Thank you!</h1>
        </div>
             } */}
              {children}

              {isMobile && toggleOpen && (
                <div
                  className="fixed shadow-md p-2 top-[90vh] text-white left-[85vw] border z-[200] bg-slate-600 cursor-pointer"
                  onClick={() => setToggleOpen(false)}
                >
                  <FaLongArrowAltLeft />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default AdminLayout
