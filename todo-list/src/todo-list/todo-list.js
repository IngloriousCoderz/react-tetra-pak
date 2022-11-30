import { useEffect, useState } from "react";

import * as api from "./services/api";

import Form from "./form";
import List from "./list";

const DEFAULT_TASKS = [];

function TodoList({ name }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  useEffect(() => {
    api.retrieveTasks().then(setTasks);
  }, []);

  // useEffect(() => {}, []) // === componentDidMount
  // useEffect(() => {}, [tasks]) // === componentDidMount + componentDidUpdate
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log("A second has passed");
  //   }, 1000);
  //   return () => { // componentWillUnmount
  //     clearInterval(id);
  //   };
  // }, []);

  const handleSubmit = async (text) => {
    await api.createTask({ text });
    api.retrieveTasks().then(setTasks);
  };

  const handleToggleCompleted = async (id) => {
    const { completed } = tasks.find((task) => task.id === id);
    await api.updateTask(id, { completed: !completed });
    api.retrieveTasks().then(setTasks);
  };

  const handleRemove = async (id) => {
    await api.deleteTask(id);
    api.retrieveTasks().then(setTasks);
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <Form onSubmit={handleSubmit} />
      <List
        tasks={tasks}
        onToggleCompleted={handleToggleCompleted}
        onRemove={handleRemove}
      />
    </>
  );
}

export default TodoList;
