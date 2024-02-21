// @ts-nocheck
import {
    REQUEST_TOUR,
    REQUEST_TOUR_FAILED,
    REQUEST_TOUR_SUCCESSFUL,
    MESSAGE_AGENT,
    MESSAGE_AGENT_FAILED,
    MESSAGE_AGENT_SUCCESSFUL,
  } from '@/constant/message'

  import { CLEAR } from '@/constant/property'

  export const requestTourReducer = (
    state = { loading: null, error: null },
    action,
  ) => {
    switch (action.type) {
      case REQUEST_TOUR:
        return {
          loading: true,
          error: null,
        }
      case REQUEST_TOUR_SUCCESSFUL:
        return {
          loading: false,
          status: 'success',
        }
      case REQUEST_TOUR_FAILED:
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


  export const contactAgentReducer = (
    state = { loading: null, error: null },
    action,
  ) => {
    switch (action.type) {
      case MESSAGE_AGENT:
        return {
          loading: true,
          error: null,
        }
      case MESSAGE_AGENT_SUCCESSFUL:
        return {
          loading: false,
          status: 'success',
        }
      case MESSAGE_AGENT_FAILED:
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