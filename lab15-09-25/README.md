# 📝 Lab 3: Component Tree & Hooks

**Deadline:** 29.09.2025  
**Points:** 2 (+1 до дедлайну)  

---

## 📌 Завдання
Реалізувати простий **To-Do List** у React, який дозволяє:
- ✅ Додавати нове завдання  
- ✅ Позначати завдання як виконане  
- ✅ Видаляти завдання  
- ✅ Редагувати завдання  

---

## 🏗 Архітектура

### 🔹 Компоненти

#### `TodoApp`
- **Роль:** композиційний корінь (лише рендер)  
- **State:** —  
- **Props:** —  

#### `TodoList`
- **Роль:** зберігає масив завдань  
- **State:** `tasks[]` (масив об’єктів `{id, text}`)  
- **Props:** —  
- **Callbacks:** передає вниз `onAddTodo`, `onDelete`, `onEdit`  

#### `AddTodoForm`
- **Роль:** форма введення нового завдання  
- **State:** `value` (локальний, для input)  
- **Props:** `onAddTodo` (callback)  

#### `Task`
- **Роль:** відображає окреме завдання  
- **State:** `completed` (локальний)  
- **Props:** `task`, `onDelete`, `onEdit`  

---

## 🔄 Потоки даних

### 📥 Props вниз
- `TodoList → AddTodoForm`: передає `onAddTodo`  
- `TodoList → Task`: передає `task`, `onDelete`, `onEdit`  

### 📤 Callbacks вгору
- `AddTodoForm → TodoList`: викликає `onAddTodo(text)`  
- `Task → TodoList`: викликає `onDelete(id)` або `onEdit(id, newText)`  

---

## 📊 Діаграма компонентів
![Component Diagram](https://github.com/DavydShmyhelskyi/VebReact/blob/main/lab15-09-25/src/Diagram.png)

---

## 🛠 Послідовність дій

### ➕ Додавання завдання
1. Користувач вводить текст → `AddTodoForm.value`  
2. Submit → виклик `onAddTodo(value)`  
3. `TodoList` додає `{id, text}` у `tasks[]`  
4. Ререндер → новий `Task` у списку  

### ✔ Позначення як виконаного
1. Checkbox у `Task` змінює локальний `completed`  
2. UI змінюється (`line-through`, `gray`)  

### ❌ Видалення
1. Кнопка **Delete** → `onDelete(id)`  
2. `TodoList` видаляє task із `tasks[]`  

### ✏ Редагування
1. Кнопка **Edit** → виклик `onEdit(id, newText)`  
2. `TodoList` оновлює текст у `tasks[]`  

---

## 🚀 Як запустити проєкт

1. Клонувати репозиторій:
   ```bash
   git clone https://github.com/DavydShmyhelskyi/VebReact.git
   cd VebReact/lab15-09-25
    
