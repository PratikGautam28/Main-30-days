import React, { useState } from 'react'

const Task = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn spread", done: false },
    { id: 2, text: "Learn state", done: false },
  ]);
function addTask() {
  const newTask = { id: Date.now(), text: "New task", done: false };
  setTasks([...tasks, newTask]);
}

  return (
    <div>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}

        <button onClick={addTask}>Click me </button>
      </ul>
    </div>
  );
}

export default Task
