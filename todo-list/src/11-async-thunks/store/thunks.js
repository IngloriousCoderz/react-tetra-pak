import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../services/api";

export const fetchTasks = createAsyncThunk("todoList/fetchTasks", async () => {
  const tasks = await api.retrieveTasks();
  return tasks;
});

export const addTask = createAsyncThunk(
  "todoList/addTask",
  async (text, { dispatch }) => {
    await api.createTask({ text });
    dispatch(fetchTasks());
  }
);

export const toggleCompleted = createAsyncThunk(
  "todoList/toggleCompleted",
  async (id, { dispatch, getState }) => {
    const { tasks } = getState();
    const { completed } = tasks.find((task) => task.id === id);
    await api.updateTask(id, { completed: !completed });
    dispatch(fetchTasks());
  }
);

export const removeTask = createAsyncThunk(
  "todoList/removeTask",
  async (id, { dispatch }) => {
    await api.deleteTask(id);
    dispatch(fetchTasks());
  }
);
