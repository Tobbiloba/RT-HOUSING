import {
    REQUEST_LOGIN,
    REQUEST_LOGIN_FAILED,
    REQUEST_LOGIN_SUCCESSFUL,
    REQUEST_REGISTER,
    REQUEST_REGISTER_FAILED,
    REQUEST_REGISTER_SUCCESSFUL,
  } from "../constant/auth";

  export const loginReducer = (
    state= {loading: false, error: null}, action
  ) => {
    switch (action.type) {
        case REQUEST_LOGIN:
          return {
            loading: true,
            error: null,
          };
        case REQUEST_LOGIN_SUCCESSFUL:
          return {
            loading: false,
            userInfo: action.payload,
          };
        case REQUEST_LOGIN_FAILED:
          return {
            loading: false,
            error: false,
          };
        default:
          return state;
      }
  }