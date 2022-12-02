import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks, removeTask, toggleCompleted } from "../store/thunks";
import ListComponent from "./list";

function List() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <ListComponent
      tasks={tasks}
      onToggleCompleted={handleToggleCompleted}
      onRemove={handleRemove}
    />
  );
}

export default List;
