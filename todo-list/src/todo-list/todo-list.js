// React HOOKS
import { useRef } from "react";

import classes from "./todo-list.module.scss";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function TodoList({ name }) {
  const tasks = useRef(DEFAULT_TASKS);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: 4, text: "New task" };
    tasks.current.push(newTask);
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="What next?" autoFocus />
        <button>Add</button>
      </form>
      <ul>
        {tasks.current.map(({ id, text, completed }) => (
          <li key={id}>
            <span className={completed ? classes.completed : null}>{text}</span>
            &nbsp;
            <button>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
