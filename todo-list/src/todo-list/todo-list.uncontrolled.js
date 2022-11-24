import { useRef, useState } from "react";

import classes from "./todo-list.module.scss";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function TodoList({ name }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const input = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      const newTask = { id: maxId + 1, text: input.current.value };
      input.current.value = "";
      return [...tasks, newTask];
    });
  };

  const handleToggleCompleted = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemove = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="What next?" autoFocus ref={input} />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id}>
            <span
              className={completed ? classes.completed : null}
              onClick={() => handleToggleCompleted(id)}
            >
              {text}
            </span>
            &nbsp;
            <button onClick={() => handleRemove(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
