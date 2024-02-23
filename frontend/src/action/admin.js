// @ts-nocheck
import {
  GET_ADMIN_PROFILE,
  GET_ADMIN_PROFILE_FAILED,
  GET_ADMIN_PROFILE_SUCCESSFUL,
  UPDATE_ADMIN_PROFILE,
  UPDATE_ADMIN_PROFILE_FAILED,
  UPDATE_ADMIN_PROFILE_SUCCESSFUL,
} from '@/constant/admin'
import Axios from 'axios'

const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/admin`

export const getAdminInfo = ()=> async dispatch => {
  dispatch({
    type: GET_ADMIN_PROFILE,
  })
  const id = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
  try {
    const { data } = await Axios.get(`${BASE_URL}/${id}`)
    dispatch({
      type: GET_ADMIN_PROFILE_SUCCESSFUL,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: GET_ADMIN_PROFILE_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
    })
  }
}

export const updateAdminInfo = (values) => async dispatch => {
  dispatch({
    type: UPDATE_ADMIN_PROFILE,
  })
  const id = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
  try {
    const { data } = await Axios.put(`${BASE_URL}/${id}`, {
      newFields: values,
    })
    dispatch({
      type: UPDATE_ADMIN_PROFILE_SUCCESSFUL,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: UPDATE_ADMIN_PROFILE_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
    })
  }
}
