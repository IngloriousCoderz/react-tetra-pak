import { Counter } from "./counter.class";

it("should increment by a certain amount", () => {
  const counter = new Counter();
  counter.increment(3);

  expect(counter.value).toBe(3);
});

it("should decrement by a certain amount", () => {
  const counter = new Counter();
  counter.decrement(2);

  expect(counter.value).toBe(-2);
});

it("reset the value", () => {
  const counter = new Counter();
  counter.reset();

  expect(counter.value).toBe(0);
});
