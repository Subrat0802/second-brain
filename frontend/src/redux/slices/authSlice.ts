import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie";

const token = Cookies.get("token");
// console.log("COOKIES", token);

const initialStae = {
    token: token || ""
}

const authSlcie = createSlice ({
    name:"authState",
    initialState: initialStae,
    reducers:{
        setToken(state, value){
            state.token = value.payload
        }
    }
})

export const { setToken } = authSlcie.actions;
export default authSlcie.reducer;
