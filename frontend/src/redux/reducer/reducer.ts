import { combineReducers } from "@reduxjs/toolkit";
import commonReducer from "../slices/commonStates";

const rootReducer = combineReducers({
    commonState: commonReducer
})

export default rootReducer;