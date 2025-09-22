import React, {useState} from 'react';
import AddTodoForm from './AddTodoForm';
import Task from './Task';

export default function TodoList(){
  const [tasks, setTasks] = useState([]); 

  const addTask = (text) => {
    setTasks(prev => [...prev, {id: Date.now(), text}]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? {...task, text: newText} : task
    ));
  };

  return (
    <div>
      <AddTodoForm onAddTodo={addTask} />
      <ul>
        {tasks.map(t => (
          <Task 
            key={t.id} 
            task={t} 
            onDelete={deleteTask} 
            onEdit={editTask} 
          />
        ))}
      </ul>
    </div>
  );
}

    