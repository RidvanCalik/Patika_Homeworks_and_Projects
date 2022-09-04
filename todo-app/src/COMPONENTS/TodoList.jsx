import React from "react";
import TodoComponent from "./TodoComponent";
function TodoList({ todo, filteredByName }) {
  return (
    <ul className="todo-list">
      {filteredByName.toString() === "All"
        ? todo.map((element, index) => (
            <TodoComponent
              key={index}
              ID={index}
              isComplited={element.isComplited}
              todoValue={element.todoValue}
            ></TodoComponent>
          ))
        : filteredByName.toString() === "Completed"
        ? todo
            .filter((element) => element.isComplited == true)
            .map((element, index) => (
              <TodoComponent
                key={index}
                ID={index}
                isComplited={element.isComplited}
                todoValue={element.todoValue}
              ></TodoComponent>
            ))
        : filteredByName.toString() === "Active"
        ? todo
            .filter((element) => element.isComplited == false)
            .map((element, index) => (
              <TodoComponent
                key={index}
                ID={index}
                isComplited={element.isComplited}
                todoValue={element.todoValue}
              ></TodoComponent>
            ))
        : false}
    </ul>
  );
}

export default TodoList;
