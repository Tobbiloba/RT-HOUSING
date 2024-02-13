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

export const getAdminInfo = id => async dispatch => {
  dispatch({
    type: GET_ADMIN_PROFILE,
  })
  console.log(id)
  try {
    const { data } = await Axios.get(`${BASE_URL}/${id}`)
    dispatch({
      type: GET_ADMIN_PROFILE_SUCCESSFUL,
      payload: data,
    })

    console.log(data)
  } catch (error) {
    console.log(error.message)

    dispatch({
      type: GET_ADMIN_PROFILE_FAILED,
      payload:
        error.response && error.response.data[0]
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateAdminInfo = (id, values) => async dispatch => {
  dispatch({
    type: UPDATE_ADMIN_PROFILE,
  })
  try {
    const { data } = await Axios.get(`${BASE_URL}/${id}`, {
      values,
    })
    dispatch({
      type: UPDATE_ADMIN_PROFILE_SUCCESSFUL,
      payload: data,
    })

    console.log(data)
  } catch (error) {
    console.log(error.message)

    dispatch({
      type: UPDATE_ADMIN_PROFILE_FAILED,
      payload:
        error.response && error.response.data[0]
          ? error.response.data.message
          : error.message,
    })
  }
}
