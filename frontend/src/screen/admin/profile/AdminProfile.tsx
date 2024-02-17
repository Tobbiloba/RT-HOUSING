import { getAdminInfo } from '@/action/admin'
import React, { useEffect } from 'react'
import {
  FaSquareFacebook,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
const AdminProfile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAdminInfo('65c77993a24964910729d98d'))
  }, [])
  const img =
    'data:image/jpeg;base64,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'
  return (
    <div className="exo min-h-[100vh]">
      <div className="pt-6 items-center flex-wrap gap-y-6 pb-4 px-4 bg-slate-800 mt-0  md:px-[5%] flex flex-row justify-">
        <h1 className="text-white text-[17px]">My Profile</h1>
      </div>

      <div className="mt-16 ml-[5%] rounded-l-2xl bg-slate-800 min-h-[90vh] p-6">
        <div className="flex flex-row gap-12 items-center">
          <div className="w-[35rem] rounded-l-2xl overflow-hidden border h-auto">
            <img src={img} className="w-[100%] h-auto  object-contain" />
          </div>

          <div>
            <div className="text-white">
              <h1 className="text-[28px] font-[600]">Javascript Mastery</h1>
              <p className="text-slate-500">Realestate Agent</p>

              <p className="mt-8 text-slate-500">Address</p>
              <p>4084 Wilscent Ave, Cunt district, California USA.</p>

              <div>
                <div>
                  <p className="mt-8 text-slate-500">Phone Number</p>
                  <p>+423 34545 3534</p>
                </div>
                <div>
                  <p className="mt-8 text-slate-500">Email</p>
                  <p>feifubweiuwbeiowu@fenie.com</p>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
