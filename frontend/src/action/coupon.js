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
  GET_ALL_COUPONS,
  GET_ALL_COUPONS_FAILED,
  GET_ALL_COUPONS_SUCCESSFUL
} from "@/constant/coupon";



const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/coupon`

const customId = "custom-id-yes";

console.log(BASE_URL)



export const getCompanyCoupon = (id) => async (dispatch) => {
    dispatch({
        type: GET_COMPANY_COUPON
    })
    try {
        const { data } = await Axios.get(`${BASE_URL}/${id}`);
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




export const getAllCoupon = () => async (dispatch) => {
  dispatch({
      type: GET_ALL_COUPONS
  })
  try {
      const { data } = await Axios.get(`${BASE_URL}/`);
      dispatch({
        type: GET_ALL_COUPONS_SUCCESSFUL,
        payload: data,
      });
  

      console.log(data)
  } catch(error) {
      console.log(error.message)

      dispatch({
          type: GET_ALL_COUPONS_FAILED,
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



export const createCompanyCoupon = ({values, id}) => async (dispatch) => {
    dispatch({
        type: GET_COMPANY_COUPON
    })
    console.log(values)
    try {
        const { data } = await Axios.post(`${BASE_URL}/create/65c77993a24964910729d98d`, {
          // ...values
          coupon_code: values.code,
          free_shipping: values.free_shipping,
          quantity: 1,
          min_purchase: values.min_price,
          discount_type: values.discount_type,
          discount_price: values.discount_price,
          status: 'active'
        });
        dispatch({
          type: CREATE_COUPON_CODE_SUCCESSFUL,
          payload: data,
        });
    
        toast.success(
          'Successfully created coupon',
          {
            toastId: customId,
            position: "bottom-right",
            theme: "colored",
          }
        );
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