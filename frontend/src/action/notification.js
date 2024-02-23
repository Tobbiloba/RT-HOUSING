// @ts-nocheck
import Axios from 'axios'
import {
  GET_NOTIFICATION,
  GET_NOTIFICATION_FAILED,
  GET_NOTIFICATION_SUCCESSFUL,
  UPDATE_NOTIFICATION,
  UPDATE_NOTIFICATION_FAILED,
  UPDATE_NOTIFICATION_SUCCESSFUL,
} from '@/constant/notification'

const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/notification`

export const getNotifications = () => async dispatch => {
  dispatch({
    type: GET_NOTIFICATION,
  })
  const id = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
  try {
    const { data } = await Axios.get(`${BASE_URL}/${id}`)
    dispatch({
      type: GET_NOTIFICATION_SUCCESSFUL,
      payload: data,
    })
  } catch (error) {
    console.log(error.message)

    dispatch({
      type: GET_NOTIFICATION_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
    })
  }
}

export const updateNotification = ids => async dispatch => {
  dispatch({
    type: UPDATE_NOTIFICATION,
  })
  console.log(ids)
  try {
    const { data } = await Axios.put(`${BASE_URL}/read`, {
      ids,
    })
    dispatch({
      type: UPDATE_NOTIFICATION_SUCCESSFUL,
      payload: data,
    })

  } catch (error) {
    console.log(error.message)

    dispatch({
      type: UPDATE_NOTIFICATION_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
    })
  }
}
