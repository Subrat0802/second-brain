import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dialogState: false
}

const commonSlice = createSlice({
    name:"commonState",
    initialState:initialState,
    reducers: {
        setDialogState(state, value){
            state.dialogState = value.payload
        }
    }
})

export const {setDialogState} = commonSlice.actions;
export default commonSlice.reducer;