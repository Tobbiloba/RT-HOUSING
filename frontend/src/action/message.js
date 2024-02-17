import Axios from 'axios'
import { toast } from 'react-toastify'


import { REQUEST_TOUR, REQUEST_TOUR_FAILED, REQUEST_TOUR_SUCCESSFUL, MESSAGE_AGENT, MESSAGE_AGENT_FAILED, MESSAGE_AGENT_SUCCESSFUL } from '@/constant/message'

const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/message`

const customId = 'custom-id-yes'
const id = ''

export const requestTour = ({email, name, additionalNote, requestDate, phone}) => async dispatch => {
    dispatch({
      type: REQUEST_TOUR,
    })
    try {
      const { data } = await Axios.post(`${BASE_URL}/tour-request/${id}`, {
        name,
        phone,
        requestDate,
        email
      })
      dispatch({
        type: REQUEST_TOUR_SUCCESSFUL,
        payload: data,
      })
  
      console.log(data)
    } catch (error) {
      console.log(error.message)
  
      dispatch({
        type: REQUEST_TOUR_FAILED,
        payload:
          error.response && error.response.data[0]
            ? error.response.data.message
            : error.message,
      })
  
      toast.error(
        error.response && error.response.data[0]
          ? error.response.data[0]
          : error.message,
        {
          toastId: customId,
          position: 'bottom-right',
          theme: 'colored',
        },
      )
    }
  }




  export const contactAgent = (email, name, message) => async dispatch => {
    dispatch({
      type: REQUEST_TOUR,
    })
    try {
      const { data } = await Axios.get(`${BASE_URL}/${id}`)
      dispatch({
        type: REQUEST_TOUR_SUCCESSFUL,
        payload: data,
      })
  
      console.log(data)
    } catch (error) {
      console.log(error.message)
  
      dispatch({
        type: REQUEST_TOUR_FAILED,
        payload:
          error.response && error.response.data[0]
            ? error.response.data.message
            : error.message,
      })
  
      toast.error(
        error.response && error.response.data[0]
          ? error.response.data[0]
          : error.message,
        {
          toastId: customId,
          position: 'bottom-right',
          theme: 'colored',
        },
      )
    }
  }