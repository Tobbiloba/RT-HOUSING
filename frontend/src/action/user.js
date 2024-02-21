// @ts-nocheck
import { UPDATE_USER_PROFILE, UPDATE_USER_PROFILE_FAILED, UPDATE_USER_PROFILE_SUCCESSFUL, UPDATE_PASSWORD, UPDATE_PASSWORD_FAILED, UPDATE_PASSWORD_SUCCESSFUL } from "@/constant/user";
import { toast } from 'react-toastify'
import Axios from 'axios'

const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/users`
const customId = 'custom-id-yes'
const user_id = JSON.parse(sessionStorage.getItem('userInfo'))?._id


// @ts-ignore
export const updateUserProfile = (values) => async dispatch => {
    dispatch({
      type: UPDATE_USER_PROFILE,
    })
  
    try {

        console.log( user_id)
      const { data } = await Axios.post(`${BASE_URL}/update-profile/${user_id}`, {
        ...values
      })
      dispatch({
        type: UPDATE_USER_PROFILE_SUCCESSFUL,
        payload: data,
      })

      toast.success(
       "Successfully updated profile",
        {
          toastId: customId,
          position: 'bottom-right',
          theme: 'colored',
        },
      )
    } catch (error) {
        console.log(error.response.data.message)
      dispatch({
        type: UPDATE_USER_PROFILE_FAILED,
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
  


  // @ts-ignore
export const updateUserPassword = (values) => async dispatch => {
    dispatch({
      type: UPDATE_PASSWORD,
    })
  
    try {

      console.log(values)
      const { data } = await Axios.post(`${BASE_URL}/update-password`, {
        ...values
      })
      dispatch({
        type: UPDATE_PASSWORD_SUCCESSFUL,
        payload: data,
      })

      toast.success
        (
        "Successfully updated password",
         {
           toastId: customId,
           position: 'bottom-right',
           theme: 'colored',
         },
       )
    } catch (error) {
        console.log(error)
      dispatch({
        type: UPDATE_PASSWORD_FAILED,
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
  