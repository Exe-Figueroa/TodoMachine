import React from 'react';
import {createPortal}  from 'react-dom';
import '../styles/TodoModal.css';


export function TodoModal({children}) {
  return createPortal(
    <div className='TodoModal'>
      {children}
    </div>,
    document.getElementById('modal')
  );
}
