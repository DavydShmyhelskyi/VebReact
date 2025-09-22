import React, {useState} from 'react';

export default function AddTodoForm({onAddTodo}){
  const [value, setValue] = useState('');

  const submit = e => {
    e.preventDefault();
    const v = value.trim();
    if(!v) return;
    onAddTodo(v);
    setValue('');
  };

  return (
    <form onSubmit={submit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
 /*
дерево компонентів

App
└── TodoList
    ├── AddTodoForm
    └── TodoItem
*/