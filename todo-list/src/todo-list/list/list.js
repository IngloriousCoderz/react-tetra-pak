import PropTypes from "prop-types";

import classes from "./list.module.scss";

/**
 * List of tasks in my todo list.
 */
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

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  onToggleCompleted: PropTypes.func,
  onRemove: PropTypes.func,
};

List.defaultProps = {
  tasks: [],
};

export default List;
