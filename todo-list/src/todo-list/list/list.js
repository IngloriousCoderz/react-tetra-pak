import { memo } from "react";

import classes from "./list.module.scss";

// memoization

function List({ tasks, onToggleCompleted, onRemove }) {
  console.log("render");

  return (
    <ul>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <span
            className={completed ? classes.completed : null}
            onClick={() => onToggleCompleted(id)}
          >
            {text}
          </span>
          &nbsp;
          <button onClick={() => onRemove(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

export default memo(List);
