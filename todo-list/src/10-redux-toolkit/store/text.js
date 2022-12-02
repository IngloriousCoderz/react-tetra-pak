import { createAction, createReducer } from "@reduxjs/toolkit";

import { addTask } from "./tasks";

export const setText = createAction("set-text");

export default createReducer("", {
  [setText](state, action) {
    return action.payload;
  },
  [addTask](state, action) {
    return "";
  },
});
