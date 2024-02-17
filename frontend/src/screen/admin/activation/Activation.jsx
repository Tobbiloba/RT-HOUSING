// @ts-nocheck
import React, { useEffect, useState } from 'react'
import {  useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { activateAdminUser } from '@/action/auth'
const AdminActivation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [countdown, setCountdown] = useState(4)
  const { id, token } = useParams()
  const { loading, error } = useSelector(state => state.activateUser)

  useEffect(() => {
    dispatch(activateAdminUser(id, token))
  }, [id])
  useEffect(() => {
    if (!loading && !error && countdown >= 0) {
      const countdownInterval = setInterval(() => {
        setCountdown(prevCount => prevCount - 1)
      }, 1000)

      if (countdown === 0) {
        clearInterval(countdownInterval)
        navigate('/admin/dashboard')
      }

      return () => clearInterval(countdownInterval)
    }
  }, [loading, error, countdown, history])

  return (
    <div className="px-[1rem] min-h-[40rem] flex justify-center items-center">
      <div className="container flex flex-col items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center">
            <img src="/loading.gif" alt="loading" className="w-52 h-52" />
            <h1 className="text-slate-500">Please wait ...</h1>
          </div>
        ) : !loading && !error ? (
          <div className="h-[100%] exo border max-w-[50rem] w-[100%] pb-[3rem] border-slate-400 bg-green-100  flex flex-col items-center">
            <div
              className="w-[100%] flex flex-col justify-center items-center  text-slate-700 px-4 py-3 rounded-md mt-6"
              role="alert"
            >
              <img src="https://cdn-icons-png.flaticon.com/128/2143/2143150.png" />
              <strong className="font-bold text-xl mt-6">
                Account Activated!
              </strong>
              <p className="text-sm mt-2">
                Congratulations! Your Fabtos account has been successfully
                activated.
              </p>
              <p className="text-sm mt-2">
                Welcome to Fabtos, your trusted rental partner for a seamless
                experience.
              </p>
              <p className="text-sm mt-2">
                Start exploring and enjoy the convenience of renting with
                Fabtos!
              </p>
            </div>
          </div>
        ) : (
          !loading &&
          error && (
            <div className="h-[100%] exo max-w-[50rem] w-[100%] pb-[3rem] flex flex-col items-center">
              <img
                src="https://t3.ftcdn.net/jpg/03/65/78/40/240_F_365784049_Ll1Vo1vZ7RjN7gh7LA37vC75MNyv7vCJ.jpg"
                className=""
              />
              <div
                className="text-center text-red-700 px-4 py-3 rounded-md mt-6"
                role="alert"
              >
                <strong className="font-bold text-xl">Activation Error</strong>
                <p className="text-sm mt-2">
                  Oops! Something went wrong during the account activation
                  process.
                </p>
                <p className="text-sm mt-2">
                  Please try again or contact our support team for assistance.
                </p>
                <p className="text-sm mt-2">
                  We apologize for any inconvenience caused.
                </p>
              </div>
            </div>
          )
        )}

        {!loading && !error && (
          <button className="mt-12 border text-green-500 px-6 py-2 rounded-md shadow-md">
            Please wait redirecting to admin dashboard in {countdown}
          </button>
        )}

        {!loading && error && (
          <button className="mt-12 border bg-red-600 text-white px-6 py-2 rounded-md shadow-md">
            Go back home
          </button>
        )}
      </div>
    </div>
  )
}

export default AdminActivation
