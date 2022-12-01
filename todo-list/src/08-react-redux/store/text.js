import { ADD_TASK } from "./tasks";

export const SET_TEXT = "set-text";

export const setText = (text) => ({
  type: SET_TEXT,
  payload: text,
});

export default function text(state = "", action) {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;

    case ADD_TASK:
      return "";

    default:
      return state;
  }
}
