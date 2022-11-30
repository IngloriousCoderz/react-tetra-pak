import counter, { increment, decrement, reset } from "./counter.reducer";

it("should increment by a certain amount", () => {
  // given
  const stateBefore = 0;
  const action = increment(3); // { type: INCREMENT, payload: 3 };
  const stateAfter = 3;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);

  // expect(increment(0, 3)).toBe(3);
});

it("should decrement by a certain amount", () => {
  // given
  const stateBefore = 0;
  const action = decrement(2); // { type: DECREMENT, payload: 2 };
  const stateAfter = -2;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

it("should reset the value", () => {
  // given
  const stateBefore = 5;
  const action = reset(); // { type: RESET };
  const stateAfter = 0;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

it("should ignore any other action", () => {
  // given
  const stateBefore = 5;
  const action = { type: "make-coffee" };
  const stateAfter = 5;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

it("should initialize the value", () => {
  // given
  const stateBefore = undefined;
  const action = { type: "make-coffee" };
  const stateAfter = 0;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});
