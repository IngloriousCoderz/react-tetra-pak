// React HOOKS
import { useState } from "react";

import classes from "./todo-list.module.scss";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function TodoList({ name }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  const handleSubmit = (event) => {
    event.preventDefault();

    // clone
    // const clone = [...tasks];
    // clone.push(newTask);
    // setTasks(clone);

    // concatenation
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      const newTask = { id: maxId + 1, text: "New task" };
      return [...tasks, newTask];
    }); // changes are async!
  };

  const handleToggleCompleted = (id) => {
    // clone
    // const clone = [...tasks]; // shallow clone
    // const index = clone.findIndex((task) => task.id === id);
    // const clonedTask = { ...clone[index] };
    // clonedTask.completed = !clonedTask.completed;
    // clone[index] = clonedTask;
    // setTasks(clone);

    // sandwich
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   return [
    //     ...tasks.slice(0, index),
    //     { ...tasks[index], completed: !tasks[index].completed },
    //     ...tasks.slice(index + 1),
    //   ];
    // });

    // map
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemove = (id) => {
    // clone
    // const clone = [...tasks];
    // const index = clone.findIndex((task) => task.id === id);
    // clone.splice(index, 1);
    // setTasks(clone);

    // sandwich
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   return [
    //     //
    //     ...tasks.slice(0, index),
    //     ...tasks.slice(index + 1),
    //   ];
    // });

    // filter
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="What next?" autoFocus />
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
