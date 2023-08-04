import React, {useContext, useState} from 'react';
import '../styles/TodoForm.css';

import {FaCheck} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

import { TodoContext } from '../todoContext/index.jsx';


export function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');
  
  const {
    addTodo,
    setOpenModal,
  } = useContext(TodoContext)

  function onSubmit(event) {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  function onCancel() {
    setOpenModal(false)
  }
  function onChange(event) {
    setNewTodoValue(event.target.value);
  }
  
  return (
    <form onSubmit={onSubmit}
    className='TodoForm'>
      <label>Create your new task</label>
        <textarea
        value={newTodoValue}
        onChange={onChange}
        type="text" placeholder='New TODO' />
        <div className='validator-option'>
          <button onClick={onCancel}
          type='button' className='TodoForm-btn'>
            <ImCross className='cancel'/>
          </button>
          <button type='submit ' className='TodoForm-btn'>
            <FaCheck className='add'/>
          </button>
        </div>
    </form>
  );
}
