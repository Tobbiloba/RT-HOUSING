// @ts-nocheck
import Dropzone from '@/components/common/dropzone/Dropzone'
import React, { useEffect } from 'react'
import Input from '@/components/Input'
import { updateProfileSchema } from '@/schemas'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, updateUserProfile } from '@/action/user'
import { clear } from '@/action/employee'
import Spinner from '@/components/common/spinner/Spinner'
import { CircularProgress } from '@mui/material'

const UpdateProfile = () => {
  const dispatch = useDispatch()
  const {status, updateLoading} = useSelector((state) => state.updateUserProfile)
  const {userInfo, loading} = useSelector(state => state.userInfo)
  const onSubmit = async values => {
    dispatch(updateUserProfile(values))
  }
  // const data = JSON.parse(sessionStorage.getItem('userInfo'))
// console.log(userInfo)
  useEffect(() => {
    if(status == "successful") {
dispatch(clear())
dispatch(getUserInfo())
    }
  }, [status])

// const loading = true

  useEffect(() => {
dispatch(getUserInfo())
  }, [])
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      phoneNo: '',
      username: '',
      avatar: '',
      firstname: '',
      lastname: '',
    },
    validationSchema: updateProfileSchema,
    onSubmit,
  })

  useEffect(() => {
      if(userInfo?.username) {
          setFieldValue('avatar', userInfo.avatar);
    setFieldValue('username', userInfo.username);
    setFieldValue('phoneNo', userInfo.phoneNo);
    setFieldValue('firstname', userInfo.firstname || '');
    setFieldValue('lastname', userInfo.lastname || '');
      }
  
  }, [])

  return (
    <div className="bg-white exo p-6 rounded-md">
      <h1 className="text-[14px]">Update Profile</h1>
      <p className="mt-6 text-[14px] text-slate-600">Photo</p>
      {
        loading ? <div className='flex justify-center'>
          <CircularProgress />
        </div> : <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mt-2">
          <Dropzone
          red
            field={{ name: 'avatar', value: values.avatars }}
            form={{ setFieldValue, handleBlur, values, errors, touched }}
            error={errors.avatar && touched.avatar ? errors.avatar : undefined}
          />
        </div>

        <div className="border-2 border-dashed w-fit p-2 mt-7">
          <img src={values.avatar} className="w-24 h-24" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          <Input
            placeholder="Type in your firstname"
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
            placeholder="Type in your Lastname"
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
            placeholder="Type in your username"
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
            placeholder="Type in your Phone"
            type="text"
            label="Phone"
            value={values.phoneNo}
            handleChange={handleChange}
            error={
              errors.phoneNo && touched.phoneNo ? errors.phoneNo : undefined
            }
            id="phoneNo"
          />

        </div>

        <div className="flex justify-end mt-12">
          <button
            type="submit"
            className={`px-6 py-3 text-[13px] shadow-md bg-slate-100 hover: border-slate-500 hover:bg-white text-slate-600 ${updateLoading && "cursor-not-allowed"}`}
          >
            {updateLoading ? (
  <div className="flex justify-center items-center gap-5">
    <Spinner />
    <p>Please wait...</p>
  </div>
) : (
  "UPDATE PROFILE"
)}
          </button>
        </div>
      </form>
      }
    </div>
  )
}

export default UpdateProfile
