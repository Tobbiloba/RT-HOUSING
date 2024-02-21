// @ts-nocheck
import Axios from 'axios'
import {
  FETCH_PROPERTY_TYPE,
  FETCH_PROPERTY_TYPE_FAILED,
  FETCH_PROPERTY_TYPE_SUCCESSFUL,
} from '@/constant/type'

const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/type`

export const fetchPropertyType = () => async dispatch => {
  dispatch({
    type: FETCH_PROPERTY_TYPE,
  })
  try {
    const { data } = await Axios.get(`${BASE_URL}`)
    dispatch({
      type: FETCH_PROPERTY_TYPE_SUCCESSFUL,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_PROPERTY_TYPE_FAILED,
      payload:
      error.response && error.response.data
      ? error.response.data.message
      : error.message,
    })
  }
}
