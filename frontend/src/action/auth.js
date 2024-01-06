import Axios from "axios";
import { toast } from "react-toastify";
import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_FAILED,
  REQUEST_LOGIN_SUCCESSFUL,
  REQUEST_REGISTER,
  REQUEST_REGISTER_FAILED,
  REQUEST_REGISTER_SUCCESSFUL,
} from "../constant/auth";

const BASE_URL = 'https://rt-housing-api.vercel.app/api/v1'
const customId = "custom-id-yes";

console.log(BASE_URL)


export const login = (email, password) => async (dispatch) => {
    dispatch({
        type: REQUEST_LOGIN
    })
    console.log(email, password)

    try {
        const { data } = await Axios.post(`${BASE_URL}/users/login`, {
          email: email,
          password: password,
        });
        dispatch({
          type: REQUEST_LOGIN_SUCCESSFUL,
          payload: data,
        });
    
        console.log(`${BASE_URL}/auth/login`)

        toast.success('Successfully signed in', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
        // Saving the auth token to session storage
        sessionStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: REQUEST_LOGIN_FAILED,
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









export const register = (email, password, phoneNo, name, avatar) => async (dispatch) => {
    dispatch({
        type: REQUEST_LOGIN
    })
    console.log(email, password, avatar, phoneNo, name)

    try {
        const { data } = await Axios.post(`${BASE_URL}/users/register`, {
          email: email,
          password: password,
          avatar: avatar,
          phone_no: phoneNo,
          name: name
        });
        dispatch({
          type: REQUEST_LOGIN_SUCCESSFUL,
          payload: data,
        });
    
        console.log(`${BASE_URL}/auth/login`)

        toast.success('Account created successfully', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

    
        // Saving the auth token to session storage
        // sessionStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: REQUEST_LOGIN_FAILED,
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