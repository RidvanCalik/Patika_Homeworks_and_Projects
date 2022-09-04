import { useContext } from 'react';
import { TodoContext } from './CONTEXT/TodoContext';
import TodoComponent from './COMPONENTS/TodoComponent';
import './App.css';

function App() {

  var [todo,setTodo]=useContext(TodoContext);

  function saveTodo(e){
    if(e.key === 'Enter') {
     
      setTodo( 
        [...todo,{
          todoValue: e.target.value,
          isComplited: false
          }] 
      )
       console.log(todo)
     e.target.value=null;
    }
   
  }



  return (
    <>
   
    <section className="todoapp">
	<header className="header">
		<h1>todos</h1>
			<input className="new-todo"  placeholder="What needs to be done?" onKeyDown={saveTodo}  autoFocus />
	</header>
	
	<section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">

       {todo && todo.map((todo,index)=>{
        return <TodoComponent key={index} isChecked={todo.isComplited} todoValue={todo.todoValue}></TodoComponent>
      })} 
			<li className="completed">
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Learn JavaScript</label>
					<button className="destroy"></button>
				</div>
			</li>
			<li>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Learn React</label>
					<button className="destroy"></button>
				</div>
			</li>
			<li>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Have a life!</label>
					<button className="destroy"></button>
				</div>
			</li>
		</ul>
	</section>

	<footer className="footer">
		<span className="todo-count">
			<strong>2</strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className="selected">All</a>
			</li>
			<li>
				<a href="#/">Active</a>
			</li>
			<li>
				<a href="#/">Completed</a>
			</li>
		</ul>

		<button className="clear-completed">
			Clear completed
		</button>
	</footer>
</section>

<footer className="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>

    </>
  );
}

export default App;
