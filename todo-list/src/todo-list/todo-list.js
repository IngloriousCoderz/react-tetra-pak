import { useState, useCallback } from "react";

import Form from "./form";
import List from "./list";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function TodoList({ name }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      const newTask = { id: maxId + 1, text };
      return [...tasks, newTask];
    });
    setText("");
  };

  const handleToggleCompleted = useCallback((id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const handleRemove = useCallback((id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }, []);

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <Form text={text} onChange={handleChange} onSubmit={handleSubmit} />
      <List
        tasks={tasks}
        onToggleCompleted={handleToggleCompleted}
        onRemove={handleRemove}
      />
    </>
  );
}

export default TodoList;
