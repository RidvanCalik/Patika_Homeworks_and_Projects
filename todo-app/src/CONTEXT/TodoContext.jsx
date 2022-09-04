import { useState, createContext } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  //todo object example
  //   var EmptytodoObject = {
  //     todoValue: "",
  //     isComplited: false,
  //   };
  var todoState = useState([]);
  return (
    <TodoContext.Provider value={todoState}>{children}</TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
