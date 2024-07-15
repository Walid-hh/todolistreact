import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleEditInputChange(event) {
    setEditTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, indx) => indx !== index);
    setTasks(updatedTasks);
  }

  function startEditing(index) {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setEditTask(tasks[index]);
  }

  function saveEdit() {
    if (editTask.trim() !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === currentTaskIndex ? editTask : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentTaskIndex(null);
      setEditTask("");
    }
  }

  function cancelEdit() {
    setIsEditing(false);
    setCurrentTaskIndex(null);
    setEditTask("");
  }

  return (
    <div className='todolist'>
      <h1>To do List</h1>
      <div>
        <input
          type="text"
          placeholder="What are your plans?"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>Add</button>
      </div>
      <div className='container'>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className='item'>
              {isEditing && currentTaskIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editTask}
                    onChange={handleEditInputChange}
                  />
                  <button className='save-button' onClick={saveEdit}>Save</button>
                  <button className='cancel-button' onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <span className='text'>{task}</span>
                  <button className='edit-button' onClick={() => startEditing(index)}>Edit</button>
                  <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
