// @ts-nocheck
import React, { useState } from 'react'
import Input from '@/components/Input'
import { updatePasswordSchema } from '@/schemas'
import { useFormik } from 'formik'

const ChangePassword = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [email, setEmail] = useState("tobiloba.a.salau@gmail.com");

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
  } = useFormik({
    initialValues: {
      email: '',
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: updatePasswordSchema,
    onSubmit,
  })

  return (
    <div className="bg-white exo p-6 rounded-md">
      <h1 className="text-xl font-[600] text-slate-600">Change Password</h1>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Input
          placeholder="Type in your Email"
          type="text"
          label="Email"
          value={values.email}
          handleChange={handleChange}
          error={errors.email && touched.email ? errors.email : undefined}
          id="email"
          errorbg
        />
        <Input
          placeholder="Old Password"
          type="password"
          label="Old password"
          value={values.oldPassword}
          handleChange={handleChange}
          error={
            errors.oldPassword && touched.oldPassword
              ? errors.oldPassword
              : undefined
          }
          id="oldPassword"
          errorbg
        />
        <Input
          placeholder="New Password"
          type="password"
          label="New Password"
          value={values.newPassword}
          handleChange={handleChange}
          error={
            errors.newPassword && touched.newPassword
              ? errors.newPassword
              : undefined
          }
          id="newPassword"
          errorbg
        />
        <Input
          placeholder="Confirm New Password"
          type="password"
          label="Confirm Password"
          value={values.confirmNewPassword}
          handleChange={handleChange}
          error={
            errors.confirmNewPassword && touched.confirmNewPassword
              ? errors.confirmNewPassword
              : undefined
          }
          id="confirmNewPassword"
          errorbg
        />
        <div className="flex justify-end md:col-span-2 mt-8">
          <button
            type="submit"
            className="px-6 py-3 text-[14px] rounded-md shadow-md bg-slate-100 hover:border border-slate-500 hover:bg-white text-slate-600"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
