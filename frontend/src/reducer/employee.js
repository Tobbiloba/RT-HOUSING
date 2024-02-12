import {
    FETCH_ALL_EMPLOYEES,
    FETCH_ADMIN_EMPLOYEES,
    FETCH_ADMIN_EMPLOYEES_FAILED,
    FETCH_ADMIN_EMPLOYEES_SUCCESSFUL,
    FETCH_ALL_EMPLOYEES_FAILED,
    FETCH_ALL_EMPLOYEES_SUCCESSFUL,
    DELETE_EMPLOYEE,
    DELETE_EMPLOYEE_FAILED,
    DELETE_EMPLOYEE_SUCCESSFUL,
    UPDATE_EMPLOYEE_STATUS,
    UPDATE_EMPLOYEE_STATUS_FAILED,
    UPDATE_EMPLOYEE_STATUS_SUCCESSFUL,
    CREATE_EMPLOYEE,
    CREATE_EMPLOYEE_SUCCESSFUL,
    CREATE_EMPLOYEE_FAILED,
    CLEAR
  } from "@/constant/employee";
  

  export const fetchAllEmployeeReducer = (
    state= {loading: true, error: null}, action
  ) => {
    switch (action.type) {
        case FETCH_ALL_EMPLOYEES:
          return {
            loading: true,
            error: null,
          };
        case FETCH_ALL_EMPLOYEES_SUCCESSFUL:
          return {
            loading: false,
            employees: action.payload,
            status: 'succeessful'
          };
        case FETCH_ALL_EMPLOYEES_FAILED:
          return {
            loading: false,
            error: true,
          };
          case CLEAR: 
            return {
                loading: null
            }
        default:
          return state;
      }
  }


  export const fetchAdminEmployeeReducer = (
    state= {loading: true, error: null}, action
  ) => {
    switch (action.type) {
        case FETCH_ADMIN_EMPLOYEES:
          return {
            loading: true,
            error: null,
          };
        case FETCH_ADMIN_EMPLOYEES_SUCCESSFUL:
          return {
            loading: false,
            employees: action.payload,
            status: 'succeessful'
          };
        case FETCH_ADMIN_EMPLOYEES_FAILED:
          return {
            loading: false,
            error: true,
          };
          case CLEAR: 
            return {
                loading: null
            }
        default:
          return state;
      }
  }


  export const createEmployeeReducer = (
    state= {loading: true, error: null}, action
  ) => {
    switch (action.type) {
        case CREATE_EMPLOYEE:
          return {
            loading: true,
            error: null,
          };
        case CREATE_EMPLOYEE_SUCCESSFUL:
          return {
            loading: false,
            employee: action.payload,
            status: 'succeessful'
          };
        case CREATE_EMPLOYEE_FAILED:
          return {
            loading: false,
            error: true,
          };
          case CLEAR: 
            return {
                loading: null
            }
        default:
          return state;
      }
  }


  export const updateEmployeeStatusReducer = (
    state= {loading: true, error: null}, action
  ) => {
    switch (action.type) {
        case UPDATE_EMPLOYEE_STATUS:
          return {
            loading: true,
            error: null,
          };
        case UPDATE_EMPLOYEE_STATUS_SUCCESSFUL:
          return {
            loading: false,
            employees: action.payload,
            status: 'succeessful'
          };
        case UPDATE_EMPLOYEE_STATUS_FAILED:
          return {
            loading: false,
            error: true,
          };
          case CLEAR: 
            return {
                loading: null
            }
        default:
          return state;
      }
  }


  export const deleteEmployeeReducer = (
    state= {loading: null, error: null}, action
  ) => {
    switch (action.type) {
        case DELETE_EMPLOYEE:
          return {
            loading: true,
            error: null,
          };
        case DELETE_EMPLOYEE_SUCCESSFUL:
          return {
            loading: false,
            status: 'succeessful'
          };
        case DELETE_EMPLOYEE_FAILED:
          return {
            loading: false,
            error: true,
          };
        case CLEAR: 
            return {
                loading: null
            }
        
        default:
          return state;
      }
  }