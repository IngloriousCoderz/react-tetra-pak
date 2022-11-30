// action types
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const RESET = "reset";

// action creators
export const increment = (amount) => ({ type: INCREMENT, payload: amount });
export const decrement = (amount) => ({ type: DECREMENT, payload: amount });
export const reset = () => ({ type: RESET });

// reducer
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;

    case DECREMENT:
      return state - action.payload;

    case RESET:
      return 0;

    default:
      return state;
  }
}

// const actions = [
//   { type: "increment", payload: 3 },
//   { type: "decrement", payload: 2 },
//   { type: "reset" },
//   { type: "increment", payload: 7 },
// ];

// let state = undefined // initialize
// state = counter(state, actions[0]) // accumulation
// state = counter(state, actions[1])
// // return

// const state = actions.reduce(counter)
