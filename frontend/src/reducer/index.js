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
  REQUEST_REGISTER_ADMIN_SUCCESSFUL,
  ACTIVATE_ACCOUNT,
  ACTIVATE_ACCOUNT_SUCCESSFUL,
  CLEAR_AUTH,
  ACTIVATE_ACCOUNT_FAILED,
  RESEND_TOKEN,
  RESEND_TOKEN_FAILED,
  RESEND_TOKEN_SUCCESSFUL
} from '../constant/auth'
export const loginReducer = (
  state = { loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        loading: true,
        error: null,
      }
    case REQUEST_LOGIN_SUCCESSFUL:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case REQUEST_LOGIN_FAILED:
      return {
        loading: false,
        error: false,
      }
      case CLEAR_AUTH:
        return {}
    default:
      return state
  }
}



export const resendTokenReducer = (
  state = { loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case RESEND_TOKEN:
      return {
        loading: true,
        error: null,
      }
    case RESEND_TOKEN_SUCCESSFUL:
      return {
        loading: false,
        status: "successful",
      }
    case RESEND_TOKEN_FAILED:
      return {
        loading: false,
        error: false,
      }
      case CLEAR_AUTH:
        return {}
    default:
      return state
  }
}
export const registerReducer = (
  state = { loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case REQUEST_REGISTER:
      return {
        loading: true,
        error: null,
      }
    case REQUEST_REGISTER_SUCCESSFUL:
      return {
        loading: false,
        userInfo: action.payload,
        status: 'success',
      }
    case REQUEST_REGISTER_FAILED:
      return {
        loading: false,
        error: false,
      }
      case CLEAR_AUTH:
        return {}
    default:
      return state
  }
}

export const loginAdminReducer = (
  state = { loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case REQUEST_LOGIN_ADMIN:
      return {
        loading: true,
        error: null,
      }
    case REQUEST_LOGIN_ADMIN_SUCCESSFUL:
      return {
        loading: false,
        adminInfo: action.payload,
      }
    case REQUEST_LOGIN_ADMIN_FAILED:
      return {
        loading: false,
        error: false,
      }
      case CLEAR_AUTH:
        return {}
    default:
      return state
  }
}

export const registerAdminReducer = (
  state = { loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case REQUEST_REGISTER_ADMIN:
      return {
        loading: true,
        error: null,
      }
    case REQUEST_REGISTER_ADMIN_SUCCESSFUL:
      return {
        loading: false,
        adminInfo: action.payload,
      }
    case REQUEST_REGISTER_ADMIN_FAILED:
      return {
        loading: false,
        error: false,
      }
      case CLEAR_AUTH:
        return {}
    default:
      return state
  }
}

export const activateUser = (
  state = { loading: null, error: null },
  action,
) => {
  switch (action.type) {
    case ACTIVATE_ACCOUNT:
      return {
        loading: true,
        error: null,
      }
    case ACTIVATE_ACCOUNT_SUCCESSFUL:
      return {
        loading: false,
        error: false,
        activationSuccess: "successful"
      }
    case ACTIVATE_ACCOUNT_FAILED:
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}
