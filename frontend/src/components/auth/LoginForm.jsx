// @ts-nocheck
import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Spinner from '../common/spinner/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../action/auth'
import { useFormik } from 'formik'
import { loginSchema } from '@/schemas'
import Input from '../Input'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const LoginForm = ({ setShowLogin, showLogin }) => {
  const dispatch = useDispatch()
  const {  userInfo, loading } = useSelector(state => state.login)
  useEffect(() => {
    if (userInfo) {
      setShowLogin(false)
    }
  }, [userInfo])

  const onSubmit = async (values) => {
    dispatch(login(values))
  }

  const handleClose = () => {
    setShowLogin(false)
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
    },
    validationSchema: loginSchema,
    onSubmit,
  })

  return (
    <div>
      <Modal
        open={showLogin}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-white text-[14px] exo z-10 overflow-hidden w-[90vw] h-fit md:w-[27.5rem] md:h-fit">
            <div className="flex flex-row justify-between py-4 px-8 bg-gray-100 ">
              <p className="text-slate-900 font-[600] text-[15px]">Login</p>
              <p className="text-red-500 cursor-pointer" onClick={handleClose}>
                Close
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="md:px-8 px-[1rem] pt-8 gap-3 flex flex-col"
            >
              <Input
                placeholder="Type in your Email"
                type="text"
                label="Email"
                value={values.email}
                handleChange={handleChange}
                error={errors.email && touched.email ? errors.email : undefined}
                id="email"
              />
              <Input
                placeholder="Type in your Password"
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
              />
              <div className="mt-6 flex flex-col gap-y-3 md:flex-row justify-between md:items-center w-[100%]">
                <button
                  className="border-2 w-[40%] py-2 border-slate-500"
                  // onClick={handleLogin}
                  type="submit"
                >
                  {!loading ? 'Login' : <div className='flex gap-5 item-center justify-center'>
                    <Spinner />
                    <p className=''>Loading ...</p>
                    </div>}
                </button>
                <div className="flex flex-row gap-4">
                  <input
                    type="checkbox"
                    className="w-5 border outline-green-500"
                  />
                  <p className="text-gray-400 text-[15px]">Remember me here</p>
                </div>
              </div>
            </form>
            <div className="md:px-8 px-[1rem] flex flex-col">
              <div className="mt-7 flex flex-row gap-3 items-center">
                <div className="flex-1 h-[1px] bg-slate-600"></div>
                <p className="text-gray-500">or</p>
                <div className="flex-1 h-[1px] bg-slate-600"></div>
              </div>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <div className="flex cursor-not-allowed flex-row flex-1 bg-slate-700 overflow-hidden items-center">
                  <div className="py-2 px-3 bg-slate-900 border border-slate-900">
                    <img
                      src="/facebook.png"
                      alt="facebook icon"
                      className="w-5 h-5 "
                    />
                  </div>
                  <p className="flex-1 text-[14px] flex items-center pl-3 text-white">
                    Via facebook
                  </p>
                </div>
                <div className="flex  cursor-not-allowed flex-row flex-1 bg-slate-700 overflow-hidden items-center  border">
                  <p className="flex-1 text-[14px] flex items-center pl-3 text-white">
                    Via Gmail
                  </p>
                  <div className="py-2 px-3 bg-slate-900 border border-slate-900">
                    <img
                      src="/gmail.png"
                      alt="facebook icon"
                      className="w-5 h-5 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border px-6 py-5">
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
                  Not a member? <br />
                  <span className="text-slate-400">Signup Now</span>
                </p>
              </div>
              <div className="flex-1 text-center flex item-center justify-center border py-5">
                <p className='h-fit'>Forgot password?</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default LoginForm
