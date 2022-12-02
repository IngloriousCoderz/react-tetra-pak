import { createSlice } from "@reduxjs/toolkit";

import { addTask } from "../store/thunks";

const slice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    setText(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [addTask.pending](state, action) {
      return "";
    },
  },
});

export default slice.reducer;
export const { setText } = slice.actions;
