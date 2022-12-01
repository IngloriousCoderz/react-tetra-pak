import text, { SET_TEXT } from "./text";
import tasks, { REMOVE_TASK } from "./tasks";

export default function todoList(state, action) {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: text(state.text, action),
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: tasks(state.tasks, action),
      };
  }
}
