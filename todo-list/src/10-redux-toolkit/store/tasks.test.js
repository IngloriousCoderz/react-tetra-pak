import tasks, { addTask, toggleCompleted, removeTask } from "./tasks";

it("should initialize as an empty array", () => {
  const stateBefore = undefined;
  const action = { type: "make-coffee" };
  const stateAfter = [];

  const state = tasks(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

it("should add a new task", () => {
  // given
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
  ];
  const action = addTask("Forget everything");
  const stateAfter = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];

  // when
  const state = tasks(stateBefore, action);

  // then
  expect(state).toEqual(stateAfter);
});

it("should toggle the 'completed' property on a task given its id", () => {
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = toggleCompleted(2);
  const stateAfter = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

it("should remove a task given its id", () => {
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = removeTask(2);
  const stateAfter = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

it("should ignore any other action", () => {
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = { type: "make-coffee" };

  const state = tasks(stateBefore, action);
  expect(state).toBe(stateBefore);
});
