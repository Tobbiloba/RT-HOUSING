import {
  GET_ADMIN_PROFILE,
  GET_ADMIN_PROFILE_FAILED,
  GET_ADMIN_PROFILE_SUCCESSFUL,
  UPDATE_ADMIN_PROFILE,
  UPDATE_ADMIN_PROFILE_FAILED,
  UPDATE_ADMIN_PROFILE_SUCCESSFUL,
} from '@/constant/admin'

import { CLEAR } from '../constant/employee'

export const getAdminInfoReducer = (
  state = { loading: true, error: null },
  action,
) => {
  switch (action.type) {
    case GET_ADMIN_PROFILE:
      return {
        loading: true,
        error: null,
      }
    case GET_ADMIN_PROFILE_SUCCESSFUL:
      return {
        loading: false,
        detail: action.payload,
      }
    case GET_ADMIN_PROFILE_FAILED:
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export const updateAdminInfoReducer = (
  state = { loading: null, error: null },
  action,
) => {
  switch (action.type) {
    case UPDATE_ADMIN_PROFILE:
      return {
        loading: true,
        error: null,
      }
    case UPDATE_ADMIN_PROFILE_SUCCESSFUL:
      return {
        loading: false,
        status: 'successful',
      }
    case UPDATE_ADMIN_PROFILE_FAILED:
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
