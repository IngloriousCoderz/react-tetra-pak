// import { Fragment } from "react";
import classes from "./todo-list.module.scss";

function TodoList({ name }) {
  // inline style
  // const style = {
  //   textDecoration: "line-through",
  //   opacity: 0.5,
  // };

  // return React.createElement("h1", { children: "Hello world!" });
  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form>
        <input placeholder="What next?" autoFocus />
        <button>Add</button>
      </form>
      <ul>
        <li>
          <span className={classes.completed}>Learn React</span>
          {/* style={style} */}
          &nbsp;
          <button>x</button>
        </li>
        <li>
          <span>Look for a job</span>
          &nbsp;
          <button>x</button>
        </li>
        <li>
          <span>Forget everything</span>
          &nbsp;
          <button>x</button>
        </li>
      </ul>
    </>
  );
}

export default TodoList;
