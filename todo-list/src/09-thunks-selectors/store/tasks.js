import { createSelector } from "@reduxjs/toolkit";

// action types
export const SET_TASKS = "set-tasks";

// action creators
export const setTasks = (tasks) => ({ type: SET_TASKS, payload: tasks });

// reducer
export default function tasks(state = [], action) {
  switch (action.type) {
    case SET_TASKS:
      return action.payload;

    default:
      return state;
  }
}

// selectors
export const selectTasks = (state) => state.tasks;

export const selectTask = createSelector(
  selectTasks,
  (_, id) => id,
  (tasks, id) => tasks.find((task) => task.id === id)
);
