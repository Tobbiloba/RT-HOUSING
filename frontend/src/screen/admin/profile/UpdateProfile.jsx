// @ts-nocheck
import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { updateAdminProfileSchema } from '@/schemas'
import Input from '@/components/Input'
import { useDispatch, useSelector } from 'react-redux'
import Dropzone from '@/components/admin/dropzone/Dropzone'
import Spinner from '@/components/spinner/Spinner'
import { updateAdminInfo } from '@/action/admin'
import { useNavigate } from 'react-router-dom'
import { clear } from '@/action/employee'
const UpdateAdminProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = () => {
    dispatch(updateAdminInfo('65c77993a24964910729d98d', values))
  }
  const { loading, status } = useSelector(state => state?.updateAdminInfo)

  useEffect(() => {
    if(status == "successful") {
      navigate("/admin/profile")
      dispatch(clear())
    }
  }, [status])
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues, // Add setValues to access the function to set form values
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      phone_no: '',
      city: '',
      state: '',
      country: '',
      profile_img: '',
    },
    validationSchema: updateAdminProfileSchema,
    onSubmit: () => {
      onSubmit()
    },
  })
  console.log(errors)
  const { detail } = useSelector(state => state?.getAdminInfo)

  useEffect(() => {
    if (detail) {
      // Use setValues to update form values
      setValues({
        ...values,
        firstname: detail.user.firstname,
        lastname: detail.user.lastname,
        username: detail.user.username,
        email: detail.user.email,
        phone_no: detail.user.phone_no,
        city: detail.user.city,
        state: detail.user.state,
        country: detail.user.country,
        profile_img: detail.user.profile_img,
      })
    }
  }, [detail, setValues])
  return (
    <form
      onSubmit={handleSubmit}
      className="exo  pb-8  m-[1rem] p-[1rem] bg-slate-900 md:p-[2rem] flex"
    >
      <div className="w-[100%] relative min-h-[40rem] flex flex-col justify-evenly h-fit p-[1rem]">
        <h1 className="text-[17px] text-slate-100">Update User Profile</h1>

        <div className="flex flex-row text-[15px] gap-4 mt-5 text-slate-300 border-b border-slate-500">
          <h1 className="border-b text-white p-2 border-b-slate-700 cursor-pointer">
            General
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5  justify-between gap-y-9 gap-x-12">
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
            value={values.phone_no}
            handleChange={handleChange}
            error={
              errors.phone_no && touched.phone_no ? errors.phone_no : undefined
            }
            id="phone_no"
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

          <div className="md:col-span-2">
            <Dropzone
              field={{ name: 'profile_img', value: values.profile_img }}
              form={{ setFieldValue, handleBlur, values, errors, touched }}
              error={
                errors.profile_img && touched.profile_img
                  ? errors.profile_img
                  : undefined
              }
            />
          </div>
        </div>
        <div className="mt-16 text-[14px] flex gap-8 flex-row justify-end">
          <button
            className={`${loading && 'cursor-not-allowed'} bg-green-700 px-4 py-3 text-white border-slate-500`}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-4">
                <Spinner />
                <p>Please wait ...</p>
              </div>
            ) : (
              'Update Profile'
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default UpdateAdminProfile
