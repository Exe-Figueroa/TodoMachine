import React, { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
export const TodoContext = createContext();

export function TodoProvider({children}) {
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error 
  } = useLocalStorage('Todo_list', []); 

  const completedTodos = todos.filter(todo=>!!todo.completed).length;//Lista
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    ( todo )=> {
      const todoLower = todo.task.toLowerCase();
      const searchedLower = searchValue.toLowerCase();
      return todoLower.includes(searchedLower);
    }
  )
  function addTodo(task) {
    const newTodos = [...todos];
    newTodos.push({
      task,
      completed: false
    })
    saveTodos(newTodos);
  }
  function completedTodo(text) {//function
    //Acá debería cambiar el estado 
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=>(todo.task === text));
    if (newTodos[todoIndex].completed == true) {
      newTodos[todoIndex].completed = false;
    }else {
      newTodos[todoIndex].completed = true;
    }
    saveTodos(newTodos);
  }

  function deletedTodo(text) {//function
    //Acá debería cambiar el estado 
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=>(todo.task === text));
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completedTodo,
      deletedTodo,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {children}
    </TodoContext.Provider>
    )

}

//
