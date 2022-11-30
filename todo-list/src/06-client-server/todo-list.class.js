import { Component } from "react";

import classes from "./todo-list.module.scss";

const DEFAULT_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

class TodoList extends Component {
  state = {
    text: "",
    tasks: DEFAULT_TASKS,
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState(({ text, tasks }) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      const newTask = { id: maxId + 1, text };
      return {
        text: "",
        tasks: [...tasks, newTask],
      };
    });
  };

  handleToggleCompleted = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  handleRemove = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== id),
    }));
  };

  componentDidMount() {
    console.log("mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("updating", this.props, nextProps, this.state, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated", prevProps, this.props, prevState, this.state);
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  render() {
    const { name } = this.props;
    const { text, tasks } = this.state;

    return (
      <>
        <h1>{name}'s Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="What next?"
            autoFocus
            value={text}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
        <ul>
          {tasks.map(({ id, text, completed }) => (
            <li key={id}>
              <span
                className={completed ? classes.completed : null}
                onClick={() => this.handleToggleCompleted(id)}
              >
                {text}
              </span>
              &nbsp;
              <button onClick={() => this.handleRemove(id)}>x</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
