import {createStore, combineReducers, applyMiddleware} from "redux";
import bankReducer from './reducers/bankReducer'
import userReducer from './reducers/userReducer'
export default createStore (
    combineReducers({bank: bankReducer, user: userReducer}),
    {},
    applyMiddleware()
)
