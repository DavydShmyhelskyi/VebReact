import TodoList from './Components/TodoList';
import './App.css';

export default function App(){
  return (
    <div className="app">
      <h1>To-Do</h1>
      <TodoList />
    </div>
  );
}

 /*
дерево компонентів

App
└── TodoList
    ├── AddTodoForm
    └── TodoItem
*/