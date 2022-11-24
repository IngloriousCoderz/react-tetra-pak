import classes from "./list.module.scss";

function List({ tasks, onToggleCompleted, onRemove }) {
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

export default List;
