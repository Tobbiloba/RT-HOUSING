import Axios from "axios";
import { toast } from "react-toastify";

import {
  VERIFY_COUPON_CODE,
  VERIFY_COUPON_CODE_FAILED,
  VERIFY_COUPON_CODE_SUCCESSFUL,
  CREATE_COUPON_CODE,
  CREATE_COUPON_CODE_FAILED,
  CREATE_COUPON_CODE_SUCCESSFUL,
  GET_COMPANY_COUPON,
  GET_COMPANY_COUPON_FAILED,
  GET_COMPANY_COUPON_SUCCESSFUL,
} from "@/constant/coupon";



const BASE_URL = import.meta.env.VITE_APP_BASE_URL

const customId = "custom-id-yes";

console.log(BASE_URL)



export const getCompanyCoupon = (id) => async (dispatch) => {
    dispatch({
        type: GET_COMPANY_COUPON
    })
    try {
        const { data } = await Axios.get(`${BASE_URL}/coupon/65a0fc46a3cd4f366e7a3c52`);
        dispatch({
          type: GET_COMPANY_COUPON_SUCCESSFUL,
          payload: data,
        });
    

        console.log(data)
    } catch(error) {
        console.log(error.message)

        dispatch({
            type: GET_COMPANY_COUPON_FAILED,
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







export const createCompanyCoupon = (coupon_title, coupon_code, free_shipping, quantity, discount_type, status) => async (dispatch) => {
    dispatch({
        type: GET_COMPANY_COUPON
    })
    try {
        const { data } = await Axios.get(`${BASE_URL}/coupon/65a0fc46a3cd4f366e7a3c52`);
        dispatch({
          type: CREATE_COUPON_CODE_SUCCESSFUL,
          payload: data,
        });
    

        console.log(data)
    } catch(error) {
        console.log(error.message)

        dispatch({
            type: CREATE_COUPON_CODE_FAILED,
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