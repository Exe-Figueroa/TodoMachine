import { React, useContext, useState } from 'react';
import '../styles/TodoSearch.css'
import { TodoContext } from '../todoContext';
export function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);
  function eventChange(event) {
    setSearchValue(event);
  }
  return (
    <input className='TodoSearch'  placeholder='Filter task' 
    value={searchValue}
    onChange={(event)=>eventChange(event.target.value)}/>
  );
}

