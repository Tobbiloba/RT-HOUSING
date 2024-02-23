// @ts-nocheck
import {
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAILED,
  UPDATE_PASSWORD_SUCCESSFUL,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_FAILED,
  UPDATE_USER_PROFILE_SUCCESSFUL,
  GET_USER_DETAIL, GET_USER_DETAIL_FAILED, GET_USER_DETAIL_SUCCESSFUL
} from '@/constant/user';
import {
    CLEAR,
  } from '../constant/property';
export const updateUserProfileReducer = (
    state = { updateupdateLoading: false, error: null },
    action,
  ) => {
    switch (action.type) {
      case UPDATE_USER_PROFILE:
        return {
          updateLoading: true,
          error: null,
        }
      case UPDATE_USER_PROFILE_SUCCESSFUL:
        return {
          updateLoading: false,
          status: "Successful"
        }
      case UPDATE_USER_PROFILE_FAILED:
        return {
          updateLoading: false,
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




  export const getUserInfoReducer = (
    state = { loading: null, error: null },
    action,
  ) => {
    switch (action.type) {
      case GET_USER_DETAIL:
        return {
          loading: true,
          error: null,
        }
      case GET_USER_DETAIL_SUCCESSFUL:
        return {
          loading: false,
          userInfo: action.payload
        }
      case GET_USER_DETAIL_FAILED:
        return {
          loading: false,
          error: false,
        }
      default:
        return state
    }
  }