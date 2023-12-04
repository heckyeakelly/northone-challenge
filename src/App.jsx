import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({
    title: '',
    description: '',
    status: 'Pending',
    dueDate: '',
  });
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const addTask = () => {
    if (taskInput.title.trim() !== '')

   {
      if (editingTaskIndex !== null) {
        // Edit existing task
        const updatedTasks = [...tasks];
        updatedTasks[editingTaskIndex] = taskInput;
        setTasks(updatedTasks);
        setEditingTaskIndex(null);
      } else {
        // Add new task
        setTasks([...tasks, taskInput]);
      }

      // Reset taskInput
      setTaskInput({
        title: '',
        description: '',
        status: 'Pending',
        dueDate: '',
      });
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setEditingTaskIndex(index);
    const taskToEdit = tasks[index];
    setTaskInput({
      title: taskToEdit.title,
      description: taskToEdit.description,
      status: taskToEdit.status,
      dueDate: taskToEdit.dueDate,
    });
  };

  return (
    <main>
      <header><h1>To-Do List</h1></header>
      <div className="body">
      <section className='form'>
        <div className="form--top">
        <label>Title:</label>
        <input
          type="text"
          value={taskInput.title}
          onChange={(e) => setTaskInput({ ...taskInput, title: e.target.value })}
        />
        <label>Status:</label>
        <select
          value={taskInput.status}
          onChange={(e) => setTaskInput({ ...taskInput, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <label>Due Date:</label>
        <input
          type="date"
          value={taskInput.dueDate}
          onChange={(e) => setTaskInput({ ...taskInput, dueDate: e.target.value })}
        />
        </div>
        <label>Description:</label>
        <input
          value={taskInput.description}
          onChange={(e) => setTaskInput({ ...taskInput, description: e.target.value })}
        ></input>
        
        <button className='btn--add-edit' onClick={addTask}>{editingTaskIndex !== null ? 'Edit Task' : 'Add Task'}</button>
      </section>
      <section className="tasks">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className='task-properties'>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <p>Due Date: {task.dueDate}</p>
            </div>
            <div className='task-buttons'>
              <button className="btn--edit" onClick={() => editTask(index)}>
                Edit
              </button>
              <button className="btn--delete" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      </section>
      </div>
      <footer><p>Kelly Kou</p> NorthOne Full Stack Developer Intern January 2024 Challenge</footer>
    </main>
  );
}

export default App;
