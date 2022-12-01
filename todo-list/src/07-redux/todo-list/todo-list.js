import { combineReducers } from "redux";

import text from "./text";
import tasks from "./tasks";

export default combineReducers({ text, tasks });

// export default function todoList(state, action) {
//   return {
//     text: text(state.text, action),
//     tasks: tasks(state.tasks, action),
//   };
// }

// export default function todoList(state, action) {
//   switch (action.type) {
//     case SET_TEXT:
//       return {
//         ...state,
//         text: text(state.text, action),
//       };

//     case ADD_TASK:
//       return {
//         text: text(state.text, setText("")),
//         tasks: tasks(state.tasks, action),
//       };

//     case TOGGLE_COMPLETED:
//     case REMOVE_TASK:
//       return {
//         ...state,
//         tasks: tasks(state.tasks, action),
//       };
//   }
// }
