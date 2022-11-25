import { useState } from "react";

// import Form from "./form/index.with-logic";
import Form from "./form";
import List from "./list";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function TodoList({ name }) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

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

  const handleSubmit = (text) => {
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      const newTask = { id: maxId + 1, text };
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
