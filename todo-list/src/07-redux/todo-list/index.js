import { createStore } from "redux";
import { addTask, toggleCompleted } from "./tasks";
import { setText } from "./text";

import todoList from "./todo-list";

const store = createStore(todoList);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setText("Hello world!")); // { text: 'Hello world!', tasks: [] }
store.dispatch(addTask("New task")); // { text: '', tasks: [{ id: 1, text: 'New task' }]}
store.dispatch(toggleCompleted(1)); // { text: '', tasks: [{ id: 1, text: 'New task', completed: true }]}
