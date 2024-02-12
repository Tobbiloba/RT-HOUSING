import Axios from "axios";
import { toast } from "react-toastify";
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
  
  const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/employee`
  
  const customId = "custom-id-yes";
  
  console.log(BASE_URL)
  
  
  
  export const getAdminEmployee = ({id}) => async (dispatch) => {
      dispatch({
          type: FETCH_ADMIN_EMPLOYEES
      })
      console.log(id)
      try {
          const { data } = await Axios.get(`${BASE_URL}/employer/${id}`);
          dispatch({
            type: FETCH_ADMIN_EMPLOYEES_SUCCESSFUL,
            payload: data,
          });
      
  
          console.log(data)
      } catch(error) {
          console.log(error.message)
  
          dispatch({
              type: FETCH_ADMIN_EMPLOYEES_FAILED,
              payload:
              error.response && error.response.data[0]
                ? error.response.data.message
                : error.message,
          });
      
          toast.error(
            error.response && error.response.data[0]
              ? error.response.data[0]
              : error.message,
            {
              toastId: customId,
              position: "bottom-right",
              theme: "colored",
            }
          );
      }
  }
  
  
  export const getAllEmployee = () => async (dispatch) => {
      dispatch({
          type: FETCH_ALL_EMPLOYEES
      })
      try {
          const { data } = await Axios.get(`${BASE_URL}`);
          dispatch({
            type: FETCH_ALL_EMPLOYEES_SUCCESSFUL,
            payload: data,
          });
      
  
          console.log(data)
      } catch(error) {
          console.log(error.message)
  
          dispatch({
              type: FETCH_ALL_EMPLOYEES_FAILED,
              payload:
              error.response && error.response.data[0]
                ? error.response.data.message
                : error.message,
          });
      
          toast.error(
            error.response && error.response.data[0]
              ? error.response.data[0]
              : error.message,
            {
              toastId: customId,
              position: "bottom-right",
              theme: "colored",
            }
          );
      }
  }
  
  
  
  export const createEmployee = ( values) => async (dispatch) => {
      dispatch({
          type: CREATE_EMPLOYEE
      })
      console.log(`${BASE_URL}/employer/65c77993a24964910729d98d`)
      try {
          const { data } = await Axios.post(`${BASE_URL}/65c77993a24964910729d98d`, {
  ...values
          });
          dispatch({
            type: CREATE_EMPLOYEE_SUCCESSFUL,
            payload: data,
          });
      
  
          console.log(data)
      } catch(error) {
          console.log(error.message)
  
          dispatch({
              type: CREATE_EMPLOYEE_FAILED,
              payload:
              error.response && error.response.data[0]
                ? error.response.data.message
                : error.message,
          });
      
          toast.error(
            error.response && error.response.data[0]
              ? error.response.data[0]
              : error.message,
            {
              toastId: customId,
              position: "bottom-right",
              theme: "colored",
            }
          );
      }
  }
  
  
  
  
  export const clear = () => async (dispatch) => {
    dispatch({
        type: CLEAR
    })
    console.log('called')
  }
  
  
  export const deleteEmployee = (id) => async (dispatch) => {
      dispatch({
          type: DELETE_EMPLOYEE
      })
      try {
          const { data } = await Axios.delete(`${BASE_URL}/${id}`, {
  
          });
          dispatch({
            type: DELETE_EMPLOYEE_SUCCESSFUL,
            payload: data,
          });
      
          toast.success(
            `Successfully deleted employee with id: ${id}`,
            {
              toastId: customId,
              position: "bottom-right",
              theme: "colored",
            }
          );
          
      } catch(error) {
          console.log(error.message)
  
          dispatch({
              type: DELETE_EMPLOYEE_FAILED,
              payload:
              error.response && error.response.data[0]
                ? error.response.data.message
                : error.message,
          });
      
          toast.error(
            error.response && error.response.data[0]
              ? error.response.data[0]
              : error.message,
            {
              toastId: customId,
              position: "bottom-right",
              theme: "colored",
            }
          );
      }
  }
  
  
  
  export const updateEmployee = (data) => async (dispatch) => {
      dispatch({
          type: UPDATE_EMPLOYEE_STATUS
      })
      try {
          const { data } = await Axios.put(`${BASE_URL}`, {
  
          });
          dispatch({
            type: UPDATE_EMPLOYEE_STATUS_SUCCESSFUL,
            payload: data,
          });
      
  
          console.log(data)
      } catch(error) {
          console.log(error.message)
  
          dispatch({
              type: UPDATE_EMPLOYEE_STATUS_FAILED,
              payload:
              error.response && error.response.data[0]
                ? error.response.data.message
                : error.message,
          });
      
          toast.error(
            error.response && error.response.data[0]
              ? error.response.data[0]
              : error.message,
            {
              toastId: customId,
              position: "bottom-right",
              theme: "colored",
            }
          );
      }
  }
  
  