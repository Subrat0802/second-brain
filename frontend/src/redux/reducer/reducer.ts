import { combineReducers } from "@reduxjs/toolkit";
import commonReducer from "../slices/commonStates";
import authReducer from "../slices/authSlice";

const rootReducer = combineReducers({
    commonState: commonReducer,
    authState: authReducer
})

export default rootReducer;