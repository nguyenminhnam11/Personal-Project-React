import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const storageTodo = JSON.parse(localStorage.getItem("TodoList"));

  const [todoValue, setTodoValue] = useState("");
  const [listTodo, setListTodo] = useState(storageTodo || []);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAddTodo = () => {
    if (todoValue) {
      const newTodo = [todoValue, ...listTodo];
      setListTodo(newTodo);
      setTodoValue("");
      localStorage.setItem("TodoList", JSON.stringify(newTodo));
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
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

  const handleEditTodo = (todoEdit) => {
    setIsEditing(true);
    setCurrentTodo(todoEdit);
    setEditValue(listTodo[todoEdit]);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo(null);
  };

  const handleSaveEdit = () => {
    if (editValue) {
      const updatedTodos = listTodo.map((todo, index) =>
        index === currentTodo ? editValue : todo
      );
      setListTodo(updatedTodos);
      localStorage.setItem("TodoList", JSON.stringify(updatedTodos));
      setIsEditing(false);
      setCurrentTodo(null);
      setEditValue("");
    } else {
      alert("This field may not be empty");
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
                {isEditing && currentTodo === index ? (
                  <div className="todo-item">
                    <input
                      type="text"
                      className="edit-field"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <div className="btn-actions">
                      <button className="cancel-btn" onClick={handleCancelEdit}>
                        X
                      </button>
                      <button className="save-btn" onClick={handleSaveEdit}>
                        &#10004;
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="todo-item">
                    {todo}
                    <div className="btn-actions">
                      <button
                        className="edit-btn"
                        onClick={() => handleEditTodo(index)}
                      >
                        &#9998;
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteTodo(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
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
