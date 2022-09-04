import React from "react";

function TodoComponent({ todoValue, isComplited }) {
  return (
    <li className={isComplited ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todoValue}</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
}

export default TodoComponent;
