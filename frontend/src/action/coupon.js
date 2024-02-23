// @ts-nocheck
import Axios from 'axios'
import { toast } from 'react-toastify'

import {
  VERIFY_COUPON_CODE,
  VERIFY_COUPON_CODE_FAILED,
  VERIFY_COUPON_CODE_SUCCESSFUL,
  CREATE_COUPON_CODE,
  CREATE_COUPON_CODE_FAILED,
  CREATE_COUPON_CODE_SUCCESSFUL,
  GET_COMPANY_COUPON,
  GET_COMPANY_COUPON_FAILED,
  GET_COMPANY_COUPON_SUCCESSFUL,
  GET_ALL_COUPONS,
  GET_ALL_COUPONS_FAILED,
  GET_ALL_COUPONS_SUCCESSFUL,
} from '@/constant/coupon'

const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/coupon`
const customId = 'custom-id-yes'


export const getCompanyCoupon = () => async dispatch => {
  dispatch({
    type: GET_COMPANY_COUPON,
  })
  const admin_id = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
  try {
    const { data } = await Axios.get(`${BASE_URL}/${admin_id}`)
    dispatch({
      type: GET_COMPANY_COUPON_SUCCESSFUL,
      payload: data,
    })

  } catch (error) {
    console.log(error.message)

    dispatch({
      type: GET_COMPANY_COUPON_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
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

export const getAllCoupon = () => async dispatch => {
  dispatch({
    type: GET_ALL_COUPONS,
  })
  try {
    const { data } = await Axios.get(`${BASE_URL}/`)
    dispatch({
      type: GET_ALL_COUPONS_SUCCESSFUL,
      payload: data,
    })

    console.log(data)
  } catch (error) {
    console.log(error.message)

    dispatch({
      type: GET_ALL_COUPONS_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
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

export const createCompanyCoupon =
  ({ values }) =>
  async dispatch => {
    dispatch({
      type: CREATE_COUPON_CODE,
    })
    const admin_id = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
    try {
      const { data } = await Axios.post(
        `${BASE_URL}/create/${admin_id}`,
        {
          coupon_code: values.code,
          free_shipping: values.free_shipping,
          quantity: 1,
          min_purchase: values.min_price,
          discount_type: values.discount_type,
          discount_price: values.discount_price,
          status: 'active',
        },
      )
      dispatch({
        type: CREATE_COUPON_CODE_SUCCESSFUL,
        payload: data,
      })

      toast.success('Successfully created coupon', {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      })
    } catch (error) {

      dispatch({
        type: CREATE_COUPON_CODE_FAILED,
        payload:
        error.response && error.response.data
        ? error.response.data.message
        : error.message,
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

export const verifyCouponCode =
  ({ amount, couponCode }) =>
  async dispatch => {
    dispatch({
      type: VERIFY_COUPON_CODE,
    })
    const user_id = JSON.parse(sessionStorage.getItem('userInfo'))?._id
    try {
      if(user_id) {
        const { data } = await Axios.put(`${BASE_URL}/activate`, {
          couponCode,
          amount,
        })
        dispatch({
          type: VERIFY_COUPON_CODE_SUCCESSFUL,
          payload: data,
        })
  
        toast.success('Successfully activated coupon.', {
          toastId: customId,
          position: 'bottom-right',
          theme: 'colored',
        })
      } else {
        console.log('called')
        dispatch({
          type: VERIFY_COUPON_CODE_FAILED
        })


        toast.error("You have to login first", {
          toastId: customId,
          position: 'bottom-right',
          theme: 'colored',
        })
      }
    } catch (error) {

      dispatch({
        type: VERIFY_COUPON_CODE_FAILED,
        payload:
        error.response && error.response.data
        ? error.response.data.message
        : error.message,
      })

      toast.error(error.response && error.response.data
        ? error.response.data.message
        : error.message, {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      })
    }
  }
