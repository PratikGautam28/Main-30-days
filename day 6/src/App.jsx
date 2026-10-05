import React, { useState } from 'react'

const App = () => {

  const[todos,setTodos]=useState([]);
  const[text,setText]=useState("");

  // Add
  const addTodo=()=>{
    if(!text.trim()) {
      throw new Error(alert("you have to write something so error error occur"))
    }
    const newTodo={id:Date.now(),text:text,done:false};
    setTodos([...todos,newTodo])
    setText("");
  };

// Delete

const deleteTodo=(id)=>{
  const newTodos=todos.filter((todo)=>todo.id !== id);

  setTodos(newTodos);
}

const toggleTodo=()=>{
  const newTodos=todos.map(function(todo){
    if(todo.id===id){
      return {...todo,done:!todo.done};
    }else
    {return todo;  }
  })
setTodos(newTodos)
}



  return (
    <div>
      
<h1>Todo app</h1>

      <input type="text"
      placeholder='enter to Todo'
      value={text}
      onChange={(e)=>setText(e.target.value)} />
       
       <button onClick={addTodo}>Add </button>


   <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo.id}>
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.done ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>


    </div>
  )
}

export default App
