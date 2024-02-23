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
    state = { tourLoading: null, error: null },
    action,
  ) => {
    switch (action.type) {
      case REQUEST_TOUR:
        return {
          tourLoading: true,
          error: null,
        }
      case REQUEST_TOUR_SUCCESSFUL:
        return {
          tourLoading: false,
          status: 'success',
        }
      case REQUEST_TOUR_FAILED:
        return {
          tourLoading: false,
          error: false,
        }
      case CLEAR:
        return {}
      default:
        return state
    }
  }


  export const contactAgentReducer = (
    state = { agentLoading: null, error: null },
    action,
  ) => {
    switch (action.type) {
      case MESSAGE_AGENT:
        return {
          agentLoading: true,
          error: null,
        }
      case MESSAGE_AGENT_SUCCESSFUL:
        return {
          agentLoading: false,
          status: 'success',
        }
      case MESSAGE_AGENT_FAILED:
        return {
          agentLoading: false,
          error: false,
        }
      case CLEAR:
        return {}
      default:
        return state
    }
  }