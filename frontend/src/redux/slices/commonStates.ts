import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface User {
  username?: string;
  email?: string;
  [key: string]: unknown;
}

interface CommonState {
  dialogState: boolean;
  userContent: User | null;
  filterAndSearchText: string;
  showContent: string;
  saveContent: string[]
}


const initialState: CommonState = {
    dialogState: false,
    userContent: null,
    filterAndSearchText: "",
    showContent: "rows",
    saveContent: []
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
        },
        setSaveContent(state, value: PayloadAction<string>) {
            state.saveContent.push(value.payload) 
        }
    }
})

export const {setDialogState, setUserContent, setFilterAndSearchText, setShowContent, setSaveContent} = commonSlice.actions;
export default commonSlice.reducer;