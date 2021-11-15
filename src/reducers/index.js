import loggInReducer from "../reducers/authReducer"
import restaurantsReducer from "./restaurantsReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    loggInReducer: loggInReducer,
    restaurantsReducer: restaurantsReducer

})
export default allReducers;