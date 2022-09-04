import React from "react";
import { useContext } from "react";
import { TodoContext } from "../CONTEXT/TodoContext";

function TodoComponent({ ID, todoValue, isComplited }) {
  var [todo, setTodo] = useContext(TodoContext);

  function todoCheck() {
    var todoList = todo;
    todoList[ID].isComplited = !todoList[ID].isComplited;
    setTodo([...todoList]);
  }

  return (
    <li className={isComplited ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isComplited}
          onChange={todoCheck}
        />
        <label>{todoValue}</label>
        <button
          className="destroy"
          onClick={() => {
            todo.splice(ID, 1);
            setTodo([...todo]);
          }}
        ></button>
      </div>
    </li>
  );
}

export default TodoComponent;
