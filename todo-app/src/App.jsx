import { useContext, useState } from "react";
import { TodoContext } from "./CONTEXT/TodoContext";
import TodoList from "./COMPONENTS/TodoList";
import FooterComponent from "./COMPONENTS/FooterComponent";
import "./App.css";

function App() {
  var [todo, setTodo] = useContext(TodoContext);
  var [filteredByName, setFilteredByName] = useState("All");

  //if todo saved saved on todoContext
  function saveTodo(e) {
    if (e.key === "Enter") {
      setTodo([
        ...todo,
        {
          todoValue: e.target.value,
          isComplited: false,
        },
      ]);

      e.target.value = null;
    }
  }
  //this function clear completed todos
  function clearcompleted() {
    var clearedTodoList = todo.filter((element, index) => {
      return element.isComplited == false;
    });
    setTodo([...clearedTodoList]);
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyDown={saveTodo}
            autoFocus
          />
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList todo={todo} filteredByName={filteredByName} />
        </section>

        <FooterComponent
          todo={todo}
          filteredByName={filteredByName}
          emitFilteredByName={(e) => {
            setFilteredByName(e);
          }}
          emitClearCompleted={() => {
            clearcompleted();
          }}
        />
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
