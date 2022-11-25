import { useForm } from "./use-form";

// presentational component / container component

function Form({ onSubmit }) {
  const { text, handleChange, handleSubmit } = useForm(onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What next?"
        autoFocus
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
