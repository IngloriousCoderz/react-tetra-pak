import { createCounter } from "./counter.factory";

it("should increment by a certain amount", () => {
  const counter = createCounter();
  counter.increment(3);

  expect(counter.value).toBe(3);
});

it("should decrement by a certain amount", () => {
  const counter = createCounter();
  counter.decrement(2);

  expect(counter.value).toBe(-2);
});

it("should reset the value", () => {
  const counter = createCounter();
  counter.reset();

  expect(counter.value).toBe(0);
});
