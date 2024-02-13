// @ts-nocheck
import DragDropFiles from '@/components/dropzone/Dropzone'
import React, { useEffect, useState } from 'react'
import Input from '@/components/Input'
import { updateProfileSchema } from '@/schemas'
import { useFormik } from 'formik'
import Dropzone from '@/components/admin/dropzone/Dropzone'
import { useSelector } from 'react-redux'
// const Input = ({label, state, setState}) => {

//   return (
//     <div className='flex flex-col gap-3'>
//         <label className='text-slate-600 text-[14px]'>{label}</label>
//         <input value={state} onChange={(e) => setState(e.target.value)} className='border text-slate-500 px-3 py-3 text-[14px] rounded-md'/>
//     </div>
//   )
// }

const UpdateProfile = () => {
  const [fullname, setFullname] = useState('Salau Oluwatobiloba')
  const [phoneNo, setPhoneNo] = useState('+234 70 8455 7988')
  const [image, setImage] = useState(
    'https://res.cloudinary.com/ahossain/image/upload/v1705308803/kf8vs4zpgbfsbehmtsmo.jpg',
  )
  const data = JSON.parse(sessionStorage.getItem('userInfo'))
  console.log(data.phoneNo)

  const onSubmit = async (values, actions) => {
    console.log(values)
    // dispatch(register({...values}));
    // dispatch(login(values));
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      phoneNo: '',
      username: '',
      image: '',
      firstname: '',
      lastname: '',
    },
    validationSchema: updateProfileSchema,
    onSubmit,
  })

  useEffect(() => {
    values.image = data.avatar
    values.username = data.username
    values.phoneNo = data.phoneNo
    values.firstname = data.firstname || ''
    values.lastname = data.lastname || ''
  }, [data])
  // console.log(image)
  return (
    <div className="bg-white exo p-6 rounded-md">
      <h1 className="text-[16px]">Update Profile</h1>
      <p className="mt-10 text-[16px] text-slate-600">Photo</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mt-2">
          <Dropzone
            field={{ name: 'image', value: values.images }}
            form={{ setFieldValue, handleBlur, values, errors, touched }}
            error={errors.image && touched.image ? errors.image : undefined}
          />
        </div>

        <div className="border-2 border-dashed w-fit p-2 mt-7">
          <img src={values.image} className="w-24 h-24" />
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

          {/* <Input state={phoneNo} setState={setPhoneNo} label="Phone no"/> */}
        </div>

        <div className="flex justify-end mt-12">
          <button
            type="submit"
            className="px-6 py-3 text-[13px] rounded-md shadow-md bg-slate-100 hover:border border-slate-500 hover:bg-white text-slate-600"
          >
            UPDATE PROFILE
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProfile
