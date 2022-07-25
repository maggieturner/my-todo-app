import React, { useState } from "react";
import Style from "./header.module.scss";
import AddTodoModal from "../addTodoModal/addTodoModal";

// Component Header. When working on routing and alternate pages, this would ensure
// a header for every new page.

const Header = ({ showSearch = true }) => {
  const [addTodoModalOpen, setAddTodoModalOpen] = useState(false);

  return (
    <>
      <div className={Style.header}>
        <h1 className={Style.headerTitle}> ToDo List: </h1>
        {showSearch && (
          <div className={Style.headerItems}>
            <button onClick={() => setAddTodoModalOpen(true)}> + </button>
            <input placeholder={"Search for To Do"} />
          </div>
        )}
      </div>
      <AddTodoModal
        isOpen={addTodoModalOpen}
        onClose={() => setAddTodoModalOpen(false)}
      />
    </>
  );
};

export default Header;
