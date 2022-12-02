import { Provider } from "react-redux";

import { store } from "./store";

import Form from "./form";
import List from "./list";

function TodoList({ name }) {
  return (
    <Provider store={store}>
      <h1>{name}'s Todo List</h1>
      <Form />
      <List />
    </Provider>
  );
}

export default TodoList;
