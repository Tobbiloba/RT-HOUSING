// @ts-nocheck
import Axios from 'axios'
import { toast } from 'react-toastify'

import {
  REQUEST_TOUR,
  REQUEST_TOUR_FAILED,
  REQUEST_TOUR_SUCCESSFUL,
  MESSAGE_AGENT,
  MESSAGE_AGENT_FAILED,
  MESSAGE_AGENT_SUCCESSFUL,
} from '@/constant/message'

const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/message`

const customId = 'custom-id-yes'


export const requestTour = (values, id) => async dispatch => {
  dispatch({
    type: REQUEST_TOUR,
  })
  // const id = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
  try {
    const { data } = await Axios.post(`${BASE_URL}/tour-request/${id}`, {
      ...values,
    })
    dispatch({
      type: REQUEST_TOUR_SUCCESSFUL,
      payload: data,
    })

    toast.success(
      "Successfully requested tour",
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  } catch (error) {

    dispatch({
      type: REQUEST_TOUR_FAILED,
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

export const contactAgent = (values, id) => async dispatch => {
  dispatch({
    type: MESSAGE_AGENT,
  })
  // const id = JSON.parse(sessionStorage.getItem('adminInfo'))?._id
  try {
    const { data } = await Axios.post(`${BASE_URL}/contact-agent/${id}`, {
      ...values
    })
    dispatch({
      type: MESSAGE_AGENT_SUCCESSFUL,
      payload: data,
    })

     toast.success(
      "Successfully contacted agent",
      {
        toastId: customId,
        position: 'bottom-right',
        theme: 'colored',
      },
    )
  } catch (error) {
    dispatch({
      type: MESSAGE_AGENT_FAILED,
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
