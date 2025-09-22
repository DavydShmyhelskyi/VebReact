import React, {useState} from 'react';

export default function TodoItem({task, onDelete}){
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li>
      <input type="checkbox" checked={isCompleted}
             onChange={() => setIsCompleted(!isCompleted)} />
      <span style={{
        textDecoration: isCompleted ? 'line-through' : 'none',
        color: isCompleted ? 'gray' : 'black'
      }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
