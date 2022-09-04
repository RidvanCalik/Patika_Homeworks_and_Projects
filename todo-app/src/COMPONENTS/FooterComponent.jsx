import React from "react";

function FooterComponent(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {props.todo.filter((el) => el.isComplited == false).length}
        </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => {
              props.emitFilteredByName("All");
            }}
            className={props.filteredByName == "All" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              props.emitFilteredByName("Active");
            }}
            className={props.filteredByName == "Active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              props.emitFilteredByName("Completed");
            }}
            className={props.filteredByName == "Completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => {
          props.emitClearCompleted();
        }}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default FooterComponent;
