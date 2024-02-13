import {
  FETCH_PROPERTY_TYPE,
  FETCH_PROPERTY_TYPE_FAILED,
  FETCH_PROPERTY_TYPE_SUCCESSFUL,
} from '@/constant/type'

export const fetchPropertyTypeReducer = (
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
        types: action.payload,
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
