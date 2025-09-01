import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
  saveContent: string[];
  createCollectionState: boolean;
  collections: string[];
}

const initialState: CommonState = {
  dialogState: false,
  userContent: null,
  filterAndSearchText: "",
  showContent: "rows",
  saveContent: [],
  createCollectionState: false,
  collections: [],
};

const commonSlice = createSlice({
  name: "commonState",
  initialState: initialState,
  reducers: {
    setDialogState(state, value) {
      state.dialogState = value.payload;
    },
    setUserContent(state, value) {
      state.userContent = value.payload;
    },
    setFilterAndSearchText(state, value) {
      state.filterAndSearchText = value.payload;
    },
    setShowContent(state, value) {
      state.showContent = value.payload;
    },
    setSaveContent(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.saveContent.includes(id)) {
        // remove
        state.saveContent = state.saveContent.filter((item) => item !== id);
      } else {
        // add
        state.saveContent.push(id);
      }
    },

    setCreateCollectionState(state, action) {
      state.createCollectionState = action.payload;
    },
    setCollections(state, action) {
      state.collections.push(action.payload);
    },
    clearCollections(state) {
      state.collections = [];
    },
  },
});

export const {
  setDialogState,
  setUserContent,
  setFilterAndSearchText,
  setShowContent,
  setSaveContent,
  setCreateCollectionState,
  setCollections,
  clearCollections,
} = commonSlice.actions;
export default commonSlice.reducer;
