//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import { loginAdmin } from '../../../action/auth'
import Input from '@/components/Input'
import { loginSchema } from '@/schemas'
import { useFormik } from 'formik'
import { activateAdminUser, activateUser, resendToken } from '@/action/auth'
import OtpInput from '@/components/common/otp/OtpInput'
import { CircularProgress } from '@mui/material'
import Spinner from '@/components/common/spinner/Spinner'
import { toast } from 'react-toastify'
import useOTPCountdown from '@/hooks/useOTPCountdown'
const OTP = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const length = 6
  const [otp, setOtp] = useState(new Array(length).fill(''))
  const { countdownTime, setCountdownTime, formatCountdownTime } =
    useOTPCountdown();

  
  
  const registerAdminUser = useSelector(state => state.adminRegister)
  const adminId = registerAdminUser?.adminInfo?._id

  const { status } = useSelector(state => state.resendToken)
  const { loading, activationSuccess } = useSelector(
    state => state.activateUser,
  )
  // const  = true
  // console.log(otp)
  const customId = 'custom-id-yes'
  const onOtpSubmit = (combinedOtp) => {
    console.log(combinedOtp)
    if (formatCountdownTime(countdownTime) == '00:00') {
      toast.error('OTP expired. Request a new OTP', {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      })
      setOtp(Array.from({ length }, () => ''))
    } else {
      console.log(combinedOtp)
      dispatch(activateAdminUser(adminId, combinedOtp))
    }
  }
  // console.log(otp.join(""))
  useEffect(() => {
    if (activationSuccess) {
      setOtp(Array.from({ length }, () => ''))
      navigate('/admin/login')
    }
  }, [activationSuccess])

  const resendOtp = () => {
    dispatch(resendToken(adminId))
  }

  useEffect(() => {
    if (status) {
      console.log('lol')
      setCountdownTime(120);
    }
  }, [status])

  return (
    <div className="flex exo flex-col md:flex-row w-[100vw] min-h-[100vh] overflow-hidden justify-end bg-[#e9e9e9]  relative">
      <div className="flex-1 flex item-center relative justify-center  left-0 top-[20%]">
        <div className="absolute w-[100%] z-10 h-[100%] top-0 left-0 bg-black/40"></div>
        <img src="/bg.png" />
      </div>
      <div className="md:w-[30%] flex justify-center items-center bg-white">
        <div className="md:max-w-[30rem] w-[100%] h-[100%] min-h-[100%] relative z-10 bg-[#ffffff] p-[1rem] md:p-[2rem] flex flex-col items-center justify-center rounded-">
          <div className="items-center flex flex-col">
            <img
              src="https://cdn.dribbble.com/users/2026891/screenshots/5652655/media/dc954341223661adbdc10dcacd7a81e2.png?resize=1000x750&vertical=center"
              className=""
            />

            <div className="w-[100%] h-fit mt-8 md:mt-16">
              <OtpInput
                length={length}
                onOtpSubmit={onOtpSubmit}
                otp={otp}
                setOtp={setOtp}
              />

              <div className="mt-12 gap-5 flex">
                <button
                  onClick={
                    ()=> onOtpSubmit(otp)
                  }
                  type="button"
                  disabled={otp[length - 1] == ''}
                  className={` flex-1 px-7  shadow-md ${otp[length - 1] == '' ? 'bg-slate-700 cursor-not-allowed' : 'bg-slate-800'} py-4 text-white text-[15px] rounded-`}
                >
                  {loading ? (
                    <div className="flex justify-center item-center gap-5 w-[100%]">
                      <Spinner />
                      <p>Please wait...</p>
                    </div>
                  ) : (
                    'Verify OTP'
                  )}
                </button>
              </div>
            </div>
            <div className="mt-6 text-[15px] text-gray-500 md:mt-6 w-[100%] -center">
              <p>
                The OTP will be expired in{' '}
                <span className="text-slate-800 font-[600] text-[16px]">{formatCountdownTime(countdownTime)}</span>
              </p>
              <p className="mt-2">
                Didn't receive the code?{' '}
                <span
                  className={`underline text-sky-700   mx-1 ${
                    formatCountdownTime(countdownTime) == '00:00'
                      ? 'cursor-pointer'
                      : ' cursor-not-allowed'
                  }`}
                  // onClick={minutes === 0 && seconds === 0 ? null : resendOtp}
                  onClick={resendOtp}
                >
                  Resend
                </span>{' '}
                or{' '}
                <span className="underline text-sky-700 cursor-pointer mx-1">
                  Change email
                </span>
              </p>
            </div>

            <div className="mt-12 flex w-[100%] flex-row justify-between">
              <div className="flex flex-row gap-5 items-center">
                <input type="checkbox" className="w-5 h-5" />

                <p className="text-slate-800">Remember me</p>
              </div>

              <p className="text-sky-700 underline cursor-pointer">
                Learn more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTP
