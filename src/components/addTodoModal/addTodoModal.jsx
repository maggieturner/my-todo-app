import React, { useState } from "react";
import ReactModal from "react-modal";
import Style from "./addTodoModal.module.scss";

// Component for add new todo modal.

const AddTodoModal = ({ isOpen, onSave, onClose }) => {
  const [newData, setnewData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleChange = (event) => {
    setnewData(event.target.value);
    setLoaded(false);
  };

  return (
    <div className={Style.addTodoModal}>
      <ReactModal isOpen={isOpen}>
        <button name="save" onClick={onClose}>
          {" "}
          X{" "}
        </button>
        Create New To Do:
        {loaded ? <h1> {newData} </h1> : null}
        <input onChange={handleChange} />
        <button onClick={() => setLoaded(true) && onSave(newData)}>Save</button>
      </ReactModal>
    </div>
  );
};

export default AddTodoModal;
