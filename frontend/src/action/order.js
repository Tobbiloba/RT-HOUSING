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
  GET_ACTIVE_ORDER_SUCCESSFUL
} from '../constant/order'

// @ts-ignore
const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/order`

const customId = 'custom-id-yes'

console.log(BASE_URL)

// @ts-ignore
export const getAdminOrder = id => async dispatch => {
  dispatch({
    type: FETCH_ADMIN_ORDER,
  })

  try {
    const { data } = await Axios.get(`${BASE_URL}/admin/${id}/orders`)
    dispatch({
      type: FETCH_ADMIN_ORDER_SUCCESSFUL,
      payload: data,
    })

    console.log(data)
  } catch (error) {
    dispatch({
      type: FETCH_ADMIN_ORDER_FAILED,
      payload:
        // @ts-ignore
        error.response && error.response.data[0]
          // @ts-ignore
          ? error.response.data.message
          // @ts-ignore
          : error.message,
    })
    console.log(error)

    toast.error(
      // @ts-ignore
      error.response && error.response.data[0]
        // @ts-ignore
        ? error.response.data[0]
        // @ts-ignore
        : error.message,
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  }
}



// @ts-ignore
export const getUserActiveOrder = (id, propertyId) => async dispatch => {
  dispatch({
    type: GET_ACTIVE_ORDER,
  })
console.log(propertyId)
  try {
    const {data} = await Axios.post(`${BASE_URL}/active/${id}`, {
      propertyId
    });
    dispatch({
      type: GET_ACTIVE_ORDER_SUCCESSFUL,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_ACTIVE_ORDER_FAILED,
      payload:
        // @ts-ignore
        error.response && error.response.data[0]
          // @ts-ignore
          ? error.response.data.message
          // @ts-ignore
          : error.message,
    })
  }
}

// @ts-ignore
export const getUserOrder = id => async dispatch => {
  dispatch({
    type: FETCH_USER_ORDER,
  })

  console.log(id)

  try {
    const { data } = await Axios.get(`${BASE_URL}/user/${id}/orders`)
    dispatch({
      type: FETCH_USER_ORDER_SUCCESSFUL,
      payload: data,
    })

    console.log(data)
  } catch (error) {
    dispatch({
      type: FETCH_USER_ORDER_FAILED,
      payload:
        // @ts-ignore
        error.response && error.response.data[0]
          // @ts-ignore
          ? error.response.data.message
          // @ts-ignore
          : error.message,
    })

    toast.error(
      // @ts-ignore
      error.response && error.response.data[0]
        // @ts-ignore
        ? error.response.data[0]
        // @ts-ignore
        : error.message,
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  }
}
const user_id = "65ca388cf1369640b78fbeb5"
export const createUserOrder =
  // @ts-ignore
  ({ id, couponCode, checkinDate, checkoutDate, expenses, totalPrice}) => async dispatch => {
    dispatch({
      type: CREATE_USER_ORDER,
    })

    console.log(user_id, id, couponCode, checkinDate, checkoutDate)
console.log(totalPrice)
    try {
      const {data} = await Axios.post(`${BASE_URL}/create-order/${id}`, {
        expense: expenses,
        user_id,
        checkinDate,
        checkoutDate,
        couponCode,
        totalPrice
      });
      dispatch({
        type: CREATE_USER_ORDER_SUCCESSFUL,
        payload: data,
      })

      // toast.success('Successfully booked this apartment', {
      //   position: 'bottom-right',
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'light',
      // })
    } catch (error) {
      dispatch({
        type: CREATE_USER_ORDER_FAILED,
        payload:
          // @ts-ignore
          error.response && error.response.data[0]
            // @ts-ignore
            ? error.response.data.message
            // @ts-ignore
            : error.message,
      })

      toast.error(
        // @ts-ignore
        error.response && error.response.data[0]
          // @ts-ignore
          ? error.response.data[0]
          // @ts-ignore
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
  // @ts-ignore
  (id, orderId, status, reason) => async dispatch => {
    dispatch({
      type: UPDATE_USER_ORDER,
    })

    try {
      const { data } = await Axios.get(`${BASE_URL}/admin/${id}/update`, {
        // @ts-ignore
        property_id: property_id,
        // @ts-ignore
        order_information: order_information,
      })
      dispatch({
        type: UPDATE_USER_ORDER_SUCCESSFUL,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ORDER_FAILED,
        payload:
          // @ts-ignore
          error.response && error.response.data[0]
            // @ts-ignore
            ? error.response.data.message
            // @ts-ignore
            : error.message,
      })

      toast.error(
        // @ts-ignore
        error.response && error.response.data[0]
          // @ts-ignore
          ? error.response.data[0]
          // @ts-ignore
          : error.message,
        {
          toastId: customId,
          position: 'bottom-right',
          theme: 'colored',
        },
      )
    }
  }
