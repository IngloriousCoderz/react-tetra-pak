import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTask = createAction("add-task");
export const toggleCompleted = createAction("toggle-completed");
export const removeTask = createAction("remove-task");

export default createReducer([], {
  [addTask](state, action) {
    const maxId = state.length ? state[state.length - 1].id : 0;
    const newTask = { id: maxId + 1, text: action.payload };
    state.push(newTask);

    // return [...state, newTask];
  },
  [toggleCompleted](state, action) {
    const task = state.find((task) => task.id === action.payload);
    task.completed = !task.completed;

    // return state.map((task) =>
    //   task.id === action.payload
    //     ? { ...task, completed: !task.completed }
    //     : task
    // );
  },
  [removeTask](state, action) {
    const index = state.findIndex((task) => task.id === action.payload);
    state.splice(index, 1);

    // return state.filter((task) => task.id !== action.payload);
  },
});
