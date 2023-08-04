import React from 'react';
import '../styles/EmptyTodos.css';
import { GiSharpSmile } from "react-icons/gi";

export function EmptyTodos() {
  return (
    <div className='EmptyTodos'>
      <h1>Create tour first task</h1>
      <GiSharpSmile className='smile' />
    </div>
  );
}
