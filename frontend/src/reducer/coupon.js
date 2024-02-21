// @ts-nocheck
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
} from '../constant/coupon'

import { CLEAR } from '../constant/employee'

export const createCouponReducer = (
  state = { loading: null, error: null },
  action,
) => {
  switch (action.type) {
    case CREATE_COUPON_CODE:
      return {
        loading: true,
        error: null,
      }
    case CREATE_COUPON_CODE_SUCCESSFUL:
      return {
        loading: false,
        coupon: action.payload,
        status: 'successful',
      }
    case CREATE_COUPON_CODE_FAILED:
      return {
        loading: false,
        error: true,
      }
    case CLEAR:
      return {}
    default:
      return state
  }
}

export const fetchCouponReducer = (
  state = { loading: null, error: null },
  action,
) => {
  switch (action.type) {
    case GET_COMPANY_COUPON:
      return {
        loading: true,
        error: null,
      }
    case GET_COMPANY_COUPON_SUCCESSFUL:
      return {
        loading: false,
        coupon: action.payload,
        status: 'succeessful',
      }
    case GET_COMPANY_COUPON_FAILED:
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export const verifyCouponReducer = (
  state = { verificationLoader: null, error: null },
  action,
) => {
  switch (action.type) {
    case VERIFY_COUPON_CODE:
      return {
        verificationLoader: true,
        error: null,
      }
    case VERIFY_COUPON_CODE_SUCCESSFUL:
      return {
        verificationLoader: false,
        coupon: action.payload,
        status: 'successful',
      }
    case VERIFY_COUPON_CODE_FAILED:
      return {
        verificationLoader: false,
        error: true,
      }
    default:
      return state
  }
}
