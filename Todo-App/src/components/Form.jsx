import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const storageTodo = JSON.parse(localStorage.getItem("TodoList"));

  const [todoValue, setTodoValue] = useState("");
  const [listTodo, setListTodo] = useState(storageTodo || []);
  const [ errorMessage, setErrorMessage] = useState(false)

  const handleAddTodo = () => {
    if (todoValue) {
      const newTodo = [todoValue, ...listTodo];
      setListTodo(newTodo);
      setTodoValue("");
      localStorage.setItem("TodoList", JSON.stringify(newTodo));
      setErrorMessage(false)
    } else {
      setErrorMessage(true)
    }
  };

  const handleDeleteTodo = (todoDelete) => {
    const confirmDelete = window.confirm("Are you sure delete this todo!");
    if (confirmDelete) {
      const deletedTodo = [...listTodo];
      deletedTodo.splice(todoDelete, 1);
      setListTodo(deletedTodo);
      localStorage.setItem("TodoList", JSON.stringify(deletedTodo));
    }
  };

  return (
    <div className="form">
      <div id="title">Todo list</div>
      <div className="add">
        <input
          type="text"
          placeholder="Add your task"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        {errorMessage && <p className="error-message">Todo input required</p>}
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="list">
        {listTodo.length > 0 ? (
          <ul>
            {listTodo.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => handleDeleteTodo(index)}>X</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="message">No tasks yet</p>
        )}
      </div>
    </div>
  );
}

export default Form;
