import React, { useEffect, useState } from "react";
import Style from "./todoList.module.scss";
import Todo from "../todo/todo";

const TodoList = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (callbackIndex) => {
    setData(data.filter((todo, index) => index !== callbackIndex));
  };

  // AddTodoModal onSave function.
  // const handleSave = (event) => {
  //   setData(data.splice(1, 0, data));
  //   //setData(data.todoData)
  //   //setSaved(event.target.value);
  //   console.log();
  // };

  return (
    <div className={Style.todoList}>
      {data.length === 0 ? (
        <h1> Please wait some time ... </h1>
      ) : (
        data.map((item, index) => (
          <Todo
            key={index}
            index={index}
            todoData={item}
            setEditable={item}
            onDelete={handleDelete}
          />
        ))
      )}

      {/* //Deigned to implement AddTodoModal onSave.
      {AddTodoModal.onSave ? (
        <h1> Please wait some time ... </h1>
      ) : (
        data.map(
          (item, index) =>
            (
              <Todo
                key={index}
                index={index}
                todoData={item}
                setEditable={item}
                onDelete={handleDelete}
              />
            ) && <AddTodoModal onSave={handleSave} />
        )
      )} */}
    </div>
  );
};

export default TodoList;
