import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { loginReducer, registerReducer } from "./reducer";
import { fetchAllPropertiesReducer, fetchMyPropertiesReducer, createPropertyReducer } from "./reducer/properties";
const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    myProperties: fetchMyPropertiesReducer,
    allProperties: fetchAllPropertiesReducer,
    createProperty: createPropertyReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;