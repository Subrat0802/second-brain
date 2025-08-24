import { createSlice } from "@reduxjs/toolkit"


interface User {
  username?: string;
  email?: string;
  [key: string]: unknown;
}

interface CommonState {
  dialogState: boolean;
  userContent: User | null;
}


const initialState: CommonState = {
    dialogState: false,
    userContent: null
}

const commonSlice = createSlice({
    name:"commonState",
    initialState:initialState,
    reducers: {
        setDialogState(state, value){
            state.dialogState = value.payload
        },
        setUserContent(state, value){
            state.userContent = value.payload
        }
    }
})

export const {setDialogState, setUserContent} = commonSlice.actions;
export default commonSlice.reducer;