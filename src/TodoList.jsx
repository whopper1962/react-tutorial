import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, checkTask }) => {
  return todos.map((todo, index) => {
    return (
      <Todo
        todo={todo}
        key={index}
        checkTask={checkTask}
      />
    );
  })
};

export default TodoList;


