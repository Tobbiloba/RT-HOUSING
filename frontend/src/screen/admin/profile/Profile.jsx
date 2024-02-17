import React, { useState, useEffect } from 'react'
import { LuPencilLine } from 'react-icons/lu'
import {
  MdOutlinePersonOutline,
  MdOutlineEmail,
  MdOutlinePhone,
} from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { FaBuilding } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { useFormik } from 'formik'
import { updateAdminProfileSchema } from '@/schemas'
import Input from '@/components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminInfo } from '@/action/admin'
import { CircularProgress } from '@mui/material'

import PieChart from '@/components/admin/chart/PieChart'
const UpdateProfile = ({ setShowState }) => {
  const onSubmit = () => {
    console.log('lol')
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue, // Access setFieldValue function from useFormik
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      country: '',
      password: '',
    },
    validationSchema: updateAdminProfileSchema,
    onSubmit,
  })
  const { detail } = useSelector(state => state?.getAdminInfo)

  useEffect(() => {
    values.firstname = detail.user.firstname
    values.lastname = detail.user.lastname
    values.username = detail.user.username
    values.email = detail.user.email
    values.phone = detail.user.phone_no
    values.city = detail.user.city
    values.state = detail.user.state
    values.country = detail.user.country
  }, [])
  console.log(detail.user.phone_no)
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[100vw] top-0 left-0 flex items-center justify-center h-[100vh] bg-white/20 z-[100] fixed"
    >
      <div className="max-w-[40rem] relative min-h-[40rem] flex flex-col justify-evenly w-[100%]  bg-slate-900 h-fit p-[1rem]">
        <IoCloseOutline
          className="absolute -right-4 -top-4 text-black hover:bg-red-500 cursor-pointer bg-white text-[34px]  shadow-md hover:text-white p-[1px]"
          onClick={() => setShowState(false)}
        />
        <h1 className="text-[17px] text-slate-100">Update User Profile</h1>

        <div className="flex flex-row text-[15px] gap-4 mt-5 text-slate-300 border-b border-slate-500">
          <h1 className="border-b text-white p-2 border-b-slate-700 cursor-pointer">
            General
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  mt-5  justify-between gap-y-9 gap-x-12">
          <Input
            placeholder="Firstname"
            type="text"
            label="Firstname"
            value={values.firstname}
            handleChange={handleChange}
            error={
              errors.firstname && touched.firstname
                ? errors.firstname
                : undefined
            }
            id="firstname"
          />
          <Input
            placeholder="Lastname"
            type="text"
            label="Lastname"
            value={values.lastname}
            handleChange={handleChange}
            error={
              errors.lastname && touched.lastname ? errors.lastname : undefined
            }
            id="lastname"
          />
          <Input
            placeholder="Username"
            type="text"
            label="Username"
            value={values.username}
            handleChange={handleChange}
            error={
              errors.username && touched.username ? errors.username : undefined
            }
            id="username"
          />
          <Input
            placeholder="Email"
            type="text"
            label="Email"
            value={values.email}
            handleChange={handleChange}
            error={errors.email && touched.email ? errors.firstname : undefined}
            id="email"
          />
          <Input
            placeholder="Phone"
            type="text"
            label="Phone"
            value={values.phone}
            handleChange={handleChange}
            error={errors.phone && touched.phone ? errors.phone : undefined}
            id="phone"
          />
          <Input
            placeholder="City"
            type="text"
            label="City"
            value={values.city}
            handleChange={handleChange}
            error={errors.city && touched.city ? errors.city : undefined}
            id="city"
          />
          <Input
            placeholder="State"
            type="text"
            label="State"
            value={values.state}
            handleChange={handleChange}
            error={errors.state && touched.state ? errors.state : undefined}
            id="state"
          />
          <Input
            placeholder="Country"
            type="text"
            label="Country"
            value={values.country}
            handleChange={handleChange}
            error={
              errors.country && touched.country ? errors.country : undefined
            }
            id="country"
          />
        </div>
        <div className="mt-16 text-[14px] flex gap-8 flex-row justify-end">
          <button
            className="bg-green-700 px-4 py-3 text-white border-slate-500"
            type="submit"
          >
            Update Profile
          </button>
        </div>
      </div>
    </form>
  )
}

