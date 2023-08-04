import React from 'react'; 
import { TodoProvider } from '../todoContext';

import { AppUI } from '../App/AppUI.jsx'; 
export function App() { 
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  ); 
}
