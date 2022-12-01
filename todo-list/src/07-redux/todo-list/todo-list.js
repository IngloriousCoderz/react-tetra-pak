import text, { SET_TEXT } from "./text";
import tasks, { REMOVE_TASK, TOGGLE_COMPLETED } from "./tasks";

export default function todoList(state, action) {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: text(state.text, action),
      };

    case TOGGLE_COMPLETED:
    case REMOVE_TASK:
      return {
        ...state,
        tasks: tasks(state.tasks, action),
      };
  }
}
