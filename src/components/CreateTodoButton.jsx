import React, {useContext} from 'react';

import {MdAdd} from 'react-icons/md';
import '../styles/CreateTodoButton.css';

import { TodoContext } from '../todoContext/index.jsx';
export function CreateTodoButton() {
  const {
    setOpenModal,
    openModal
  } = useContext(TodoContext)

  return (
    <button onClick={()=>setOpenModal(!openModal)} className='CreateTodoButton'>
      <MdAdd className='AddBtn'/>
    </button>
  );
}

