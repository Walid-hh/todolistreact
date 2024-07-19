import { useState } from 'react';
import TodoItem from './TodoItem';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks((t) => [...t, newTask]);
      setNewTask('');
    }
  }

  const handleItemEdit = (name, index) => {
    setTasks((prev) => prev.map((el, idx) => (idx === index ? name : el)));
  };
  const handleItemDelete = (index) => {
    setTasks((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div className="todolist">
      <h1>To do List</h1>
      <div className='todolist__add-input'>
        <input
          type="text"
          placeholder="What are your plans?"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="container">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="item">
              <TodoItem
                name={task}
                index={index}
                editItem={handleItemEdit}
                removeItem={handleItemDelete}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
