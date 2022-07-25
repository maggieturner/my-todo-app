import React, { useState } from "react";
import Style from "./todo.module.scss";
import PropTypes from "prop-types";

// Component todo is the class operating on the todo "cards".
// Allowing you to delete, edit, save each todoData.title.

const Todo = ({ todoData, index, onDelete }) => {
  const [completed, setCompleted] = useState(todoData.completed);
  const [editable, setEditable] = useState(false);

  const handleChange = (event) => {
    setCompleted(event.target.checked);
  };

  return (
    <div className={Style.todo}>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={handleChange}
      />
      <button>
        <img
          src={require("/Users/maggieturner/Workspace/my-todo-app/src/components/todo/trash-bin.png")}
          alt="Trash"
          width="28"
          height="28"
          onClick={() => onDelete(index)}
        />
      </button>
      <button onClick={() => setEditable(!editable)}>
        {editable ? "save" : "edit"}
      </button>

      {/* // Ternary Operator designed to save edited todo data.
      {editable ? (
        <input defaultValue={todoData.title} />
      ) : (
        <p> {todoData.data}</p>
      )} */}

      <p> {todoData.title} </p>
      {}
    </div>
  );
};

export default Todo;

Todo.propTypes = {
  todoData: PropTypes.object,
};
