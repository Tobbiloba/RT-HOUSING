// @ts-nocheck
import React, { useEffect } from 'react'
import Input from '@/components/Input'
import { updatePasswordSchema } from '@/schemas'
import { useFormik } from 'formik'
import Spinner from '@/components/common/spinner/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserPassword } from '@/action/user'
import { clear } from '@/action/employee'
const ChangePassword = () => {
  const dispatch = useDispatch()
  const { status, loading } = useSelector(state => state.updateUserPassword)
  console.log(status, loading)
  const onSubmit = async () => {
    console.log(values)
    dispatch(updateUserPassword({ ...values }))
    // dispatch(login(values));
  }

  const {
    values,
    errors,
    touched,

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

  useEffect(() => {
    if (status == 'successful') {
      values.newPassword = ''
      values.confirmNewPassword = ''



      dispatch(clear())
    }
  }, [status])

  return (
    <div className="bg-white exo p-6 rounded-md">
      {status  && (
        <p className="bg-red-500 text-[12px] py-1 mb-4 flex justify-center text-white">
          You have to logout and login again so see your changes
        </p>
      )}
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
            className={`px-6 py-3 text-[13px] shadow-md bg-slate-100 hover: border-slate-500 hover:bg-white text-slate-600 ${loading && 'cursor-not-allowed'}`}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-5">
                <Spinner />
                <p>Please wait...</p>
              </div>
            ) : (
              'UPDATE PROFILE'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
