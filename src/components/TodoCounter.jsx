import React, { useContext } from 'react';

import {TodoContext} from '../todoContext/index.jsx';

import '../styles/TodoCounter.css';

export function TodoCounter() {
  const {completedTodos, totalTodos} = useContext(TodoContext);
  return (
    <h1 className='title'>
      You have completed {completedTodos} of {totalTodos} tasks
    </h1>
  );
}
