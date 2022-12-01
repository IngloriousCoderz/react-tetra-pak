import todoList from "./todo-list";
import { setText } from "./text";
import { removeTask, toggleCompleted } from "./tasks";

it("should set a new text", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = setText("Some other text");
  const stateAfter = {
    text: "Some other text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);
  expect(state).toEqual(stateAfter);
  expect(state.tasks).toBe(stateBefore.tasks);
});

it("should toggle the 'completed' property on a task given its id", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = toggleCompleted(2);
  const stateAfter = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

it("should remove a task given its id", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = removeTask(2);
  const stateAfter = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);
  expect(state).toEqual(stateAfter);
});
