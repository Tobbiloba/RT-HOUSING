import Axios from "axios";
import { toast } from "react-toastify";

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
} from "../constant/order";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL

const customId = "custom-id-yes";

console.log(BASE_URL)








export const getAdminOrder = (id) => async (dispatch) => {
    dispatch({
        type: FETCH_ADMIN_ORDER
    })

    try {
        const { data } = await Axios.get(`${BASE_URL}/order/admin/${id}/orders`);
        dispatch({
          type: FETCH_ADMIN_ORDER_SUCCESSFUL,
          payload: data,
        });
    

    
      } catch (error) {
        dispatch({
          type: FETCH_ADMIN_ORDER_FAILED,
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








export const getUserOrder = (id) => async (dispatch) => {
    dispatch({
        type: FETCH_USER_ORDER
    })

    try {
        const { data } = await Axios.get(`${BASE_URL}/order/user/${id}/orders`);
        dispatch({
          type: FETCH_USER_ORDER_SUCCESSFUL,
          payload: data,
        });
    

    
      } catch (error) {
        dispatch({
          type: FETCH_USER_ORDER_FAILED,
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










export const createUserOrder = (id, property_id, order_information) => async (dispatch) => {
    dispatch({
        type: CREATE_USER_ORDER
    })

    try {
        const { data } = await Axios.get(`${BASE_URL}/order/create-order/${id}`, {
            property_id: property_id,
            order_information: order_information
        });
        dispatch({
          type: CREATE_USER_ORDER_SUCCESSFUL,
          payload: data,
        });
    

        toast.success('Successfully booked this apartment', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });


    
      } catch (error) {
        dispatch({
          type: CREATE_USER_ORDER_FAILED,
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









export const updateOrderStatus = (id, orderId, status, reason) => async (dispatch) => {
    dispatch({
        type: UPDATE_USER_ORDER
    })

    try {
        const { data } = await Axios.get(`${BASE_URL}/admin/${id}/update`, {
            property_id: property_id,
            order_information: order_information
        });
        dispatch({
          type: UPDATE_USER_ORDER_SUCCESSFUL,
          payload: data,
        });
    

    
      } catch (error) {
        dispatch({
          type: UPDATE_USER_ORDER_FAILED,
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