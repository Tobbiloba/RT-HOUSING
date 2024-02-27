// @ts-nocheck
import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Spinner from '../common/spinner/Spinner'
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'
import {  register } from '../../action/auth'
import { useFormik } from 'formik'
import { registerSchema } from '@/schemas'
import { clear } from '@/action/employee'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}
const RegisterForm = ({ setShowRegister, showRegister }) => {
  const dispatch = useDispatch()
  const handleClose = () => {
    setShowRegister(false)
  }

  const onSubmit = async (values) => {
    console.log(values)
    dispatch(register({ ...values }))
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
      password: '',
      username: '',
      phoneNo: '',
    },
    validationSchema: registerSchema,
    onSubmit,
  })

  // console.log(errors)
  const { loading, status } = useSelector(state => state?.register)
  // console.log(status)

  useEffect(() => {
    if (status == 'success') {
      setShowRegister(false)
      dispatch(clear())
    }
  }, [status])

  return (
    <div>
      <Modal
        open={showRegister}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className="bg-white text-[14px] exo z-10 overflow-hidden w-[90vw] h-fit md:w-[32.5rem] md:h-fit">
            <div className="flex flex-row justify-between py-4 px-8 bg-slate-100 ">
              <p className="text-slate-900 font-[600] text-[15px]">Register</p>
              <p className="text-red-500 cursor-pointer" onClick={handleClose}>
                Close
              </p>
            </div>

            <div className="md:px-8 px-[1rem] pt-8 ">
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="flex flex-col gap-y-4"
              >
                {/* <div className="flex flex-col sm:flex-row gap-4"> */}

                <Input
                  placeholder="Type in your Username"
                  type="text"
                  label="Username"
                  value={values.username}
                  handleChange={handleChange}
                  error={
                    errors.username && touched.username
                      ? errors.username
                      : undefined
                  }
                  id="username"
                  errorbg
                />

                <Input
                  placeholder="Type in your Email"
                  type="email"
                  label="Email"
                  value={values.email}
                  handleChange={handleChange}
                  error={
                    errors.email && touched.email ? errors.email : undefined
                  }
                  id="email"
                  errorbg
                />
                <Input
                  placeholder="Type in your Phone no"
                  type="text"
                  label="Phone no"
                  value={values.phoneNo}
                  handleChange={handleChange}
                  error={
                    errors.phoneNo && touched.phoneNo
                      ? errors.phoneNo
                      : undefined
                  }
                  id="phoneNo"
                  errorbg
                />

                <Input
                  placeholder="Type in your password"
                  type="password"
                  label="Password"
                  value={values.password}
                  handleChange={handleChange}
                  error={
                    errors.password && touched.password
                      ? errors.password
                      : undefined
                  }
                  id="password"
                  errorbg
                />

                <div className="mt-2 md:mt-6 flex flex-col md:flex-row justify-between gap-y-3 md:items-center w-[100%]">
                  <button
                    className={`border-2 w-[40%] text-[14px] py-2 border-slate-300 ${loading && 'cursor-not-allowed'}`}
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? <div className='flex justify-center gap-4 item-center'>
                      <Spinner />
                      <p>Loading...</p>
                    </div> : 'Register'}
                  </button>
                  <div className="flex flex-row gap-4">
                    <input
                      type="checkbox"
                      className="w-5 border outline-green-500"
                    />
                    <p className="text-gray-400 text-[14px]">
                      Remember me here
                    </p>
                  </div>
                </div>
              </form>

              <div className="mt-7 flex flex-row gap-3 items-center">
                <div className="flex-1 h-[1px] bg-slate-600"></div>
                <p className="text-gray-500">or</p>
                <div className="flex-1 h-[1px] bg-slate-600"></div>
              </div>
            </div>
            <div className="mt-8 border px-6 py-7">
              <p className="text-[14px] text-center text-slate-600">
                By signing in you agree to these{' '}
                <span className="text-slate-400">Terms & Conditions</span> &
                consent to{' '}
                <span className="text-slate-400">
                  Cookie Policy & Privacy Policy
                </span>
              </p>
            </div>

            <div className="flex flex-row">
              <div className="flex-1 text-center border border-white border-r-gray-200 py-5">
                <p>
                  Not a member?{' '}
                  <span className="text-slate-400">Signup Now</span>
                </p>
              </div>
              <div className="flex-1 text-center py-5">
                <p>Forgot password?</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default RegisterForm
