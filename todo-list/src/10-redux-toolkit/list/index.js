import { useDispatch, useSelector } from "react-redux";

import { removeTask, toggleCompleted } from "./tasks.slice";
import ListComponent from "./list";

function List() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

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
