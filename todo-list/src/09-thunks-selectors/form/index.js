import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../store/thunks";
import { setText, selectText } from "../store/text";

import FormComponent from "./form";

function Form({ onSubmit }) {
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setText(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(text));
  };

  return (
    <FormComponent
      text={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Form;
