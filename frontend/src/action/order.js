// @ts-nocheck
import Axios from 'axios'
import { toast } from 'react-toastify'

import {
  FETCH_ADMIN_ORDER,
  FETCH_ADMIN_ORDER_FAILED,
  FETCH_ADMIN_ORDER_SUCCESSFUL,
  FETCH_USER_ORDER,
  FETCH_USER_ORDER_FAILED,
  FETCH_USER_ORDER_SUCCESSFUL,
  CREATE_USER_ORDER,
  CREATE_USER_ORDER_FAILED,
  CREATE_USER_ORDER_SUCCESSFUL,
  UPDATE_USER_ORDER,
  UPDATE_USER_ORDER_FAILED,
  UPDATE_USER_ORDER_SUCCESSFUL,
  GET_ACTIVE_ORDER,
  GET_ACTIVE_ORDER_FAILED,
  GET_ACTIVE_ORDER_SUCCESSFUL,
} from '../constant/order'

// @ts-ignore
const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/order`

const customId = 'custom-id-yes'



// @ts-ignore
export const getAdminOrder = () => async dispatch => {
  dispatch({
    type: FETCH_ADMIN_ORDER,
  })
  const admin_id = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
  try {
    const { data } = await Axios.get(`${BASE_URL}/admin/${admin_id}/orders`)
    dispatch({
      type: FETCH_ADMIN_ORDER_SUCCESSFUL,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_ADMIN_ORDER_FAILED,
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

export const getUserActiveOrder = propertyId => async dispatch => {
  dispatch({
    type: GET_ACTIVE_ORDER,
  })
  const user_id = JSON.parse(sessionStorage.getItem('userInfo'))?._id
  try {
    const { data } = await Axios.post(`${BASE_URL}/active/${user_id}`, {
      propertyId,
    })
    dispatch({
      type: GET_ACTIVE_ORDER_SUCCESSFUL,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_ACTIVE_ORDER_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
    })
  }
}

// @ts-ignore
export const getUserOrder = () => async dispatch => {
  dispatch({
    type: FETCH_USER_ORDER,
  })
  const user_id = JSON.parse(sessionStorage.getItem('userInfo'))?._id
  try {
    const { data } = await Axios.get(`${BASE_URL}/user/${user_id}/orders`)
    dispatch({
      type: FETCH_USER_ORDER_SUCCESSFUL,
      payload: data,
    })

    console.log(data)
  } catch (error) {
    dispatch({
      type: FETCH_USER_ORDER_FAILED,
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
export const createUserOrder =
    ({ id, couponCode, checkinDate, checkoutDate, expenses, totalPrice }) =>
    async dispatch => {
      dispatch({
        type: CREATE_USER_ORDER,
      })
      const user_id = JSON.parse(sessionStorage.getItem('userInfo'))?._id
      try {
       if(user_id) {
        const { data } = await Axios.post(`${BASE_URL}/create-order/${id}`, {
          expense: expenses,
          user_id,
          checkinDate,
          checkoutDate,
          couponCode,
          totalPrice,
        })
        dispatch({
          type: CREATE_USER_ORDER_SUCCESSFUL,
          payload: data,
        })


        toast.success(
          "Successfully created order",
          {
            toastId: customId,
            position: 'bottom-right',
            theme: 'colored',
          },
        )
       } else {
        dispatch({
          type: CREATE_USER_ORDER_FAILED
        })
        toast.error(
          "You have to login first",
          {
            toastId: customId,
            position: 'bottom-right',
            theme: 'colored',
          },
        )
       }
      } catch (error) {
        dispatch({
          type: CREATE_USER_ORDER_FAILED,
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

export const updateOrderStatus =
  ( orderId, status, reason) => async dispatch => {
    dispatch({
      type: UPDATE_USER_ORDER,
    })

    const admin_id = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
    try {
      const { data } = await Axios.put(`${BASE_URL}/admin/${admin_id}/update`, {
        orderId,
        reason,
        status,
      })
      dispatch({
        type: UPDATE_USER_ORDER_SUCCESSFUL,
        payload: data,
      })


      toast.success(
        `Successfully ${status == "active" ? "activated" : "declined"} this order`,
        {
          toastId: customId,
          position: 'bottom-right',
          theme: 'colored',
        },
      )
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ORDER_FAILED,
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
