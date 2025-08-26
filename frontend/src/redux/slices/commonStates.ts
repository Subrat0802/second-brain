import { createSlice } from "@reduxjs/toolkit"


interface User {
  username?: string;
  email?: string;
  [key: string]: unknown;
}

interface CommonState {
  dialogState: boolean;
  userContent: User | null;
  filterAndSearchText: string;
  showContent: string
}


const initialState: CommonState = {
    dialogState: false,
    userContent: null,
    filterAndSearchText: "",
    showContent: "rows"
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
        },
        setFilterAndSearchText(state, value){
            state.filterAndSearchText = value.payload
        },
        setShowContent(state, value) {
            state.showContent = value.payload
        }
    }
})

export const {setDialogState, setUserContent, setFilterAndSearchText, setShowContent} = commonSlice.actions;
export default commonSlice.reducer;