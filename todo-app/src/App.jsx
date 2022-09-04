import { useContext, useState } from "react";
import { TodoContext } from "./CONTEXT/TodoContext";
import TodoComponent from "./COMPONENTS/TodoComponent";
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

  //if(select=="All"){
  // 	todo.forEach((element,index) => {
  // 		showedTodoList.push(<TodoComponent key={index} ID={index} isComplited={element.isComplited} todoValue={element.todoValue}></TodoComponent>)
  // 	});
  // }else if(select=="Active"){
  // 	todo.forEach((element,index) => {
  // 		if(element.isComplited){
  // 			showedTodoList.push(<TodoComponent key={index} ID={index} isComplited={element.isComplited} todoValue={element.todoValue}></TodoComponent>)
  // 		}
  // 	});
  // }else if(select=="Completed"){
  // 	todo.forEach((element,index) => {
  // 		if(!element.isComplited){
  // 			showedTodoList.push(<TodoComponent key={index} ID={index} isComplited={element.isComplited} todoValue={element.todoValue}></TodoComponent>)
  // 		}
  // 	});
  // }

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

            {filteredByName}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a
                href="#/"
                onClick={() => {
                  setFilteredByName("All");
                }}
                className={filteredByName ? "All" : ""}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={() => {
                  setFilteredByName("Active");
                }}
                className={filteredByName ? "Active" : ""}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={() => {
                  setFilteredByName("Completed");
                }}
                className={filteredByName ? "Completed" : ""}
              >
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
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
