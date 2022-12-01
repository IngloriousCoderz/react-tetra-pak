// action types
export const ADD_TASK = "add-task";
export const TOGGLE_COMPLETED = "toggle-completed";
export const REMOVE_TASK = "remove-task";

// action creators
export const addTask = (text) => ({ type: ADD_TASK, payload: text });
export const toggleCompleted = (id) => ({
  type: TOGGLE_COMPLETED,
  payload: id,
});
export const removeTask = (id) => ({ type: REMOVE_TASK, payload: id });

// reducer
export default function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      const maxId = state.length ? state[state.length - 1].id : 0;
      const newTask = { id: maxId + 1, text: action.payload };
      return [...state, newTask];

    case TOGGLE_COMPLETED:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}
