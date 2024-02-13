import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
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
  getUserOrder,
  updateOrder,
} from './reducer/order'
import { createCouponReducer, fetchCouponReducer } from './reducer/coupon'
import {
  createEmployeeReducer,
  fetchAdminEmployeeReducer,
  fetchAllEmployeeReducer,
  updateEmployeeStatusReducer,
  deleteEmployeeReducer,
} from './reducer/employee'
import {
  getNotificationReducer,
  updateNotificationReducer,
} from './reducer/notification'
import { getAdminInfoReducer, updateAdminInfoReducer } from './reducer/admin'
import { fetchPropertyTypeReducer } from './reducer/type'
const rootReducer = combineReducers({
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
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store
