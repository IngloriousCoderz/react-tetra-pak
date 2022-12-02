import text, { setText } from "./text";

it("should initialize as an empty string", () => {
  const stateBefore = undefined;
  const action = { type: "make-coffee" };
  const stateAfter = "";

  const state = text(stateBefore, action);
  expect(state).toBe(stateAfter);
});

it("should set a new text", () => {
  const stateBefore = "Some text";
  const action = setText("Some other text");
  const stateAfter = "Some other text";

  const state = text(stateBefore, action);
  expect(state).toBe(stateAfter);
});

it("should ignore any other action", () => {
  const stateBefore = "Some text";
  const action = { type: "make-coffee" };

  const state = text(stateBefore, action);
  expect(state).toBe(stateBefore);
});
