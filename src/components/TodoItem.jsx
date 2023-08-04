import React, { useState } from 'react';
import '../styles/TodoItem.css';

import {FaCheck} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

export function TodoItem({text, completed, onCompleted, onDelete}) {
  return (
    <li className='TodoItem'>
      <FaCheck onClick={onCompleted} className={completed ? 'check checked' : 'check'}/>
      <p className={completed ?'completed' : null}>{text}</p>
      <ImCross 
      onClick={onDelete}
      className='delete'/>
    </li>
  )
}