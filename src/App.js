import { useRef, useState } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const addTask = () => {
    const name = todoNameRef.current.value;
    if (!name) return;
    setTodos((prevTodos) => {
      return [...prevTodos, {
        id: uuidv4(),
        name: name,
        completed: false
      }];
    });
    todoNameRef.current.value = null;
  };

  const checkTask = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => {
      return todo.id === id;
    });
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const deleteCompletedTasks = () => {
    const newTodos = todos.filter((todo) => {
      return !todo.completed;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList
        todos={todos}
        checkTask={checkTask}
      />
      <input
        type="text"
        ref={todoNameRef}
      />
      <button
        onClick={addTask}
      >
        Add task
      </button>
      <button
        onClick={deleteCompletedTasks}
      >
        Delete completed tasks
      </button>
      <div>
        Tasks:{
          todos.filter((todo) => {
            return !todo.completed;
          }).length
        }
      </div>
    </>
  );
}


export default App;

