import React, { useState } from 'react'

const App = () => {
 
  const[todoList,setTodoList]=useState([]);
  const[inputText,setInputText]=useState("");


  function addTodo() {
    if(inputText.trim() ==="")
      return;
  const newTodo={
    id:Date.now(),
    text:inputText,
    isCompleted:false,
  }
  setTodoList([...todoList,newTodo]);
setInputText("");
  }

function deleteTodo(todoId){
  const remainingTodoList=todoList.filter((todo)=>todo.id !==todoId);
setTodoList(remainingTodoList);
}
function toggleTodo(todoId){
  const updateTodoList=todoList.map((todo)=>{
    if(todo.id===todoId){
      return{...todo,isCompleted:!todo.isCompleted}
    }
    return todo;
  })
  setTodoList(updateTodoList);
  
}


  return (
    <div>
      <h1>My Todo App</h1>

      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        placeholder="Write a todo..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


 

export default App
