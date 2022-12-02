export const SET_TEXT = "set-text";

export const setText = (text) => ({
  type: SET_TEXT,
  payload: text,
});

export default function text(state = "", action) {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;

    default:
      return state;
  }
}

// selectors
export const selectText = (state) => state.text;
