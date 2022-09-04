import { useState, createContext } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  //todo object example
  //   var EmptytodoObject = {
  //     todoValue: "",
  //     isComplited: false,
  //   };
  var [todo, setTodo] = useState([]);
  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
