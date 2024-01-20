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
  } from "../constant/coupon";
  
  


  export const createCouponReducer = (
    state= {loading: true, error: null}, action
  ) => {
    switch (action.type) {
        case CREATE_COUPON_CODE:
          return {
            loading: true,
            error: null,
          };
        case CREATE_COUPON_CODE_SUCCESSFUL:
          return {
            loading: false,
            coupon: action.payload,
            status: 'succeessful'
          };
        case CREATE_COUPON_CODE_FAILED:
          return {
            loading: false,
            error: true,
          };
        default:
          return state;
      }
  }














  export const fetchCouponReducer = (
    state= {loading: true, error: null}, action
  ) => {
    switch (action.type) {
        case GET_COMPANY_COUPON:
          return {
            loading: true,
            error: null,
          };
        case GET_COMPANY_COUPON_SUCCESSFUL:
          return {
            loading: false,
            coupon: action.payload,
            status: 'succeessful'
          };
        case GET_COMPANY_COUPON_FAILED:
          return {
            loading: false,
            error: true,
          };
        default:
          return state;
      }
  }