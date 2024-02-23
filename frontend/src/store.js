// @ts-nocheck
import { legacy_createStore as createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import {
  loginReducer,
  registerReducer,
  registerAdminReducer,
  loginAdminReducer,
  activateUser,
} from './reducer'
import {
  fetchAllPropertiesReducer,
  fetchMyPropertiesReducer,
  createPropertyReducer,
  getPropertyDetailsById,
  getPropertyByType,
} from './reducer/properties'
import {
  createOrder,
  getAdminOrder,
  getUserActiveOrder,
  getUserOrder,
  updateOrder,
} from './reducer/order'
import {
  createCouponReducer,
  fetchCouponReducer,
  verifyCouponReducer,
} from './reducer/coupon'
import {
  createEmployeeReducer,
  fetchAdminEmployeeReducer,
  fetchAllEmployeeReducer,
  updateEmployeeStatusReducer,
  deleteEmployeeReducer,
  fetchAdminAgentReducer,
} from './reducer/employee'
import {
  getNotificationReducer,
  updateNotificationReducer,
} from './reducer/notification'
import { getAdminInfoReducer, updateAdminInfoReducer } from './reducer/admin'
import { fetchPropertyTypeReducer } from './reducer/type'
import { requestTourReducer, contactAgentReducer } from './reducer/message'
import { updateUserProfileReducer, updateUserPasswordReducer, getUserInfoReducer } from './reducer/user'

const initialState = {
  userSignin: {
    userInfo: sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : null,
  },
  // userInfo: (() => {
  //   try {
  //     return sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")) : null;
  //   } catch (error) {
  //     console.error("Error parsing userInfo from sessionStorage:", error);
  //     return null;
  //   }
  // })(),
  adminSignin: {
    adminInfo: sessionStorage.getItem("adminInfo")
      ? JSON.parse(sessionStorage.getItem("adminInfo"))
      : null,
  },
};

const reducer = combineReducers({

  login: loginReducer,
  register: registerReducer,
  adminLogin: loginAdminReducer,
  adminRegister: registerAdminReducer,
  myProperties: fetchMyPropertiesReducer,
  allProperties: fetchAllPropertiesReducer,
  createProperty: createPropertyReducer,
  propertyDetail: getPropertyDetailsById,
  createOrder: createOrder,
  getAdminOrders: getAdminOrder,
  getUserOrder: getUserOrder,
  updateOrderStatus: updateOrder,
  propertyType: getPropertyByType,
  activateUser: activateUser,
  createCoupon: createCouponReducer,
  fetchCoupon: fetchCouponReducer,
  fetchAdminEmployee: fetchAdminEmployeeReducer,
  fetchAllEmployees: fetchAllEmployeeReducer,
  deleteEmployee: deleteEmployeeReducer,
  updateEmployee: updateEmployeeStatusReducer,
  createEmployee: createEmployeeReducer,
  getNotifications: getNotificationReducer,
  updateNotification: updateNotificationReducer,
  getAdminInfo: getAdminInfoReducer,
  updateAdminInfo: updateAdminInfoReducer,
  propertyTypes: fetchPropertyTypeReducer,
  verifyCoupon: verifyCouponReducer,
  activeUserOrder: getUserActiveOrder,
  agent: fetchAdminAgentReducer,
  requestTour: requestTourReducer,
  contactAgent: contactAgentReducer,
  updateUserProfile: updateUserProfileReducer,
  updateUserPassword: updateUserPasswordReducer,
  userInfo: getUserInfoReducer
})

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store











// import {
//   legacy_createStore as createStore,
//   compose,
//   applyMiddleware,
//   combineReducers,
// } from "redux";
// import thunk from "redux-thunk";
// // Import your reducers from the appropriate paths
// import {
//   loginReducer,
//   registerReducer,
//   registerAdminReducer,
//   loginAdminReducer,
//   activateUser,
// } from './reducer';

// import {
//   fetchAllPropertiesReducer,
//   fetchMyPropertiesReducer,
//   createPropertyReducer,
//   getPropertyDetailsById,
//   getPropertyByType,
// } from './reducer/properties';

// import {
//   createOrder,
//   getAdminOrder,
//   getUserActiveOrder,
//   getUserOrder,
//   updateOrder,
// } from './reducer/order';

// import {
//   createCouponReducer,
//   fetchCouponReducer,
//   verifyCouponReducer,
// } from './reducer/coupon';

// import {
//   createEmployeeReducer,
//   fetchAdminEmployeeReducer,
//   fetchAllEmployeeReducer,
//   updateEmployeeStatusReducer,
//   deleteEmployeeReducer,
//   fetchAdminAgentReducer,
// } from './reducer/employee';

// import {
//   getNotificationReducer,
//   updateNotificationReducer,
// } from './reducer/notification';

// import { getAdminInfoReducer, updateAdminInfoReducer } from './reducer/admin';
// import { fetchPropertyTypeReducer } from './reducer/type';
// import { requestTourReducer, contactAgentReducer } from './reducer/message';
// import {
//   updateUserProfileReducer,
//   updateUserPasswordReducer,
// } from './reducer/user';

// // Define your initial state
// const initialState = {
//   cart: {
//     cartItems: localStorage.getItem('tempCartItems')
//       ? JSON.parse(localStorage.getItem('tempCartItems'))
//       : [],
//   },
//   userSignin: {
//     userInfo: localStorage.getItem('userInfo')
//       ? JSON.parse(localStorage.getItem('userInfo'))
//       : null,
//   },
//   activeStore: sessionStorage?.getItem('activeStore')
//     ? sessionStorage.getItem('activeStore')
//     : {},
// };

// // Combine your reducers
// const reducer = combineReducers({
//   login: loginReducer,
//   register: registerReducer,
//   adminLogin: loginAdminReducer,
//   adminRegister: registerAdminReducer,
//   myProperties: fetchMyPropertiesReducer,
//   allProperties: fetchAllPropertiesReducer,
//   createProperty: createPropertyReducer,
//   propertyDetail: getPropertyDetailsById,
//   createOrder: createOrder,
//   getAdminOrders: getAdminOrder,
//   getUserOrder: getUserOrder,
//   updateOrderStatus: updateOrder,
//   propertyType: getPropertyByType,
//   activateUser: activateUser,
//   createCoupon: createCouponReducer,
//   fetchCoupon: fetchCouponReducer,
//   fetchAdminEmployee: fetchAdminEmployeeReducer,
//   fetchAllEmployees: fetchAllEmployeeReducer,
//   deleteEmployee: deleteEmployeeReducer,
//   updateEmployee: updateEmployeeStatusReducer,
//   createEmployee: createEmployeeReducer,
//   getNotifications: getNotificationReducer,
//   updateNotification: updateNotificationReducer,
//   getAdminInfo: getAdminInfoReducer,
//   updateAdminInfo: updateAdminInfoReducer,
//   propertyTypes: fetchPropertyTypeReducer,
//   verifyCoupon: verifyCouponReducer,
//   activeUserOrder: getUserActiveOrder,
//   agent: fetchAdminAgentReducer,
//   requestTour: requestTourReducer,
//   contactAgent: contactAgentReducer,
//   updateUserProfile: updateUserProfileReducer,
//   updateUserPassword: updateUserPasswordReducer,
// });

// // Use Redux DevTools extension if available
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // Create the Redux store
// const store = createStore(
//   reducer,
//   initialState,
//   composeEnhancer(applyMiddleware(thunk))
// );

// export default store;
