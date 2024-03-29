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
  GET_ACTIVE_ORDER,
  GET_ACTIVE_ORDER_SUCCESSFUL,
  GET_ACTIVE_ORDER_FAILED,
} from '../constant/order'
import { CLEAR } from '@/constant/property'
export const getAdminOrder = (
  state = { loading: true, error: null },
  action,
) => {
  switch (action.type) {
    case FETCH_ADMIN_ORDER:
      return {
        loading: true,
        error: null,
      }
    case FETCH_ADMIN_ORDER_SUCCESSFUL:
      return {
        loading: false,
        details: action.payload,
        status: 'succeessful',
      }
    case FETCH_ADMIN_ORDER_FAILED:
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export const getUserOrder = (
  state = { loading: true, error: null },
  action,
) => {
  switch (action.type) {
    case FETCH_USER_ORDER:
      return {
        loading: true,
        error: null,
      }
    case FETCH_USER_ORDER_SUCCESSFUL:
      return {
        loading: false,
        details: action.payload,
        status: 'succeessful',
      }
    case FETCH_USER_ORDER_FAILED:
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export const getUserActiveOrder = (
  state = { loading: true, error: null },
  action,
) => {
  switch (action.type) {
    case GET_ACTIVE_ORDER:
      return {
        loading: true,
        error: null,
      }
    case GET_ACTIVE_ORDER_SUCCESSFUL:
      return {
        loading: false,
        orders: action.payload,
      }
    case GET_ACTIVE_ORDER_FAILED:
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export const createOrder = (
  state = { loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case CREATE_USER_ORDER:
      return {
        loading: true,
        error: null,
      }
    case CREATE_USER_ORDER_SUCCESSFUL:
      return {
        loading: false,
        details: action.payload,
        status: 'succeessful',
      }
    case CREATE_USER_ORDER_FAILED:
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export const updateOrder = (state = { loading: true, error: null }, action) => {
  switch (action.type) {
    case UPDATE_USER_ORDER:
      return {
        loading: true,
        error: null,
      }
    case UPDATE_USER_ORDER_SUCCESSFUL:
      return {
        loading: false,
        details: action.payload,
        status: 'succeessful',
      }
    case UPDATE_USER_ORDER_FAILED:
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
