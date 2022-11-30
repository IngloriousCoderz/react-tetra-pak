import counter, {
  increment,
  decrement,
  reset,
} from "./complex-counter.reducer";

it("should increment by a certain amount", () => {
  // given
  const stateBefore = { value: 0 };
  const action = increment(3); // { type: INCREMENT, payload: 3 };
  const stateAfter = { value: 3 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toEqual(stateAfter);

  // expect(increment(0, 3)).toBe(3);
});

it("should decrement by a certain amount", () => {
  // given
  const stateBefore = { value: 0 };
  const action = decrement(2); // { type: DECREMENT, payload: 2 };
  const stateAfter = { value: -2 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toEqual(stateAfter);
});

it("should reset the value", () => {
  // given
  const stateBefore = { value: 5 };
  const action = reset(); // { type: RESET };
  const stateAfter = { value: 0 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toEqual(stateAfter);
});

it("should ignore any other action", () => {
  // given
  const stateBefore = { value: 5 };
  const action = { type: "make-coffee" };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateBefore);
});

it("should initialize the value", () => {
  // given
  const stateBefore = undefined;
  const action = { type: "make-coffee" };
  const stateAfter = { value: 0 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toEqual(stateAfter);
});
