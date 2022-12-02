import * as api from "../services/api";
import { setTasks } from "./tasks";
import { setText } from "./text";

export const fetchTasks = () => async (dispatch) => {
  const tasks = await api.retrieveTasks();
  dispatch(setTasks(tasks));
};

export const addTask = (text) => async (dispatch) => {
  await api.createTask({ text });
  dispatch(fetchTasks());
  dispatch(setText(""));
};

export const toggleCompleted = (id) => async (dispatch, getState) => {
  const { tasks } = getState();
  const { completed } = tasks.find((task) => task.id === id);
  await api.updateTask(id, { completed: !completed });
  dispatch(fetchTasks());
};

export const removeTask = (id) => async (dispatch) => {
  await api.deleteTask(id);
  dispatch(fetchTasks());
};
