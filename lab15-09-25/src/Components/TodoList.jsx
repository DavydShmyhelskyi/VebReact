import React, {useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './Task';

export default function TodoList(){
  const [Task, setTask] = useState([]); 

    const addTask = (text) => {
        setTask(prev => [...prev, {id: Date.now(), text, completed: false}]);}

    const deleteTask = (id) => {
        setTask(prev => prev.filter(task => task.id !== id));}
    
    const editTask = (id, newText) => {
        setTask(prev => prev.map(task => task.id === id ? {...task, text: newText} : task));}
    
    const toggleTaskCompletion = (id) => {
        setTask(prev => prev.map(task => task.id === id ? {...task, completed: !task.completed} : task));}
         
        return (
    <div>
      <AddTodoForm onAddTodo={addTask} />
      <ul>
        {Task.map(t => (
          <TodoItem key={t.id} task={t} onDelete={deleteTask} onEdit={editTask} onToggle={toggleTaskCompletion} />
        ))}
      </ul>
    </div>
  );
}

    