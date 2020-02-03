import React, { useReducer, useState } from "react";
import { initialState, toDoReducer } from "../reducers/reducer";

const AddForm = () => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const [todoInput, setToDoInput] = useState({
    item: "",
    completed: false
  });

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: todoInput });
    setToDoInput({
      item: "",
      completed: false
    });
  };
  const handleClear = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    setToDoInput({ ...todoInput, item: event.target.value, id: Date.now() });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="todoInput"
          value={todoInput.item}
        />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleClear}>Clear</button>
      </form>

      {state.map(todo => (
        <div>{todo.item}</div>
      ))}
    </React.Fragment>
  );
};

export default AddForm;
