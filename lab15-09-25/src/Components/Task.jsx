import React, {useState} from 'react';

export default function Task({task, onDelete, onEdit}) {
  const [completed, setCompleted] = useState(false);

  return (
    <li>
      <input 
        type="checkbox" 
        checked={completed}
        onChange={() => setCompleted(!completed)} 
      />
      <span style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? 'gray' : 'black'
      }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => {
        const newText = prompt("Edit task:", task.text);
        if (newText) onEdit(task.id, newText);
      }}>Edit</button>
    </li>
  );
}
