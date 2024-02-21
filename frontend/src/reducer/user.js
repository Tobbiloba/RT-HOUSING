// @ts-nocheck
import {
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAILED,
  UPDATE_PASSWORD_SUCCESSFUL,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_FAILED,
  UPDATE_USER_PROFILE_SUCCESSFUL,
} from '@/constant/user';
import {
    CLEAR,
  } from '../constant/property';
export const updateUserProfileReducer = (
    state = { loading: false, error: null },
    action,
  ) => {
    switch (action.type) {
      case UPDATE_USER_PROFILE:
        return {
          loading: true,
          error: null,
        }
      case UPDATE_USER_PROFILE_SUCCESSFUL:
        return {
          loading: false,
          status: "Successful"
        }
      case UPDATE_USER_PROFILE_FAILED:
        return {
          loading: false,
          error: false,
        }
        case CLEAR:
      return {}
      default:
        return state
    }
  }

  export const updateUserPasswordReducer = (
    state = { loading: null, error: null },
    action,
  ) => {
    switch (action.type) {
      case UPDATE_PASSWORD:
        return {
          loading: true,
          error: null,
        }
      case UPDATE_PASSWORD_SUCCESSFUL:
        return {
          loading: false,
          status: "Successful"
        }
      case UPDATE_PASSWORD_FAILED:
        return {
          loading: false,
          error: false,
        }
        case CLEAR:
      return {}
      default:
        return state
    }
  }