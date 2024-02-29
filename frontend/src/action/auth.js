// @ts-nocheck
import Axios from 'axios'
import { toast } from 'react-toastify'
import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_FAILED,
  REQUEST_LOGIN_SUCCESSFUL,
  REQUEST_REGISTER,
  REQUEST_REGISTER_FAILED,
  REQUEST_REGISTER_SUCCESSFUL,
  REQUEST_LOGIN_ADMIN,
  REQUEST_LOGIN_ADMIN_FAILED,
  REQUEST_LOGIN_ADMIN_SUCCESSFUL,
  REQUEST_REGISTER_ADMIN,
  REQUEST_REGISTER_ADMIN_FAILED,
  REQUEST_REGISTER_ADMIN_SUCCESSFUL,
  ACTIVATE_ACCOUNT,
  ACTIVATE_ACCOUNT_SUCCESSFUL,
  ACTIVATE_ACCOUNT_FAILED,
  RESEND_TOKEN,
  RESEND_TOKEN_FAILED,
  RESEND_TOKEN_SUCCESSFUL,
  CLEAR_AUTH
} from '../constant/auth'

const BASE_URL = import.meta.env.VITE_APP_BASE_URL
const customId = 'custom-id-yes'

export const login = values => async dispatch => {
  dispatch({
    type: REQUEST_LOGIN,
  })
  // console.log(values)

  try {
    const { data } = await Axios.post(`${BASE_URL}/users/login`, {
      ...values,
    })
    dispatch({
      type: REQUEST_LOGIN_SUCCESSFUL,
      payload: data,
    })

    // console.log(`${BASE_URL}/auth/login`)

    toast.success('Successfully signed in', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

    // Saving the auth token to session storage
    sessionStorage.setItem('userInfo', JSON.stringify(data))
    console.log(data)
  } catch (error) {
    dispatch({
      type: REQUEST_LOGIN_FAILED,
    })

    console.log(error.response.data.message)

    toast.error(
      error.response && error.response.data
        ? error.response.data.message
        : error.message,
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  }
}

export const register = value => async dispatch => {
  dispatch({
    type: REQUEST_REGISTER,
  })
  console.log(value)

  try {
    const { data } = await Axios.post(`${BASE_URL}/users/register`, {
      ...value,
    })
    dispatch({
      type: REQUEST_REGISTER_SUCCESSFUL,
      payload: data,
    })

    console.log(`${BASE_URL}/auth/login`)

    toast.success('Account created successfully', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

    // Saving the auth token to session storage
    sessionStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: REQUEST_REGISTER_FAILED
    })


    console.log(error.response.data.message)

    toast.error(
      error.response && error.response.data
        ? error.response.data.message
        : error.message,
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  }
}

export const registerAdmin = (values) => async dispatch => {
  dispatch({
    type: REQUEST_REGISTER_ADMIN,
  })
  console.log({ ...values })

  try {
    const { data } = await Axios.post(`${BASE_URL}/admin/register`, {

      ...values
    })
    dispatch({
      type: REQUEST_REGISTER_ADMIN_SUCCESSFUL,
      payload: data,
    })

    console.log(`${BASE_URL}/auth/register`)

    toast.success('Account created successfully', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

  } catch (error) {
    dispatch({
      type: REQUEST_REGISTER_ADMIN_FAILED
    })

    console.log(error.response.data.message)

    toast.error(
      error.response && error.response.data
        ? error.response.data.message
        : error.message,
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  }
}

export const loginAdmin = value => async (dispatch) => {
  dispatch({
    type: REQUEST_LOGIN_ADMIN,
  })

  try {
    const { data } = await Axios.post(`${BASE_URL}/admin/login`, {
      ...value,
    })
    dispatch({
      type: REQUEST_LOGIN_ADMIN_SUCCESSFUL,
      payload: data,
    })

    toast.success('Successfully signed in', {
      position: 'bottom-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

    // Saving the auth token to session storage
    sessionStorage.setItem('adminInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: REQUEST_LOGIN_ADMIN_FAILED
    })


    toast.error(
      error.response && error.response.data
        ? error.response.data.message
        : error.message,
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  }
}

export const activateUser = (id, token) => async dispatch => {
  dispatch({
    type: ACTIVATE_ACCOUNT,
  })
  console.log(`${BASE_URL}/user/activate/token/${token}`)

  try {
    const { data } = await Axios.post(
      `${BASE_URL}/users/activate/token/${id}`,
      {
        token: token,
      },
    )
    dispatch({
      type: ACTIVATE_ACCOUNT_SUCCESSFUL,
      payload: data,
    })

    // console.log(token)
  } catch (error) {
    dispatch({
      type: ACTIVATE_ACCOUNT_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
    })

    console.log(error.response.data.message)

    toast.error(
      error.response && error.response.data
        ? error.response.data.message
        : error.message,
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )

  }
}

export const resendToken = (adminId) => async dispatch => {
  dispatch({
    type: RESEND_TOKEN,
  })
//   const adminId = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
console.log('lol')
console.log(`${BASE_URL}/admin/resend-token/${adminId}`)

  try {
    const { data } = await Axios.get(
      `${BASE_URL}/admin/resend-token/${adminId}`
    )
    dispatch({
      type: RESEND_TOKEN_SUCCESSFUL,
      payload: data,
    })

    toast.success(
      "Resend OTP successful. Check your mail",
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  } catch (error) {
    dispatch({
      type: RESEND_TOKEN_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
    })

    console.log(error)

    toast.error(
      error.response && error.response.data
        ? error.response.data.message
        : error.message,
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )

  }
}


export const activateAdminUser = (id, token) => async dispatch => {
  dispatch({
    type: ACTIVATE_ACCOUNT,
  })
console.log(id, token)
  try {
    const { data } = await Axios.post(
      `${BASE_URL}/admin/activate/token/${id}`,
      {
        token: token,
      },
    )
    dispatch({
      type: ACTIVATE_ACCOUNT_SUCCESSFUL,
      payload: data,
    })
    toast.success(
      "Successfully activated account",
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )

  } catch (error) {
    dispatch({
      type: ACTIVATE_ACCOUNT_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
    })


    console.log(error.response.data.message)

    toast.error(
      error.response && error.response.data
        ? error.response.data.message
        : error.message,
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  }
}

export const clearAuth = () => async dispatch => {
  dispatch({
    type: CLEAR_AUTH
  })}