// @ts-nocheck
import Axios from "axios";
import { toast } from "react-toastify";

import {
  CLEAR,
  CREATE_PROPERTIES,
  CREATE_PROPERTIES_FAILED,
  CREATE_PROPERTIES_SUCCESSFUL,
  FETCH_MY_PROPERTIES,
  FETCH_MY_PROPERTIES_FAILED,
  FETCH_MY_PROPERTIES_SUCCESSFUL,
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_FAILED,
  FETCH_PROPERTIES_SUCCESSFUL,
  FETCH_PROPERTY_DETAILS,
  FETCH_PROPERTY_DETAILS_FAILED,
  FETCH_PROPERTY_DETAILS_SUCCESSFUL,
  FETCH_PROPERTY_TYPE,
  FETCH_PROPERTY_TYPE_FAILED,
  FETCH_PROPERTY_TYPE_SUCCESSFUL
} from "../constant/property";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL

const customId = "custom-id-yes";

// console.log(BASE_URL)

export const getAllProperties = () => async (dispatch) => {
    dispatch({
        type: FETCH_PROPERTIES
    })

    try {
        const { data } = await Axios.get(`${BASE_URL}/properties`);
        dispatch({
          type: FETCH_PROPERTIES_SUCCESSFUL,
          payload: data,
        });
    

    
      } catch (error) {
        dispatch({
          type: FETCH_PROPERTIES_FAILED,
          payload:
            error.response && error.response.data[0]
              ? error.response.data.message
              : error.message,
        });
    
        toast.error(
          error.response && error.response.data[0]
            ? error.response.data[0]
            : error.message,
          {
            toastId: customId,
            position: "bottom-right",
            theme: "colored",
          }
        );
      }
}



export const getMyProperties = () => async (dispatch) => {
    dispatch({
        type: FETCH_MY_PROPERTIES
    })
    console.log('called')
    try {
        const { data } = await Axios.get(`${BASE_URL}/properties/company/65a0fc46a3cd4f366e7a3c52`);
        dispatch({
          type: FETCH_MY_PROPERTIES_SUCCESSFUL,
          payload: data,
        });
    
        console.log(data)
    
      } catch (error) {
        dispatch({
          type: FETCH_MY_PROPERTIES_FAILED,
          payload:
            error.response && error.response.data[0]
              ? error.response.data.message
              : error.message,
        });
        console.log(error)
        toast.error(
          error.response && error.response.data[0]
            ? error.response.data[0]
            : error.message,
          {
            toastId: customId,
            position: "bottom-right",
            theme: "colored",
          }
        );
      }
}






export const getPropertyByType = (type) => async (dispatch) => {
  dispatch({
      type: FETCH_PROPERTY_TYPE
  })
  console.log('called')
  try {
      const { data } = await Axios.get(`${BASE_URL}/properties/type/${'type'}`);
      dispatch({
        type: FETCH_PROPERTY_TYPE_SUCCESSFUL,
        payload: data,
      });
  
      console.log(data)
  
    } catch (error) {
      dispatch({
        type: FETCH_PROPERTY_TYPE_FAILED,
        payload:
          error.response && error.response.data[0]
            ? error.response.data.message
            : error.message,
      });
      console.log(error)
      // toast.error(
      //   error.response && error.response.data[0]
      //     ? error.response.data[0]
      //     : error.message,
      //   {
      //     toastId: customId,
      //     position: "bottom-right",
      //     theme: "colored",
      //   }
      // );
    }
}



export const createProperty = (id, property_information) => async (dispatch) => {
    dispatch({
        type: CREATE_PROPERTIES
    })

    // console.log(id, property_information)

    try {
        const { data } = await Axios.post(`${BASE_URL}/properties/${id}`, {
            // id,
            property_information: property_information
        });
        dispatch({
          type: CREATE_PROPERTIES_SUCCESSFUL,
          payload: data,
        });
    console.log(data)

    
      } catch (error) {
        dispatch({
          type: CREATE_PROPERTIES_FAILED,
          payload:
            error.response && error.response.data[0]
              ? error.response.data.message
              : error.message,
        });
    
        toast.error(
          error.response && error.response.data[0]
            ? error.response.data[0]
            : error.message,
          {
            toastId: customId,
            position: "bottom-right",
            theme: "colored",
          }
        );
      }
}








export const Clear = () => async (dispatch) => {
  dispatch({
      type: CLEAR
  })
}




export const getPropertyDetailById = (id) => async (dispatch) => {
  dispatch({
      type: FETCH_PROPERTY_DETAILS
  })
console.log(id)
  try {
      const { data } = await Axios.get(`${BASE_URL}/properties/property-details/${encodeURIComponent(id)}`);
      dispatch({
        type: FETCH_PROPERTY_DETAILS_SUCCESSFUL,
        payload: data,
      });
  
console.log(data)
  
    } catch (error) {
      dispatch({
        type: FETCH_PROPERTY_DETAILS_FAILED,
        payload:
          error.response && error.response.data[0]
            ? error.response.data.message
            : error.message,
      });
  
      toast.error(
        error.response && error.response.data[0]
          ? error.response.data[0]
          : error.message,
        {
          toastId: customId,
          position: "bottom-right",
          theme: "colored",
        }
      );
    }
}