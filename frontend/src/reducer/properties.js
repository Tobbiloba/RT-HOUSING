import {
  CLEAR,
  CREATE_PROPERTIES,
  CREATE_PROPERTIES_FAILED,
  CREATE_PROPERTIES_SUCCESSFUL,
  FETCH_MY_PROPERTIES,
  FETCH_MY_PROPERTIES_FAILED,
  FETCH_MY_PROPERTIES_SUCCESSFUL,
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_FAILED,
  FETCH_PROPERTIES_SUCCESSFUL,
  FETCH_PROPERTY_DETAILS,
  FETCH_PROPERTY_DETAILS_FAILED,
  FETCH_PROPERTY_DETAILS_SUCCESSFUL,
  FETCH_PROPERTY_TYPE,
  FETCH_PROPERTY_TYPE_FAILED,
  FETCH_PROPERTY_TYPE_SUCCESSFUL,
} from '../constant/property'

export const fetchAllPropertiesReducer = (
  state = { loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return {
        loading: true,
        error: null,
      }
    case FETCH_PROPERTIES_SUCCESSFUL:
      return {
        loading: false,
        properties: action.payload,
      }
    case FETCH_PROPERTIES_FAILED:
      return {
        loading: false,
        error: false,
      }
    default:
      return state
  }
}

export const fetchMyPropertiesReducer = (
  state = { loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case FETCH_MY_PROPERTIES:
      return {
        loading: true,
        error: null,
      }
    case FETCH_MY_PROPERTIES_SUCCESSFUL:
      return {
        loading: false,

        properties: action.payload,
      }
    case FETCH_MY_PROPERTIES_FAILED:
      return {
        loading: false,
        error: false,
      }
    default:
      return state
  }
}

export const createPropertyReducer = (
  state = { loading: false, error: null },
  action,
) => {
  switch (action.type) {
    case CREATE_PROPERTIES:
      return {
        loading: true,
        error: null,
      }
    case CREATE_PROPERTIES_SUCCESSFUL:
      return {
        loading: false,
        property: action.payload,
        status: 'successful',
      }
    case CREATE_PROPERTIES_FAILED:
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

export const getPropertyDetailsById = (
  state = { loading: true, error: null },
  action,
) => {
  switch (action.type) {
    case FETCH_PROPERTY_DETAILS:
      return {
        loading: true,
        error: null,
      }
    case FETCH_PROPERTY_DETAILS_SUCCESSFUL:
      return {
        loading: false,
        details: action.payload,
        status: 'successful',
      }
    case FETCH_PROPERTY_DETAILS_FAILED:
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}

export const getPropertyByType = (
  state = { loading: true, error: null },
  action,
) => {
  switch (action.type) {
    case FETCH_PROPERTY_TYPE:
      return {
        loading: true,
        error: null,
      }
    case FETCH_PROPERTY_TYPE_SUCCESSFUL:
      return {
        loading: false,
        properties: action.payload,
        status: 'successful',
      }
    case FETCH_PROPERTY_TYPE_FAILED:
      return {
        loading: false,
        error: true,
      }
    default:
      return state
  }
}
