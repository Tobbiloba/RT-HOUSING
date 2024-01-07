import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { loginReducer, registerReducer, registerAdminReducer, loginAdminReducer } from "./reducer";
import { fetchAllPropertiesReducer, fetchMyPropertiesReducer, createPropertyReducer, getPropertyDetailsById } from "./reducer/properties";
const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    adminLogin: loginAdminReducer,
    adminRegister: registerAdminReducer,
    myProperties: fetchMyPropertiesReducer,
    allProperties: fetchAllPropertiesReducer,
    createProperty: createPropertyReducer,
    propertyDetail: getPropertyDetailsById
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;