import React, { useContext } from 'react';
import { TodoCounter } from '../components/TodoCounter.jsx';
import { TodoSearch } from '../components/TodoSearch.jsx';
import { TodoList } from '../components/TodoList.jsx';
import { TodoItem } from '../components/TodoItem.jsx';
import { CreateTodoButton } from '../components/CreateTodoButton.jsx';
import {Loader} from '../components/Loader.jsx'
import { TodosError } from '../components/TodosError.jsx';
import { EmptyTodos } from '../components/EmptyTodos.jsx';
import { TodoModal } from '../components/TodoModal.jsx';
import { TodoForm } from '../components/TodoForm.jsx';

//Importar el TodoContext para enviarles los valores a los componentes
import { TodoContext } from '../todoContext/index.jsx';


export function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completedTodo,
    deletedTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading? <Loader /> : null}
        {error? <TodosError /> : null}
        {(!loading && searchedTodos.length == 0) ? 
        <EmptyTodos /> : null}
        {searchedTodos.map(item=>(
          <TodoItem  
          key={item.task} 
          text={item.task} 
          completed={item.completed} 
          onCompleted={()=>completedTodo(item.task)}
          onDelete={()=>deletedTodo(item.task)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/> 
      {openModal ? 
        (<TodoModal>
          <TodoForm />
        </TodoModal>) : ""
      }
    </>
  );
}
