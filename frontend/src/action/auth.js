import Axios from "axios";
import { toast } from "react-toastify";
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

const BASE_URL = import.meta.env.VITE_APP_BASE_URL
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
          // payload:
          //   error.response && error.response.data[0]
          //     ? error.response.data.message
          //     : error.message,
        });

        console.log(error)
    
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
          phoneNo: phoneNo,
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
        sessionStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: REQUEST_LOGIN_FAILED,
          // payload:
          //   error.response && error.response.data[0]
          //     ? error.response.data.message
          //     : error.message,
        });

        console.log(error)
    
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









export const registerAdmin = (firstname, lastname, username, email, phoneNo,  state, country, city, password,  avatar) => async (dispatch) => {
  dispatch({
      type: REQUEST_REGISTER_ADMIN
  })
  console.log(firstname, lastname, username, email, phoneNo,  state, country, city, password,  avatar)

  try {
      const { data } = await Axios.post(`${BASE_URL}/admin/register`, {
        email: email,
        password: password,
        phone_no: phoneNo,
        username: username,
        firstname, firstname,
        lastname: lastname,
        profile_img: avatar,
        country: country,
        state: state,
        city: city
      });
      dispatch({
        type: REQUEST_REGISTER_ADMIN_SUCCESSFUL,
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

        

        console.log(data)
      // Saving the auth token to session storage
      // sessionStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: REQUEST_REGISTER_ADMIN_FAILED,
        // payload:
        //   error.response && error.response.data[0]
        //     ? error.response.data.message
        //     : error.message,
      });
      console.log(error)
  
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



















export const loginAdmin = (email, password) => async (dispatch) => {
  dispatch({
      type: REQUEST_LOGIN_ADMIN
  })
  console.log(email, password)

  try {
      const { data } = await Axios.post(`${BASE_URL}/admin/login`, {
        email: email,
        password: password,
      });
      dispatch({
        type: REQUEST_LOGIN_ADMIN_SUCCESSFUL,
        payload: data,
      });
  
      console.log(`${BASE_URL}/auth/login`)

      toast.success('Successfully signed in', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  
      // Saving the auth token to session storage
      sessionStorage.setItem("adminInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: REQUEST_LOGIN_ADMIN_FAILED,
        // payload:
        //   error.response && error.response.data[0]
        //     ? error.response.data.message
        //     : error.message,
      });

      console.log(error)
  
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


