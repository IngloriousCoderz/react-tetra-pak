import { counter } from "./counter.object";

it("should increment by a certain amount", () => {
  counter.reset();
  counter.increment(3);

  expect(counter.value).toBe(3);
});

it("should decrement by a certain amount", () => {
  counter.reset();
  counter.decrement(2);

  expect(counter.value).toBe(-2);
});

it("should reset the value", () => {
  counter.reset();

  expect(counter.value).toBe(0);
});