const Profile = () => {
  const [showUpdateOption, setShowUpdateOption] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAdminInfo('65c77993a24964910729d98d'))
  }, [])

  const { detail } = useSelector(state => state?.getAdminInfo)
  console.log(detail)
  const loading = false
  return (
    <>
      {loading ? (
        <div className="flex justify-center py-6">
          <CircularProgress />
        </div>
      ) : (
        <div className="exo  pb-8 w-[100%] p-[] md:p-[2rem] flex">
          <div className=" h-fit w-[100%] relative bg-slate-500 flex flex-col lg:flex-row gap-[5%]">
            <div className="lg:max-w-[25rem] w-[100%] h-fit">
              <div className="lg:h-[27.5rem] bg-slate-800 p-2 flex flex-col justify-between">
                <img
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D"
                  className="h-auto w-auto"
                />
                <div className="text-center my-[2rem]">
                  <h1 className="text-2xl text-white">
                    {detail.user.firstname} {detail.user.lastname}
                  </h1>
                  <p className="text-[13px] text-white mt-1">
                    {detail.user.email}
                  </p>
                </div>
                <div></div>
              </div>

              <div className="h-[10.5.5rem] text-white bg-slate-800">
                <h1 className="h-[3.5rem] border-b cursor-pointer border-l-4  flex items-center px-4">
                  Profile
                </h1>
                <h1 className="h-[3.5rem] border-b cursor-pointer flex items-center px-4">
                  Recent Activity
                </h1>
                <h1
                  className="h-[3.5rem] flex cursor-pointer items-center px-4"
                  onClick={() => setShowUpdateOption(true)}
                >
                  Edit Profile
                </h1>
              </div>
            </div>

            <div className="flex-1">
              <div className="md:p-[1rem]">
                <h1 className="text-xl p-[2rem] lg:p-0 text-slate-800">
                  Bio Graph
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-y-[2rem] text-white p-[1rem] md:mt-[1rem] bg-slate-800">
                  <div className="flex gap-2 items-center">
                    <h1 className="text-[16px]">First Name:</h1>
                    <p className="text-[17px]">{detail.user.firstname}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <h1 className="text-[16px]">Last Name:</h1>
                    <p className="text-[17px]">{detail.user.lastname}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <h1 className="text-[16px]">Username:</h1>
                    <p className="text-[17px]">{detail.user.username}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <h1 className="text-[16px]">Country:</h1>
                    <p className="text-[17px]">{detail.user.country}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <h1 className="text-[16px]">State:</h1>
                    <p className="text-[17px]">{detail.user.state}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <h1 className="text-[16px]">City:</h1>
                    <p className="text-[17px]">{detail.user.city}</p>
                  </div>

                  {/* <div className="flex gap-2 items-center">
              <h1 className="text-[16px]">Address:</h1>
              <p className="text-[17px]">Australia</p>
            </div>
            <div className="flex gap-2 items-center">
              <h1 className="text-[16px]">Postal:</h1>
              <p className="text-[17px]">Camilio</p>
            </div> */}
                </div>
              </div>

              <div className="flex-1 mt-[1.75rem]">
                <h1 className="text-xl p-[1rem] md:px-[1rem] md:p-0 text-slate-800">
                  Informations
                </h1>

                <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3 gap-y-[2rem] text-white p-[1rem] mt-[1rem]">
                  <PieChart
                    title="PROPERTIES"
                    value={detail.propertyCount}
                    series={[detail.propertyCount, 100]}
                    colors={['black', 'white']}
                    bg="#1e293b"
                  />
                  <PieChart
                    title="EMPLOYEE"
                    value={detail.user.employee.length}
                    series={[detail.user.employee.length, 100]}
                    colors={['black', 'white']}
                    bg="#1e293b"
                  />
                  <PieChart
                    title="ORDERS"
                    value={detail.orderCount}
                    series={[detail.orderCount, 105]}
                    colors={['black', 'white']}
                    bg="#1e293b"
                  />
                  <PieChart
                    title="COUPONS"
                    value={detail.couponCount}
                    series={[detail.couponCount, 100]}
                    colors={['black', 'white']}
                    bg="#1e293b"
                  />
                  <PieChart
                    title="UNREAD NOTIFICATIONS"
                    value={detail.notificationCount}
                    series={[detail.notificationCount, 100]}
                    colors={['black', 'white']}
                    bg="#1e293b"
                  />
                </div>
              </div>
            </div>

            {/* <div className="absolute top-0  shadow-sm left-0 w-[100%] bg-slate-700 h-[8rem]"></div> */}

            {/* <div className="relative z-10 w-[100%] h-fit flex flex-row justify-between items-center mt-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuQGyYbgV9HFyiunO9mF6_lnB6MYwcx6t3w&usqp=CAU"
            className="w-36 h-36 bg-slate-700 p-2"
          />

          <button onClick={() => setShowUpdateOption(true)} className="flex flex-row gap-4 text-[14px] px-4 border-4 border-slate-700 shadow-md py-2 bg-slate-900 items-center text-white">
            <LuPencilLine className="text-[18px]" /> Edit Profile
          </button>
        </div> */}

            {/* <div className="text-white">
          <h1>Clay Jensen</h1>
          <div className="flex flex-row gap-2 items-center mt-1">
            <img
              src={detail.profile_img}
              className="w-6 h-6"
            />
            |
            <p className="h-fit text-[15px]">
              Northridge, California(CA), 91326, USA
            </p>
          </div>
          <p className="mt-1 text-[15px]">
            Age: 24 | Gender: Male | Status:{" "}
            <span className="text-green-500 ml-1">Active*</span>
          </p>

          <div className="max-w-[30rem] w-[100%] mt-8 flex flex-col gap-6">
            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <FaBuilding className="text-[18px]" /> Company:
              </h1>
              <p className="text-[15px]">Febtos LTD</p>
            </div>

            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <MdOutlinePersonOutline className="text-[18px]" /> Role:
              </h1>
              <p className="text-[15px]">Administrator</p>
            </div>

            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <MdOutlineEmail className="text-[18px]" /> Email:
              </h1>
              <p className="text-[15px]">clay.jensen@email.com</p>
            </div>

            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <MdOutlinePhone className="text-[18px]" /> Contact:
              </h1>
              <p className="text-[15px]">(+234) 70 8455 7988</p>
            </div>

            <div className="flex flex-row justify-between">
              <h1 className="flex flex-row gap-2 items-center text-[15px]">
                <FaLocationDot className="text-[18px] fill-white" /> Region:
              </h1>
              <p className="text-[15px]">Central US</p>
            </div>
          </div>
        </div> */}

            {showUpdateOption && (
              <UpdateProfile setShowState={setShowUpdateOption} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Profile
