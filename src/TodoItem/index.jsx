import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TodoItem({ removeItem, name, editItem, index }) {
    const [taskName, setTaskName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
  
    const handleSave = () => {
      editItem(taskName, index);
      setIsEditing(false);
      setTaskName('');
    };
  
    const handleTaskNameChange = (e) => {
      setTaskName(e.target.value);
    };
    return (
      <>
        {isEditing ? (
          <>
            <input type="text" value={taskName} onChange={handleTaskNameChange} />
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span className="text">{name}</span>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => removeItem(index)}>
              Delete
            </button>
          </>
        )}
      </>
    );
  }

  export default TodoItem;