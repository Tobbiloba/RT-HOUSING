import {
    REQUEST_LOGIN,
    REQUEST_LOGIN_FAILED,
    REQUEST_LOGIN_SUCCESSFUL,
    REQUEST_REGISTER,
    REQUEST_REGISTER_FAILED,
    REQUEST_REGISTER_SUCCESSFUL,
    REQUEST_LOGIN_ADMIN,
    REQUEST_LOGIN_ADMIN_FAILED,
    REQUEST_LOGIN_ADMIN_SUCCESSFUL,
    REQUEST_REGISTER_ADMIN,
    REQUEST_REGISTER_ADMIN_FAILED,
    REQUEST_REGISTER_ADMIN_SUCCESSFUL
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





export const registerReducer = (
  state= {loading: false, error: null}, action
) => {
  switch (action.type) {
      case REQUEST_REGISTER:
        return {
          loading: true,
          error: null,
        };
      case REQUEST_REGISTER_SUCCESSFUL:
        return {
          loading: false,
          userInfo: action.payload,
        };
      case REQUEST_REGISTER_FAILED:
        return {
          loading: false,
          error: false,
        };
      default:
        return state;
    }
}


export const loginAdminReducer = (
  state= {loading: false, error: null}, action
) => {
  switch (action.type) {
      case REQUEST_LOGIN_ADMIN:
        return {
          loading: true,
          error: null,
        };
      case REQUEST_LOGIN_ADMIN_SUCCESSFUL:
        return {
          loading: false,
          adminInfo: action.payload,
        };
      case REQUEST_LOGIN_ADMIN_FAILED:
        return {
          loading: false,
          error: false,
        };
      default:
        return state;
    }
}





export const registerAdminReducer = (
  state= {loading: false, error: null}, action
) => {
  switch (action.type) {
      case REQUEST_REGISTER_ADMIN:
        return {
          loading: true,
          error: null,
        };
      case REQUEST_REGISTER_ADMIN_SUCCESSFUL:
        return {
          loading: false,
          adminInfo: action.payload,
        };
      case REQUEST_REGISTER_ADMIN_FAILED:
        return {
          loading: false,
          error: false,
        };
      default:
        return state;
    }
}