import React, { useState, useEffect } from "react";



export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState( initialValue );
  const [loading, setLoading] = useState( true );
  const [error, setError] = useState( false );

  useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        }else {
          parsedItems = JSON.parse(localStorageItem);
          setItem(parsedItems);
        }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000)
  }, []);
  


  function saveItem (newItem) {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem (newItem); 
  }
  return {item , saveItem, loading, error};
}

// const defaultTodos = [
//   {
//     task: 'Task number 1',
//     completed: true
//   },
//   {
//     task: 'Task number 2',
//     completed: false
//   },
//   {
//     task: 'Task number 3',
//     completed: true
//   },
//   {
//     task: 'Coso Prueba',
//     completed: false
//   },
//     {
//     task: '1 Prueba',
//     completed: false
//   },
//     {
//     task: '2 Prueba',
//     completed: false
//   },
// ]

// localStorage.setItem('Todo_list', JSON.stringify(defaultTodos));