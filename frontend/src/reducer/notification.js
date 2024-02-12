import { GET_NOTIFICATION, GET_NOTIFICATION_FAILED, GET_NOTIFICATION_SUCCESSFUL, UPDATE_NOTIFICATION, UPDATE_NOTIFICATION_FAILED, UPDATE_NOTIFICATION_SUCCESSFUL } from "@/constant/notification";
import { CLEAR } from "@/constant/property";

export const getNotificationReducer = (
    state= {loading: true, error: null}, action
  ) => {
    switch (action.type) {
        case GET_NOTIFICATION:
          return {
            loading: true,
            error: null,
          };
        case GET_NOTIFICATION_SUCCESSFUL:
          return {
            loading: false,
            notifications: action.payload
          };
        case GET_NOTIFICATION_FAILED:
          return {
            loading: false,
            error: true,
          };
        default:
          return state;
      }
  }




  export const updateNotificationReducer = (
    state= {loading: true, error: null}, action
  ) => {
    switch (action.type) {
        case UPDATE_NOTIFICATION:
          return {
            loading: true,
            error: null,
          };
        case UPDATE_NOTIFICATION_SUCCESSFUL:
          return {
            loading: false,
            status: 'succeessful'
          };
        case UPDATE_NOTIFICATION_FAILED:
          return {
            loading: false,
            error: true,
          };
        case CLEAR: 
        return {}
        default:
          return state;
      }
  }