import React from 'react'

const Todo = ({ todo, checkTask }) => {

  const handleTodoClick = () => {
    checkTask(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}

export default Todo